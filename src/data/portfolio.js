export const personal = {
  name: "Ronald Dominique Pabalan",
  nickname: "Dom",
  title: "Project Manager | AI-Assisted Developer",
  tagline:
    "Delivering scalable enterprise systems, automating operations, and leading cross-functional teams to ship high-impact applications.",
  email: "rdominique.pabalan@gmail.com",
  linkedin: "https://www.linkedin.com/in/ronald-dominique-pabalan-5aa04a132/",
  github: "https://github.com/domzxc",
  location: "Philippines",
};

export const about = {
  summary:
    "Project Manager with hands-on experience in building and deploying enterprise applications across logistics, HR, finance, and warehouse operations. Combines Agile leadership with technical execution — leveraging AI-assisted development, APIs, and full-stack solutions to deliver faster, smarter systems.",
  highlights: [
    "End-to-end project lifecycle management: planning, development, SIT, UAT, and Go-Live",
    "Delivered enterprise systems across logistics, HR, finance, and warehouse domains",
    "Led cross-country teams with stakeholders in the Philippines, India, and Malaysia",
    "Integrates AI tools for rapid prototyping, code generation, and workflow automation",
    "Bridges business requirements and technical execution — aligning goals with scalable system design",
  ],
};

export const metrics = [
  { label: "Projects Delivered", value: "12", icon: "Rocket" },
  { label: "Efficiency Improvement", value: "70%", icon: "TrendingUp" },
  { label: "Stakeholders Managed", value: "50+", icon: "Users" },
  { label: "AI Tools Used", value: "2", icon: "Bot" },
];

