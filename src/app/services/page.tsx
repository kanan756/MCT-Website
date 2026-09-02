"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Microsoft Dynamics 365",
      description: "End-to-end implementation, customization, and support for Dynamics 365 CRM (Sales, Customer Service, Field Service) and ERP (Business Central, Finance & Operations).",
      features: ["Sales & Marketing Automation", "Customer Insights", "Supply Chain Management", "HR & Payroll Integration"],
    },
    {
      title: "Power Platform Development",
      description: "Build custom business applications, automate workflows, and analyze data efficiently with Microsoft Power Platform.",
      features: ["Power Apps Development", "Power Automate Workflows", "Power BI Dashboards", "Power Pages Portals"],
    },
    {
      title: "Web & Mobile App Development",
      description: "Cutting-edge custom application development using modern frameworks to deliver seamless user experiences across all devices.",
      features: ["React & Node.js Web Apps", "React Native Cross-Platform", "Native iOS (Swift) & Android", "UI/UX Design"],
    },
    {
      title: "AI & Specialized Products",
      description: "Leverage our proprietary products like IntelliKB and CleanMail Pro to enhance productivity and integrate AI into your daily operations.",
      features: ["IntelliKB (AI Knowledge Base)", "CleanMail Pro Integration", "TaxInvoicePro (ERP Tool)", "Multiselect CRM Add-ons"],
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our <span className="text-gradient">Services & Products</span></h1>
          <p className="text-xl text-gray-500">
            We deliver comprehensive digital transformation solutions tailored to your unique business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black">{index + 1}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h2>
              <p className="text-gray-400 mb-8 relative z-10">{service.description}</p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors relative z-10">
                Discuss Your Requirements <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
