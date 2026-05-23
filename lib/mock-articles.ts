export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export const sampleArticles: Article[] = [
  {
    slug: "future-of-defi",
    title: "The Future of DeFi: What to Expect in 2027",
    excerpt: "Exploring the next wave of decentralized finance protocols and how they aim to solve liquidity fragmentation.",
    category: "DeFi",
    content: "The decentralized finance (DeFi) ecosystem has evolved rapidly over the past few years. From simple automated market makers (AMMs) to complex lending protocols and derivatives platforms, the space has matured significantly.\n\nHowever, one of the biggest challenges remains liquidity fragmentation across multiple Layer 2 networks. In 2027, we can expect to see a surge in cross-chain interoperability solutions that abstract away the underlying network from the user.\n\nFurthermore, the integration of real-world assets (RWAs) into DeFi protocols will likely become more standardized, bringing massive institutional capital on-chain. This shift requires robust oracle networks and stringent security audits.",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec8ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "smart-contract-security",
    title: "Smart Contract Security Best Practices",
    excerpt: "A comprehensive guide on avoiding common pitfalls and vulnerabilities when writing Solidity smart contracts.",
    category: "Security",
    content: "Writing smart contracts is inherently different from traditional software development. In Web3, a single bug can lead to the loss of millions of dollars. Therefore, security must be the primary focus from day one.\n\n### 1. Reentrancy Attacks\nAlways use the Checks-Effects-Interactions pattern. Update state variables before making external calls to untrusted contracts. Consider using OpenZeppelin's `ReentrancyGuard`.\n\n### 2. Integer Overflow/Underflow\nWhile Solidity 0.8+ has built-in overflow checks, you should still be mindful of mathematical operations, especially when using older compiler versions or assembly.\n\n### 3. Access Control\nProperly implement role-based access control (RBAC). Ensure that only authorized addresses can execute critical functions like minting tokens or upgrading the contract logic.",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "building-with-nextjs-and-web3",
    title: "Building DApps with Next.js 15 and Web3.js",
    excerpt: "Learn how to integrate modern React frameworks with Ethereum to build lightning-fast decentralized applications.",
    category: "Engineering",
    content: "Next.js has become the de facto standard for building React applications, and its Server Components architecture in version 15 makes it incredibly powerful for Web3 development.\n\nWhen building a decentralized application (DApp), you often need to read data from the blockchain. By utilizing Next.js Server Actions, you can fetch blockchain data on the server, drastically reducing the client-side bundle size and improving the initial page load time.\n\nOn the client side, libraries like `wagmi` and `viem` provide excellent React hooks for connecting wallets, sending transactions, and interacting with smart contracts. Combining these tools with Next.js enables developers to build highly performant and SEO-friendly Web3 applications.",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop"
  }
];