export const skills = [
  {
    category: "Project Management",
    icon: "ClipboardList",
    items: [
      "Agile & Scrum",
      "Sprint Planning & Execution",
      "Stakeholder Management",
      "Risk & Roadblock Resolution",
      "End-to-End Deployment (SIT, UAT, Go-Live)",
      "Cross-functional Team Leadership",
      "Business Requirements Analysis",
    ],
  },
  {
    category: "Technical Skills",
    icon: "Code2",
    items: [
      "SQL Server",
      "React + TypeScript",
      "Python (API Development)",
      "Power Apps",
      "SAP Business One (Service Layer API)",
      "Google Apps Script",
      "REST API Integration",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    items: [
      "GitHub",
      "Power BI",
      "Azure DevOps",
      "Google Workspace",
      "Microsoft 365",
      "Jira / Confluence",
      "Postman",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Locus Transport Management System",
    description:
      "Led cross-country collaboration with teams in India and Malaysia to deliver a full-featured TMS. Managed Agile sprints and hybrid Waterfall delivery, driving GPS API and Geofencing automation to streamline fleet operations.",
    tech: ["GPS API", "Geofencing", "Agile / Scrum", "SQL Server", "REST API"],
    achievements: [
      "Improved reporting and fleet tracking efficiency by 2x",
      "Reduced manual processes through GPS + Geofencing automation",
      "Successfully led SIT, UAT, and Go-Live across international teams",
    ],
    image: "/previews/locus-tms.png",
    preview: { label: "TMS Dashboard", color: "from-blue-600 to-cyan-500", icon: "Truck" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 2,
    name: "Google Apps Script Automation",
    description:
      "Solved large dataset transfer issues caused by complex formulas and IMPORTRANGE limitations. Built automated pipelines enabling real-time data synchronization across Google Workspace tools.",
    tech: ["Google Apps Script", "Google Sheets", "JavaScript", "Google Workspace"],
    achievements: [
      "Replaced brittle IMPORTRANGE dependencies with automated pipelines",
      "Enabled real-time data synchronization across business units",
      "Significantly reduced manual data consolidation effort",
    ],
    image: "/previews/google-automation.png",
    preview: { label: "Automation Pipeline", color: "from-green-600 to-emerald-400", icon: "GitBranch" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 3,
    name: "HR Management System",
    description:
      "Integrated third-party APIs using Python into an on-premise SQL Server backend. Built a React + TypeScript dashboard for workforce management covering licenses, document expirations, recruitment, and attrition metrics.",
    tech: ["Python", "SQL Server", "React", "TypeScript", "REST API"],
    achievements: [
      "Automated tracking of licenses, document expirations, and HR metrics",
      "Replaced manual HR processes with a unified real-time dashboard",
      "Significantly reduced HR processing time vs. spreadsheet-based tools",
    ],
    image: "/previews/hr-system.png",
    preview: { label: "HR Dashboard", color: "from-violet-600 to-purple-400", icon: "Users" },
    github: "https://github.com/domzxc",
    aiPowered: true,
  },
  {
    id: 4,
    name: "Enterprise Dashboard System",
    description:
      "Delivered real-time executive dashboards consolidating Operations, Sales, and Finance KPIs. Centralized data for daily monitoring and enabled data-driven decision-making for executive leadership.",
    tech: ["Power BI", "SQL Server", "REST API", "Google Apps Script"],
    achievements: [
      "Consolidated KPIs from multiple departments into a single pane of glass",
      "Enabled data-driven decisions for executive leadership",
      "Supported daily operational monitoring across business units",
    ],
    image: "/previews/dashboard.png",
    preview: { label: "Executive Dashboard", color: "from-orange-500 to-amber-400", icon: "BarChart3" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 5,
    name: "Warehouse Management System",
    description:
      "Built a full WMS integrated with SAP Business One via Service Layer API. Developed custom APIs for seamless data push/pull with SQL Server, improving inventory accuracy and operational efficiency.",
    tech: ["SAP Business One", "Service Layer API", "SQL Server", "Python", "React"],
    achievements: [
      "Reduced manual tracking by 40%",
      "Seamless SAP B1 integration via custom Service Layer APIs",
      "Improved inventory accuracy and warehouse operational efficiency",
    ],
    image: "/previews/warehouse.png",
    preview: { label: "Warehouse System", color: "from-sky-600 to-blue-400", icon: "Package" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 6,
    name: "SQL Mirroring System",
    description:
      "Developed a Python-based API to replicate SAP Business One data with full CRUD operations. Enabled internal system independence from third-party tools and supported a cost-reduction initiative by replacing an external TMS.",
    tech: ["Python", "SQL Server", "SAP Business One", "REST API"],
    achievements: [
      "Eliminated dependency on expensive third-party systems",
      "Full CRUD replication of SAP data via custom Python API",
      "Supported company-wide cost-reduction initiative",
    ],
    image: "/previews/sql-mirroring.png",
    preview: { label: "SQL Mirror API", color: "from-teal-600 to-cyan-400", icon: "Database" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 7,
    name: "SAP B1 Finance Enhancements",
    description:
      "Solved critical SAP Business One limitations including PO/SO price update constraints and Delivery Receipt bulk processing (400+ entries). Built custom FMS logic to auto-update expense fields and improve financial processing scalability.",
    tech: ["SAP Business One", "FMS", "SQL Server", "SAP B1 SDK"],
    achievements: [
      "Resolved 400-DR bulk processing limitation in SAP B1",
      "Automated PO/SO price updates via custom FMS logic",
      "Improved financial processing scalability for the finance team",
    ],
    image: "/previews/sap-finance.png",
    preview: { label: "SAP Finance Module", color: "from-rose-600 to-pink-400", icon: "DollarSign" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 8,
    name: "Maintenance Management App",
    description:
      "Created a real-time tracking application for truck maintenance and breakdown monitoring. Improved visibility on repair status and fleet availability, helping reduce downtime through better operational insights.",
    tech: ["React", "SQL Server", "REST API", "Power Apps"],
    achievements: [
      "Real-time fleet maintenance and breakdown tracking",
      "Improved visibility on repair status and fleet availability",
      "Reduced operational downtime through proactive monitoring",
    ],
    image: "/previews/maintenance.png",
    preview: { label: "Fleet Maintenance App", color: "from-yellow-600 to-orange-400", icon: "Wrench" },
    github: "https://github.com/domzxc",
    aiPowered: false,
  },
  {
    id: 9,
    name: "Freelance Systems — International Clients",
    description:
      "Delivered four business systems for clients based in Turks and Caicos Islands: Car Sales & Loan Management, Car Rental, Laundry Management, and an Invoicing & Business Operations Website.",
    tech: ["React", "SQL Server", "Python", "REST API", "JavaScript"],
    achievements: [
      "Delivered 4 production systems for international clients",
      "Covered full lifecycle: requirements to development to deployment",
      "Systems span car sales, rentals, laundry, and invoicing operations",
    ],
    image: "/previews/freelance.png",
    preview: { label: "Freelance Projects", color: "from-indigo-600 to-violet-400", icon: "Globe" },
    github: "https://github.com/domzxc",
    aiPowered: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Project Manager",
    company: "Great Sierra Development Corp.",
    period: "2022 – Present",
    location: "Philippines",
    responsibilities: [
      "Led delivery of enterprise systems across logistics, HR, finance, and warehouse domains",
      "Managed cross-country teams with stakeholders in India, Malaysia, and the Philippines",
      "Drove end-to-end lifecycles: planning, development, SIT, UAT, and Go-Live",
      "Integrated SAP Business One via Service Layer API for warehouse and finance modules",
      "Introduced AI-assisted development practices to accelerate sprint delivery",
    ],
    impact: "Delivered 8+ enterprise system rollouts; 40% reduction in manual warehouse operations",
  },
  {
    id: 2,
    role: "Systems Analyst / Developer",
    company: "Great Sierra Development Corp.",
    period: "2022 – Present",
    location: "Philippines",
    responsibilities: [
      "Gathered and documented business requirements for logistics and operations systems",
      "Built Python APIs integrating third-party services with on-premise SQL Server",
      "Developed React + TypeScript dashboards for HR and operations management",
      "Designed and maintained SQL Server databases and ETL pipelines",
      "Coordinated UAT sessions and end-user training for system rollouts",
    ],
    impact: "Delivered 5 internal systems; reduced HR processing time significantly through automation",
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "International Clients — Turks and Caicos Islands",
    period: "2021 – Present",
    location: "Remote",
    responsibilities: [
      "Delivered end-to-end business systems for international clients",
      "Built Car Sales & Loan Management, Car Rental, and Laundry Management systems",
      "Developed invoicing and business operations web applications",
      "Managed full project lifecycle independently: scope, build, and deployment",
    ],
    impact: "4 production systems delivered for overseas clients across diverse business domains",
  },
];

export const aiWork = {
  headline: "AI-Assisted Development Workflow",
  summary:
    "AI is a core part of my development process — accelerating delivery, improving code quality, and enabling faster prototyping across real production systems.",
  pillars: [
    {
      title: "Rapid Prototyping",
      icon: "Zap",
      description:
        "Use AI tools to scaffold features, generate boilerplate, and turn business requirements into working prototypes in a fraction of the time.",
      example: "HR System dashboard components scaffolded in hours using AI-assisted code generation.",
    },
    {
      title: "Code Generation",
      icon: "MessageSquareCode",
      description:
        "Generate API integrations, SQL queries, and React components using AI, then review and refine for production quality.",
      example: "Python API endpoints and SQL mirroring logic generated and refined with AI assistance.",
    },
    {
      title: "Workflow Automation",
      icon: "GitBranch",
      description:
        "Automate repetitive development tasks including test generation, documentation, and code review using AI tools.",
      example: "Google Apps Script pipelines designed with AI-assisted logic optimization.",
    },
    {
      title: "Production Integration",
      icon: "Database",
      description:
        "AI is not just for prototyping — integrated into real production workflows to improve accuracy and reduce development cycles.",
      example: "AI-assisted development reduced delivery time on HR system and international client projects.",
    },
  ],
  tools: ["GitHub Copilot", "ChatGPT"],
};
