import React from "react";
import { Github, Linkedin, Mail, WashingMachine } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...props,
    },
    React.createElement("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    })
  );

export const brandConfig = {
  // Personal Information
  name: "Arewa Geek",
  fullName: "Arewa Geek",
  title: "Full-stack Engineer",
  subtitle: "Building robust software & the future of Web3",
  tagline: "Engineering scalable solutions for the modern web",
  location: "Nigeria",
  email: "arewageek@gmail.com",
  
  // Categories
  categories: [
    { name: "DeFi", slug: "defi", description: "Decentralized Finance protocols and applications" },
    { name: "Infra", slug: "infra", description: "Infrastructure and developer tools" },
    { name: "NFT", slug: "nft", description: "Non-fungible tokens and marketplaces" },
    { name: "AI", slug: "ai", description: "Artificial Intelligence and Machine Learning" },
    { name: "E-Commerce", slug: "ecommerce", description: "Online shopping and commerce solutions" },
    { name: "Web3", slug: "web3", description: "Decentralized web applications" }
  ],

  // Social Links
  socials: [
    {
      href: "https://github.com/arewageek",
      label: "GitHub",
      icon: Github,
      color:
        "hover:text-purple-400 hover:bg-purple-500/10 hover:border-purple-400/30",
    },
    {
      href: "https://linkedin.com/in/augustine-ameh-a2315b165",
      label: "LinkedIn",
      icon: Linkedin,
      color:
        "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/30",
    },
    {
      href: "https://x.com/arewaofweb3",
      label: "Twitter",
      icon: XIcon,
      color:
        "hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/30",
    },
    {
      href: "mailto:arewageek@gmail.com",
      label: "Email",
      icon: Mail,
      color:
        "hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-400/30",
    },
  ],

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
      "I build scalable software systems, decentralized apps, and intuitive user experiences. Technology doesn't have to be complicated.",
    cta: {
      primary: "My Work",
      secondary: "Contact Me",
    },
    status: "Available now",
  },

  // About Page
  about: {
    intro:
      "A software engineer building web and blockchain applications with a focus on simplicity and quality.",
    mission:
      "I build software systems and decentralized applications that people actually enjoy using.",
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
        description:
          "The best solutions are often the simplest ones. Complexity is easy, simplicity takes work.",
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
      role: "Senior Software Engineer",
      startDate: "2023",
      status: "current", // "current" or "past"
      description: "Leading AI-powered DeFi infrastructure development",
      logo: "",
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
      description:
        "Next-generation yield optimization platform with advanced machine learning capabilities",
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
      description:
        "Revolutionary NFT platform with AI-powered price discovery and seamless cross-chain transfers",
      status: "beta",
      progress: 90,
      technologies: ["Next.js", "Solidity", "IPFS", "AI"],
      expectedLaunch: "Q1 2024",
      highlights: [
        "AI-powered price recommendations",
        "Gasless cross-chain transfers",
        "Advanced creator tools",
      ],
    },
    {
      id: "security-scanner",
      title: "Smart Contract Security Scanner",
      description:
        "AI-powered vulnerability detection tool for smart contract auditing",
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
      id: "borbbles",
      name: "Borbbles",
      role: "Fullstack Engineer",
      started: "Sep 2021",
      stopped: "Mar 2022",
      location: "Niger, Nigeria",
      type: "Full-time",
      logo: "",
      status: "past",
      description:
        "Co-founded the leading laundry service company in college at the time, introducing a subscription service model.",
      achievements: [],
      technologies: ["PHP", "MySQL"],
      projectCount: 1,
      overview: {
        description:
          "Co-founded a laundry service company in college with a subscription model.",
        responsibilities: [
          "Developed a web app that improved user experience and work efficiency.",
          "Built a subscription system to help customers manage recurring payments.",
          "Guided users on how to use the app to ensure smooth adoption.",
        ],
      },
      projects: [
        //   {
        //     title: "AI Yield Optimizer",
        //     description:
        //       "Revolutionary DeFi protocol that uses machine learning to optimize yield farming strategies across 50+ protocols.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "Python", "TensorFlow", "React"],
        //     metrics: { tvl: "$25M+", apy: "30% higher", users: "15K+" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Cross-Chain Bridge",
        //     description:
        //       "Secure and efficient bridge infrastructure enabling seamless asset transfers across 4 major blockchains.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "Go", "React", "PostgreSQL"],
        //     metrics: { volume: "$50M+", chains: "4", uptime: "99.9%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Governance Dashboard",
        //     description:
        //       "Comprehensive governance platform with advanced voting mechanisms and treasury management capabilities.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Next.js", "Solidity", "GraphQL", "TypeScript"],
        //     metrics: { proposals: "500+", voters: "10K+", decisions: "95%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "$25M+",
        //     label: "Total Value Locked",
        //     description: "Managed across all protocols",
        //   },
        //   {
        //     value: "15K+",
        //     label: "Active Users",
        //     description: "Daily active protocol users",
        //   },
        //   {
        //     value: "45%",
        //     label: "Gas Reduction",
        //     description: "Through optimization techniques",
        //   },
        //   {
        //     value: "100%",
        //     label: "Security Record",
        //     description: "Zero hacks or exploits",
        //   },
      ],
    },
    {
      id: "skytech",
      name: "Skytech Integrated Network Ltd.",
      role: "Fullstack Engineer",
      started: "Jun 2022",
      stopped: "Jul 2023",
      location: "Nasarawa, Nigeria",
      type: "Full-time",
      logo: "",
      status: "past",
      description:
        "Developed custom web applications for the organization and its clients, delivering tailored solutions to meet specific business needs.",
      achievements: [
        // "Developed NFT marketplace with 75K+ active users",
        // "Created AI-powered smart contract vulnerability scanner",
        // "Implemented automated testing reducing bugs by 70%",
        // "Built cross-platform mobile app with 50K+ downloads",
      ],
      technologies: ["PHP", "Laravel", "SQL"],
      projectCount: 3,
      overview: {
        // description:
        //   "As a Fullstack Blockchain Developer at Web3 Innovations, I was responsible for building end-to-end blockchain applications with a strong focus on user experience and automated testing through AI integration.",
        responsibilities: [
          "Led the on-boarding process for new interns, providing guidance and support to help them integrate smoothly into the team.",
          "Designed and developed a POS system for cybercafes, enabling them to effectively track sales, manage inventory, payrolls, and analyze growth.",
          "Mentored new interns on website development, utilizing tools such as JavaScript and PHP to foster their technical skills.",
        ],
        // impact:
        //   "Transformed the company's technical capabilities, leading to $12M+ in NFT trading volume and recognition as a top Web3 development team.",
      },
      projects: [
        //   {
        //     title: "NFT Marketplace",
        //     description:
        //       "Next-generation NFT trading platform with AI-powered price discovery and seamless user experience.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Next.js", "Solidity", "IPFS", "TypeScript"],
        //     metrics: { volume: "$12M+", nfts: "50K+", users: "75K+" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Smart Contract Scanner",
        //     description:
        //       "AI-powered vulnerability detection tool that analyzes smart contracts for security issues and gas optimization.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Python", "Machine Learning", "React", "FastAPI"],
        //     metrics: { scanned: "10K+", accuracy: "95%", saved: "$2M+" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Mobile DeFi App",
        //     description:
        //       "Cross-platform mobile application bringing DeFi to mainstream users with intuitive design and powerful features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["React Native", "TypeScript", "Web3", "Redux"],
        //     metrics: { downloads: "50K+", rating: "4.8/5", retention: "85%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "75K+",
        //     label: "Marketplace Users",
        //     description: "Active NFT traders",
        //   },
        //   {
        //     value: "$12M+",
        //     label: "Trading Volume",
        //     description: "NFT marketplace volume",
        //   },
        //   {
        //     value: "95%",
        //     label: "Scanner Accuracy",
        //     description: "Vulnerability detection rate",
        //   },
        //   {
        //     value: "70%",
        //     label: "Bug Reduction",
        //     description: "Through automated testing",
        //   },
      ],
    },
    {
      id: "its",
      name: "ITS, FUT Minna",
      role: "Fullstack Engineer",
      started: "Sep 2023",
      stopped: "Feb 2024",
      location: "Niger, Nigeria",
      type: "Full-time",
      logo: "",
      status: "past",
      description:
        "Built responsive and efficient web applications to address various operational needs.",
      achievements: [
        //   "Deployed 25+ smart contracts with zero vulnerabilities",
        //   "Built DeFi lending protocol with $5M+ in loans",
        //   "Improved dApp loading speed by 80%",
        //   "Conducted security audits for 15+ external projects",
      ],
      technologies: ["Laravel", "React", "SQL"],
      projectCount: 2,
      overview: {
        description:
          "Built responsive and efficient web applications to address various operational needs.",
        responsibilities: [
          "Collaborated with a team of software engineers in the MIS unit.",
          "Designed and implemented a web application for managing interns within the MIS unit, streamlining processes and improving administrative oversight.",
          "Collaborated with a team of developers both on-site and remotely, leveraging Laravel and PostgreSQL to deliver robust back-end solutions.",
          "Developed WikiChat, a Python-React app utilizing OpenAI’s Python SDK to generate witty and engaging responses, enhancing user interactions.",
          "Developed TrustLendr, a decentralized lending platform that uses on-chain credit scores for loan eligibility. Integrated a native ERC-20 token to facilitate smooth lending and borrowing transactions",
        ],
        // impact:
        //   "Established the company as a trusted smart contract development partner, with all deployed contracts maintaining perfect security records.",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },

    {
      id: "phlamingos",
      name: "Phlamingos NFT",
      role: "Software Engineer",
      started: "May 2024",
      stopped: "Jul 2024",
      location: "Fiverr",
      type: "Contract",
      logo: "",
      status: "past",
      description:
        "Built a smart contract and decentralized application (dApp) for NFT auctions, making it easy for users to participate in secure and transparent bidding.",
      achievements: [
        //   "Deployed 25+ smart contracts with zero vulnerabilities",
        //   "Built DeFi lending protocol with $5M+ in loans",
        //   "Improved dApp loading speed by 80%",
        //   "Conducted security audits for 15+ external projects",
      ],
      technologies: ["Solidity", "Next Js", "Prisma ORM", "PostgreSQL"],
      projectCount: 1,
      overview: {
        description:
          "Built a smart contract and decentralized application (dApp) for NFT auctions, making it easy for users to participate in secure and transparent bidding.",
        responsibilities: [
          "Built a smart contract and decentralized application (dApp) for NFT auctions, making it easy for users to participate in secure and transparent bidding.",
          "Developed a web app for inscribing NFTs onto the Ethereum blockchain, combining a user-friendly interface with efficient blockchain integration.",
        ],
        // impact:
        //   "Established the company as a trusted smart contract development partner, with all deployed contracts maintaining perfect security records.",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },

    {
      id: "tol",
      name: "The Open Labs (TOL)",
      role: "Fullstack Engineer",
      started: "Aug 2024",
      stopped: "Nov 2024",
      location: "Remote",
      type: "Contract",
      logo: "",
      status: "past",
      description:
        "Designed and developed a freelance agency platform leveraging the TON blockchain to enable secure, decentralized interactions between users.",
      achievements: [
        //   "Deployed 25+ smart contracts with zero vulnerabilities",
        //   "Built DeFi lending protocol with $5M+ in loans",
        //   "Improved dApp loading speed by 80%",
        //   "Conducted security audits for 15+ external projects",
      ],
      technologies: ["Next JS", "Mongo DB"],
      projectCount: 1,
      overview: {
        description:
          "Designed and developed a freelance agency platform leveraging the TON blockchain to enable secure, decentralized interactions between users.",
        responsibilities: [
          "Designed and developed a freelance agency platform leveraging the TON blockchain to enable secure, decentralized interactions between users.",
          "Built a dynamic wait-list and NFT minting website, incorporating blockchain features for seamless user on-boarding.",
          "Developed a Telegram Mini-App and integrated Telegram Bot to enhance user engagement, streamline communication, and facilitate platform interactions.",
          "Created a quest dashboard to engage the community through interactive social tasks, incentivizing participation and building excitement for a potential airdrop.",
          "Developed a tap-to-earn Telegram mini-app game that rewards users with TapM tokens for interactions. Integrated a marketplace where tokens can be used to boost Points Per Hour (PPH), increasing user retention and platform activity.",
        ],
        // impact:
        //   "Established the company as a trusted smart contract development partner, with all deployed contracts maintaining perfect security records.",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },

    {
      id: "flaury",
      name: "Flaury",
      role: "Backend Engineer",
      started: "Oct 2024",
      stopped: "Nov 2024",
      location: "Remote",
      type: "Volunteer",
      logo: "",
      status: "past",
      description:
        "Designed scalable and efficient back-end systems to support the platform's diverse user interactions.",
      achievements: [],
      technologies: ["Express JS", "Mongo DB", "Firebase"],
      projectCount: 1,
      overview: {
        description:
          "Designed scalable and efficient back-end systems to support the platform's diverse user interactions.",
        responsibilities: [
          "Designed scalable and efficient back-end systems to support the platform's diverse user interactions.",
          "Developed API services to power the beauty services platform, ensuring seamless functionality for both web and mobile applications.",
          "Collaborated effectively with a fully remote team using slack and github, maintaining strong communication and delivering results within tight deadlines.",
          "Developed an API service for the application’s in-app messaging and live chat feature",
        ],
        // impact:
        //   "Established the company as a trusted smart contract development partner, with all deployed contracts maintaining perfect security records.",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },

    {
      id: "i633",
      name: "Ignition 633 Ministries",
      role: "Fullstack Engineer",
      started: "Jan 2025",
      location: "Benue, Nigeria",
      type: "Full-Time",
      logo: "",
      status: "current",
      description:
        "Design and implement modular applications and micro-services, optimizing scalability, maintainability, and efficiency in the software development process.",
      achievements: [
        //   "Deployed 25+ smart contracts with zero vulnerabilities",
        //   "Built DeFi lending protocol with $5M+ in loans",
        //   "Improved dApp loading speed by 80%",
        //   "Conducted security audits for 15+ external projects",
      ],
      technologies: [
        "Laravel",
        "Livewire",
        "MySQL",
        "Modular Design",
        "Microservices",
        "Figma",
      ],
      projectCount: 4,
      overview: {
        description:
          "Design and implement modular applications and micro-services, optimizing scalability, maintainability, and efficiency in the software development process.",
        responsibilities: [
          "Design and implement modular applications and micro-services, optimizing scalability, maintainability, and efficiency in the software development process.",
          "Developed and manage a notifications module used across multiple applications to deliver real-time updates to users. This module has been successfully integrated across various platforms.",
          "Collaborate with a cross-functional team, including both local and remote members, to create innovative software products and enhance existing systems using tools like Jira, Bitbucket, and Microsoft Teams for project management, version control, and communication.",
          "Assist interns by explaining development processes, conducting 1:1 review sessions to help them overcome challenges, and ensuring a smooth and effective learning experience. ",
        ],
        impact: "",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },

    {
      id: "goviral",
      name: "Go Viral Africa",
      role: "Frontend Engineer",
      started: "Aug 2025",
      stopped: "Nov 2025",
      location: "Remote",
      type: "Full-Time",
      logo: "",
      status: "current",
      description:
        "At Go Viral Africa, I build and maintain the frontend for two products: Whoscore, an AI-powered sports network, and Monei, an AI agent for simple and smart financial management.",
      achievements: [],
      technologies: ["React", "Next.js", "TailwindCss", "Axios"],
      projectCount: 4,
      overview: {
        description:
          "At Go Viral Africa, I build and maintain the frontend for two products: Whoscore, an AI-powered sports network, and Monei, an AI agent for simple and smart financial management.",
        responsibilities: [
          "Built and refined the full search flow for Whoscore, including the search page, hot trends, highlights, and results page.",
          "Designed the desktop experience for the Livescore page to improve usability across devices.",
          "Developed core frontend features for Monei, focusing on wallet access, portfolio views, peer-to-peer flows, and smart automations.",
          "Collaborate with product and engineering teams to improve user experience, performance, and overall platform reliability."
        ],
        impact: "",
      },
      projects: [
        //   {
        //     title: "DeFi Lending Protocol",
        //     description:
        //       "Secure lending and borrowing platform with innovative collateral mechanisms and competitive interest rates.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        //     metrics: { loans: "$5M+", borrowers: "2K+", default: "0%" },
        //     links: { demo: "#", github: "#" },
        //   },
        //   {
        //     title: "Token Launchpad",
        //     description:
        //       "Comprehensive platform for token launches with built-in vesting, staking, and governance features.",
        //     image: "/placeholder.svg?height=300&width=500",
        //     technologies: ["Solidity", "React", "IPFS", "Hardhat"],
        //     metrics: { launches: "25+", raised: "$10M+", success: "100%" },
        //     links: { demo: "#", github: "#" },
        //   },
      ],
      impact: [
        //   {
        //     value: "25+",
        //     label: "Smart Contracts",
        //     description: "Deployed with zero hacks",
        //   },
        //   {
        //     value: "$5M+",
        //     label: "Loans Facilitated",
        //     description: "Through DeFi lending protocol",
        //   },
        //   {
        //     value: "80%",
        //     label: "Speed Improvement",
        //     description: "dApp loading optimization",
        //   },
        //   {
        //     value: "15+",
        //     label: "Audits Completed",
        //     description: "External security audits",
        //   },
      ],
    },
  ],

  // Global Stats
  stats: {
    experience: `${Math.floor((new Date().getFullYear() - 2018) / 5) * 5}+`,
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
    // ai: [
    //   { name: "OpenAI API", level: 95 },
    //   { name: "LangChain", level: 90 },
    //   { name: "Vector Databases", level: 88 },
    //   { name: "TensorFlow", level: 82 },
    //   { name: "Hugging Face", level: 85 },
    //   { name: "AI Agents", level: 87 },
    // ],
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
  projects: [
    {
      title: "BlocVote",
      category: "Infra",
      description:
        "Developed an electoral system utilizing an ESP32 micro-controller to capture and transmit votes securely. Integrated with a smart contract and API, the system ensures that all votes are recorded on-chain, leveraging the Ethereum blockchain  for transparency and immutability. This blockchain-powered solution enhances electoral integrity by preventing fraud, enabling real-time verification, and establishing a verifiable, tamper-proof election record.",
      image: "blocvote.png",
      technologies: ["Solidity", "C", "Nodejs"],
      metrics: { tvl: "$25M+", apy: "30% higher", users: "15K+" },
      status: "Live",
      links: {
        demo: "",
        github: "https://github.com/arewageek/blocvote-hardhat",
        live: "#",
      },
    },
    {
      title: "XonPad",
      category: "DeFi",
      description:
        "Designed and developed an ERC20 token launchpad and presale platform that empowers users to create and deploy crypto tokens effortlessly. The platform facilitates ICO token presales, enabling fundraising without requiring any coding expertise, streamlining token launches for projects of all scales.",
      image: "/xonpad.png",
      technologies: ["Next.js", "Solidity"],
      metrics: { volume: "$12M+", nfts: "50K+", chains: "4" },
      status: "Beta",
      links: {
        demo: "https://xonpad.vercel.app",
        github: "https://github.com/arewageek/xonpad",
      },
    },
    {
      title: "Farm Ledger",
      category: "DeFi",
      description:
        "Developed a blockchain-powered agricultural supply chain management system to ensure end-to-end transparency and traceability of food products. The system tracks the quality and movement of items from production through processing and distribution, providing consumers with verifiable data on sourcing, handling, and authenticity.",
      image: "farmledger.png",
      technologies: ["Solidity", "Hardhat", "Next JS", "Wagmi"],
      metrics: { credentials: "100K+", privacy: "100%", uptime: "99.9%" },
      status: "Live",
      links: {
        demo: "https://farmledger.vercel.app",
        github:
          "https://github.com/arewageek/blockchain-agro-supplychain-system",
      },
    },
    {
      title: "Talqq",
      category: "Infra",
      description:
        "Developed a user-friendly video conferencing platform that simplifies virtual communication. The platform enables seamless meeting scheduling, instant joining, and session recording, ensuring an effortless and efficient collaboration experience.",
      image: "talqq.png",
      technologies: ["Next JS", "Clerk", "Streams SDK"],
      metrics: { scanned: "10K+", accuracy: "95%", savings: "40%" },
      status: "Live",
      links: {
        demo: "https://talqq.vercel.app/",
        github: "https://github.com/arewageek/talq",
      },
    },
    {
      title: "ProxySign",
      category: "DeFi",
      description:
        "Built a Web3 wallet contract with multi-signature support, adding an extra layer of security by requiring multiple approvals for transactions. This ensures better control over funds and reduces the risk of unauthorized access.",
      image: "proxysign.png",
      technologies: ["Solidity", "Hardhat"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Live",
      links: { demo: "", github: "https://github.com/arewageek/proxysign" },
    },
    {
      title: "PaySilo",
      category: "Infra",
      description:
        "A freelance platform that makes global payments easy and secure for both freelancers and clients, with a simple, user-friendly experience at its core. Building on the Base Blockchain",
      image: "paysilo.png",
      technologies: ["Solidity", "Foundry", "Next JS"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Dev",
      links: { demo: "https://paysilohq.vercel.app", github: "" },
    },
    {
      title: "633 Kitchen",
      category: "E-Commerce",
      description: "A food ordering app designed for in local restaurants",
      image: "633-kitchen.png",
      technologies: ["Next JS", "Paystack", "Clerk"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Beta",
      companyId: "i633",
      links: { demo: "https://633-kitchen.vercel.app", github: "" },
    },
    {
      title: "Konfect",
      category: "NFT",
      description: "An NFT Marketplace and launchpad",
      image: "konfect.png",
      technologies: ["Next JS"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Beta",
      links: { demo: "https://konfect.vercel.app", github: "" },
    },
    {
      title: "The Whiz Sui",
      category: "NFT",
      description: "Landing page for The Sui wizard - The WHIZ",
      image: "thewhizsui.png",
      technologies: ["Next JS", "Tailwind CSS"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Live",
      links: { demo: "https://www.thewhizsui.xyz", github: "" },
    },
    {
      title: "Pricetag (Frontend)",
      category: "E-Commerce",
      description: "An app that lets people create and manage stores",
      image: "pricetag.png",
      technologies: ["React", "Motion SDK", "TailwindCSS"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Dev",
      links: { demo: "#", github: "" },
    },
    {
      title: "Sessions (Smart Contract)",
      category: "NFT",
      description:
        "A social platform that lets creators earn royalty from video contents",
      image: "sessions.png",
      technologies: ["Solidity", "Hardhat"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Live",
      links: { demo: "", github: "https://github.com/arewageek/sessions" },
    },
    {
      title: "Two Tap",
      category: "Infra",
      description:
        "A component library that lets you customize and generate floting chat buttons for sites",
      image: "twotap.png",
      technologies: ["Next JS"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Dev",
      links: {
        demo: "",
        github: "https://github.com/arewageek/twotap",
      },
    },
    {
      title: "Whoscore (Frontend)",
      category: "AI",
      description:
        "A sports network that helps users track betting tickets across multiple platforms using an AI agent, connect with fellow enthusiasts, make predictions, and access the latest sports news through an AI-powered search engine",
      image: "whoscore.png",
      technologies: ["Next JS", "Motion SDK"],
      metrics: { trades: "1M+", accuracy: "78%", profit: "45%" },
      status: "Live",
      companyId: "goviral",
      links: {
        demo: "https://whoscore.uk",
        github: "",
      },
    },
  ],
  calendar: "https://calendar.app.google/kxuj3jZRMry5AiZr9",
};
