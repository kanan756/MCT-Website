"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About us", href: "/about" },
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

          {/* Logo */}
          <Link href="/" className="flex items-center group py-2 shrink-0">
            <img
              src="/mct_logo.png"
              alt="MCT IT Solutions (P) Ltd."
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Mobile & Small Device Contact Details (Between Logo and Hamburger) */}
          <div className="md:hidden flex-1 flex flex-col justify-center items-center text-center px-1 text-[11px] sm:text-xs leading-snug text-gray-700 min-w-0">
            <a
              href="mailto:mct@miraclecloud-technology.com"
              className="flex items-center justify-center gap-1 hover:text-[#3482b9] transition-colors py-0.5 w-full whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#3482b9] shrink-0" />
              <span className="font-medium tracking-tight">mct@miraclecloud-technology.com</span>
            </a>
            <a
              href="tel:+919510879991"
              className="flex items-center justify-center gap-1 font-bold text-gray-900 hover:text-[#3482b9] transition-colors py-0.5 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#3482b9] shrink-0" />
              <span>+91 9510879991</span>
            </a>
          </div>

          {/* Dynamic Active Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link, idx) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-bold transition-all relative ${active
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
            return (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${active
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
