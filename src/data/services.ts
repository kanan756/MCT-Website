export interface ServiceItem {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  badge?: string;
  highlights?: string[];
  technologies?: string[];
}

export interface ServiceSubgroup {
  id: string;
  name: string;
  description?: string;
  items: ServiceItem[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  badge: string;
  tagline: string;
  summary: string;
  accentColor: string; // Tailwind accent border/text
  bgGradient: string;
  iconName: string;
  subgroups?: ServiceSubgroup[];
  items?: ServiceItem[]; // For categories without subgroups (e.g. E-Invoicing, WEB)
  additionalItems?: ServiceItem[]; // Top-level services inside the category (e.g. Power Platform under Dynamics 365)
}

export const servicesData: ServiceCategory[] = [
  {
    id: "dynamics-365",
    number: "01",
    title: "Dynamics 365",
    slug: "dynamics-365",
    badge: "Enterprise Ecosystem",
    tagline: "Empowering Businesses with Intelligent Solutions",
    summary:
      "Microsoft Dynamics 365 is a powerful suite of intelligent business applications that streamline operations, enhance customer engagement, and drive digital transformation. At MCT IT Solutions, we provide end-to-end implementation, customization, and support for Dynamics 365 covering CRM, ERP, Warehouse & Logistics, HR, Power Pages, Power Apps, and Power Automate to help businesses optimize processes and achieve sustainable growth.",
    accentColor: "border-[#3482b9] text-[#3482b9]",
    bgGradient: "from-blue-600/10 via-[#3482b9]/5 to-transparent",
    iconName: "Layers",
    subgroups: [
      {
        id: "crm",
        name: "CRM (Customer Relationship Management)",
        description: "Orchestrate every customer touchpoint with hyper-personalized journeys, modern sales automation, and omni-channel customer service excellence.",
        items: [
          {
            id: "customer-engagement",
            name: "Microsoft Dynamics 365 Customer Engagement",
            tagline: "Enhance customer relationships, drive sales, and provide superior customer service",
            description: "A good CRM is a prerequisite for any business as customers nowadays are more enlightened and demanding. Product-centric approaches have now become obsolete. MCT IT Solutions provides comprehensive CRM services across 3 critical stages: Pre-sales, Sale of the product, and After-sales services such as warranty management and AMC. Our web-based and mobile-first CRM solutions help your field, sales, and service agents access customer information, photos, videos, and voice notes on the fly with automated plugins, workflows, and instant notifications.",
            badge: "Unified CRM",
            highlights: [
              "3-Stage Lifecycle: Pre-sales, Product Sale, and After-sales (Warranty & AMC)",
              "Go Mobile with CRM: Field/sales/service agents add photos, voice notes, and updates on the fly",
              "Alliance between employees and clients creating a healthy, transparent work environment",
              "Automate plugins, business workflows, notifications, and real-time transaction records",
              "All Enterprise Solutions in One: Integrated chat with office workers and social networks",
            ],
            technologies: ["Dataverse", "Power Platform", "Dynamics 365 CE", "Azure Cloud"]
          },
          {
            id: "sales",
            name: "Microsoft Dynamics 365 Sales",
            tagline: "Transform Your Sales Process with Intelligent Automation",
            description: "In today’s competitive market, businesses need more than just a sales team—they need a powerful system to streamline processes, enhance customer relationships, and drive revenue growth. Manual sales tracking, disconnected communication, and inconsistent follow-ups lead to lost opportunities. Microsoft Dynamics 365 Sales seamlessly connects leads, opportunities, accounts, and customer interactions in one place, automating follow-ups, providing real-time sales forecasts, and empowering teams to close deals faster.",
            badge: "Sales Automation",
            highlights: [
              "Automated Sales Pipeline: Reduce manual data entry and track progress with AI-powered automation",
              "Lead & Opportunity Management: Identify high-potential leads, nurture effectively, and boost conversion",
              "Real-Time Insights & Reports: Data-driven decision making with real-time performance dashboards",
              "Automated follow-ups and reminders to engage customers at the exact right moment",
              "Seamless Integration: Connect sales with marketing, customer service, and ERP systems",
              "Predictable revenue modeling and pipeline optimization for SMBs and enterprises alike",
            ],
            technologies: ["Sales Copilot", "Dynamics 365 Sales", "Office 365", "Power BI"]
          },
          {
            id: "customer-service",
            name: "Microsoft Dynamics 365 Customer Service",
            tagline: "Faster Case Resolution, AI-Driven Insights, and Personalized Support",
            description: "Deliver exceptional customer care with Microsoft Dynamics 365 Customer Service. Enable your support teams to resolve cases faster through unified agent workspaces, AI-driven insights, multi-channel case intake, and personalized care journeys that enhance customer satisfaction and build lasting brand loyalty.",
            badge: "Omnichannel Support",
            highlights: [
              "Unified agent desktops with multi-channel support (voice, email, chat, portal)",
              "AI-driven case resolution insights and automated knowledge base recommendations",
              "Intelligent skill-based case assignment and strict SLA escalation matrices",
              "Real-time customer feedback capture, sentiment analysis, and satisfaction tracking",
            ],
            technologies: ["Omnichannel", "Dynamics 365 Customer Service", "Knowledge Base"]
          },
          {
            id: "customer-insights",
            name: "Microsoft Dynamics 365 Customer Insights",
            tagline: "360-Degree Customer View to Drive Personalized Experiences and Smarter Decisions",
            description: "Enhance your customer engagement strategy with Microsoft Dynamics 365 Customer Insights, an industry-leading AI-powered Customer Data Platform (CDP). Unify transactional, behavioral, and observational data into a single source of truth, unlocking a complete 360-degree view of your customers to power tailored marketing journeys and predictive retention strategies.",
            badge: "Customer Data Platform",
            highlights: [
              "Complete 360-degree holistic customer profiles unifying all touchpoints",
              "Deterministic and probabilistic identity resolution and deduplication",
              "AI-driven customer churn prediction, lifetime value (LTV), and intent scoring",
              "Real-time event triggering across multi-channel personalized engagement journeys",
            ],
            technologies: ["Azure Synapse", "Customer Insights", "AI Models", "Dataverse"]
          },
          {
            id: "field-service",
            name: "Microsoft Dynamics 365 Field Service",
            tagline: "Proactive Maintenance, Intelligent Scheduling & Real-Time Technician Support",
            description: "Optimize service operations with Microsoft Dynamics 365 Field Service, enabling proactive maintenance, intelligent resource scheduling, and real-time technician support. Empower your field workforce to resolve issues on the first visit, boost operational efficiency, and significantly elevate customer satisfaction.",
            badge: "Field Operations",
            highlights: [
              "Intelligent automated schedule board and route optimization for field technicians",
              "Mobile technician app with offline work orders, voice notes, and photo uploads",
              "Connected Field Service with IoT telemetry for proactive remote diagnostics",
              "Complete spare parts inventory tracking, warranty validation, and customer sign-off",
            ],
            technologies: ["IoT Central", "Field Service Mobile", "Azure IoT", "Dynamics 365"]
          },
        ]
      },
      {
        id: "erp",
        name: "ERP (Enterprise Resource Planning)",
        description: "Transform financials, manufacturing, distribution, and cross-border operations with robust cloud ERP architectures.",
        items: [
          {
            id: "business-central",
            name: "Microsoft Dynamics 365 Business Central",
            tagline: "A Unified Solution for Seamless Operations for Small and Medium Businesses",
            description: "In today’s fast-paced business world, digital transformation is a necessity. While large enterprises have massive budgets, small and medium companies often struggle managing multiple software systems and fragmented workflows where information is lost. Microsoft Dynamics 365 Business Central connects all your business processes—across finance, manufacturing, retail, supply chain, warehousing, and inventory management. With centralized visibility and predictive insights, your team can collaborate effortlessly, respond quickly to market changes, and level the playing field against larger competitors.",
            badge: "Unified Cloud ERP",
            highlights: [
              "Streamlined Operations: Unify your entire operation under one software system without fragmented tools",
              "Real-Time Visibility: Gain complete insight into supply chain, inventory, and finances from anywhere",
              "Cost Control & Efficiency: Automate manual tasks, eliminate errors, and optimize purchasing and warehousing",
              "Predictive Analytics: AI-driven demand forecasting and actionable trend insights",
              "Scalable Growth: Grows seamlessly as you add departments, products, or new geographic markets",
              "Seamless integration with Microsoft 365 (Excel, Outlook, Teams) and automated general ledger",
            ],
            technologies: ["AL Language", "Business Central Cloud", "Azure SQL", "Power BI"]
          },
          {
            id: "finance-operations",
            name: "Finance & Operations",
            tagline: "Global Multi-Company, Multi-Currency Enterprise ERP",
            description: "Scalable enterprise ERP engineered for large organizations to automate complex global financials, manage multi-entity consolidations, and run high-volume manufacturing and operations.",
            badge: "Enterprise F&O",
            highlights: [
              "Multi-country tax compliance, consolidations & financial reporting",
              "Advanced cost accounting, fixed assets & project accounting",
              "High-throughput enterprise workflow orchestration",
            ],
            technologies: ["X++", "Dynamics 365 F&O", "Azure Data Lake"]
          },
        ]
      },
      {
        id: "warehouse-logistics",
        name: "Warehouse & Logistics",
        description: "Optimize complex supply chains, multi-site fulfillment, inventory velocity, and enterprise capital projects.",
        items: [
          {
            id: "supply-chain-management",
            name: "Supply Chain Management",
            tagline: "Resilient Procurement, Warehouse Distribution & Logistics",
            description: "Build an agile, connected supply chain with end-to-end visibility across procurement, wave picking, bin management, freight reconciliation, and real-time shipment logistics.",
            badge: "Supply Chain",
            highlights: [
              "Advanced warehouse bin management & barcode scanning",
              "Demand forecasting, supplier scoring & vendor portals",
              "Real-time shipment tracking and logistics coordination",
            ],
            technologies: ["SCM", "Warehouse App", "IoT Intelligence"]
          },
          {
            id: "project-management",
            name: "Project Management",
            tagline: "Resource Scheduling, Time Tracking & Milestone Financials",
            description: "Manage project deliverables, team resource utilization, timesheet submissions, milestone billing, and profitability analytics within an integrated project operations environment.",
            badge: "Project Operations",
            highlights: [
              "Resource scheduling, capacity planning & utilization rates",
              "Integrated time and expense capture with approval chains",
              "Work breakdown structure (WBS) and milestone budget tracking",
            ],
            technologies: ["Project Operations", "Gantt Planning", "Cost Tracking"]
          },
        ]
      },
      {
        id: "hr",
        name: "HR (Human Resources)",
        description: "Streamline human capital management, employee lifecycle tracking, leave management, and localized payroll engines.",
        items: [
          {
            id: "dynamics-hr",
            name: "Dynamics HR",
            tagline: "Empowering Employee Self-Service & Talent Operations",
            description: "Modernize workforce experiences with self-service employee portals, automated onboarding workflows, performance appraisals, skills matrices, and leave entitlement management.",
            badge: "Human Capital",
            highlights: [
              "Employee & manager self-service leave and benefit portals",
              "Structured onboarding, credential tracking & exit workflows",
              "Comprehensive compensation modeling and performance management",
            ],
            technologies: ["Dynamics HR", "Dataverse", "Power BI"]
          },
          {
            id: "payroll",
            name: "Payroll",
            tagline: "Automated Tax Compliant Multi-Country Payroll Processing",
            description: "Ensure error-free payroll execution with automated salary calculation engines, localized tax deductions, provident funds, overtime rules, and seamless general ledger journal posting.",
            badge: "Payroll Automation",
            highlights: [
              "Automated gross-to-net salary, incentive & bonus computations",
              "Regulatory tax withholding, statutory filings & pay slips",
              "Direct ERP general ledger integration with journal entries",
            ],
            technologies: ["Payroll Engine", "Statutory Reports", "Direct Deposit"]
          },
        ]
      },
    ],
    additionalItems: [
      {
        id: "power-pages",
        name: "Power Pages",
        tagline: "Secure, Low-Code Enterprise Web Portals",
        description: "Build responsive, secure, data-connected external web portals that allow customers, vendors, and partners to securely interact with your core Dataverse and Dynamics 365 data.",
        badge: "External Portals",
        highlights: [
          "Secure customer and vendor self-service document portals",
          "Role-based access control and commercial identity authentication",
          "Direct bidirectional integration with Dynamics 365 Dataverse",
        ],
        technologies: ["Liquid", "Dataverse", "Azure AD B2C"]
      },
      {
        id: "power-apps",
        name: "Power Apps",
        tagline: "Rapid Custom Business Application Development",
        description: "Accelerate digital transformation with customized canvas and model-driven applications that eliminate manual paper processes and connect disparate business systems without extensive code.",
        badge: "Custom Apps",
        highlights: [
          "Model-driven and canvas mobile-responsive employee apps",
          "Pre-built connectors to 1,000+ cloud and on-premises data sources",
          "Native offline capabilities with background data synchronization",
        ],
        technologies: ["Power Fx", "Model-Driven Apps", "Custom Connectors"]
      },
      {
        id: "power-automate",
        name: "Power Automate",
        tagline: "Intelligent Cloud Workflows & Robotic Process Automation (RPA)",
        description: "Automate repetitive cross-system workflows with cloud flows, desktop Robotic Process Automation (RPA), approval routing, and AI document processing to eliminate manual operational friction.",
        badge: "Process Automation",
        highlights: [
          "Multi-stage automated approval hierarchies in Outlook & Teams",
          "Desktop Robotic Process Automation (RPA) for legacy system data entry",
          "AI Builder integration for automated receipt & invoice data extraction",
        ],
        technologies: ["Cloud Flows", "Desktop RPA", "AI Builder"]
      },
    ]
  },
  {
    id: "e-invoicing",
    number: "02",
    title: "E-Invoicing",
    slug: "e-invoicing",
    badge: "Government Tax Compliance",
    tagline: "Seamless Regulatory & E-Invoicing Gateway Integrations",
    summary:
      "A dedicated top-level capability engineered to integrate ERP systems with government tax portals and e-invoicing networks. From the India GST e-invoicing and e-way bill portal to the UAE Peppol e-invoicing mandate.",
    accentColor: "border-[#e74c3c] text-[#e74c3c]",
    bgGradient: "from-red-600/10 via-[#e74c3c]/5 to-transparent",
    iconName: "FileCheck",
    items: [
      {
        id: "india-e-invoicing",
        name: "India E-Invoicing Integration",
        tagline: "Direct NIC / IRP API Integration for GST Invoices, Credit Notes & E-Way Bills",
        description: "Connect Microsoft Dynamics 365 Business Central, F&O, and legacy ERP systems directly with authorized Invoice Registration Portals (IRP) in India. Automatically generate IRN, signed QR codes, and E-Way bills directly from posted sales documents without external spreadsheets or manual portal uploads.",
        badge: "GST / NIC Portal",
        highlights: [
          "Real-time IRN (Invoice Reference Number) generation & validation",
          "Automated digital signature & printable B2B QR code embedding",
          "Integrated E-Way Bill generation with vehicle number tracking",
          "Automated cancellation & credit note reconciliation workflows",
          "Secure audit trail, API payload archiving & error logging",
        ],
        technologies: ["IRP REST APIs", "GSTN", "Business Central", "ERP Connector"]
      },
      {
        id: "uae-e-invoicing",
        name: "UAE E-Invoicing Integration",
        tagline: "FTA Mandate & Peppol Network Integration for Microsoft Dynamics 365",
        description: "Comprehensive extension for Microsoft Dynamics 365 Business Central engineered for the UAE Federal Tax Authority (FTA) electronic invoicing mandate. Connects Business Central with accredited e-invoicing service providers and the Peppol network, supporting seller/buyer master records, pre-submission schema validations, domestic AED invoice generation, and real-time delivery status tracking.",
        badge: "UAE FTA & Peppol",
        highlights: [
          "Seller entity & buyer Peppol participant identifier management",
          "Pre-submission field formatting, calculations & onboarding checks",
          "Two-stage API processing: Save draft and request generation",
          "Peppol delivery tracking & Tax Authority message acknowledgement",
          "Full transaction payload history, UUIDs, timestamps & reconciliation",
        ],
        technologies: ["Peppol Network", "FTA Gateway", "Business Central API", "JSON/XML"]
      },
    ]
  },
  {
    id: "web",
    number: "03",
    title: "WEB",
    slug: "web",
    badge: "Modern Full-Stack",
    tagline: "High-Performance Cloud & Web Application Engineering",
    summary:
      "Empower your business with cutting-edge, transaction-centric web and mobile solutions. Our expertise ensures seamless access to web portals and services, driving efficiency and engagement. Stay ahead in the fast-paced digital world with web technologies tailored for optimal performance and scalability.",
    accentColor: "border-[#22c55e] text-[#22c55e]",
    bgGradient: "from-emerald-600/10 via-emerald-500/5 to-transparent",
    iconName: "Globe",
    items: [
      {
        id: "nodejs",
        name: "Node.js",
        tagline: "Scalable Event-Driven Microservices, APIs & Real-Time Backends",
        description: "Architecting high-throughput backend services, secure REST/GraphQL APIs, and event-driven architectures using Node.js and TypeScript. We design robust integrations between enterprise systems, databases, cloud storage, and frontends.",
        badge: "Backend & Microservices",
        highlights: [
          "High-concurrency, asynchronous event-driven backend microservices",
          "Secure RESTful & GraphQL API gateway design with JWT / OAuth2",
          "Real-time WebSocket data broadcasting for dashboards and telemetry",
          "Database modeling and ORM integration (PostgreSQL, MongoDB, Redis)",
        ],
        technologies: ["Node.js", "Express", "NestJS", "TypeScript", "Docker"]
      },
      {
        id: "reactjs",
        name: "React.js",
        tagline: "Interactive, Responsive & High-Performance Single-Page Web Applications",
        description: "Crafting beautiful, accessible, and responsive user interfaces with modern React and Next.js. We build performant web portals, data-rich analytical dashboards, and customer-facing web apps that delight users and drive conversion.",
        badge: "Frontend & Web Apps",
        highlights: [
          "Component-driven design systems with Tailwind CSS & Vanilla CSS",
          "Client-side & Server-Side Rendering (SSR) for optimal performance & SEO",
          "State management with Redux Toolkit, Zustand, and React Query",
          "Enterprise data visualization, interactive charting & tabular grids",
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
      },
    ]
  },
  {
    id: "mobile",
    number: "04",
    title: "Mobile",
    slug: "mobile",
    badge: "Cross-Platform & Native",
    tagline: "Enterprise Mobile Experiences for Android & iOS",
    summary:
      "Accelerate your business with high-performance mobile solutions for Android and iOS. We create seamless, user-friendly apps that enhance engagement, optimize performance, and ensure a top-notch mobile experience across all devices.",
    accentColor: "border-[#8b5cf6] text-[#8b5cf6]",
    bgGradient: "from-purple-600/10 via-violet-500/5 to-transparent",
    iconName: "Smartphone",
    subgroups: [
      {
        id: "android",
        name: "Android",
        description: "Robust cross-platform Android mobile applications engineered for reliability across millions of device form factors.",
        items: [
          {
            id: "react-native-android",
            name: "React Native",
            tagline: "Cross-Platform Android Apps with Near-Native Performance",
            description: "Harness the power of React Native to build fluid Android mobile applications sharing a single codebase with iOS. Benefit from rapid feature releases, smooth 60fps animations, native camera/location access, and offline data persistence.",
            badge: "Android • Cross-Platform",
            highlights: [
              "Single codebase efficiency with native Android bridge modules",
              "Offline-first SQLite/WatermelonDB storage with sync queues",
              "Push notifications, geolocation tracking & barcode camera scanners",
              "Google Play Store publishing, compliance & performance profiling",
            ],
            technologies: ["React Native", "Android SDK", "TypeScript", "Hermes Engine"]
          }
        ]
      },
      {
        id: "ios",
        name: "iOS",
        description: "Native iOS applications engineered exclusively for Apple devices utilizing Apple's modern Swift programming language.",
        items: [
          {
            id: "swift-ios",
            name: "Swift",
            tagline: "High-Performance Native iOS & iPadOS Development",
            description: "Build clean, pixel-perfect, native Apple applications with Swift and SwiftUI. Designed for enterprise clients requiring peak device performance, Apple hardware security features, biometric FaceID authentication, and seamless iOS system integrations.",
            badge: "iOS • Native Swift",
            highlights: [
              "Native SwiftUI & Combine reactive data-driven architecture",
              "Apple FaceID / TouchID biometric security & Keychain encryption",
              "Optimized memory management and fluid 120Hz ProMotion UI rendering",
              "Full Apple App Store deployment, TestFlight distribution & APNs",
            ],
            technologies: ["Swift", "SwiftUI", "Xcode", "CoreData", "Combine"]
          }
        ]
      }
    ]
  }
];
