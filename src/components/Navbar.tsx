"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MapPin, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top Bar with exact contact details */}
      <div className="bg-[#0b1b3d] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#3482b9]" />
              <a href="mailto:mct@miraclecloud-technology.com" className="hover:text-white transition-colors">
                mct@miraclecloud-technology.com
              </a>
            </span>
          </div>
          <div>
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Phone className="w-3.5 h-3.5 text-[#e74c3c]" />
              <a href="tel:+919510879991">+91 9510879991</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center group py-2">
            <img 
              src="/mct_logo.png" 
              alt="MCT IT Solutions (P) Ltd." 
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Exact links from content */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link href="/" className="px-3 py-2 text-sm font-bold text-[#3482b9] hover:text-[#1f6595] transition-colors">
              Home
            </Link>
            <Link href="https://www.miracle-cloudtechnology.com/product/" className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9] transition-colors">
              Products
            </Link>
            <Link href="https://www.miracle-cloudtechnology.com/services/" className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9] transition-colors">
              Services
            </Link>
            <Link href="https://www.miracle-cloudtechnology.com/about-us/" className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9] transition-colors">
              About us
            </Link>
            <Link href="https://www.miracle-cloudtechnology.com/contact-us/" className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center">
            <Link
              href="https://www.miracle-cloudtechnology.com/contact-us/"
              className="bg-[#3482b9] hover:bg-[#1f6595] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-[#3482b9]">
            Home
          </Link>
          <Link href="https://www.miracle-cloudtechnology.com/product/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9]">
            Products
          </Link>
          <Link href="https://www.miracle-cloudtechnology.com/services/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9]">
            Services
          </Link>
          <Link href="https://www.miracle-cloudtechnology.com/about-us/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9]">
            About us
          </Link>
          <Link href="https://www.miracle-cloudtechnology.com/contact-us/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#3482b9]">
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="https://www.miracle-cloudtechnology.com/contact-us/"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#3482b9] text-white py-2.5 rounded-full text-sm font-bold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
