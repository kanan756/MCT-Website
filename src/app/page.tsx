"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { 
  Settings, Cloud, ShieldCheck, 
  Search, BarChart2, 
  Code, Smartphone, Database, 
  CheckCircle, Quote,
  ArrowLeft, ArrowRight,
  Users, Clock, Rocket, Laptop, Play,
  Calendar, User
} from "lucide-react";
import Image from "next/image";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        
        if (progress < 1) {
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(end * easeOut));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={`inline-block ${className || ""}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <main className="flex flex-col text-gray-900 w-full overflow-hidden bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[800px] xl:h-[900px] bg-[#020b26] flex items-center overflow-hidden">
        {/* Dotted World Map Background Overlay (Parallax) */}
        <motion.div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", 
            backgroundSize: "60px",
            backgroundBlendMode: "overlay",
            y: y1
          }}
        ></motion.div>
        
        {/* Subtle gradient highlights */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a1d56]/50 to-transparent pointer-events-none"></div>

        {/* Floating Elements (Animation 2) */}
        <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-[#3585c5] rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[40%] w-8 h-8 border-2 border-[#3585c5] rounded-full opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-6 h-6 bg-white rounded-full opacity-20 animate-[float_5s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex h-full items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-[70%] xl:w-[75%] lg:-ml-12 xl:-ml-24 pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-[2px] bg-[#3b82f6]"></div>
                 <span className="text-white font-bold tracking-widest text-sm uppercase">IT Software & Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-black text-white leading-[1.2] tracking-tight mb-10 uppercase relative z-20 whitespace-nowrap">
                Leading IT & Software <br/>
                {/* Typewriter Effect (Animation 5) */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-typewriter inline-block align-bottom">Development Company</span>
              </h1>
              
              {/* Pulse / Ripple Effect on Button (Animation 4) */}
              <MagneticButton>
                <button className="relative group overflow-hidden border-2 border-white text-white rounded-full px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-300 z-20 hover:border-[#3585c5]">
                  <span className="relative z-10 group-hover:text-white">Get In Touch</span>
                  {/* Ripple Background */}
                  <div className="absolute inset-0 bg-[#3585c5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                  {/* Outer Pulse Glow */}
                  <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(53,133,197,0.5)] animate-pulse group-hover:shadow-[0_0_25px_rgba(53,133,197,0.9)]"></div>
                </button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Right Curved Image Mask - Redesigned for Responsiveness */}
        <div className="absolute inset-0 lg:bottom-0 lg:left-auto lg:right-0 lg:w-[55%] h-full pointer-events-none z-0 opacity-30 lg:opacity-100">
           {/* The secondary blue accent curve - Desktop only */}
           <div className="hidden lg:block absolute -bottom-[20%] -right-[10%] w-[120%] h-[120%] bg-[#0f3bb3] rounded-tl-full opacity-80"></div>
           
           {/* The main white curved wrapper containing the image */}
           <div className="absolute inset-0 lg:-bottom-[15%] lg:-right-[5%] lg:w-[110%] lg:h-[110%] lg:bg-white lg:rounded-tl-[100%] overflow-hidden lg:border-[15px] lg:border-white lg:shadow-2xl pointer-events-auto">
               <Image 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                 alt="Team working"
                 fill
                 className="object-cover object-center"
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 priority
               />
               <div className="absolute inset-0 bg-[#020b26]/50 lg:hidden"></div>
           </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SNIPPET */}
      <section className="relative w-full -mt-20 z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-12">
            <div className="text-center mb-12">
               <span className="bg-blue-50 text-[#3585c5] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Solutions</span>
               <h2 className="text-3xl font-black text-gray-900">
                 Over 30+ Years IT & Technology <br/> Solutions Includes
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Card 1 */}
              <div className="flex flex-col items-center p-4">
                 <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-2 border border-blue-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <Settings className="w-8 h-8 text-[#3585c5]" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">IT Management</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">Quisque placerat vitae lacus ut scelerisque. Fusce sed luctus odio ac nibh luctus.</p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center p-4">
                 <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-2 border border-blue-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <Cloud className="w-8 h-8 text-[#3585c5]" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Cloud Services</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">Quisque placerat vitae lacus ut scelerisque. Fusce sed luctus odio ac nibh luctus.</p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center p-4">
                 <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-2 border border-blue-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <ShieldCheck className="w-8 h-8 text-[#3585c5]" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Data Security</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">Quisque placerat vitae lacus ut scelerisque. Fusce sed luctus odio ac nibh luctus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section className="w-full py-32 px-4 bg-gray-50 overflow-hidden">
         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 md:p-8">
               
               {/* rs-animation-shape equivalent wrapper */}
               <div className="relative w-full max-w-[550px] lg:max-w-[600px]">
                  
                  {/* The actual Main Image (about-3.png) which already has the perfect shape/design */}
                  {/* Scaled up slightly (3%) to perfectly cover any cut-off edges from the ribbon behind it */}
                  <div className="relative z-10 w-full drop-shadow-2xl scale-[1.03]">
                     <Image 
                       src="https://rstheme.com/products/html/braintech/assets/images/about/about-3.png" 
                       alt="About us" 
                       width={600}
                       height={600}
                       className="w-full h-auto object-contain relative z-10" 
                     />
                  </div>
                  
                  {/* middle-image2 (effect-1.png) - placed behind main image */}
                  <div 
                    className="absolute z-0 pointer-events-none top-1/2 left-1/2"
                    style={{ transform: 'translate(-55%, -50%)', width: '90%', height: '135%', marginTop: '4%' }}
                  >
                     <motion.div 
                       className="relative w-full h-full"
                       animate={{ scale: [0.95, 1.05, 0.95] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     >
                        <Image 
                          src="https://rstheme.com/products/html/braintech/assets/images/about/effect-1.png"
                          alt="Decorative Ribbons"
                          fill
                          className="object-contain"
                        />
                     </motion.div>
                  </div>
               </div>

               {/* shape-image: The extra floating/dancing shapes from the inspect code */}
               <div className="absolute inset-0 pointer-events-none z-0">
                  <motion.div
                    className="absolute top-[10%] right-[10%] opacity-80"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <Image src="https://rstheme.com/products/html/braintech/assets/images/about/dotted-3.png" alt="Dots" width={100} height={100} className="object-contain" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-[5%] left-[5%] opacity-80"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <Image src="https://rstheme.com/products/html/braintech/assets/images/about/shape3.png" alt="Shape" width={80} height={80} className="object-contain" />
                  </motion.div>
               </div>
            </div>

            {/* Right Text Area (Animation 1: Scroll Fade-in-up) */}
            <motion.div 
              className="w-full lg:w-1/2 lg:pl-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               <span className="bg-[#e9f0ff] text-[#3585c5] px-5 py-1.5 rounded-full text-[13px] font-semibold tracking-wider uppercase mb-5 inline-block">About Us</span>
               <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#020b26] mb-5 leading-[1.2] max-w-[500px]">
                 We deliver solutions and perspective
               </h2>
               <p className="text-[#6a7695] text-[15px] leading-[1.8] mb-6 max-w-[500px]">
                 As MCT IT Solutions continues to grow, we are recognized for our focus on delivering innovative solutions, technical excellence, and client-driven success.
               </p>
               <p className="text-[#6a7695] text-[15px] leading-[1.8] mb-10 max-w-[550px]">
                 We’ve consistently delivered measurable results, including a 20% increase in operational efficiency for our clients, along with improved system reliability and seamless integrations that optimize business processes. We aim to build strong partnerships and nurture talent within our team of experts. Our goal is to empower businesses to thrive by offering solutions that align with their unique goals.
               </p>
               
               {/* Number Counting Animation (Animation 3) */}
               <div className="flex gap-10 mb-10 border-l-4 border-[#3585c5] pl-6 py-2">
                 <div>
                   <h3 className="text-4xl font-black text-[#3585c5]"><AnimatedCounter end={30} suffix="+" duration={2500} /></h3>
                   <p className="text-sm font-bold text-gray-800 uppercase tracking-widest mt-1">Years Experience</p>
                 </div>
                 <div>
                   <h3 className="text-4xl font-black text-[#3585c5]"><AnimatedCounter end={500} suffix="+" duration={3000} /></h3>
                   <p className="text-sm font-bold text-gray-800 uppercase tracking-widest mt-1">Projects Done</p>
                 </div>
               </div>

               <button className="bg-gradient-to-r from-[#3585c5] to-[#2563eb] text-white rounded-full px-9 py-3.5 font-bold text-[15px] hover:shadow-lg hover:opacity-90 transition-all duration-300">
                 Learn-More
               </button>
            </motion.div>
         </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="w-full py-24 px-4 bg-white relative">
         <div className="absolute top-10 right-10 w-32 h-32 opacity-20" style={{ backgroundImage: "radial-gradient(#3585c5 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
         
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <span className="bg-blue-50 text-[#3585c5] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Services</span>
               <h2 className="text-4xl font-black text-gray-900">
                 We Are Offering All Kinds of <br/> IT Solutions Services
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Consulting", icon: <Search className="w-14 h-14 mx-auto text-[#3585c5]" /> },
                 { title: "Implementation", icon: <Code className="w-14 h-14 mx-auto text-[#3585c5]" /> },
                 { title: "Integration", icon: <Settings className="w-14 h-14 mx-auto text-[#3585c5]" /> },
                 { title: "Support", icon: <ShieldCheck className="w-14 h-14 mx-auto text-[#3585c5]" /> },
                 { title: "Development", icon: <Code className="w-14 h-14 mx-auto text-[#3585c5]" /> },
                 { title: "Migration", icon: <Cloud className="w-14 h-14 mx-auto text-[#3585c5]" /> }
               ].map((srv, idx) => (
                 <motion.div 
                   key={idx} 
                   className="group relative p-10 rounded-xl text-center transition-all duration-500 bg-white shadow-[0_5px_30px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-gray-50 flex flex-col justify-center min-h-[340px]"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.5, delay: idx * 0.15 }}
                 >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3585c5] to-[#0a1d56] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full transition-transform duration-500">
                       
                       {/* Icon Wrapper - Fades out and collapses on hover */}
                       <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4 group-hover:max-h-0 group-hover:mb-0 max-h-24 mb-6 overflow-hidden">
                          {srv.icon}
                       </div>
                       
                       <h3 className="text-[22px] font-bold mb-4 text-[#020b26] group-hover:text-white transition-colors duration-500">{srv.title}</h3>
                       
                       <p className="text-[15px] leading-relaxed text-[#6a7695] group-hover:text-white/90 transition-colors duration-500">
                         We specialize in Microsoft Dynamics 365 modules with expertise in Business Central and Power Platform.
                       </p>
                       
                       {/* Hidden Button that appears on hover */}
                       <div className="transition-all duration-500 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 overflow-hidden mt-0 group-hover:mt-8">
                          <button className="bg-white text-[#020b26] rounded-full px-8 py-3.5 font-bold text-[13px] uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-lg">
                            Get In Touch
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. EXPERT IT CONSULTANTS (TEAM) */}
      <section className="w-full py-32 px-4 relative bg-[#020b26] overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>
         <div className="absolute -left-20 top-0 w-96 h-96 border-[1px] border-white/5 rounded-full"></div>
         <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] border-[1px] border-white/5 rounded-full"></div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <span className="bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Team</span>
               <h2 className="text-4xl font-black text-white">
                 The Team Behind Exceptional Digital Experiences
               </h2>
               <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
                 MCT IT Solutions Pvt Ltd is an innovative and rapidly growing company, founded by experienced industry experts. We specialize in providing cutting-edge CRM and ERP solutions through Microsoft Dynamics 365, Business Central, and the Power Platform.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
               {[
                 { name: "Makhaia Antitni", role: "President & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
                 { name: "Corey Anderson", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" },
                 { name: "Masud Rana", role: "Web Developer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop" }
               ].map((member, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    <div className="relative w-[230px] h-[230px] mb-8 group cursor-pointer mx-auto">
                       
                       {/* Background decorative shapes that appear on hover */}
                       {/* Top Right Outer Dark Blue Pill */}
                       <div className="absolute top-2 -right-8 w-8 h-28 bg-[#3585c5] rounded-full rotate-[40deg] -z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-500 delay-[50ms]"></div>
                       
                       {/* Top Right Inner Light Blue Pill */}
                       <div className="absolute -top-4 -right-1 w-8 h-28 bg-[#5b8cff] rounded-full rotate-[40deg] -z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-500"></div>
                       
                       {/* Bottom Left Circle */}
                       <div className="absolute -bottom-2 -left-4 w-16 h-16 bg-[#3585c5] rounded-full -z-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-500"></div>
                       
                       {/* Main Image */}
                       <div className="w-full h-full rounded-full overflow-hidden relative z-10 transition-transform duration-500 group-hover:border-4 group-hover:border-[#020b26]">
                          <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                       </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#3b82f6] text-[13px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                    <div className="flex gap-5 text-white/50 mt-2">
                       <span className="hover:text-white cursor-pointer transition-colors text-[15px] font-semibold">f</span>
                       <span className="hover:text-white cursor-pointer transition-colors text-[15px] font-semibold">in</span>
                       <span className="hover:text-white cursor-pointer transition-colors text-[15px] font-semibold">x</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* INFINITE MARQUEE SECTION */}
      <section className="w-full py-16 bg-[#f4f7fc] overflow-hidden flex flex-col items-center border-y border-gray-200">
         <p className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-8">Technologies We Master</p>
         <div className="w-full relative flex overflow-hidden">
           {/* Gradient Masks for fading edges */}
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f4f7fc] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f7fc] to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-max items-center">
             {[
               "React", "Node.js", "Microsoft Dynamics 365", "Power Platform", 
               "Azure Cloud", "Business Central", "Next.js", "TypeScript", 
               "React", "Node.js", "Microsoft Dynamics 365", "Power Platform", 
               "Azure Cloud", "Business Central", "Next.js", "TypeScript"
             ].map((tech, idx) => (
               <span key={idx} className="mx-12 text-2xl font-black text-gray-800 opacity-30 hover:opacity-100 hover:text-[#3585c5] transition-all duration-300">
                 {tech}
               </span>
             ))}
           </div>
         </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="w-full py-24 px-4 bg-white text-center">
         <div className="max-w-6xl mx-auto">
            <div className="mb-20">
               <span className="bg-[#e9f0ff] text-[#3585c5] px-5 py-1.5 rounded-full text-[13px] font-semibold tracking-wider uppercase mb-5 inline-block">Features</span>
               <h2 className="text-[36px] md:text-[42px] font-bold text-[#020b26]">
                 Why us?
               </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-16">
               {[
                 { title: "PowerApps", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=300&auto=format&fit=crop" },
                 { title: "PowerPages", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=300&auto=format&fit=crop" },
                 { title: "Customer Engagement", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop" },
                 { title: "BusinessCentral", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=300&auto=format&fit=crop" }
               ].map((step, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    <div className="relative w-[210px] h-[210px] mb-8 flex items-center justify-center group cursor-pointer">
                       
                       {/* Pixel-perfect SVG Background for dotted line */}
                       <div className="absolute inset-0 z-0 flex items-center justify-center">
                         <div className="relative w-[210px] h-[210px]">
                           {/* Orbiting Dotted/Dashed border */}
                           <svg width="210" height="210" viewBox="0 0 210 210" className="absolute inset-0 animate-[spin_27s_linear_infinite]">
                             <circle cx="105" cy="105" r="103" fill="none" stroke="#3585c5" strokeWidth="1.5" strokeDasharray="5, 6" />
                           </svg>
                         </div>
                       </div>
                       
                       {/* Inner Image Container (white gap perfectly masks the inner halves of the dark blue circles) */}
                       <div className="relative w-[174px] h-[174px] bg-white rounded-full flex items-center justify-center z-10 p-[8px]">
                          <div className="w-full h-full rounded-full overflow-hidden relative">
                             <Image src={step.img} alt={step.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                       </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#020b26]">{step.title}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>



      {/* 8. RECENT LAUNCHED PROJECTS */}
      <section className="w-full py-32 relative bg-[#020b26] overflow-hidden text-center">
         {/* Background Concentric Curves */}
         <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-[1800px] h-[1800px] rounded-full border-[1px] border-white/30 absolute"></div>
            <div className="w-[1400px] h-[1400px] rounded-full border-[1px] border-white/30 absolute"></div>
            <div className="w-[1000px] h-[1000px] rounded-full border-[1px] border-white/30 absolute"></div>
            <div className="w-[600px] h-[600px] rounded-full border-[1px] border-white/30 absolute"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <span className="bg-white/10 text-white px-5 py-1.5 rounded-full text-[13px] font-semibold tracking-wider uppercase mb-5 inline-block">Projects</span>
            <h2 className="text-[36px] md:text-[42px] font-bold text-white mb-16 max-w-2xl mx-auto leading-tight">
              Our Recent Launched Projects Available into Market
            </h2>

            <div className="relative">
               {/* Left Arrow */}
               <button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center text-[#020b26] shadow-xl z-20 hover:bg-[#3585c5] hover:text-white transition-colors duration-300">
                 <ArrowLeft size={20} strokeWidth={3} />
               </button>

               {/* Right Arrow */}
               <button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center text-[#020b26] shadow-xl z-20 hover:bg-[#3585c5] hover:text-white transition-colors duration-300">
                 <ArrowRight size={20} strokeWidth={3} />
               </button>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "CleanMail Pro", category: "Email Validation Tool", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" },
                    { title: "IntelliKB", category: "AI-Powered Knowledge", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" },
                    { title: "Custom CRM", category: "Business Operations", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" }
                  ].map((proj, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer bg-white">
                       <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                       
                       {/* Dark Overlay */}
                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       {/* Hover Text Content */}
                       <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                          <h3 className="text-[22px] font-bold mb-1">{proj.title}</h3>
                          <span className="text-[13px] font-semibold text-gray-300">{proj.category}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="w-full py-24 px-4 bg-white relative">
         <div className="max-w-5xl mx-auto text-center">
            <span className="bg-[#e9f0ff] text-[#3585c5] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 inline-block">Testimonial</span>
            <h2 className="text-[36px] md:text-[42px] font-bold text-[#020b26] mb-16">
              What Saying Our Customers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "Vishal Bhavsar", role: "Director, Mortgage Industry", quote: "MCT has been a valuable technical partner for 6+ years. We thank you for your sincere & dedicated efforts with timely deliverables on each projects. We highly recommend your services." },
                 { name: "Damjan Krivosija", role: "US Client", quote: "We’re extremely satisfied with the MCT IT Solution we’ve been working with. They consistently meet deadlines, communicate clearly, and deliver high-quality code. Their proactive approach to problem-solving is great." },
                 { name: "liroy chauhan", role: "India", quote: "I appreciate the professionalism and dedication your team consistently demonstrates. The staff you provided were punctual and dependable, which ensured our operations ran smoothly." }
               ].map((test, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    {/* Blue Square Card with down arrow */}
                    <div className="bg-[#0a1d56] p-10 rounded-xl shadow-2xl relative mb-12 w-full text-center group hover:bg-[#3585c5] transition-colors duration-300 cursor-pointer flex-grow flex flex-col justify-center">
                       <Quote className="w-12 h-12 text-white opacity-40 mb-6 mx-auto fill-current shrink-0" />
                       <p className="text-white text-[15px] leading-relaxed mb-2 font-medium">
                         {test.quote}
                       </p>
                       {/* Downward triangle/arrow */}
                       <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-r-[18px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#0a1d56] group-hover:border-t-[#3585c5] transition-colors duration-300"></div>
                    </div>

                    {/* Circular Photo */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-transparent shadow-lg">
                       <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Client" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="font-bold text-[#020b26] text-lg">{test.name}</h4>
                    <p className="text-[#6a7695] text-[13px] font-medium">{test.role}</p>
                 </div>
               ))}
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center items-center gap-2 mt-12">
               <div className="w-6 h-2 bg-[#3585c5] rounded-full cursor-pointer"></div>
               <div className="w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer transition-colors"></div>
            </div>
         </div>
      </section>

      {/* 10. COUNTER & CONSULTATION */}
      <section className="w-full relative bg-white pb-24">
         {/* Dark blue top half with concentric circles */}
         <div className="absolute top-0 left-0 w-full h-[60%] bg-[#020b26] z-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
               <div className="w-[1800px] h-[1800px] rounded-full border-[1px] border-white/30 absolute"></div>
               <div className="w-[1400px] h-[1400px] rounded-full border-[1px] border-white/30 absolute"></div>
               <div className="w-[1000px] h-[1000px] rounded-full border-[1px] border-white/30 absolute"></div>
               <div className="w-[600px] h-[600px] rounded-full border-[1px] border-white/30 absolute"></div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10 pt-20">
            
            {/* Counters Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
               <div className="flex items-center justify-center md:justify-start gap-5 text-white">
                  <div>
                    <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-[36px] font-bold mb-0 leading-none">
                       <AnimatedCounter end={100} /><span className="text-white">k+</span>
                     </h3>
                     <p className="text-[10px] font-bold tracking-widest uppercase text-white mt-2">Happy Clients</p>
                  </div>
               </div>
               
               <div className="flex items-center justify-center md:justify-start gap-5 text-white">
                  <div>
                    <Clock className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-[36px] font-bold mb-0 leading-none">
                       <AnimatedCounter end={30} /><span className="text-white">+</span>
                     </h3>
                     <p className="text-[10px] font-bold tracking-widest uppercase text-white mt-2">Years Experience</p>
                  </div>
               </div>
               
               <div className="flex items-center justify-center md:justify-start gap-5 text-white">
                  <div>
                    <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-[36px] font-bold mb-0 leading-none">
                       <AnimatedCounter end={200} /><span className="text-white">+</span>
                     </h3>
                     <p className="text-[10px] font-bold tracking-widest uppercase text-white mt-2">Products</p>
                  </div>
               </div>
               
               <div className="flex items-center justify-center md:justify-start gap-5 text-white">
                  <div>
                    <Laptop className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-[36px] font-bold mb-0 leading-none">
                       <AnimatedCounter end={100} /><span className="text-white">+</span>
                     </h3>
                     <p className="text-[10px] font-bold tracking-widest uppercase text-white mt-2">Expert Engineers</p>
                  </div>
               </div>
            </div>
            
            {/* Consultation Container */}
            <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative max-w-[950px] mx-auto border border-gray-100">
               {/* Left Image Side */}
               <div className="w-full lg:w-[45%] relative h-[450px] lg:h-auto bg-gray-200">
                  <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Consultation" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-[#3585c5] rounded-full animate-ping opacity-60"></div>
                        <button className="relative w-16 h-16 bg-[#3585c5] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                           <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </button>
                     </div>
                  </div>
               </div>
               
               {/* Right Form Side */}
               <div className="w-full lg:w-[55%] bg-[#f4f8ff] p-10 md:p-14 text-left">
                  <span className="bg-[#e9f0ff] text-[#3585c5] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 inline-block">Query</span>
                  <h2 className="text-3xl md:text-[34px] font-bold text-[#020b26] mb-8 leading-tight">Request Free Consultation</h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name" className="w-full px-5 py-3.5 rounded bg-white border border-transparent focus:border-[#3585c5] outline-none text-[13px] shadow-sm text-gray-700" />
                      <input type="email" placeholder="E-Mail" className="w-full px-5 py-3.5 rounded bg-white border border-transparent focus:border-[#3585c5] outline-none text-[13px] shadow-sm text-gray-700" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Phone Number" className="w-full px-5 py-3.5 rounded bg-white border border-transparent focus:border-[#3585c5] outline-none text-[13px] shadow-sm text-gray-700" />
                      <input type="text" placeholder="Your Website" className="w-full px-5 py-3.5 rounded bg-white border border-transparent focus:border-[#3585c5] outline-none text-[13px] shadow-sm text-gray-700" />
                    </div>
                    <textarea placeholder="Your Message Here" rows={4} className="w-full px-5 py-3.5 rounded bg-white border border-transparent focus:border-[#3585c5] outline-none text-[13px] resize-none shadow-sm text-gray-700"></textarea>
                    
                    <button type="submit" className="bg-[#3585c5] text-white px-9 py-3.5 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-[#020b26] transition-colors duration-300 mt-2">
                       Submit Now
                    </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* 11. BLOG / LATEST TIPS & TRICKS */}
      <section className="w-full py-24 px-4 bg-[#f8fbff] relative">
         <div className="max-w-6xl mx-auto text-center">
            <span className="bg-[#e9f0ff] text-[#3585c5] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 inline-block">Blog</span>
            <h2 className="text-[36px] md:text-[42px] font-bold text-[#020b26] mb-16">
              Read Our Latest Tips & Tricks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               {[
                 { 
                   tag: "CRM Compliance",
                   date: "26 December 2022",
                   admin: "admin",
                   title: "How to Ensure GDPR Compliance with Dynamics CRM",
                   desc: "Learn the essential steps and best practices to ensure your Microsoft Dynamics CRM implementation is fully GDPR compliant.",
                   img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                 },
                 { 
                   tag: "Dynamics 365",
                   date: "31 December 2022",
                   admin: "admin",
                   title: "How to Unlock the Power of Dynamics 365 Social Engagement in Dynamics 365 On-Premise",
                   desc: "Discover strategies to leverage social engagement features effectively within your on-premise Dynamics 365 environment.",
                   img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
                 },
                 { 
                   tag: "Copilot AI",
                   date: "26 Jan 2023",
                   admin: "admin",
                   title: "How to Deliver 24/7 Customer Service Using Intelligent Copilot Agents",
                   desc: "A comprehensive guide on integrating Copilot Agents to automate and enhance your customer service operations around the clock.",
                   img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                 }
               ].map((blog, idx) => (
                 <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                    <div className="relative h-60 w-full overflow-hidden">
                       <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute bottom-4 right-4 bg-[#3585c5] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase z-10">
                          {blog.tag}
                       </div>
                    </div>
                    <div className="p-8">
                       <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#3585c5]" /> {blog.date}</span>
                          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#3585c5]" /> {blog.admin}</span>
                       </div>
                       <h3 className="text-xl font-bold text-[#020b26] mb-4 group-hover:text-[#3585c5] transition-colors leading-snug">
                         {blog.title}
                       </h3>
                       <p className="text-[#6a7695] text-sm mb-6 leading-relaxed">
                         {blog.desc}
                       </p>
                       <Link href="#" className="flex items-center gap-2 text-[13px] font-bold text-[#3585c5] uppercase tracking-widest hover:text-[#020b26] transition-colors">
                          Learn More <ArrowRight className="w-4 h-4" />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 12. CTA BANNER */}
      <section className="w-full bg-[#020b26] py-14 px-4 relative overflow-hidden border-b-[8px] border-b-[#f4f8ff]">
         <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Settings className="w-96 h-96" />
         </div>
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
            <h2 className="text-3xl md:text-[32px] font-bold text-white mb-8 md:mb-0 max-w-xl leading-snug">
               Grow Your Business and Build Your Website or Software With us.
            </h2>
            <Link href="#" className="bg-[#3585c5] text-white px-9 py-4 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-white hover:text-[#020b26] transition-colors duration-300 shadow-xl whitespace-nowrap">
               Get In Touch
            </Link>
         </div>
      </section>

    </main>
  );
}
