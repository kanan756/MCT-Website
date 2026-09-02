"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="w-full z-50 bg-white sticky md:static top-0 shadow-sm md:shadow-none">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between py-2 md:py-1 gap-2 w-full">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/mct_logo.png" alt="MCT IT Solutions" className="h-[40px] sm:h-[45px] md:h-[55px] lg:h-[65px] w-auto object-contain" />
            </Link>
          </div>
          
          {/* Compact Contact Info for Mobile Only (Between Logo and Hamburger) */}
          <div className="flex md:hidden flex-col justify-center gap-[2px] flex-grow px-2 sm:px-4 overflow-hidden">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <Mail className="text-[#3585c5] w-3 h-3 flex-shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-semibold text-gray-700 truncate">mct@miraclecloud-technology.com</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-hidden">
              <Phone className="text-[#3585c5] w-3 h-3 flex-shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-semibold text-gray-700 truncate">+91 9510879991</span>
            </div>
          </div>
          
          {/* Contact Info - Hidden on mobile, visible on tablet/desktop */}
          <div className="hidden md:flex flex-wrap justify-end items-center gap-4 lg:gap-6 xl:gap-8 w-full lg:w-auto">
            <div className="flex items-center gap-2 lg:gap-3">
              <MapPin className="text-[#3585c5] w-5 h-5 lg:w-8 lg:h-8" strokeWidth={1.5} />
              <div className="text-left">
                <p className="font-bold text-xs lg:text-sm text-gray-900 leading-tight">Address</p>
                <p className="text-[10px] lg:text-xs text-gray-500">Ahmedabad, Gujarat</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-8 lg:h-10 bg-gray-200"></div>

            <div className="flex items-center gap-2 lg:gap-3">
              <Mail className="text-[#3585c5] w-5 h-5 lg:w-8 lg:h-8" strokeWidth={1.5} />
              <div className="text-left">
                <p className="font-bold text-xs lg:text-sm text-gray-900 leading-tight">Email</p>
                <p className="text-[10px] lg:text-xs text-gray-500">mct@miraclecloud-technology.com</p>
              </div>
            </div>

            <div className="hidden xl:block w-px h-10 bg-gray-200"></div>

            <div className="hidden lg:flex items-center gap-2 lg:gap-3">
              <Phone className="text-[#3585c5] w-5 h-5 lg:w-8 lg:h-8" strokeWidth={1.5} />
              <div className="text-left">
                <p className="font-bold text-xs lg:text-sm text-gray-900 leading-tight">Phone</p>
                <p className="text-[10px] lg:text-xs text-gray-500">+91 9510879991</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button (Moved to Top Bar for mobile) */}
          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3585c5] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Blue Nav Bar - Hidden on mobile, sticky on desktop */}
      <div className="hidden md:block bg-[#3585c5] text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          
          {/* Desktop Links */}
          <div className="flex items-center space-x-6 lg:space-x-8 h-full">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-xs lg:text-sm font-bold uppercase transition-colors h-full flex items-center border-t-2 hover:border-white ${activeLink === link.href ? 'border-white' : 'border-transparent'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            <div className="flex items-center gap-3 lg:gap-4">
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="px-4 py-4 space-y-2 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-[#3585c5] hover:bg-blue-50 block px-4 py-3 rounded-md text-sm font-bold uppercase transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
