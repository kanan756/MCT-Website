"use client";

import { ArrowRight, Terminal, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import { use } from "react";

// --- ANIMATION COMPONENTS (Clean CSS-based) ---

const TypingText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      <span>{text}</span>
    </div>
  );
};

const BlockFlipText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      <span>{text}</span>
    </div>
  );
};

const BloomText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      <span>{text}</span>
    </div>
  );
};

// SVG Wave Divider Component
const WaveDivider = ({ className = "" }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] lg:h-[120px]">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.95,124.63,200.7,117.7,242.44,113.54,283.47,97.23,321.39,56.44Z" fill="#ffffff"></path>
    </svg>
  </div>
);

// --- LAYOUT VARIANTS ---
type PageContent = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

const AILayout = ({ content }: { content: PageContent }) => (
  <>
    <header className="relative w-full pt-32 pb-40 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
          <Terminal className="w-4 h-4" /> <span>{content.subtitle}</span>
        </div>
        <TypingText text={content.title} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-8 font-mono" />
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
      </div>
      <WaveDivider />
    </header>
    <article className="w-full py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {content.features.map((feature: string, index: number) => (
          <section 
            key={index}
            className={`bg-white rounded-lg p-8 border border-gray-100 shadow-lg flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
          >
            <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{feature}</h3>
          </section>
        ))}
      </div>
    </article>
  </>
);

const ERPLayout = ({ content }: { content: PageContent }) => (
  <>
    <header className="relative w-full pt-32 pb-40 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-sm text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
          <ShieldCheck className="w-4 h-4" /> <span>{content.subtitle}</span>
        </div>
        <BlockFlipText text={content.title} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-8" />
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed border-l-4 border-primary pl-4">
          {content.description}
        </p>
      </div>
      <WaveDivider />
    </header>
    <article className="w-full py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {content.features.map((feature: string, index: number) => (
            <section 
              key={index}
              className={`bg-white rounded-none p-10 border-t-4 border-primary shadow-xl ${index % 2 !== 0 ? 'md:mt-16' : ''} animate-fade-in`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature}</h3>
              <p className="text-gray-500">Enterprise-grade architecture designed for maximum stability and scaling.</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  </>
);

const CRMLayout = ({ content }: { content: PageContent }) => (
  <>
    <header className="relative w-full pt-32 pb-40 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
          <TrendingUp className="w-4 h-4" /> <span>{content.subtitle}</span>
        </div>
        <BloomText text={content.title} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-8" />
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
      </div>
      <WaveDivider />
    </header>
    <article className="w-full py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-[28px] top-0 w-1 h-full bg-accent/20 z-0 hidden md:block" />
        <div className="space-y-12 relative z-10">
          {content.features.map((feature: string, index: number) => (
            <section 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-6 border border-gray-50 ml-0 md:ml-12 animate-fade-in"
            >
              <div className="absolute -left-16 hidden md:flex w-12 h-12 bg-accent rounded-full items-center justify-center text-white font-bold shadow-lg shadow-accent/40">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature}</h3>
            </section>
          ))}
        </div>
      </div>
    </article>
  </>
);

// --- MOCK DATABASE ---
const pageData: Record<string, PageContent> = {
  "/product/prod-crm/multiselect": { title: "Multiselect", subtitle: "Advanced CRM Add-on", description: "Enhance your Microsoft Dynamics 365 CRM.", features: ["Seamless Integration", "Bulk Data Handling", "Customizable Fields", "Enhanced Reporting"] },
  "/product/prod-crm/cleanmail-pro": { title: "CleanMail Pro", subtitle: "Email Validation for Dynamics 365", description: "CleanMail Pro integrates directly with Microsoft Dynamics 365.", features: ["Real-time Validation", "Bounce Rate Reduction", "Seamless CRM Integration", "Marketing Optimization"] },
  "/product/prod-desktop/intx": { title: "TaxInvoicePro", subtitle: "Comprehensive ERP Billing", description: "Simplify your billing and taxation processes with TaxInvoicePro.", features: ["Automated Taxation", "Custom Invoice Templates", "Compliance Ready", "Real-time Sync"] },
  "/product/prod-ai/intellikb": { title: "IntelliKB", subtitle: "AI-Powered Knowledge Base", description: "Transform how your organization manages information with IntelliKB.", features: ["Smart Search", "Auto-Categorization", "Analytics Dashboard", "API Integration"] },
  "/services/dynamics365/crm/sales": { title: "Dynamics 365 Sales", subtitle: "Empower Your Sales Team", description: "Drive revenue growth with AI-driven insights.", features: ["Lead Management", "Pipeline Tracking", "Sales Analytics", "LinkedIn Integration"] },
  "/services/dynamics365/erp/business-central": { title: "Business Central", subtitle: "All-in-One Business Management", description: "Connect your sales, service, finance, and operations teams.", features: ["Financial Management", "Supply Chain Optimization", "Project Tracking", "Cloud-Native"] }
};

export default function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = use(params);
  const pathname = "/" + resolvedParams.slug.join("/");
  
  const content = pageData[pathname] || {
    title: resolvedParams.slug[resolvedParams.slug.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    subtitle: "MCT IT Solutions Expertise",
    description: "We deliver exceptional solutions tailored to your unique business needs.",
    features: ["Expert Consulting", "Seamless Implementation", "24/7 Support", "Continuous Innovation"],
  };

  const isAI = pathname.includes('ai');
  const isERP = pathname.includes('erp') || pathname.includes('desktop');
  const isCRM = pathname.includes('crm') || pathname.includes('sales');

  return (
    <main className="flex flex-col text-foreground relative z-10 overflow-hidden bg-white">
      {isAI ? <AILayout content={content} /> : 
       isERP ? <ERPLayout content={content} /> : 
       isCRM ? <CRMLayout content={content} /> : 
       <ERPLayout content={content} /> /* Default fallback */}
      
      <div className="pb-24 text-center bg-white relative z-10">
        <Link 
          href="/contact" 
          className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/40 inline-flex items-center justify-center gap-2 group"
        >
          Discuss Your Requirements
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
