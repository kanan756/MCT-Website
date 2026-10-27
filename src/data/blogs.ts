export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string; // Markdown or HTML content
  tags: string[];
  published?: boolean;
}

export const INITIAL_BLOGS: BlogPost[] = [
  {
    slug: "streamlining-field-operations-with-dynamics-365",
    title: "Streamlining Field Operations with Microsoft Dynamics 365",
    category: "Dynamics 365",
    author: "MCT Tech Team",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    summary: "Discover how modern enterprise workflows and mobile CRM integrations accelerate field service delivery, document processing, and customer satisfaction.",
    tags: ["Dynamics 365", "Field Service", "CRM", "Automation"],
    published: true,
    content: `
### Transforming Enterprise Field Operations

Modern businesses can no longer afford sluggish paperwork and delayed customer communications. By integrating Microsoft Dynamics 365 Customer Service and Field Operations, companies achieve full end-to-end operational visibility.

#### Key Advantages:
1. **Real-time Case Routing**: Automatically assign inquiries to field agents based on geographic proximity and skill set.
2. **Mobile First Sync**: Field technicians log status, upload inspection photos, and capture client signatures directly from mobile devices.
3. **Automated Customer Updates**: Push proactive notifications when drivers or technicians are on their way.

With MCT IT Solutions' customized Dynamics implementations, enterprises experience up to 40% reduction in turnaround times and significantly higher client satisfaction.
    `.trim()
  },
  {
    slug: "navigating-e-invoicing-compliance-in-uae-and-gcc",
    title: "Navigating E-Invoicing Compliance in UAE & GCC with Business Central",
    category: "E-Invoicing",
    author: "MCT Tax & ERP Specialist",
    date: "2025-02-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80",
    summary: "A practical guide to implementing Phase 2 e-invoicing compliance seamlessly into your Microsoft Dynamics 365 Business Central ERP.",
    tags: ["E-Invoicing", "Business Central", "UAE", "Compliance"],
    published: true,
    content: `
### E-Invoicing in the UAE & GCC

Digital tax compliance is evolving rapidly across the GCC region. For enterprises operating in the UAE and Saudi Arabia, structured electronic invoice generation and validation are becoming mandatory regulatory requirements.

#### What Your ERP Needs to Support:
- **Cryptographic Stamp Generation**: Validating digital invoice signatures.
- **XML/JSON Peppol Integration**: Standardized interchange formats for tax authority clearance.
- **Real-Time Verification**: Instant acknowledgement codes stored directly against the posted sales invoice.

Our Microsoft Dynamics 365 Business Central extension handles automated schema transformation, direct API transmission, and comprehensive error auditing.
    `.trim()
  }
];
