# Lio Editor — Data Structure & Backend Architecture

> Companion to `lio.md`. Covers the canonical data model, PostgreSQL schema,
> DB-agnostic alternatives, API contract, and recommended OSS package layout.

---

## Table of Contents

1. [Canonical Block Schema (Language/DB Agnostic)](#1-canonical-block-schema)
2. [PostgreSQL Relational Schema](#2-postgresql-relational-schema)
3. [DB-Agnostic Storage Strategies](#3-db-agnostic-storage-strategies)
4. [Complete REST API Contract](#4-complete-rest-api-contract)
5. [Serialization — Blocks ↔ Storage](#5-serialization--storage)
6. [Image Storage Architecture](#6-image-storage-architecture)
7. [Open-Source Package Structure](#7-open-source-package-structure)

---

## 1. Canonical Block Schema

This is the **single source of truth** for a Lio document. All storage
strategies must be able to faithfully round-trip this structure.

### 1.1 Document Root

```typescript
interface LioDocument {
  id: string;                  // UUID v4
  version: number;             // Schema version (start at 1)
  title: string;
  coverImage: string | null;   // Permanent URL or null
  blocks: LioBlock[];
  meta: LioMeta;
  timestamps: LioTimestamps;
}

interface LioMeta {
  slug: string;
  category: string;
  excerpt: string | null;      // SEO description
  status: "draft" | "published" | "archived";
  publishedAt: string | null;  // ISO 8601
  tags: string[];
  readTimeMinutes: number;     // Calculated on save
  authorId: string;            // Foreign key to user/author
}

interface LioTimestamps {
  createdAt: string;   // ISO 8601
  updatedAt: string;   // ISO 8601
}
```

### 1.2 Block Types

```typescript
type LioBlockType =
  | "paragraph"
  | "heading"
  | "bulletList"
  | "orderedList"
  | "image"
  | "code"
  | "embedUrl";

interface LioBlock {
  id: string;           // UUID v4 or nanoid
  type: LioBlockType;
  order: number;        // Explicit ordering integer (0-based)
  content: string;      // Raw text, image URL, or embed URL
  attrs?: LioBlockAttrs; // Type-specific attributes
}

interface LioBlockAttrs {
  // For "heading":
  level?: 2 | 3 | 4;

  // For "code":
  language?: string;    // e.g. "typescript", "python"

  // For "image":
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;

  // For "embedUrl":
  provider?: "youtube" | "twitter" | "codepen" | "generic";
  embedHtml?: string;   // Resolved embed HTML (cached)

  // For lists:
  startNumber?: number; // orderedList starting number (default 1)
}
```

### 1.3 Full Example Document (JSON)

```json
{
  "id": "b3d7e12a-4f81-4c2e-9a10-f3c1a2b4d5e6",
  "version": 1,
  "title": "Smart Contract Security Best Practices",
  "coverImage": "https://cdn.example.com/covers/b3d7e12a.webp",
  "blocks": [
    {
      "id": "blk_001",
      "type": "paragraph",
      "order": 0,
      "content": "Writing smart contracts is inherently different from traditional software.",
      "attrs": {}
    },
    {
      "id": "blk_002",
      "type": "heading",
      "order": 1,
      "content": "Reentrancy Attacks",
      "attrs": { "level": 2 }
    },
    {
      "id": "blk_003",
      "type": "bulletList",
      "order": 2,
      "content": "• Use the Checks-Effects-Interactions pattern\n• Never call external contracts mid-transaction",
      "attrs": {}
    },
    {
      "id": "blk_004",
      "type": "code",
      "order": 3,
      "content": "modifier noReentrant() {\n  require(!locked);\n  locked = true;\n  _;\n  locked = false;\n}",
      "attrs": { "language": "solidity" }
    },
    {
      "id": "blk_005",
      "type": "image",
      "order": 4,
      "content": "https://cdn.example.com/images/reentrancy-diagram.webp",
      "attrs": {
        "alt": "Reentrancy attack flow diagram",
        "caption": "How a reentrancy attack exploits state",
        "width": 1200,
        "height": 630
      }
    }
  ],
  "meta": {
    "slug": "smart-contract-security-best-practices",
    "category": "Security",
    "excerpt": "A deep dive into avoiding common pitfalls when writing Solidity.",
    "status": "published",
    "publishedAt": "2026-09-28T08:00:00Z",
    "tags": ["solidity", "web3", "security", "auditing"],
    "readTimeMinutes": 8,
    "authorId": "usr_augustine"
  },
  "timestamps": {
    "createdAt": "2026-09-20T10:14:22Z",
    "updatedAt": "2026-09-28T07:55:00Z"
  }
}
```

---

## 2. PostgreSQL Relational Schema

### 2.1 Design Strategy

There are **two valid approaches** for storing blocks in Postgres. This document provides both.

| Strategy | Pros | Cons | Best For |
|---|---|---|---|
| **A: Blocks as separate rows** | Queryable, indexable, reorderable, partial updates | More joins, more complex queries | Apps that query block content (search, analytics) |
| **B: Blocks as JSONB column** | Simple queries, atomic document updates, schema-flexible | Can't query inside blocks easily | Portfolio/blog apps with simple read patterns |

> **Recommendation for Lio portfolio use case: Strategy B (JSONB)** — simpler and sufficient.
> **Recommendation for Lio as a general OSS library: Support both via adapter pattern.**

---

### 2.2 Strategy A — Normalized (Blocks as Rows)

```sql
-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE article_status AS ENUM ('draft', 'published', 'archived');

CREATE TYPE block_type AS ENUM (
  'paragraph',
  'heading',
  'bulletList',
  'orderedList',
  'image',
  'code',
  'embedUrl'
);

-- ============================================================
-- AUTHORS
-- ============================================================

CREATE TABLE authors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) UNIQUE NOT NULL,
  avatar_url  TEXT,
  bio         TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- CATEGORIES
-- ============================================================

CREATE TABLE categories (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       VARCHAR(100) NOT NULL UNIQUE,
  slug       VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO categories (name, slug) VALUES
  ('Security',      'security'),
  ('Engineering',   'engineering'),
  ('DeFi',          'defi'),
  ('Perspectives',  'perspectives');

-- ============================================================
-- TAGS
-- ============================================================

CREATE TABLE tags (
  id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE
);

-- ============================================================
-- ARTICLES
-- ============================================================

CREATE TABLE articles (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id         UUID NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
  category_id       UUID REFERENCES categories(id) ON DELETE SET NULL,

  title             VARCHAR(512) NOT NULL,
  slug              VARCHAR(512) NOT NULL UNIQUE,
  excerpt           TEXT,
  cover_image_url   TEXT,

  status            article_status NOT NULL DEFAULT 'draft',
  published_at      TIMESTAMPTZ,
  read_time_minutes INTEGER NOT NULL DEFAULT 0,

  schema_version    INTEGER NOT NULL DEFAULT 1,

  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_articles_slug       ON articles(slug);
CREATE INDEX idx_articles_status     ON articles(status);
CREATE INDEX idx_articles_author     ON articles(author_id);
CREATE INDEX idx_articles_published  ON articles(published_at DESC) WHERE status = 'published';

-- ============================================================
-- ARTICLE TAGS (Join Table)
-- ============================================================

CREATE TABLE article_tags (
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  tag_id     UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);

-- ============================================================
-- BLOCKS
-- ============================================================

CREATE TABLE blocks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id  UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,

  type        block_type NOT NULL,
  sort_order  INTEGER NOT NULL,           -- Explicit ordering
  content     TEXT NOT NULL DEFAULT '',

  -- Type-specific attributes stored as JSONB for flexibility
  attrs       JSONB NOT NULL DEFAULT '{}',

  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  UNIQUE (article_id, sort_order)         -- No two blocks share the same position
);

-- Indexes
CREATE INDEX idx_blocks_article_order ON blocks(article_id, sort_order);
CREATE INDEX idx_blocks_type          ON blocks(type);
-- Full-text search on block content
CREATE INDEX idx_blocks_content_fts   ON blocks USING gin(to_tsvector('english', content));
```

**Example block `attrs` JSONB values:**

```jsonc
-- heading block
{ "level": 2 }

-- code block
{ "language": "typescript" }

-- image block
{ "alt": "Diagram", "caption": "Flow chart", "width": 1200, "height": 630 }

-- embedUrl block
{ "provider": "youtube", "embedHtml": "<iframe ...></iframe>" }
```

---

### 2.3 Strategy B — JSONB Blocks Column (Simpler)

```sql
CREATE TYPE article_status AS ENUM ('draft', 'published', 'archived');

CREATE TABLE articles (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id         UUID NOT NULL,          -- FK to your users table
  category          VARCHAR(100),
  tags              TEXT[] NOT NULL DEFAULT '{}',

  title             VARCHAR(512) NOT NULL,
  slug              VARCHAR(512) NOT NULL UNIQUE,
  excerpt           TEXT,
  cover_image_url   TEXT,

  -- Entire block array stored as JSONB
  blocks            JSONB NOT NULL DEFAULT '[]',

  status            article_status NOT NULL DEFAULT 'draft',
  published_at      TIMESTAMPTZ,
  read_time_minutes INTEGER NOT NULL DEFAULT 0,
  schema_version    INTEGER NOT NULL DEFAULT 1,

  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_articles_slug      ON articles(slug);
CREATE INDEX idx_articles_status    ON articles(status);
CREATE INDEX idx_articles_author    ON articles(author_id);
CREATE INDEX idx_articles_blocks    ON articles USING gin(blocks); -- Query inside JSONB
CREATE INDEX idx_articles_tags      ON articles USING gin(tags);   -- Array search
```

**Querying inside JSONB blocks:**

```sql
-- Find all articles that contain a code block
SELECT id, title FROM articles
WHERE blocks @> '[{"type": "code"}]';

-- Find articles with image blocks
SELECT id, title FROM articles
WHERE jsonb_path_exists(blocks, '$[*] ? (@.type == "image")');
```

---

### 2.4 Triggers for `updated_at`

```sql
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- For Strategy A only:
CREATE TRIGGER trg_blocks_updated_at
  BEFORE UPDATE ON blocks
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
```

### 2.5 Read-Time Calculation (Server-Side)

```typescript
// Utility: calculate read time from blocks
function calculateReadTime(blocks: LioBlock[]): number {
  const WORDS_PER_MINUTE = 200;
  const totalWords = blocks
    .filter(b => ["paragraph", "heading", "bulletList", "orderedList"].includes(b.type))
    .reduce((acc, b) => acc + b.content.split(/\s+/).filter(Boolean).length, 0);
  return Math.max(1, Math.ceil(totalWords / WORDS_PER_MINUTE));
}
```

---

## 3. DB-Agnostic Storage Strategies

### 3.1 MongoDB / Document Store

The canonical JSON maps directly to a MongoDB document. This is the simplest possible integration.

```javascript
// Mongoose Schema
const LioBlockSchema = new Schema({
  id:      { type: String, required: true },
  type:    { type: String, enum: ['paragraph','heading','bulletList','orderedList','image','code','embedUrl'], required: true },
  order:   { type: Number, required: true },
  content: { type: String, default: '' },
  attrs:   { type: Schema.Types.Mixed, default: {} }
}, { _id: false });

const LioArticleSchema = new Schema({
  title:          { type: String, required: true },
  slug:           { type: String, required: true, unique: true },
  coverImage:     { type: String, default: null },
  blocks:         { type: [LioBlockSchema], default: [] },
  category:       { type: String },
  tags:           { type: [String], default: [] },
  excerpt:        { type: String },
  status:         { type: String, enum: ['draft','published','archived'], default: 'draft' },
  publishedAt:    { type: Date, default: null },
  readTimeMinutes:{ type: Number, default: 0 },
  schemaVersion:  { type: Number, default: 1 },
  authorId:       { type: String, required: true }
}, { timestamps: true });

LioArticleSchema.index({ slug: 1 });
LioArticleSchema.index({ status: 1, publishedAt: -1 });
```

### 3.2 Flat File / Static Site

For static site generators (Astro, Hugo, 11ty), serialize the document as MDX or JSON:

**Option A — JSON files:**
```
content/
  articles/
    smart-contract-security.json   ← Full LioDocument JSON
    future-of-defi.json
    building-with-nextjs.json
```

**Option B — Frontmatter + Block JSON:**
```markdown
---
id: b3d7e12a
title: Smart Contract Security
slug: smart-contract-security
category: Security
status: published
publishedAt: 2026-09-28
---

[blocks stored as JSON below frontmatter or in a sidecar .blocks.json file]
```

### 3.3 SQLite (Local / Edge)

Identical to Strategy B (JSONB), but use SQLite's JSON1 extension:

```sql
CREATE TABLE articles (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  blocks      TEXT NOT NULL DEFAULT '[]',  -- JSON string
  status      TEXT NOT NULL DEFAULT 'draft',
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);

-- Query inside blocks (SQLite JSON1):
SELECT id, title FROM articles
WHERE json_type(blocks) = 'array'
  AND EXISTS (
    SELECT 1 FROM json_each(blocks)
    WHERE json_extract(value, '$.type') = 'code'
  );
```

### 3.4 Key-Value Stores (Redis, DynamoDB, Upstash)

Store articles as serialized JSON strings keyed by slug:

```
Key:    article:{slug}          → Full LioDocument JSON string
Key:    articles:index          → JSON array of { id, slug, title, status, publishedAt }
Key:    articles:by-category:{cat} → JSON array of slugs
```

---

## 4. Complete REST API Contract

### 4.1 Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| `GET` | `/api/articles` | Public | List published articles (paginated) |
| `GET` | `/api/articles?status=draft` | 🔒 Private | List drafts |
| `GET` | `/api/articles/:slug` | Public | Get single article by slug |
| `POST` | `/api/articles` | 🔒 Private | Create new article |
| `PUT` | `/api/articles/:id` | 🔒 Private | Full update (replace blocks) |
| `PATCH` | `/api/articles/:id` | 🔒 Private | Partial update (meta only) |
| `DELETE` | `/api/articles/:id` | 🔒 Private | Delete article |
| `POST` | `/api/articles/:id/publish` | 🔒 Private | Publish draft |
| `POST` | `/api/articles/:id/unpublish` | 🔒 Private | Revert to draft |
| `POST` | `/api/upload/image` | 🔒 Private | Upload image, return URL |

### 4.2 Request / Response Shapes

**`POST /api/articles` — Create**

```typescript
// Request body
interface CreateArticleRequest {
  title: string;
  blocks: LioBlock[];
  coverImage?: string | null;
  meta: {
    slug?: string;         // Auto-generated from title if omitted
    category?: string;
    excerpt?: string;
    tags?: string[];
    status?: "draft" | "published";
  };
}

// Response: 201 Created
interface CreateArticleResponse {
  data: LioDocument;
}
```

**`PUT /api/articles/:id` — Full Update (auto-save)**

```typescript
interface UpdateArticleRequest {
  title: string;
  blocks: LioBlock[];
  coverImage: string | null;
  meta: {
    slug: string;
    category: string;
    excerpt: string;
    tags: string[];
  };
}

// Response: 200 OK
interface UpdateArticleResponse {
  data: LioDocument;
}
```

**`GET /api/articles` — List (paginated)**

```typescript
// Query params: ?page=1&limit=10&category=Security&status=published&tag=solidity&q=search+term

interface ArticleListResponse {
  data: ArticleSummary[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

interface ArticleSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  tags: string[];
  status: "draft" | "published" | "archived";
  readTimeMinutes: number;
  publishedAt: string | null;
  updatedAt: string;
}
```

**`POST /api/upload/image` — Image Upload**

```typescript
// Request: multipart/form-data with field "file"
// Response: 200 OK
interface ImageUploadResponse {
  url: string;       // Permanent CDN URL
  width: number;
  height: number;
  size: number;      // bytes
  mimeType: string;
}
```

### 4.3 Standard Error Envelope

```typescript
interface ApiError {
  error: {
    code: string;          // e.g. "ARTICLE_NOT_FOUND"
    message: string;       // Human-readable
    details?: unknown;     // Validation errors, etc.
  };
}
```

| HTTP Code | Error Code | Meaning |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid request body |
| 401 | `UNAUTHORIZED` | Missing or invalid auth token |
| 403 | `FORBIDDEN` | Authenticated but no permission |
| 404 | `ARTICLE_NOT_FOUND` | Slug or ID doesn't exist |
| 409 | `SLUG_CONFLICT` | Slug already taken |
| 413 | `FILE_TOO_LARGE` | Image exceeds size limit |
| 422 | `UNPROCESSABLE` | Valid JSON but business logic failure |
| 500 | `INTERNAL_ERROR` | Server error |

---

## 5. Serialization — Blocks ↔ Storage

### 5.1 Current Editor → Canonical Schema Mapping

The editor currently uses different type names. When building the backend adapter, translate:

| Editor `type` | Canonical `type` | Notes |
|---|---|---|
| `"p"` | `"paragraph"` | |
| `"h2"` | `"heading"` | Set `attrs.level = 2` |
| `"ul"` | `"bulletList"` | |
| `"ol"` | `"orderedList"` | |
| `"image"` | `"image"` | |
| `"code"` | `"code"` | |
| `"url"` | `"embedUrl"` | |

### 5.2 Serialization Functions

```typescript
// Editor Block → Canonical LioBlock
function toCanonical(editorBlock: Block, index: number): LioBlock {
  const typeMap: Record<string, LioBlockType> = {
    p: "paragraph", h2: "heading", ul: "bulletList",
    ol: "orderedList", image: "image", code: "code", url: "embedUrl"
  };
  return {
    id: editorBlock.id,
    type: typeMap[editorBlock.type],
    order: index,
    content: editorBlock.content,
    attrs: editorBlock.type === "h2" ? { level: 2 } : {}
  };
}

// Canonical LioBlock → Editor Block
function toEditorBlock(canonical: LioBlock): Block {
  const typeMap: Record<string, string> = {
    paragraph: "p", heading: "h2", bulletList: "ul",
    orderedList: "ol", image: "image", code: "code", embedUrl: "url"
  };
  return {
    id: canonical.id,
    type: typeMap[canonical.type] as BlockType,
    content: canonical.content
  };
}
```

---

## 6. Image Storage Architecture

All images must be uploaded **before** the article is saved. The editor currently
uses `URL.createObjectURL()` (temporary). The production flow must be:

```
1. User selects file in editor
2. Editor calls POST /api/upload/image (multipart)
3. Server validates (type, size ≤ 5MB, mime check)
4. Server uploads to cloud storage (S3, Cloudinary, Supabase Storage, R2)
5. Server returns permanent CDN URL
6. Editor replaces blob URL with the permanent URL in block.content
7. Article save includes permanent URL — no orphaned blobs
```

### Recommended Cloud Providers (Free Tiers)

| Provider | Free Tier | SDK |
|---|---|---|
| **Cloudflare R2** | 10GB / month free egress | `@aws-sdk/client-s3` (S3-compatible) |
| **Supabase Storage** | 1GB included | `@supabase/supabase-js` |
| **Cloudinary** | 25 credits/month | `cloudinary` |
| **Uploadthing** | 2GB / month | `uploadthing` |

---

## 7. Open-Source Package Structure

### 7.1 Recommended Repository Layout

```
lio-editor/                          ← monorepo root
│
├── packages/
│   ├── core/                        ← Framework-agnostic logic
│   │   ├── src/
│   │   │   ├── types.ts             ← LioDocument, LioBlock, LioMeta, etc.
│   │   │   ├── parser.ts            ← Smart paste parser
│   │   │   ├── serializer.ts        ← Blocks ↔ Markdown / HTML / JSON
│   │   │   ├── read-time.ts         ← calculateReadTime()
│   │   │   └── index.ts
│   │   └── package.json             ← "name": "@lio-editor/core"
│   │
│   ├── react/                       ← React component
│   │   ├── src/
│   │   │   ├── LioEditor.tsx        ← Main editor component
│   │   │   ├── blocks/              ← Individual block renderers
│   │   │   │   ├── ParagraphBlock.tsx
│   │   │   │   ├── HeadingBlock.tsx
│   │   │   │   ├── ListBlock.tsx
│   │   │   │   ├── ImageBlock.tsx
│   │   │   │   ├── CodeBlock.tsx
│   │   │   │   └── EmbedBlock.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useBlockEditor.ts
│   │   │   │   ├── usePasteParser.ts
│   │   │   │   └── useKeyboard.ts
│   │   │   └── index.ts
│   │   └── package.json             ← "name": "@lio-editor/react"
│   │
│   ├── adapters/                    ← DB adapters
│   │   ├── postgres/                ← "@lio-editor/adapter-postgres"
│   │   ├── mongodb/                 ← "@lio-editor/adapter-mongodb"
│   │   └── sqlite/                  ← "@lio-editor/adapter-sqlite"
│   │
│   └── server/                      ← Framework-agnostic API handlers
│       ├── src/
│       │   ├── handlers/
│       │   │   ├── createArticle.ts
│       │   │   ├── updateArticle.ts
│       │   │   ├── getArticle.ts
│       │   │   ├── listArticles.ts
│       │   │   └── uploadImage.ts
│       │   └── index.ts
│       └── package.json             ← "name": "@lio-editor/server"
│
├── apps/
│   ├── docs/                        ← Documentation site (Next.js)
│   └── playground/                  ← Interactive demo
│
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE                          ← MIT recommended
└── package.json                     ← Monorepo root (turborepo / pnpm workspaces)
```

### 7.2 Core Package Public API

```typescript
// @lio-editor/core — everything consumers need

export type {
  LioDocument,
  LioBlock,
  LioBlockType,
  LioBlockAttrs,
  LioMeta,
  LioTimestamps
};

export { calculateReadTime } from "./read-time";
export { parsePastedText }   from "./parser";
export {
  blocksToMarkdown,
  blocksToHtml,
  markdownToBlocks
} from "./serializer";
```

### 7.3 React Package Usage (Consumer API Goal)

```tsx
import { LioEditor } from "@lio-editor/react";
import type { LioDocument } from "@lio-editor/core";

export default function WritePage() {
  const handleChange = (doc: LioDocument) => {
    // auto-save, send to your API
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload/image", { method: "POST", body: form });
    const { url } = await res.json();
    return url; // permanent URL
  };

  return (
    <LioEditor
      initialDocument={null}          // or existing LioDocument for edit mode
      onChange={handleChange}
      onImageUpload={handleImageUpload}
      theme="zen"                      // "zen" | "minimal" | "default"
    />
  );
}
```

### 7.4 Adapter Interface (DB Agnostic)

```typescript
// @lio-editor/server — adapter interface all DB adapters must implement
export interface LioStorageAdapter {
  createArticle(data: Omit<LioDocument, "id" | "timestamps">): Promise<LioDocument>;
  updateArticle(id: string, data: Partial<LioDocument>): Promise<LioDocument>;
  getArticleBySlug(slug: string): Promise<LioDocument | null>;
  getArticleById(id: string): Promise<LioDocument | null>;
  listArticles(options: ListOptions): Promise<{ data: LioDocument[]; total: number }>;
  deleteArticle(id: string): Promise<void>;
}

interface ListOptions {
  status?: "draft" | "published" | "archived";
  category?: string;
  tag?: string;
  query?: string;
  page?: number;
  limit?: number;
}
```

---

> **Decision Guide:**
> - **Your portfolio (Postgres + Next.js)** → Use **Strategy B (JSONB)** with Next.js Server Actions.
> - **Lio OSS library** → Expose the `LioStorageAdapter` interface, ship official adapters for Postgres (Strategy A), MongoDB, and SQLite.
> - **Block type names** in the current editor should be migrated to canonical names (`p` → `paragraph`, etc.) as part of the v1.0 API stabilization before open-sourcing.
