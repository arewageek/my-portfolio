import { Github, Linkedin, Mail, Twitter, WashingMachine } from "lucide-react";

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
      icon: Twitter,
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
      role: "Co-Founder",
      started: "Sep 2021",
      stopped: "Mar 2022",
      location: "Niger, Nigeria",
      type: "Full-time",
      logo: "",
      status: "past",
      description:
        "Co-founded the leading laundry service company in college at the time, introducing a subscription service model.",
      achievements: [],
      technologies: ["PHP", "MySQL", "JQuery"],
      projectCount: 1,
      overview: {
        description:
          "Co-founded a subscription-based laundry service, combining technology with operational processes to simplify laundry management for students.",

        teams: [
          {
            name: "Default",
            startDate: "Sep 2021",
            endDate: "Mar 2022",
            responsibilities: [
              "Co-founded the business and led the development of its web application, improving customer experience and operational efficiency.",
              "Built a subscription management system to support recurring payments and customer plans.",
              "Worked directly with customers to onboard users, gather feedback, and continuously improve the product experience.",
            ],
          },
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
      role: "Fullstack Engineer & Tutor",
      started: "Jun 2022",
      stopped: "Jul 2023",
      location: "Nasarawa, Nigeria",
      type: "Full-time",
      logo: "",
      status: "past",
      description:
        "Developed custom web applications for the organization and its clients while mentoring interns and supporting their growth in modern web development.",
      achievements: [
        // "Developed NFT marketplace with 75K+ active users",
        // "Created AI-powered smart contract vulnerability scanner",
        // "Implemented automated testing reducing bugs by 70%",
        // "Built cross-platform mobile app with 50K+ downloads",
      ],
      technologies: ["PHP", "Laravel", "SQL", "Javascript"],
      projectCount: 3,
      overview: {
        description:
          "Developed custom web applications for the organization and its clients while mentoring interns and supporting their growth in modern web development.",
        teams: [
          {
            name: "Default",
            startDate: "Jun 2022",
            endDate: "Jul 2023",
            responsibilities: [
              "Built a point-of-sale (POS) system for cybercafés, enabling sales tracking, inventory management, payroll processing, and business reporting.",
              "Developed a custom news portal with content management capabilities.",
              "Built a custom web application for a law firm to support its operational workflows.",
              "Led the onboarding of new interns, providing technical guidance and mentoring in JavaScript, PHP, and modern web development practices.",
            ],
          },
        ],
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
        "Contributed to the development of internal tools and web applications while collaborating with the MIS engineering team. Built responsive and efficient web applications to address various operational needs.",
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
          "Contributed to the development of internal tools and web applications while collaborating with the MIS engineering team.",
        teams: [
          {
            name: "Default",
            startDate: "Sep 2023",
            endDate: "Feb 2024",
            responsibilities: [
              "Collaborated with the MIS engineering team to develop and maintain internal web applications.",
              "Built an intern management system used to streamline onboarding and administration.",
            ],
          },
        ],
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
      role: "Fullstack Engineer",
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
      technologies: ["Solidity", "Next Js", "PostgreSQL"],
      projectCount: 1,
      overview: {
        description:
          "Built decentralized applications and smart contracts on Ethereum, focusing on NFT infrastructure, auctions, and on-chain asset creation.",

        teams: [
          {
            name: "Default",
            startDate: "May 2024",
            endDate: "Jul 2024",
            responsibilities: [
              "Developed an NFT auction protocol and decentralized application, enabling secure and transparent on-chain bidding.",
              "Built a web application for inscribing NFTs on Ethereum (Ethscriptions), simplifying the process of creating and managing on-chain digital assets.",
            ],
          },
        ],
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
      technologies: ["Next JS", "Mongo DB", "Tact"],
      projectCount: 1,
      overview: {
        description:
          "Built a blockchain-powered freelance platform on the TON ecosystem, developing decentralized applications that combine smart contracts with engaging user experiences across web and Telegram.",

        teams: [
          {
            name: "Default",
            startDate: "Aug 2024",
            endDate: "Nov 2024",
            responsibilities: [
              "Built the core freelance platform, integrating TON blockchain to enable secure and decentralized user interactions.",
              "Designed the waitlist and NFT minting platform, delivering a seamless onboarding experience for early users.",
              "Introduced a community quest dashboard with social tasks and reward mechanisms to drive user participation and campaign growth.",
              "Developed a tap-to-earn Telegram Mini App featuring an in-app marketplace where users could spend earned tokens to boost Points Per Hour (PPH) and increase engagement.",
            ],
          },
        ],
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
      stopped: "Dec 2024",
      location: "Remote",
      type: "Volunteer",
      logo: "",
      status: "past",
      description:
        "Built scalable backend services and APIs that power the platform's core features, with a focus on reliability, performance, and maintainability. ",
      achievements: [],
      technologies: ["Express JS", "Mongo DB", "Firebase"],
      projectCount: 1,
      overview: {
        description:
          "Built scalable backend services and APIs that power the platform's core features, with a focus on reliability, performance, and maintainability. ",

        teams: [
          {
            name: "Default",
            startDate: "Oct 2024",
            endDate: "Nov 2024",
            responsibilities: [
              "Led the development of the platform's in-app messaging and notification services, enabling reliable real-time communication between users",
              "Built RESTful APIs consumed by both the web and mobile applications.",
              "Collaborated with a fully remote engineering team to deliver features and continuously improve the platform",
            ],
          },
        ],
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
      location: "Benue, Nigeria (Hybrid)",
      type: "Full-Time",
      logo: "",
      status: "current",
      description:
        "Built modular applications and shared platform services across multiple products, focusing on scalability, maintainability, and long-term reliability. Collaborate across engineering teams to deliver reliable software while mentoring interns and supporting their technical growth",
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
      ],
      projectCount: 4,
      overview: {
        description:
          "Built modular applications and shared platform services across multiple products, focusing on scalability, maintainability, and long-term reliability. Collaborate across engineering teams to deliver reliable software while mentoring interns and supporting their technical growth",
        teams: [
          {
            name: "Mailforce",
            startDate: "Mar",
            endDate: "July 2025",
            responsibilities: [
              "Contributed to the development of MailForce, a multi-tenant donor management platform that has processed over $1M in donations.",
              "Delivered new features across multiple modules while improving platform reliability and usability.",
              "Maintained and enhanced existing functionality by addressing bugs, improving usability, and supporting evolving business requirements.",
            ],
          },
          {
            name: "Witness It",
            startDate: "July 2025",
            endDate: "Present",
            responsibilities: [
              "Led the engineering team, coordinating development efforts and driving feature delivery across the platform.",
              "Built a reusable real-time notifications module that has since been adopted across multiple applications.",
              "Contributed to the implementation of transaction workflows, evidence management, identity verification, and consensus-driven approval processes.",
              "Collaborated closely with the product manager, client, and engineering team to define requirements, align on priorities, and deliver platform features.",
            ],
          },
          {
            name: "Benue Infopedia",
            startDate: "May 2026",
            endDate: "Present",
            responsibilities: [
              "Led the implementation of the platform's payment integration, enabling users to make payments seamlessly within the application.",
              "Collaborated in the development of a hyper-local news platform and CMS serving journalists, editors, and readers across Benue State.",
              "Contributed to the advertisement workflow, building features that allow businesses and individuals to create, manage, and promote advertising campaigns on the platform.",
            ],
          },
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
      stopped: "Dec 2025",
      location: "Remote",
      type: "Full-Time",
      logo: "",
      status: "current",
      description:
        "",
      achievements: [],
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      projectCount: 4,
      overview: {
        description:
          "",

        teams: [
          {
            name: "Whoscore",
            startDate: "Aug",
            endDate: "Dec 2025",
            responsibilities: [
              "Led the development of the desktop experience, expanding the platform from a mobile-only interface to a fully responsive web application.",
              "Led the end-to-end implementation of the search experience, including search, trending content, highlights, and search results.",
            ],
          },
          {
            name: "Monei",
            startDate: "Oct",
            endDate: "Dec 2025",
            responsibilities: [
              "Built the internal admin dashboard used to manage platform operations.",
              "Collaborated with product and engineering teams to deliver new features while improving usability, performance, and maintainability.",
            ],
          },
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
      id: "dawih",
      name: "Dawih Solutions",
      role: "Frontend Engineer",
      started: "Jul 2026",
      location: "Remote",
      type: "Full-Time",
      logo: "",
      status: "current",
      description:
        "",
      achievements: [],
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      projectCount: 4,
      overview: {
        description:
          "",

        teams: [
          {
            name: "Supacash",
            startDate: "Jul 2026",
            responsibilities: [
              "Worked on Supacash, a fintech platform serving over 20,000 users, where I led the expansion of the product from mobile to web.",
              "Collaborate closely with engineering teams to translate business requirements into production-ready solutions.",
              "Build and improve reusable frontend components while optimizing application performance, maintainability, and responsiveness.",
            ],
          },
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
