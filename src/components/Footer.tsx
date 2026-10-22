"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#1b2234] text-slate-300 pt-20 pb-8 border-t border-slate-700/50 relative overflow-hidden">
      {/* Subtle brand glow behind footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482b9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#e74c3c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 3 Columns from original screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-700/60">

          {/* Column 1: CONTACT US */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase mb-8">
              CONTACT US
            </h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold text-slate-200 flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#3482b9]" />
                  Address:
                </p>
                <p className="text-slate-300 pl-6 leading-relaxed">
                  306 307 Radhe Kishan Arista, Maninagar, Ahmedabad(Gujarat,India)
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <p className="text-slate-300 flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#3482b9]" />
                  <span>Phone: </span>
                  <a href="tel:+919510879991" className="hover:text-white transition-colors">
                    +91 9510879991
                  </a>
                </p>

                <p className="text-slate-300 flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#3482b9]" />
                  <span>Email: </span>
                  <a href="mailto:mct@miraclecloud-technology.com" className="hover:text-white transition-colors">
                    mct@miraclecloud-technology.com
                  </a>
                </p>

                <p className="text-slate-300 flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#3482b9]" />
                  <span>Website: </span>
                  <Link href="/" className="hover:text-white transition-colors">
                    www.miracle-cloudtechnology.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: EMAIL US (Interactive Form from screenshot) */}
          <div className="lg:col-span-5">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase mb-8">
              EMAIL US
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#3482b9]/15 border border-[#3482b9]/40 text-center">
                <CheckCircle className="w-10 h-10 text-[#3482b9] mx-auto mb-2" />
                <p className="text-white font-bold text-base mb-1">Thank you for reaching out!</p>
                <p className="text-xs text-slate-300">We have received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131927] border border-slate-700 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#3482b9] transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131927] border border-slate-700 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#3482b9] transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131927] border border-slate-700 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#3482b9] transition-colors resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3482b9] hover:bg-[#1f6595] text-white py-3.5 rounded-lg font-extrabold text-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>SEND</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Column 3: USEFUL LINKS */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase mb-8">
              USEFUL LINKS
            </h3>

            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Careers", href: "/about/careers" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link, idx) => (
                <li key={idx} className="border-b border-slate-700/40 pb-2.5 last:border-0 last:pb-0">
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-[#5ba6db] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3482b9]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links & Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-6">
          <p className="text-center md:text-left">
            © Copyright{" "}
            <Link href="/" className="text-slate-300 hover:text-white">
              MCT IT Solutions Pvt. Ltd 2026 All rights reserved
            </Link>
          </p>

          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Support</Link>
            <span className="text-slate-600">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Disclaimer</Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          {/* Social Icons matching user links */}
          <div className="flex items-center gap-4 text-slate-300">
            {/* Facebook */}
            <a href="https://www.facebook.com/people/MCTIT-Solution-PVT-LTD/61556353773723/?_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#3482b9] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/mctit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#3482b9] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.69 1.69 1.69 0 0 0-3.38 0c0 .93.76 1.69 1.69 1.69m1.39 9.74v-8.37H5.07v8.37h2.78z" /></svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com/mctitsolutions" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="hover:text-[#3482b9] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/mctitsolutionspvtltd/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#e74c3c] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@mctitsolutionspvt.ltd.mcti1287" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#e74c3c] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
