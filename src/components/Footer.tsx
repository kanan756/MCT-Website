import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#f4f8ff] pt-24 pb-10 mt-auto overflow-hidden text-[#6a7695]">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            
            {/* Column 1: Logo & Socials */}
            <div>
               <div className="mb-6">
                  <Link href="/">
                    <img src="/mct_logo.png" alt="MCT IT Solutions" className="h-[90px] w-auto object-contain" />
                  </Link>
               </div>
               <p className="text-sm leading-relaxed mb-6 font-medium pr-4">
                 We specialize in providing cutting-edge CRM and ERP solutions through Microsoft Dynamics 365, Business Central, and the Power Platform.
               </p>
               <div className="flex items-center gap-3">
                  <Link href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#3585c5] hover:bg-[#3585c5] hover:text-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#3585c5] hover:bg-[#3585c5] hover:text-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#3585c5] hover:bg-[#3585c5] hover:text-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-[#3585c5] hover:bg-[#3585c5] hover:text-white transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Link>
               </div>
            </div>

            {/* Column 2: IT Services */}
            <div>
               <h3 className="text-lg font-bold text-[#020b26] mb-6">IT Services</h3>
               <ul className="space-y-3 text-sm font-medium">
                 <li><Link href="#" className="hover:text-[#3585c5] transition-colors">Consulting</Link></li>
                 <li><Link href="#" className="hover:text-[#3585c5] transition-colors">Implementation</Link></li>
                 <li><Link href="#" className="hover:text-[#3585c5] transition-colors">Integration</Link></li>
                 <li><Link href="#" className="hover:text-[#3585c5] transition-colors">Support</Link></li>
                 <li><Link href="#" className="hover:text-[#3585c5] transition-colors">Development</Link></li>
               </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
               <h3 className="text-lg font-bold text-[#020b26] mb-6">Contact Info</h3>
               <ul className="space-y-4 text-sm font-medium">
                 <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#3585c5] flex-shrink-0 mt-0.5" />
                    <span>306-307 Radhe Kishan Arista, Maninagar,<br/>Ahmedabad(Gujarat,India)</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#3585c5] flex-shrink-0" />
                    <span>+91 9510879991</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#3585c5] flex-shrink-0" />
                    <span>mct@miraclecloud-technology.com</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#3585c5] flex-shrink-0" />
                    <span>Opening Hours: 10:00 - 18:00</span>
                 </li>
               </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
               <h3 className="text-lg font-bold text-[#020b26] mb-6">Newsletter</h3>
               <p className="text-sm leading-relaxed mb-6 font-medium pr-4">
                 Subscribe to our newsletter for the latest IT news, tips & tricks.
               </p>
               <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-white rounded-full px-5 py-3.5 text-sm outline-none shadow-[0_2px_10px_rgba(0,0,0,0.05)] focus:border-[#3585c5] border border-transparent" />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#ff5e14] text-white w-11 rounded-full flex items-center justify-center hover:bg-[#020b26] transition-colors">
                     <Send className="w-4 h-4 -ml-0.5" />
                  </button>
               </div>
            </div>

         </div>

         {/* Bottom Bar */}
         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold uppercase tracking-wider relative">
            <p>&copy; 2026 All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
               <Link href="#" className="hover:text-[#3585c5] transition-colors">Home</Link>
               <Link href="#" className="hover:text-[#3585c5] transition-colors">About</Link>
               <Link href="#" className="hover:text-[#3585c5] transition-colors">Blog</Link>
               <Link href="#" className="hover:text-[#3585c5] transition-colors">Shop</Link>
               <Link href="#" className="hover:text-[#3585c5] transition-colors">FAQs</Link>
            </div>
            
            {/* Scroll to top */}
         </div>
      </div>
    </footer>
  );
}
