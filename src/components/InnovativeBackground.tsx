export default function InnovativeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#f8fafc] overflow-hidden pointer-events-none">
      
      {/* Light gradient wash */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-[#e0f2fe]/50 to-transparent" />
      
      {/* Neural Network SVG Pattern */}
      <div className="hidden md:block absolute top-[-20%] left-[-10%] w-[120vw] h-[120vh] opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="#3482b9" />
              <circle cx="80" cy="40" r="4" fill="#3482b9" />
              <circle cx="40" cy="80" r="2" fill="#e74c3c" />
              <circle cx="90" cy="90" r="3" fill="#3482b9" />
              <line x1="20" y1="20" x2="80" y2="40" stroke="#3482b9" strokeWidth="1" opacity="0.4" />
              <line x1="80" y1="40" x2="40" y2="80" stroke="#3482b9" strokeWidth="1" opacity="0.4" />
              <line x1="20" y1="20" x2="40" y2="80" stroke="#3482b9" strokeWidth="1" opacity="0.4" />
              <line x1="80" y1="40" x2="90" y2="90" stroke="#3482b9" strokeWidth="1" opacity="0.4" />
              <line x1="40" y1="80" x2="90" y2="90" stroke="#3482b9" strokeWidth="1" opacity="0.4" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* Floating Accent Nodes */}
      <div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-[#E32128]/20 blur-[80px]" />
      <div className="absolute top-[60%] right-[20%] w-48 h-48 rounded-full bg-[#3482B9]/20 blur-[100px]" />
      
    </div>
  );
}
