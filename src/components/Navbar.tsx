"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone, ChevronRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [mobileServiceCategoryOpen, setMobileServiceCategoryOpen] = useState<string | null>(null);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const productMenu = [
    {
      id: "crm",
      label: "CRM",
      items: [
        { label: "Multiselect", href: "/products/crm/multiselect" },
        { label: "CleanMail Pro", href: "/products/crm/cleanmail-pro" },
        { label: "SalesPro", href: "/products/crm/salespro" },
      ]
    },
    {
      id: "erp",
      label: "ERP",
      items: [
        { label: "TaxInvoicePro", href: "/products/erp/taxinvoicepro" },
      ]
    },
    {
      id: "ai",
      label: "AI",
      items: [
        { label: "IntelliKB", href: "/products/ai/intellikb" },
      ]
    }
  ];

  const servicesMenu = [
    {
      id: "dynamics-365",
      label: "Dynamics 365",
      href: "/services#dynamics-365",
      items: [
        { label: "Microsoft Dynamics 365 Customer Engagement", href: "/services/customer-engagement" },
        { label: "Microsoft Dynamics 365 Sales", href: "/services/sales" },
        { label: "Microsoft Dynamics 365 Customer Service", href: "/services/customer-service" },
        { label: "Microsoft Dynamics 365 Customer Insights", href: "/services/customer-insights" },
        { label: "Microsoft Dynamics 365 Field Service", href: "/services/field-service" },
        { label: "Microsoft Dynamics 365 Business Central", href: "/services/business-central" },
        { label: "Finance & Operations", href: "/services/finance-operations" },
        { label: "Supply Chain Management", href: "/services/supply-chain-management" },
        { label: "Project Management", href: "/services/project-management" },
        { label: "Dynamics HR", href: "/services/dynamics-hr" },
        { label: "Payroll", href: "/services/payroll" },
        { label: "Power Pages", href: "/services/power-pages" },
        { label: "Power Apps", href: "/services/power-apps" },
        { label: "Power Automate", href: "/services/power-automate" },
      ]
    },
    {
      id: "e-invoicing",
      label: "E-Invoicing",
      href: "/services#e-invoicing",
      items: [
        { label: "India E-Invoicing Integration", href: "/services/india-e-invoicing" },
        { label: "UAE E-Invoicing Integration", href: "/services/uae-e-invoicing" },
      ]
    },
    {
      id: "web",
      label: "WEB",
      href: "/services#web",
      items: [
        { label: "Node.js", href: "/services/nodejs" },
        { label: "React.js", href: "/services/reactjs" },
      ]
    },
    {
      id: "mobile",
      label: "Mobile",
      href: "/services#mobile",
      items: [
        { label: "React Native (Android)", href: "/services/react-native-android" },
        { label: "Swift (iOS)", href: "/services/swift-ios" },
      ]
    }
  ];

  const aboutMenu = [
    { label: "Leadership", href: "/about/leadership" },
    { label: "Testimonials", href: "/about/testimonials" },
    { label: "Careers", href: "/about/careers" },
    { label: "Projects", href: "/about/projects" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: "products" },
    { label: "Services", href: "/services", hasDropdown: "services" },
    { label: "About us", href: "/about", hasDropdown: "about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/")) {
      return pathname === href || pathname.startsWith(href + "/");
    }
    return false;
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top Bar with exact contact details on desktop */}
      <div className="bg-[#0b1b3d] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#3482b9] shrink-0" />
              <a href="mailto:mct@miraclecloud-technology.com" className="hover:text-white transition-colors">
                mct@miraclecloud-technology.com
              </a>
            </span>
          </div>
          <div>
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Phone className="w-3.5 h-3.5 text-[#3482b9] shrink-0" />
              <a href="tel:+919510879991">+91 9510879991</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">

          {/* Logo - Perfectly scaled so contact info and logo co-exist without truncation */}
          <Link href="/" className="flex items-center group py-2 shrink-0">
            <img
              src="/mctlogo.png"
              alt="MCT IT Solutions (P) Ltd."
              className="h-8 min-[380px]:h-9 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[125px] min-[380px]:max-w-[145px] sm:max-w-[220px] md:max-w-none object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Contact Details in between Logo and Hamburger - 100% fully visible & readable on ALL devices */}
          <div className="flex md:hidden flex-1 flex-col justify-center items-center text-center px-1 min-w-0">
            <a
              href="mailto:mct@miraclecloud-technology.com"
              className="flex items-center justify-center gap-1 text-slate-800 hover:text-[#3482b9] transition-colors py-0.5"
              title="Email MCT IT Solutions"
            >
              <Mail className="w-2.5 min-[380px]:w-3 h-2.5 min-[380px]:h-3 text-[#3482b9] shrink-0" />
              <span className="font-semibold text-[9px] min-[360px]:text-[9.5px] min-[400px]:text-[11px] sm:text-xs text-slate-800 tracking-tight whitespace-nowrap">
                mct@miraclecloud-technology.com
              </span>
            </a>
            <a
              href="tel:+919510879991"
              className="flex items-center justify-center gap-1 font-bold text-slate-900 hover:text-[#3482b9] transition-colors py-0.5"
              title="Call MCT IT Solutions"
            >
              <Phone className="w-2.5 min-[380px]:w-3 h-2.5 min-[380px]:h-3 text-[#3482b9] shrink-0" />
              <span className="text-[10px] min-[360px]:text-[10.5px] min-[400px]:text-[11.5px] sm:text-xs tracking-wider whitespace-nowrap">
                +91 9510879991
              </span>
            </a>
          </div>

          {/* Dynamic Active Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link, idx) => {
              const active = isLinkActive(link.href);

              if (link.hasDropdown === "products") {
                return (
                  <div
                    key={idx}
                    className="relative group py-6"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 relative ${active
                        ? "text-[#3482b9]"
                        : "text-gray-700 hover:text-[#3482b9]"
                        }`}
                    >
                      <span>{link.label}</span>
                      {active && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-[#3482b9] rounded-full animate-fade-in" />
                      )}
                    </Link>

                    {/* Desktop Nested Flyout Dropdown (Modern Theme - Names Only) */}
                    {productsDropdownOpen && (
                      <div
                        className="absolute top-[calc(100%-6px)] left-0 flex bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl overflow-visible z-50 animate-fade-in ring-1 ring-black/5"
                      >
                        {/* Left Column: Categories (CRM, ERP, AI) */}
                        <div className="w-48 bg-slate-50/70 p-2 space-y-1">
                          {productMenu.map((cat) => {
                            const isCurrentCat = activeCategory === cat.id;
                            const catHref =
                              cat.id === "crm"
                                ? "/product/prod-crm"
                                : cat.id === "erp"
                                  ? "/product/prod-desktop"
                                  : "/product/prod-ai";
                            return (
                              <div
                                key={cat.id}
                                className="relative"
                                onMouseEnter={() => setActiveCategory(cat.id)}
                              >
                                <div
                                  className={`w-full px-4 py-2.5 rounded-xl flex items-center justify-between text-sm font-bold tracking-wide transition-all ${isCurrentCat
                                    ? "bg-white text-[#3482b9] shadow-sm border border-[#3482b9]/20"
                                    : "text-slate-800 hover:bg-white/80 hover:text-[#3482b9]"
                                    }`}
                                >
                                  <Link
                                    href={catHref}
                                    onClick={() => {
                                      setProductsDropdownOpen(false);
                                      setActiveCategory(null);
                                    }}
                                    className="flex-1 text-left hover:text-[#3482b9]"
                                  >
                                    {cat.label}
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveCategory(activeCategory === cat.id ? null : cat.id);
                                    }}
                                    className="p-1 -mr-1 rounded hover:bg-slate-100"
                                    aria-label={`Toggle ${cat.label} submenu`}
                                  >
                                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isCurrentCat ? "text-[#3482b9] translate-x-1" : "text-slate-400"}`} />
                                  </button>
                                </div>

                                {/* Directly Aligned Subproducts Flyout (Opens exactly adjacent to the hovered item with exact item rows) */}
                                {isCurrentCat && (
                                  <div
                                    className="absolute left-[calc(100%+8px)] top-0 w-52 bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl p-2 z-50 animate-fade-in space-y-1 ring-1 ring-black/5"
                                  >
                                    {cat.items.map((sub, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={() => {
                                          setProductsDropdownOpen(false);
                                          setActiveCategory(null);
                                        }}
                                        className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-[#3482b9] hover:bg-sky-50/70 transition-colors"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "services") {
                return (
                  <div
                    key={idx}
                    className="relative group py-6"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 relative ${active
                        ? "text-[#3482b9]"
                        : "text-gray-700 hover:text-[#3482b9]"
                        }`}
                    >
                      <span>{link.label}</span>
                      {active && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-[#3482b9] rounded-full animate-fade-in" />
                      )}
                    </Link>

                    {/* Desktop Nested Flyout Dropdown for Services */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute top-[calc(100%-6px)] left-0 flex bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl overflow-visible z-50 animate-fade-in ring-1 ring-black/5"
                      >
                        {/* Left Column: Categories (Dynamics 365, E-Invoicing, WEB, Mobile) */}
                        <div className="w-52 bg-slate-50/70 p-2 space-y-1">
                          {servicesMenu.map((cat) => {
                            const isCurrentCat = activeServiceCategory === cat.id;
                            return (
                              <div
                                key={cat.id}
                                className="relative"
                                onMouseEnter={() => setActiveServiceCategory(cat.id)}
                              >
                                <div
                                  className={`w-full px-4 py-2.5 rounded-xl flex items-center justify-between text-sm font-bold tracking-wide transition-all ${isCurrentCat
                                    ? "bg-white text-[#3482b9] shadow-sm border border-[#3482b9]/20"
                                    : "text-slate-800 hover:bg-white/80 hover:text-[#3482b9]"
                                    }`}
                                >
                                  <Link
                                    href={cat.href}
                                    onClick={() => {
                                      setServicesDropdownOpen(false);
                                      setActiveServiceCategory(null);
                                    }}
                                    className="flex-1 text-left hover:text-[#3482b9]"
                                  >
                                    {cat.label}
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveServiceCategory(activeServiceCategory === cat.id ? null : cat.id);
                                    }}
                                    className="p-1 -mr-1 rounded hover:bg-slate-100"
                                    aria-label={`Toggle ${cat.label} submenu`}
                                  >
                                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isCurrentCat ? "text-[#3482b9] translate-x-1" : "text-slate-400"}`} />
                                  </button>
                                </div>

                                {/* Directly Aligned Sub-services Flyout (Opens adjacent to hovered category) */}
                                {isCurrentCat && (
                                  <div
                                    className="absolute left-[calc(100%+8px)] top-0 w-64 max-h-[420px] overflow-y-auto bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl p-2 z-50 animate-fade-in space-y-1 ring-1 ring-black/5 scrollbar-thin"
                                  >
                                    {cat.items.map((sub, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={() => {
                                          setServicesDropdownOpen(false);
                                          setActiveServiceCategory(null);
                                        }}
                                        className="block px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#3482b9] hover:bg-sky-50/70 transition-colors"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "about") {
                return (
                  <div
                    key={idx}
                    className="relative group py-6"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 relative ${active
                        ? "text-[#3482b9]"
                        : "text-gray-700 hover:text-[#3482b9]"
                        }`}
                    >
                      <span>{link.label}</span>
                      {active && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-[#3482b9] rounded-full animate-fade-in" />
                      )}
                    </Link>

                    {/* About Us Subpage Dropdown matching Products dropdown theme */}
                    {aboutDropdownOpen && (
                      <div
                        className="absolute top-[calc(100%-6px)] left-0 w-48 bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl p-2 z-50 animate-fade-in space-y-1 ring-1 ring-black/5"
                      >
                        {aboutMenu.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setAboutDropdownOpen(false)}
                            className="block px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide text-slate-800 hover:text-[#3482b9] hover:bg-white hover:shadow-sm hover:border hover:border-[#3482b9]/20 transition-all"
                          >
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-bold uppercase tracking-wider transition-all relative ${active
                    ? "text-[#3482b9]"
                    : "text-gray-700 hover:text-[#3482b9]"
                    }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-[#3482b9] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#3482b9]"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Dynamic Active Navigation for Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1.5 animate-fade-in">
          {navLinks.map((link, idx) => {
            const active = isLinkActive(link.href);

            if (link.hasDropdown === "products") {
              return (
                <div key={idx} className="rounded-xl overflow-hidden bg-slate-50/70 border border-gray-100">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold uppercase tracking-wider ${active ? "text-[#3482b9]" : "text-gray-800"
                        }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="p-1.5 text-slate-500 hover:text-[#3482b9]"
                      aria-label="Toggle Products Submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180 text-[#3482b9]" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {mobileProductsOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-2 border-t border-gray-200/60 bg-white">
                      {productMenu.map((cat) => {
                        const catHref =
                          cat.id === "crm"
                            ? "/product/prod-crm"
                            : cat.id === "erp"
                              ? "/product/prod-desktop"
                              : "/product/prod-ai";
                        return (
                          <div key={cat.id} className="rounded-lg border border-gray-100 p-2">
                            <div className="w-full flex items-center justify-between text-xs font-bold text-slate-900 uppercase py-1">
                              <Link
                                href={catHref}
                                onClick={() => setIsOpen(false)}
                                className="flex-1 hover:text-[#3482b9]"
                              >
                                {cat.label}
                              </Link>
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileCategoryOpen(
                                    mobileCategoryOpen === cat.id ? null : cat.id
                                  )
                                }
                                className="p-1 -mr-1"
                                aria-label={`Toggle ${cat.label} items`}
                              >
                                <ChevronDown
                                  className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileCategoryOpen === cat.id ? "rotate-180 text-[#3482b9]" : ""
                                    }`}
                                />
                              </button>
                            </div>

                            {mobileCategoryOpen === cat.id && (
                              <div className="mt-1.5 pl-2 space-y-1.5 border-l-2 border-[#3482b9]">
                                {cat.items.map((item, iIdx) => (
                                  <Link
                                    key={iIdx}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-1 text-xs text-slate-600 hover:text-[#3482b9] font-medium"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasDropdown === "services") {
              return (
                <div key={idx} className="rounded-xl overflow-hidden bg-slate-50/70 border border-gray-100">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold uppercase tracking-wider ${active ? "text-[#3482b9]" : "text-gray-800"
                        }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1.5 text-slate-500 hover:text-[#3482b9]"
                      aria-label="Toggle Services Submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-[#3482b9]" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-2 border-t border-gray-200/60 bg-white">
                      {servicesMenu.map((cat) => (
                        <div key={cat.id} className="rounded-lg border border-gray-100 p-2">
                          <div className="w-full flex items-center justify-between text-xs font-bold text-slate-900 uppercase py-1">
                            <Link
                              href={cat.href}
                              onClick={() => setIsOpen(false)}
                              className="flex-1 hover:text-[#3482b9]"
                            >
                              {cat.label}
                            </Link>
                            <button
                              type="button"
                              onClick={() =>
                                setMobileServiceCategoryOpen(
                                  mobileServiceCategoryOpen === cat.id ? null : cat.id
                                )
                              }
                              className="p-1 -mr-1"
                              aria-label={`Toggle ${cat.label} items`}
                            >
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileServiceCategoryOpen === cat.id ? "rotate-180 text-[#3482b9]" : ""
                                  }`}
                              />
                            </button>
                          </div>

                          {mobileServiceCategoryOpen === cat.id && (
                            <div className="mt-1.5 pl-2 space-y-1.5 border-l-2 border-[#3482b9] max-h-48 overflow-y-auto">
                              {cat.items.map((item, iIdx) => (
                                <Link
                                  key={iIdx}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1 text-xs text-slate-600 hover:text-[#3482b9] font-medium"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasDropdown === "about") {
              return (
                <div key={idx} className="rounded-xl overflow-hidden bg-slate-50/70 border border-gray-100">
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold uppercase tracking-wider ${active ? "text-[#3482b9]" : "text-gray-800"
                        }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="p-1.5 text-slate-500 hover:text-[#3482b9]"
                      aria-label="Toggle About Submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180 text-[#3482b9]" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {mobileAboutOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-gray-200/60 bg-white">
                      {aboutMenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#3482b9] hover:bg-sky-50 rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${active
                  ? "bg-sky-50 text-[#3482b9] border-l-4 border-[#3482b9]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#3482b9]"
                  }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-[#3482b9]" />}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2.5 rounded-full text-sm font-bold transition-all bg-[#3482b9] text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

