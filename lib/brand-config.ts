export const brandConfig = {
  // Personal Information
  name: "Arewa Geek",
  fullName: "Arewa Geek",
  title: "Fullstack Blockchain Engineer",
  subtitle: "Building the future of Web3",
  tagline: "Where we're going, we won't need wallets",
  location: "Nigeria",
  email: "hello@arewaofweb3.dev",

  // Social Links
  social: {
    github: "https://github.com/arewaofweb3",
    linkedin: "https://linkedin.com/in/arewaofweb3",
    twitter: "https://x.com/arewaofweb3",
    discord: "@arewaofweb3",
  },

  // Brand Colors & Gradients
  colors: {
    primary: "from-purple-600 to-pink-600",
    secondary: "from-blue-600 to-cyan-600",
    accent: "from-green-600 to-emerald-600",
    warning: "from-yellow-600 to-orange-600",
    danger: "from-red-600 to-pink-600",
  },

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    description:
      "I craft decentralized applications and protocols that feel effortlessly simple and beautifully smooth. Because Web3 deserves exceptional user experiences, not complexity.",
    cta: {
      primary: "Explore My Work",
      secondary: "Let's Connect",
    },
    status: "Available for ambitious projects",
  },

  // About Page
  about: {
    intro: "A blockchain engineer who believes technology should feel effortless, not overwhelming.",
    mission:
      "I build decentralized systems that real people actually want to use—designed from the ground up to scale effortlessly as they grow.",
    story: [
      "I got into blockchain not because of the hype, but because I was fascinated by the idea of building systems that don't need a middleman to work.",
      "Most blockchain apps feel like they were built by engineers for engineers. I think that's backwards. The best technology is the kind you don't even notice you're using.",
      "When I'm not coding, I'm probably thinking about how to make complex things simple, or figuring out how AI can make blockchain applications smarter without making them more complicated.",
      "I'm based in Nigeria, but I work with teams and projects all over the world. The internet is pretty cool like that.",
    ],
    values: [
      {
        title: "User-first",
        description:
          "Technology should serve people, not the other way around. Every decision starts with the user experience.",
      },
      {
        title: "Keep it simple",
        description: "The best solutions are often the simplest ones. Complexity is easy, simplicity takes work.",
      },
      {
        title: "Build to last",
        description:
          "Security and reliability aren't optional. I build systems that people can trust with their assets.",
      },
      {
        title: "Care about craft",
        description:
          "Every line of code matters. I take pride in building things the right way, not just the fast way.",
      },
    ],
    personal: [
      {
        title: "Coffee enthusiast",
        description:
          "I take my coffee seriously. Currently exploring different brewing methods and probably drinking too much of it.",
      },
      {
        title: "Music lover",
        description:
          "Afrobeats, jazz, and lo-fi hip hop keep me focused while coding. Music and code have more in common than you'd think.",
      },
      {
        title: "Always learning",
        description:
          "Currently reading about AI research and system design. The best developers never stop being students.",
      },
      {
        title: "Global perspective",
        description:
          "Working with teams across different time zones has taught me that good ideas come from everywhere.",
      },
    ],
  },

  // Current Status
  currentWork: [
    {
      id: "defi-protocol",
      name: "DeFi Protocol Inc.",
      role: "Senior Blockchain Engineer",
      startDate: "2023",
      status: "current", // "current" or "past"
      description: "Leading AI-powered DeFi infrastructure development",
      logo: "🏦",
      highlights: [
        "Building next-gen yield optimization protocols",
        "Leading cross-chain infrastructure development",
        "Implementing AI-driven trading strategies",
      ],
    },
    // Add more current positions if needed
  ],

  currentProjects: [
    {
      id: "ai-defi-v2",
      title: "AI DeFi Protocol V2",
      description: "Next-generation yield optimization platform with advanced machine learning capabilities",
      status: "in-development", // "in-development", "beta", "launching-soon"
      progress: 75,
      technologies: ["Solidity", "Python", "TensorFlow", "React"],
      expectedLaunch: "Q2 2024",
      highlights: [
        "Advanced AI yield optimization algorithms",
        "Cross-chain liquidity aggregation",
        "Zero-knowledge privacy features",
      ],
    },
    {
      id: "nft-marketplace-v3",
      title: "Cross-Chain NFT Marketplace",
      description: "Revolutionary NFT platform with AI-powered price discovery and seamless cross-chain transfers",
      status: "beta",
      progress: 90,
      technologies: ["Next.js", "Solidity", "IPFS", "AI"],
      expectedLaunch: "Q1 2024",
      highlights: ["AI-powered price recommendations", "Gasless cross-chain transfers", "Advanced creator tools"],
    },
    {
      id: "security-scanner",
      title: "Smart Contract Security Scanner",
      description: "AI-powered vulnerability detection tool for smart contract auditing",
      status: "launching-soon",
      progress: 95,
      technologies: ["Python", "Machine Learning", "React"],
      expectedLaunch: "January 2024",
      highlights: [
        "95% vulnerability detection accuracy",
        "Real-time scanning capabilities",
        "Integration with popular IDEs",
      ],
    },
  ],

  // Work Experience
  companies: [
    {
      id: "defi-protocol",
      name: "DeFi Protocol Inc.",
      role: "Senior Blockchain Engineer",
      period: "2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      logo: "🏦",
      status: "current",
      description:
        "Leading the development of next-generation DeFi protocols with AI-powered yield optimization and cross-chain interoperability.",
      achievements: [
        "Architected smart contracts managing $25M+ TVL",
        "Reduced gas costs by 45% through optimization",
        "Led team of 12 engineers building cross-chain infrastructure",
        "Implemented AI-driven yield strategies increasing APY by 30%",
      ],
      technologies: ["Solidity", "React", "Python", "AWS", "TensorFlow"],
      projectCount: 8,
      overview: {
        description:
          "At DeFi Protocol Inc., I led the development of revolutionary DeFi infrastructure that combines artificial intelligence with blockchain technology. My role involved architecting smart contracts that could adapt and optimize themselves based on market conditions.",
        responsibilities: [
          "Architected and deployed smart contracts managing over $25M in total value locked",
          "Led a cross-functional team of 12 engineers across frontend, backend, and blockchain development",
          "Implemented AI-driven yield optimization algorithms that increased user returns by 30%",
          "Designed and built cross-chain bridge infrastructure supporting 4 major blockchains",
          "Reduced gas costs by 45% through advanced smart contract optimization techniques",
          "Established security protocols and conducted comprehensive smart contract audits",
        ],
        impact:
          "Led the company's transition from a traditional DeFi protocol to an AI-powered platform, resulting in 300% user growth and $25M+ in managed assets.",
      },
      projects: [
        {
          title: "AI Yield Optimizer",
          description:
            "Revolutionary DeFi protocol that uses machine learning to optimize yield farming strategies across 50+ protocols.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Solidity", "Python", "TensorFlow", "React"],
          metrics: { tvl: "$25M+", apy: "30% higher", users: "15K+" },
          links: { demo: "#", github: "#" },
        },
        {
          title: "Cross-Chain Bridge",
          description:
            "Secure and efficient bridge infrastructure enabling seamless asset transfers across 4 major blockchains.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Solidity", "Go", "React", "PostgreSQL"],
          metrics: { volume: "$50M+", chains: "4", uptime: "99.9%" },
          links: { demo: "#", github: "#" },
        },
        {
          title: "Governance Dashboard",
          description:
            "Comprehensive governance platform with advanced voting mechanisms and treasury management capabilities.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "Solidity", "GraphQL", "TypeScript"],
          metrics: { proposals: "500+", voters: "10K+", decisions: "95%" },
          links: { demo: "#", github: "#" },
        },
      ],
      impact: [
        {
          value: "$25M+",
          label: "Total Value Locked",
          description: "Managed across all protocols",
        },
        {
          value: "15K+",
          label: "Active Users",
          description: "Daily active protocol users",
        },
        {
          value: "45%",
          label: "Gas Reduction",
          description: "Through optimization techniques",
        },
        {
          value: "100%",
          label: "Security Record",
          description: "Zero hacks or exploits",
        },
      ],
    },
    {
      id: "web3-startup",
      name: "Web3 Innovations",
      role: "Fullstack Blockchain Developer",
      period: "2022 - 2023",
      location: "Remote",
      type: "Full-time",
      logo: "🚀",
      status: "past",
      description:
        "Built end-to-end blockchain applications with emphasis on user experience and AI integration for automated testing.",
      achievements: [
        "Developed NFT marketplace with 75K+ active users",
        "Created AI-powered smart contract vulnerability scanner",
        "Implemented automated testing reducing bugs by 70%",
        "Built cross-platform mobile app with 50K+ downloads",
      ],
      technologies: ["Next.js", "Solidity", "TypeScript", "Docker", "PostgreSQL"],
      projectCount: 12,
      overview: {
        description:
          "As a Fullstack Blockchain Developer at Web3 Innovations, I was responsible for building end-to-end blockchain applications with a strong focus on user experience and automated testing through AI integration.",
        responsibilities: [
          "Developed a comprehensive NFT marketplace that attracted 75,000+ active users",
          "Created an AI-powered smart contract vulnerability scanner used by 500+ developers",
          "Implemented automated testing frameworks that reduced deployment bugs by 70%",
          "Built cross-platform mobile applications with 50,000+ downloads",
          "Optimized application performance achieving 2-second load times",
          "Mentored junior developers and established coding best practices",
        ],
        impact:
          "Transformed the company's technical capabilities, leading to $12M+ in NFT trading volume and recognition as a top Web3 development team.",
      },
      projects: [
        {
          title: "NFT Marketplace",
          description:
            "Next-generation NFT trading platform with AI-powered price discovery and seamless user experience.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "Solidity", "IPFS", "TypeScript"],
          metrics: { volume: "$12M+", nfts: "50K+", users: "75K+" },
          links: { demo: "#", github: "#" },
        },
        {
          title: "Smart Contract Scanner",
          description:
            "AI-powered vulnerability detection tool that analyzes smart contracts for security issues and gas optimization.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Python", "Machine Learning", "React", "FastAPI"],
          metrics: { scanned: "10K+", accuracy: "95%", saved: "$2M+" },
          links: { demo: "#", github: "#" },
        },
        {
          title: "Mobile DeFi App",
          description:
            "Cross-platform mobile application bringing DeFi to mainstream users with intuitive design and powerful features.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["React Native", "TypeScript", "Web3", "Redux"],
          metrics: { downloads: "50K+", rating: "4.8/5", retention: "85%" },
          links: { demo: "#", github: "#" },
        },
      ],
      impact: [
        {
          value: "75K+",
          label: "Marketplace Users",
          description: "Active NFT traders",
        },
        {
          value: "$12M+",
          label: "Trading Volume",
          description: "NFT marketplace volume",
        },
        {
          value: "95%",
          label: "Scanner Accuracy",
          description: "Vulnerability detection rate",
        },
        {
          value: "70%",
          label: "Bug Reduction",
          description: "Through automated testing",
        },
      ],
    },
    {
      id: "blockchain-solutions",
      name: "Blockchain Solutions Ltd.",
      role: "Blockchain Developer",
      period: "2021 - 2022",
      location: "Lagos, Nigeria",
      type: "Full-time",
      logo: "⛓️",
      status: "past",
      description:
        "Specialized in smart contract development and dApp creation with focus on security and user-friendly interfaces.",
      achievements: [
        "Deployed 25+ smart contracts with zero vulnerabilities",
        "Built DeFi lending protocol with $5M+ in loans",
        "Improved dApp loading speed by 80%",
        "Conducted security audits for 15+ external projects",
      ],
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat"],
      projectCount: 15,
      overview: {
        description:
          "At Blockchain Solutions Ltd., I specialized in smart contract development and dApp creation, with a particular focus on security and creating user-friendly interfaces for complex blockchain interactions.",
        responsibilities: [
          "Deployed 25+ smart contracts to mainnet with zero security vulnerabilities",
          "Built a DeFi lending protocol that facilitated over $5M in loans",
          "Improved dApp loading speeds by 80% through performance optimization",
          "Conducted security audits for 15+ external blockchain projects",
          "Mentored 8 junior developers in blockchain development best practices",
          "Established the company's smart contract development standards",
        ],
        impact:
          "Established the company as a trusted smart contract development partner, with all deployed contracts maintaining perfect security records.",
      },
      projects: [
        {
          title: "DeFi Lending Protocol",
          description:
            "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Solidity", "React", "Web3.js", "Node.js"],
          metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
          links: { demo: "#", github: "#" },
        },
        {
          title: "Token Launchpad",
          description:
            "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Solidity", "React", "IPFS", "Hardhat"],
          metrics: { launches: "25+", raised: "$10M+", success: "100%" },
          links: { demo: "#", github: "#" },
        },
      ],
      impact: [
        {
          value: "25+",
          label: "Smart Contracts",
          description: "Deployed with zero hacks",
        },
        {
          value: "$5M+",
          label: "Loans Facilitated",
          description: "Through DeFi lending protocol",
        },
        {
          value: "80%",
          label: "Speed Improvement",
          description: "dApp loading optimization",
        },
        {
          value: "15+",
          label: "Audits Completed",
          description: "External security audits",
        },
      ],
    },
  ],

  // Global Stats
  stats: {
    experience: "3+",
    projects: "50+",
    users: "200K+",
    tvl: "$50M+",
    companies: "5+",
    teamMembers: "50+",
    successRate: "100%",
  },

  // Skills & Technologies
  skills: {
    blockchain: [
      { name: "Solidity", level: 98 },
      { name: "Ethereum", level: 95 },
      { name: "Web3.js", level: 92 },
      { name: "DeFi Protocols", level: 90 },
      { name: "NFT Development", level: 88 },
      { name: "Cross-chain", level: 85 },
    ],
    ai: [
      { name: "OpenAI API", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "Vector Databases", level: 88 },
      { name: "TensorFlow", level: 82 },
      { name: "Hugging Face", level: 85 },
      { name: "AI Agents", level: 87 },
    ],
    frontend: [
      { name: "React", level: 96 },
      { name: "Next.js", level: 94 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 91 },
      { name: "Three.js", level: 78 },
      { name: "Framer Motion", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 94 },
      { name: "Python", level: 89 },
      { name: "PostgreSQL", level: 87 },
      { name: "Redis", level: 83 },
      { name: "Docker", level: 88 },
      { name: "AWS", level: 85 },
    ],
  },

  // Featured Projects
  featuredProjects: [
    {
      title: "AI-Powered DeFi Yield Optimizer",
      description:
        "Intelligent yield farming platform that uses machine learning to optimize returns across multiple protocols while minimizing risk and gas costs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "Python", "React", "TensorFlow", "Web3.js"],
      features: [
        "AI-driven yield strategy optimization",
        "Cross-chain yield farming",
        "Automated rebalancing",
        "Risk assessment algorithms",
      ],
      links: { demo: "#", github: "#", live: "#" },
    },
    {
      title: "Cross-Chain NFT Marketplace",
      description:
        "Seamless NFT trading platform supporting multiple blockchains with AI-powered price discovery and automated royalty distribution.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "Next.js", "TypeScript", "IPFS", "Polygon"],
      features: [
        "Multi-chain NFT support",
        "AI price recommendations",
        "Lazy minting capabilities",
        "Advanced search & filtering",
      ],
      links: { demo: "#", github: "#", live: "#" },
    },
    {
      title: "Decentralized Identity Platform",
      description:
        "Self-sovereign identity solution with zero-knowledge proofs, enabling privacy-preserving authentication across Web3 applications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "zk-SNARKs", "React", "Node.js", "IPFS"],
      features: [
        "Zero-knowledge authentication",
        "Decentralized credential storage",
        "Privacy-preserving verification",
        "Cross-platform compatibility",
      ],
      links: { demo: "#", github: "#" },
    },
    {
      title: "Smart Contract Security Analyzer",
      description:
        "AI-powered tool for automated smart contract vulnerability detection and gas optimization suggestions with detailed reporting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Machine Learning", "Solidity", "React", "FastAPI"],
      features: [
        "Automated vulnerability scanning",
        "Gas optimization suggestions",
        "Detailed security reports",
        "Integration with development tools",
      ],
      links: { demo: "#", github: "#" },
    },
  ],
}
