export interface CareerOpening {
  id: string;
  title: string;
  department?: string; // e.g. "Product Innovation", "Consulting", "People & Ops", "Engineering"
  tags?: string[]; // e.g. ["Next.js", "Chrome Extensions", "Remote", "2-4 yrs exp"]
  experience: string;
  location: string;
  qualification: string;
  roleObjective: string;
  roleResponsibilities: string[];
  keyResponsibilities: string[];
  whyJoinUs: string[];
  published?: boolean;
}

export const INITIAL_CAREERS: CareerOpening[] = [
  {
    id: "dynamics-365-crm-functional-consultant",
    title: "Microsoft Dynamics 365 CRM Functional Consultant",
    department: "Consulting",
    tags: ["Dynamics 365", "Power Platform", "Ahmedabad / Hybrid", "3+ yrs exp"],
    experience: "3+ Years",
    location: "Ahmedabad",
    qualification: "Masters/Bachelors",
    roleObjective:
      "As a Functional Consultant, you will bridge the gap between business requirements and technical execution, designing and configuring Microsoft Dynamics 365 CRM solutions that streamline sales, marketing, and customer service operations.",
    roleResponsibilities: [
      "Requirement Analysis: Conduct discovery sessions with clients to understand business workflows and translate them into functional design documents.",
      "Solution Configuration: Hands-on expertise in customizing Forms, Views, Business Rules, Workflows, Power Automate, and Model-Driven Apps.",
      "Client Management: Lead client demonstrations, UAT sessions, and end-user training to ensure successful adoption.",
      "System Documentation: Prepare comprehensive functional requirement documents (FRD) and user manuals."
    ],
    keyResponsibilities: [
      "Own Functional Delivery: Lead the functional stream of Dynamics 365 projects from discovery through to deployment.",
      "Collaborate with Dev Team: Work closely with technical developers to explain complex requirements and review customizations.",
      "Support UAT & Go-Live: Provide functional support during user acceptance testing and production go-live."
    ],
    whyJoinUs: [
      "5 day working",
      "Creative Work Environment",
      "Future Forward Technologies",
      "Fast track Career Growth",
      "Interaction with Global Clientele",
      "Fun thrilled activities & great work life balance",
      "Rewards & Recognition to Performer."
    ],
    published: true,
  },
  {
    id: "dynamics-365-crm-ce-developer",
    title: "Dynamics 365 CRM / CE Developer",
    department: "Engineering",
    tags: ["C# .NET", "Dataverse", "Power Automate", "PCF", "3+ yrs exp"],
    experience: "3+ Years",
    location: "Ahmedabad",
    qualification: "Masters/Bachelors",
    roleObjective:
      "As a Senior Developer, you will be responsible for designing, developing, and implementing highquality solutions within the Microsoft Dynamics 365 and Power Platform ecosystem. You will bridge the gap between business requirements and technical execution, ensuring best practices in customization and integration.",
    roleResponsibilities: [
      "Dynamics 365 Specialist: 3+ years of hands on experience in D365 Sales, Service, or Project Ops. Expertise in Model Driven apps and Dataverse (Common Data Service).",
      "Custom Development: Strong proficiency in C# .NET and JavaScript for developing Plugins, Custom Workflow Activities, and Client side scripting (Web Resources).",
      "Modern Tools: Experience with Power Automate (Cloud Flows) and Power Apps Component Framework (PCF) is highly preferred.",
      "Integration Expert: Proven ability to develop and consume Web APIs and RESTful services. Knowledge of Azure integration (Azure Functions, Service Bus) is a major plus.",
      "Configuration: Advanced skills in customizing Forms, Views, Business Rules, Ribbons, and Security Roles.",
      "Data & DevOps: Solid understanding of SQL Server and experience with version control using Azure DevOps (formerly TFS) or Git."
    ],
    keyResponsibilities: [
      "Own the Project: You will lead Dynamics 365 projects from the first conversation to the final launch, making sure everything runs smoothly.",
      "Solve Real Problems: You will talk to stakeholders, understand what they need, and design technical solutions that actually work for their business.",
      "Build Smart: You will decide when to use out of the box features and when to write custom code, keeping the system stable and easy to manage.",
      "Make it Fast: You will jump in to fix complex bugs and fine tune the system so it's fast and reliable on both web and mobile"
    ],
    whyJoinUs: [
      "5 day working",
      "Creative Work Environment",
      "Future Forward Technologies",
      "Fast track Career Growth",
      "Interaction with Global Clientele",
      "Fun thrilled activities & great work life balance",
      "Rewards & Recognition to Performer."
    ],
    published: true,
  },
  {
    id: "business-development-executive-microsoft-d365",
    title: "Business Development Executive – Microsoft D365",
    department: "Consulting",
    tags: ["Sales & BD", "Microsoft D365", "Enterprise", "2+ yrs exp"],
    experience: "2+ Years",
    location: "Ahmedabad",
    qualification: "MBA / BBA / Any Graduate",
    roleObjective:
      "Drive business growth by identifying, qualifying, and closing enterprise leads for Microsoft Dynamics 365, Business Central, and Power Platform consulting services across international markets.",
    roleResponsibilities: [
      "Lead Generation: Proactively source and engage potential enterprise clients across USA, Canada, UAE, and European markets.",
      "Pitching & Demos: Present MCT's technical capabilities, POC miniature models, and service offerings to prospective decision makers.",
      "Pipeline Management: Maintain pipeline hygiene in CRM, ensuring timely follow-ups and seamless handoffs to solution architects.",
      "Relationship Building: Build sustainable long-term partnerships with IT leaders, CIOs, and technology directors."
    ],
    keyResponsibilities: [
      "Expand Market Footprint: Achieve monthly and quarterly revenue targets through proactive outreach.",
      "Client Discovery: Understand prospect pain points and coordinate with technical leads to structure rapid POC proposals.",
      "Proposal Preparation: Collaborate with delivery managers to generate accurate project estimates and contracts."
    ],
    whyJoinUs: [
      "5 day working",
      "Creative Work Environment",
      "Future Forward Technologies",
      "Fast track Career Growth",
      "Interaction with Global Clientele",
      "Fun thrilled activities & great work life balance",
      "Rewards & Recognition to Performer."
    ],
    published: true,
  },
  {
    id: "business-development-executive-salesforce",
    title: "Business Development Executive – Salesforce",
    department: "People & Ops",
    tags: ["Salesforce", "Enterprise Sales", "CRM", "2+ yrs exp"],
    experience: "2+ Years",
    location: "Ahmedabad",
    qualification: "MBA / BBA / Any Graduate",
    roleObjective:
      "Responsible for driving Salesforce enterprise service sales, expanding MCT's CRM consulting customer base, and managing outbound sales pipelines.",
    roleResponsibilities: [
      "Outbound Strategy: Identify target segments and drive cold outreach, LinkedIn prospecting, and email sequences.",
      "Sales Cycle Management: Manage end-to-end sales discussions from discovery calls to negotiation and deal closing.",
      "Market Intelligence: Track CRM market trends, competitor offerings, and customer expectations.",
      "Cross-functional Alignment: Coordinate with delivery managers to align client expectations with technical delivery timelines."
    ],
    keyResponsibilities: [
      "Target Achievement: Drive quota attainment and qualified sales pipeline growth.",
      "Client Engagement: Establish strong rapport with international clients and strategic partners.",
      "Contract Closure: Drive MSA negotiations and ensure smooth transition to project delivery teams."
    ],
    whyJoinUs: [
      "5 day working",
      "Creative Work Environment",
      "Future Forward Technologies",
      "Fast track Career Growth",
      "Interaction with Global Clientele",
      "Fun thrilled activities & great work life balance",
      "Rewards & Recognition to Performer."
    ],
    published: true,
  }
];
