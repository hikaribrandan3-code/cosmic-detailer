import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/alien-icon.png";

const Navbar = ({ onQuoteClick }: { onQuoteClick: (service?: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const detailingLinks = [
    { label: "Interior Detailing", path: "/services" },
    { label: "Exterior Detailing", path: "/services" },
    { label: "Full Detail", path: "/services" },
  ];

  const protectiveLinks = [
    { label: "Ceramic Coatings", path: "/services/protective/ceramic" },
    { label: "Paint Protection Film (PPF)", path: "/services/protective/ppf" },
    { label: "Window Tint", path: "/services/protective/tint" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Area 51 Detailing" className="h-10 w-10 object-contain" />
          <span className="font-display text-sm font-bold tracking-wider text-foreground sm:text-lg">AREA 51 DETAILING</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Home</Link>
          <Link to="/about" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/about" ? "text-[#39FF14]" : "text-muted-foreground"}`}>About</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname.startsWith("/services") ? "text-[#39FF14]" : "text-muted-foreground"}`}>
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-4 transition-all duration-300 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <div className="grid grid-cols-2 gap-4 p-6 border border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Detailing Column */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39FF14]/50 font-black border-b border-white/5 pb-2">Detailing Division</h4>
                  <div className="flex flex-col gap-2">
                    {detailingLinks.map(l => (
                      <Link key={l.label} to={l.path} className="text-[11px] uppercase tracking-wider text-white/70 hover:text-[#39FF14] transition-colors">{l.label}</Link>
                    ))}
                    <Link to="/services/protective/paint-correction" className="flex items-center gap-2 group/pc">
                       <span className="text-[11px] uppercase tracking-widest text-[#39FF14] font-bold">Paint Correction</span>
                       <Zap size={10} className="text-[#39FF14] group-hover/pc:animate-pulse" />
                    </Link>
                  </div>
                </div>

                {/* Protective Column */}
                <div className="space-y-4 border-l border-white/5 pl-4">
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39FF14]/50 font-black border-b border-white/5 pb-2">Protective Services</h4>
                  <div className="flex flex-col gap-2">
                    {protectiveLinks.map(l => (
                      <Link key={l.label} to={l.path} className="text-[11px] uppercase tracking-wider text-white/70 hover:text-[#39FF14] transition-colors">{l.label}</Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link to="/gallery" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/gallery" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Gallery</Link>
          <Link to="/faq" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/faq" ? "text-[#39FF14]" : "text-muted-foreground"}`}>FAQ</Link>
          <Link to="/contact" className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#39FF14] ${location.pathname === "/contact" ? "text-[#39FF14]" : "text-muted-foreground"}`}>Contact</Link>
          
          <Button onClick={() => onQuoteClick()} className="bg-[#39FF14] text-black font-display text-[10px] uppercase tracking-[0.2em] font-black italic hover:bg-[#32e612] transition-all px-6">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground lg:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] bg-background z-40 p-4 lg:hidden">
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-100px)]">
             <Link onClick={() => setMobileOpen(false)} to="/" className="text-xl font-black italic italic tracking-tighter uppercase">Home</Link>
             <Link onClick={() => setMobileOpen(false)} to="/about" className="text-xl font-black italic italic tracking-tighter uppercase">About</Link>
             
             <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#39FF14] font-bold">Services</p>
                <div className="grid grid-cols-1 gap-4 pl-4 border-l border-white/10">
                   <Link onClick={() => setMobileOpen(false)} to="/services" className="text-sm font-bold uppercase tracking-widest text-white/70">Regular Detailing</Link>
                   <Link onClick={() => setMobileOpen(false)} to="/services/protective/paint-correction" className="text-sm font-bold uppercase tracking-widest text-[#39FF14]">Paint Correction</Link>
                   <Link onClick={() => setMobileOpen(false)} to="/services/protective/ceramic" className="text-sm font-bold uppercase tracking-widest text-white/70">Ceramic Coatings</Link>
                   <Link onClick={() => setMobileOpen(false)} to="/services/protective/ppf" className="text-sm font-bold uppercase tracking-widest text-white/70">PPF (Clear Bra)</Link>
                   <Link onClick={() => setMobileOpen(false)} to="/services/protective/tint" className="text-sm font-bold uppercase tracking-widest text-white/70">Window Tint</Link>
                </div>
             </div>

             <Link onClick={() => setMobileOpen(false)} to="/gallery" className="text-xl font-black italic italic tracking-tighter uppercase">Gallery</Link>
             <Link onClick={() => setMobileOpen(false)} to="/faq" className="text-xl font-black italic italic tracking-tighter uppercase">FAQ</Link>
             <Link onClick={() => setMobileOpen(false)} to="/contact" className="text-xl font-black italic italic tracking-tighter uppercase">Contact</Link>
             
             <Button onClick={() => { onQuoteClick(); setMobileOpen(false); }} className="w-full bg-[#39FF14] text-black font-display uppercase font-black italic tracking-widest py-8">
               Launch My Quote
             </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
