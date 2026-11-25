export interface IndustryBottleneck {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  features: string[];
}

export interface IndustryCaseStudyRef {
  title: string;
  slug: string;
  clientContext: string;
  outcome: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  iconName: "Factory" | "Landmark" | "Building" | "Truck" | "HeartPulse";
  bottlenecks: IndustryBottleneck[];
  solutions: IndustrySolution[];
  technologies: {
    category: string;
    items: string[];
  }[];
  caseStudy: IndustryCaseStudyRef;
  measurableBenefits: string[];
}

export const INDUSTRIES_DATA: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Synchronize Shop-Floor Operations, Supply Chain & Financials",
    heroDescription:
      "Modern manufacturing operations demand real-time visibility from raw material intake to post-sale equipment servicing. MCT delivers Microsoft Dynamics 365 Supply Chain & Business Central architectures that eliminate production bottlenecks, reduce scrap rates, and empower predictive maintenance.",
    iconName: "Factory",
    bottlenecks: [
      {
        title: "Disconnected Shop-Floor & ERP Silos",
        description:
          "Production scheduling operates on legacy spreadsheets while inventory and finance run on separate systems, causing delays and inaccurate delivery forecasts."
      },
      {
        title: "Unpredictable Material Shortages & Scrap Rates",
        description:
          "Lack of dynamic multi-level Bill of Materials (BOM) tracking leads to inventory stockouts, sudden downtime, and untracked material wastage."
      },
      {
        title: "Opaque Quality Control & Audit Tracing",
        description:
          "Manual batch logging creates compliance exposure and slows down non-conformance root-cause investigations during quality audits."
      }
    ],
    solutions: [
      {
        title: "Dynamics 365 Supply Chain & MRP Automation",
        description:
          "Automated Material Requirements Planning (MRP) aligned with real-time shop-floor capacity planning and multi-plant demand forecasting.",
        features: [
          "Dynamic multi-level BOM and scrap rate computation",
          "Automated replenishment triggers based on lead-time buffers",
          "Production order routing with machine and labor capacity leveling"
        ]
      },
      {
        title: "AI-Powered Predictive Maintenance & IoT Insights",
        description:
          "Telemetry integration connecting production assets to Azure IoT and Dynamics 365 Field Service for condition-based maintenance before breakdowns occur.",
        features: [
          "Real-time machine performance alerts and telemetry ingestion",
          "Automated dispatching of preventive maintenance work orders",
          "Spare parts availability checks integrated directly into work schedules"
        ]
      }
    ],
    technologies: [
      {
        category: "Enterprise Core",
        items: ["Microsoft Dynamics 365 Supply Chain", "Business Central", "Dynamics 365 Finance"]
      },
      {
        category: "Automation & Analytics",
        items: ["Power Automate", "Power BI Manufacturing Dashboards", "Azure IoT Hub"]
      },
      {
        category: "Edge & Mobile",
        items: ["Dynamics 365 Warehouse Mobile App", "Barcode & RFID Scanners"]
      }
    ],
    caseStudy: {
      title: "UAE E-Invoicing & Supply Chain Integration for Enterprise Operations",
      slug: "uae-e-invoicing-integration-dynamics-365-business-central",
      clientContext: "Leading regional distribution and assembly enterprise in the UAE managing multi-warehouse supply channels.",
      outcome: "Eliminated manual invoice reconciliation, guaranteed 100% statutory e-invoicing compliance, and reduced billing cycle times by 40%."
    },
    measurableBenefits: [
      "Up to 30% reduction in production cycle lead times",
      "99.4% inventory accuracy across distributed warehouse locations",
      "45% faster resolution of supplier non-conformance queries",
      "Immediate statutory compliance with automated electronic tax reporting"
    ]
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    tagline: "Compliant Client Onboarding, Risk Governance & Audit Automation",
    heroDescription:
      "In highly regulated financial ecosystems, institutions must balance hyper-personalized customer advisory with rigorous AML/KYC governance. MCT implements hardened Microsoft Dynamics 365 architectures that automate compliance validation while elevating client relationship lifecycles.",
    iconName: "Landmark",
    bottlenecks: [
      {
        title: "High-Friction Client Onboarding & KYC Cycles",
        description:
          "Disjointed identity verification, document requests, and manual AML checks delay account activations and lead to customer attrition."
      },
      {
        title: "Fragmented Client Financial Profiles",
        description:
          "Advisors spend significant time aggregating client portfolios across disparate banking, lending, and insurance legacy software."
      },
      {
        title: "Strict Statutory Reporting & Audit Compliance",
        description:
          "Evolving mandates such as Peppol e-invoicing, regional tax reporting, and audit trail requirements create severe operational overhead."
      }
    ],
    solutions: [
      {
        title: "Dynamics 365 Client 360 & Advisory Workspaces",
        description:
          "Unified relationship management with consolidated financial holdings, interaction history, and automated wealth management workflows.",
        features: [
          "Comprehensive 360-degree client financial profiles and household views",
          "Automated suitability scoring and compliant meeting audit logging",
          "Secure client collaboration portals built on Microsoft Power Pages"
        ]
      },
      {
        title: "Automated Regulatory Compliance & Statutory Invoicing",
        description:
          "End-to-end integration with regional e-invoicing gateways, automated tax calculations, and real-time validation checks.",
        features: [
          "Pre-submission compliance validation for commercial invoices",
          "Automated audit trails with immutable timestamp logging",
          "Peppol and government tax portal synchronization"
        ]
      }
    ],
    technologies: [
      {
        category: "Enterprise Core",
        items: ["Dynamics 365 Customer Service", "Dynamics 365 Sales", "Business Central"]
      },
      {
        category: "Compliance & Integrations",
        items: ["UAE E-Invoicing Engine", "Peppol Access Point APIs", "Tax Authority Gateways"]
      },
      {
        category: "Security & Workflow",
        items: ["Microsoft Entra ID Role-Based Access", "Power Automate Verification Pipelines"]
      }
    ],
    caseStudy: {
      title: "UAE E-Invoicing Integration for Microsoft Dynamics 365 Business Central",
      slug: "uae-e-invoicing-integration-dynamics-365-business-central",
      clientContext: "Commercial enterprises and corporate entities navigating statutory tax transparency mandates.",
      outcome: "100% audit-proof transaction validation with automated PEPPOL status acknowledgements and error reconciliation."
    },
    measurableBenefits: [
      "70% faster corporate client onboarding turnaround time",
      "Zero manual data re-entry across statutory tax submissions",
      "Complete role-based security meeting international financial standards",
      "Real-time audit traceability for all customer financial transactions"
    ]
  },
  {
    slug: "public-sector",
    name: "Public Sector & Government",
    tagline: "Citizen Services, Program Accountability & Inter-Agency Coordination",
    heroDescription:
      "Public sector institutions require transparent, accessible, and highly secure digital platforms to serve citizens efficiently. MCT crafts citizen portals, case management workflows, and inter-agency data fabrics powered by Microsoft Power Platform and Dynamics 365.",
    iconName: "Building",
    bottlenecks: [
      {
        title: "Manual, Paper-Based Citizen Application Processes",
        description:
          "In-person queues and fragmented web forms create lengthy resolution cycles for permits, licenses, and public welfare requests."
      },
      {
        title: "Inter-Departmental Data Silos & Redundant Verification",
        description:
          "Agencies fail to share live status data, forcing citizens and businesses to submit duplicate documentation across ministries."
      },
      {
        title: "Grant Disbursement & Public Fund Transparency",
        description:
          "Tracking program fund utilization across multiple contractors and NGOs lacks real-time auditable verification."
      }
    ],
    solutions: [
      {
        title: "Omnichannel Citizen Engagement & Case Management",
        description:
          "Accessible, multilingual self-service portals with automated routing to specialized department officers based on SLA criteria.",
        features: [
          "Self-service citizen portals for permits, licenses, and requests",
          "Automated business process flows with SLA escalation timers",
          "Instant status tracking via automated SMS and email notifications"
        ]
      },
      {
        title: "Grant, Project & Expenditure Governance",
        description:
          "Centralized program budgeting, milestone verification, and multi-tier approval hierarchies with real-time audit dashboards.",
        features: [
          "Multi-level approval workflows with digital signature validation",
          "Automated disbursement tracking against verified project milestones",
          "Public transparency reporting powered by Microsoft Power BI"
        ]
      }
    ],
    technologies: [
      {
        category: "Public Portals",
        items: ["Microsoft Power Pages", "Power Virtual Agents / Copilot Studio"]
      },
      {
        category: "Case Management",
        items: ["Dynamics 365 Customer Service", "Dynamics 365 Case Lifecycle Management"]
      },
      {
        category: "Governance & Reporting",
        items: ["Power BI Executive Dashboards", "Power Automate Government Cloud"]
      }
    ],
    caseStudy: {
      title: "Pet Import Service and Delivery Management",
      slug: "pet-import-service-and-delivery-management",
      clientContext: "Cross-border regulated service coordination involving customs permits, documentation approvals, and operational inspection.",
      outcome: "Cut end-to-end permit processing time by 55% with automated status notifications and driver field coordination."
    },
    measurableBenefits: [
      "50% reduction in citizen inquiry and permit turnaround time",
      "100% auditable documentation tracking across all approval stages",
      "Seamless mobile field agent connectivity with instant sync",
      "Significant reduction in physical counter visits through digital self-service"
    ]
  },
  {
    slug: "retail-logistics",
    name: "Retail & Logistics",
    tagline: "Omnichannel Order Orchestration, Fleet Telemetry & Warehouse Flow",
    heroDescription:
      "Retailers and logistics operators face unforgiving expectations for rapid fulfillment, accurate stock levels, and transparent delivery milestones. MCT integrates Dynamics 365 ERP, CRM, and driver mobile solutions to build unified, agile supply chain ecosystems.",
    iconName: "Truck",
    bottlenecks: [
      {
        title: "Disjointed Online and In-Store Inventory",
        description:
          "Divergence between POS records and warehouse inventory causes stockouts, delayed fulfillment, and negative customer experiences."
      },
      {
        title: "Field Driver Disconnect & Lack of Delivery Telemetry",
        description:
          "Dispatch teams lack real-time visibility into driver routes, pickup statuses, and digital proof-of-delivery receipts."
      },
      {
        title: "Inefficient Customer Communication & Post-Purchase Tracking",
        description:
          "Customers flood support channels seeking order status updates due to lack of automated milestone messaging."
      }
    ],
    solutions: [
      {
        title: "Connected Field Service & Driver Mobile Apps",
        description:
          "Custom mobile solutions syncing real-time driver actions with Dynamics 365 via high-speed Web APIs.",
        features: [
          "Driver mobile apps for barcode scanning, pickup, and drop-off confirmation",
          "Automated geolocation updates and digital signature capture",
          "Instant synchronization with backend order and service cases"
        ]
      },
      {
        title: "Unified Omnichannel ERP & Inventory Sync",
        description:
          "Single-source-of-truth inventory management bridging e-commerce platforms, retail points-of-sale, and central distribution hubs.",
        features: [
          "Real-time bin-level warehouse inventory tracking and reservations",
          "Automated customer notifications across email and messaging channels",
          "Streamlined return merchandise authorization (RMA) workflows"
        ]
      }
    ],
    technologies: [
      {
        category: "Core Applications",
        items: ["Dynamics 365 Business Central", "Dynamics 365 Customer Service / Field Service"]
      },
      {
        category: "Mobile & Integration",
        items: ["React Native Driver Mobile Apps", "Dynamics 365 Web API", "Azure Service Bus"]
      },
      {
        category: "Customer Engagement",
        items: ["Automated Email Notification Engine", "Customer Status Tracking Portals"]
      }
    ],
    caseStudy: {
      title: "Pet Import Service and Delivery Management",
      slug: "pet-import-service-and-delivery-management",
      clientContext: "UAE Pet Logistics & Relocation Services requiring synchronized airport pickup, customs clearance, and residential delivery.",
      outcome: "Connected field drivers directly to CRM, enabled automated customer status alerts, and achieved 100% chain-of-custody tracking."
    },
    measurableBenefits: [
      "35% improvement in dispatch turnaround and delivery fulfillment speed",
      "100% real-time delivery milestone visibility for customers",
      "Near-zero inventory and parcel tracking discrepancies",
      "Seamless integration between field operations and back-office customer support"
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "HIPAA-Aware Patient Portals, Asset Tracking & Care Coordination",
    heroDescription:
      "Healthcare institutions require modern digital systems that balance clinical excellence, patient data privacy, and efficient resource allocation. MCT designs secure Microsoft cloud solutions for care coordination, medical equipment tracking, and automated patient communication.",
    iconName: "HeartPulse",
    bottlenecks: [
      {
        title: "Fragmented Patient Communication & High No-Show Rates",
        description:
          "Disjointed scheduling systems and manual outreach cause high appointment no-shows and inconsistent post-discharge follow-ups."
      },
      {
        title: "Opaque Medical Asset & Equipment Lifecycle Tracking",
        description:
          "Critical medical devices and specialized diagnostic tools lack preventative calibration tracking and location visibility."
      },
      {
        title: "Strict Regulatory Privacy & Multi-Provider Data Silos",
        description:
          "Ensuring stringent compliance (HIPAA, local health authorities) while facilitating secure inter-departmental collaboration remains a challenge."
      }
    ],
    solutions: [
      {
        title: "Patient Engagement & Care Coordination Portals",
        description:
          "Secure Power Pages portals enabling patient appointment booking, tele-consultation check-ins, and automated clinical notifications.",
        features: [
          "Role-restricted self-service patient appointment & record access",
          "Automated SMS/email appointment reminders and prep instructions",
          "Post-treatment feedback collection with automated clinician escalation"
        ]
      },
      {
        title: "Medical Asset Management & Compliance Automation",
        description:
          "Centralized tracking of hospital equipment, maintenance schedules, warranty lifecycles, and sterilization compliance logs.",
        features: [
          "Preventative calibration scheduling with automatic technician dispatch",
          "Barcode & RFID asset tagging with maintenance history logging",
          "Regulatory compliance dashboards with role-based access audits"
        ]
      }
    ],
    technologies: [
      {
        category: "Cloud & Portals",
        items: ["Microsoft Power Pages (Healthcare)", "Dynamics 365 Customer Service"]
      },
      {
        category: "Workflow & Field Ops",
        items: ["Dynamics 365 Field Service", "Power Automate Healthcare Connectors"]
      },
      {
        category: "Compliance & Security",
        items: ["Microsoft Cloud for Healthcare", "Azure Health Data Services"]
      }
    ],
    caseStudy: {
      title: "Pet Import Service and Delivery Management",
      slug: "pet-import-service-and-delivery-management",
      clientContext: "Regulated veterinary care, logistics quarantine, and health clearance compliance across international transit borders.",
      outcome: "Secured documentation compliance, automated stakeholder milestone updates, and eliminated administrative delays."
    },
    measurableBenefits: [
      "40% reduction in patient appointment no-shows through automated communication",
      "Complete regulatory audit compliance with role-based clinical logs",
      "Extended lifespan and reliable uptime for critical medical equipment",
      "Enhanced patient satisfaction with seamless digital inquiry handling"
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES_DATA.find((ind) => ind.slug === slug);
}

