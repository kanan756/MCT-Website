export interface TechIntegration {
  name: string;
  purpose: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  solutionCategory: string;
  tagline: string;
  client: string;
  location: string;
  duration: string;
  year: string;
  image: string;
  heroImage: string;
  tags: string[];
  summary: string;
  overview: string[];
  businessChallenges: string[];
  solutionDelivered: string[];
  capabilities: CapabilityItem[];
  businessValues: string[];
  technologies: TechIntegration[];
}

export const PROJECTS: Project[] = [
  {
    slug: "pet-import-service-and-delivery-management",
    name: "Pet Import Service and Delivery Management",
    solutionCategory: "Microsoft Dynamics 365 Customer Service",
    tagline:
      "A customer service and operational management solution designed to coordinate the pet import process into the UAE, from inquiry to airport pickup and final delivery.",
    client: "UAE Pet Logistics & Relocation Services",
    location: "UAE",
    duration: "6 Months",
    year: "2024",
    image: "/pet-import-inquiry.png",
    heroImage: "/crm.png",
    tags: [
      "Dynamics 365 Customer Service",
      "Case Management",
      "Mobile App Integration",
      "Workflow Automation",
      "Customer Communication"
    ],
    summary:
      "Pet Import Service uses Microsoft Dynamics 365 Customer Service to manage the pet import journey into the UAE, from customer inquiries and document processing to payment tracking, permit approvals, and final delivery. Integrated driver operations, structured workflows, and customer notifications support coordinated service delivery and end-to-end inquiry tracking.",
    overview: [
      "Pet Import Service is a customer service and operational management solution designed to coordinate the pet import process into the UAE, from the initial customer inquiry to airport pickup, final delivery, and feedback collection.",
      "Built on Microsoft Dynamics 365 Customer Service (On-Premises), the solution enables service agents to manage inquiries, collect pet and customer information, prepare cost estimations, record payments, track import permit approvals, and coordinate delivery activities through a structured business process flow.",
      "A connected Driver Mobile App allows drivers to view assigned inquiries and update pickup and drop-off statuses, with updates synchronized to Dynamics 365 through its Web API. Automated workflows, customer email notifications, and dedicated records for estimations, payments, checklists, and feedback support a more organized and traceable service operation."
    ],
    businessChallenges: [
      "Inquiry management: Converting incoming customer emails into trackable service cases.",
      "Customer information collection: Requesting and validating the details needed to process each pet import.",
      "Process coordination: Tracking estimations, payments, checklists, and import permit approvals.",
      "Driver coordination: Connecting service agents with drivers responsible for airport pickup and final delivery.",
      "Customer communication: Keeping customers informed of important status changes throughout the service lifecycle."
    ],
    solutionDelivered: [
      "Structured inquiry management: Capturing customer requests from email and managing them as cases within Dynamics 365.",
      "Customer information collection and verification: Providing a form-based process for collecting pet and owner details and associating the information with the relevant inquiry.",
      "Estimation and payment management: Maintaining estimation documents, payment records, transaction references, and payment confirmation status.",
      "Import permit tracking: Using checklists and case statuses to track payment confirmation, permit approval, and related shipment information.",
      "Driver mobile integration: Connecting driver assignments and pickup/drop-off status updates with CRM through the Dynamics 365 Web API.",
      "Workflow-based customer communication: Using email templates, workflows, and status-driven notifications to communicate important process updates.",
      "Case closure and feedback: Completing the business process flow and inviting customers to submit feedback, which is stored in a dedicated Client Feedback entity."
    ],
    capabilities: [
      {
        title: "Centralized Inquiry and Case Management",
        description:
          "Manage incoming customer emails as structured inquiries, with customer information, pet details, status tracking, and a dedicated record of the service lifecycle."
      },
      {
        title: "Structured Business Process Flow",
        description:
          "Guide inquiries through defined stages, from initial receipt and information verification to estimation, payment, permit approval, delivery, and closure."
      },
      {
        title: "Estimation, Payment, and Checklist Tracking",
        description:
          "Maintain estimation documents, payment references, and operational checklist records associated with each pet import inquiry."
      },
      {
        title: "Driver Mobile App Integration",
        description:
          "Allow drivers to view assigned inquiries and update pickup and drop-off statuses through the mobile application, synchronized with CRM using the Web API."
      },
      {
        title: "Customer Email Notifications",
        description:
          "Support customer communication through email templates and workflow-driven notifications for key milestones, including information requests, estimations, payments, permits, and delivery."
      },
      {
        title: "Case Closure and Customer Feedback",
        description:
          "Complete the service process through case closure and feedback collection, with customer responses recorded in a dedicated CRM entity."
      }
    ],
    businessValues: [
      "Improved process visibility: Gives service agents a defined view of inquiry progress and outstanding operational steps.",
      "More organized service delivery: Brings customer information, estimations, payments, checklists, and feedback into a connected CRM process.",
      "Better customer communication: Supports consistent updates at important stages of the pet import journey.",
      "Connected field operations: Links driver activities with the central CRM record, improving coordination between agents and delivery personnel.",
      "Greater traceability: Maintains related records and status updates throughout the inquiry lifecycle.",
      "Structured customer feedback: Captures customer responses after case closure to support service review and improvement."
    ],
    technologies: [
      {
        name: "Microsoft Dynamics 365 Customer Service (On-Premises)",
        purpose: "Central inquiry, case, and operational record management"
      },
      {
        name: "Dynamics 365 Web API",
        purpose: "Integration between CRM and the Driver Mobile App"
      },
      {
        name: "Driver Mobile App",
        purpose: "Driver assignments and pickup/drop-off status updates"
      },
      {
        name: "Customer Web Form",
        purpose: "Collection of customer and pet details"
      },
      {
        name: "Dynamics 365 Workflows and Plugins",
        purpose: "Business process automation, record creation, and status-related actions"
      },
      {
        name: "Dynamics 365 Email Templates",
        purpose: "Standardized customer communications"
      },
      {
        name: "CRM Email Router / Server-Side Synchronization",
        purpose: "Incoming email processing, depending on the configured deployment"
      },
      {
        name: "Power Apps Portal / Custom Web Form",
        purpose: "Customer-facing information collection, depending on the deployed implementation"
      }
    ]
  },
  {
    slug: "uae-e-invoicing-integration-dynamics-365-business-central",
    name: "UAE E-Invoicing Integration for Microsoft Dynamics 365 Business Central",
    solutionCategory: "Microsoft Dynamics 365 Business Central • E-Invoicing Integration",
    tagline:
      "An extension for Microsoft Dynamics 365 Business Central designed to support electronic invoice preparation, validation, submission, and status tracking through an integrated e-invoicing service provider.",
    client: "UAE Commercial & Enterprise Businesses",
    location: "UAE",
    duration: "Ongoing",
    year: "2024",
    image: "/uae-einvoicing-business-central.png",
    heroImage: "/erp.png",
    tags: [
      "Dynamics 365 Business Central",
      "UAE E-Invoicing",
      "API Integration",
      "Peppol Integration",
      "Invoice Automation"
    ],
    summary:
      "The UAE E-Invoicing Integration extends Microsoft Dynamics 365 Business Central with API-connected invoice preparation, validation, submission, and status tracking. Supporting seller and buyer management, invoice calculations, Peppol delivery monitoring, acknowledgement tracking, and integration history, the solution helps businesses manage e-invoicing transactions through a structured workflow within their existing business application.",
    overview: [
      "The UAE E-Invoicing Integration is an extension for Microsoft Dynamics 365 Business Central designed to support electronic invoice preparation, validation, submission, and status tracking through an integrated e-invoicing service provider.",
      "The solution connects Business Central with external e-invoicing services through APIs, enabling businesses to maintain seller and buyer information, prepare domestic UAE sales invoices in AED, validate invoice data, and manage the different stages of invoice processing.",
      "It provides dedicated functionality for seller entity management, business partner records, invoice calculations, submission processing, and acknowledgement tracking. By maintaining processing statuses, document references, timestamps, and API request and response history, the integration helps users monitor invoice transactions and investigate processing errors within their Business Central environment."
    ],
    businessChallenges: [
      "Business data management: Maintaining seller registration information, buyer details, and electronic participant identifiers required for invoice processing.",
      "Invoice data validation: Checking required information, identifiers, invoice calculations, and seller onboarding readiness before submission.",
      "Multi-stage processing: Managing invoice saving, generation, delivery, and acknowledgement as separate steps rather than treating them as one operation.",
      "Transaction visibility: Identifying whether a submission is pending, successful, or unsuccessful at the relevant processing stage.",
      "Integration troubleshooting: Retaining API request and response history, reference identifiers, timestamps, and error details to support investigation and reconciliation."
    ],
    solutionDelivered: [
      "Seller entity management: Maintaining organization details, including legal name, tax registration information, address, contact details, and electronic participant identifiers, with support for parent and child entity relationships.",
      "Business partner management: Maintaining buyer information, including legal and trade names, tax identifiers, registration details, contact information, and Peppol participant identifiers.",
      "Invoice preparation: Creating domestic UAE sales invoices in AED with seller and buyer details, invoice dates, payment due dates, line items, quantities, prices, discounts, tax categories, and applicable tax rates.",
      "Pre-submission validation: Checking mandatory fields, identifier formats, invoice calculations, supported transaction details, and seller onboarding readiness.",
      "API-based invoice processing: Providing separate actions for saving an e-invoice and requesting its generation, with processing results retrieved from the connected service provider.",
      "Status and acknowledgement tracking: Recording save-processing, generation-processing, e-invoice processing, Peppol delivery, Peppol message acknowledgement, and Tax Authority message acknowledgement statuses.",
      "Error handling and transaction history: Retaining API request and response details, document UUIDs, reference identifiers, submission timestamps, and the latest returned errors to support troubleshooting and transaction reconciliation."
    ],
    capabilities: [
      {
        title: "Seller Entity and Business Partner Management",
        description:
          "Maintain seller organization records and buyer information required for invoice preparation, including tax identifiers, legal details, addresses, and electronic participant information."
      },
      {
        title: "Invoice Creation and Calculation",
        description:
          "Prepare domestic UAE sales invoices in AED, with item or service lines, quantities, unit prices, discounts, tax categories, tax rates, and calculated invoice totals."
      },
      {
        title: "Invoice Validation",
        description:
          "Perform pre-submission checks on required information, identifier formats, invoice calculations, supported transaction details, and seller onboarding readiness."
      },
      {
        title: "API-Based E-Invoice Processing",
        description:
          "Integrate Business Central with an external e-invoicing service provider to save invoice data, request invoice generation, and retrieve the corresponding processing results."
      },
      {
        title: "Peppol Delivery and Acknowledgement Tracking",
        description:
          "Track available Peppol delivery statuses and message-level acknowledgements, alongside Tax Authority message-level acknowledgement information returned through the integration."
      },
      {
        title: "Transaction Monitoring and Error Handling",
        description:
          "Maintain processing statuses, document references, UUIDs, timestamps, and API request and response history to support troubleshooting and reconciliation."
      },
      {
        title: "Submission Controls",
        description:
          "Provide controls to reduce accidental changes to submitted documents and repeated submissions when a previous request requires outcome reconciliation."
      }
    ],
    businessValues: [
      "Centralized invoice operations: Allows users to prepare and manage supported e-invoice transactions within the Business Central environment.",
      "Improved data consistency: Uses maintained seller and buyer records to support standardized invoice preparation and reduce repeated manual entry.",
      "More controlled submissions: Introduces validation checks before invoice submission to help identify incomplete or incorrectly formatted information.",
      "Greater processing visibility: Separates saving, generation, delivery, and acknowledgement statuses to make transaction progress easier to understand.",
      "Simplified troubleshooting: Preserves integration history and returned errors to help technical and operational teams investigate unsuccessful or pending transactions.",
      "Better transaction traceability: Maintains invoice references, document identifiers, timestamps, and processing outcomes against individual invoices."
    ],
    technologies: [
      {
        name: "Microsoft Dynamics 365 Business Central",
        purpose: "Core business application hosting the e-invoicing extension"
      },
      {
        name: "Business Central Extension",
        purpose: "Seller, business partner, invoice, validation, and processing functionality"
      },
      {
        name: "External E-Invoicing Service Provider API",
        purpose: "Invoice submission, generation requests, and retrieval of processing results"
      },
      {
        name: "Peppol Network",
        purpose: "Electronic invoice delivery and acknowledgement tracking, where configured"
      },
      {
        name: "UAE Tax Authority Integration",
        purpose: "Tracking Tax Authority acknowledgement information returned through the connected service"
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
