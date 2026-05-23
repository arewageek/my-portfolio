import { notFound } from "next/navigation";
import { sampleArticles } from "@/lib/mock-articles";
import { ArticleContent } from "./article-content";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = sampleArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | Arewa Geek" };

  return {
    title: `${article.title} | Arewa Geek Insights`,
    description: article.excerpt,
    openGraph: {
      images: [article.imageUrl],
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = sampleArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article} />;
}
