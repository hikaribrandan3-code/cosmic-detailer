import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Shield, Sparkles, Zap, Target, Crosshair, CheckCircle2, Award, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const PPF = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [selectedPackage, setSelectedPackage] = useState<"partial" | "full-front" | "full-car">("full-front");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const packages = {
    "partial": {
      title: "PARTIAL FRONT",
      price: "$1,300",
      zones: ["hood-front", "bumper", "headlights"],
      desc: "Essential impact protection for high-velocity road debris."
    },
    "full-front": {
      title: "FULL FRONT",
      price: "$2,100",
      zones: ["hood", "bumper", "headlights", "mirrors"],
      desc: "Complete front-end preservation. Includes mirrors and high-impact areas."
    },
    "full-car": {
      title: "FULL CAR",
      price: "QUOTE",
      zones: ["hood", "bumper", "headlights", "mirrors", "body", "roof", "rear"],
      desc: "Total mission critical protection. Every painted surface sealed."
    }
  };

  const isActive = (zone: string) => packages[selectedPackage].zones.includes(zone);

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 overflow-hidden selection:bg-[#00ff88] selection:text-black">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Tactical Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] font-mono text-[10px] uppercase tracking-[0.3em]">
             <Target size={12} className="animate-pulse" />
             PPF / SIDE-PROFILE SPECIMEN ANALYSIS
          </div>
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            AREA 51 <span className="text-[#00ff88] text-glow">PPF</span> DIVISION
          </h1>
          <p className="font-mono text-xs lg:text-sm uppercase tracking-[0.4em] text-muted-foreground max-w-2xl mx-auto italic">
            TACTICAL PAINT PROTECTION FILM / TESLA MODEL 3
          </p>
        </div>

        {/* Interactive Simulation Zone */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Coverage Selection Toggles */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-30">
            {(Object.keys(packages) as Array<keyof typeof packages>).map((pkg) => (
              <button
                key={pkg}
                onClick={() => setSelectedPackage(pkg)}
                className={`px-8 py-3 rounded-none font-display text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  selectedPackage === pkg 
                    ? "bg-[#00ff88] border-[#00ff88] text-black shadow-[0_0_30px_#00ff88/30]" 
                    : "bg-transparent border-white/10 text-white/50 hover:border-[#00ff88]/50 hover:text-white"
                }`}
              >
                {packages[pkg].title}
              </button>
            ))}
          </div>

          {/* THE CAR MAP (Side View Specimen) */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            {/* Base Specimen Image (Side Profile) */}
            <div className="relative z-10 flex justify-center">
              <div className="relative max-w-4xl w-full">
                <img 
                  src="/images/tesla-model3-side-studio.png" 
                  alt="Tesla PPF Side Specimen" 
                  className={`w-full h-auto transition-all duration-700 ${selectedPackage === 'full-car' ? 'brightness-110' : 'brightness-90'}`} 
                />
                
                {/* INTERACTIVE GLOW ZONES (Side View Mapping) */}
                <svg 
                  viewBox="0 0 1000 1000" 
                  className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
                >
                  <defs>
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="15" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. FRONT BUMPER & HEADLIGHT AREA */}
                  <path 
                    d="M50,510 L280,545 L280,660 L55,640 Z"
                    className={`transition-all duration-500 fill-[#00ff88] ${isActive('bumper') ? 'opacity-60' : 'opacity-10'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 2. HOOD - PARTIAL (Front Half) */}
                  <path 
                    d="M260,490 L420,495 L420,540 L280,550 Z"
                    className={`transition-all duration-500 fill-[#00ff88] ${isActive('hood-front') || isActive('hood') ? 'opacity-60' : 'opacity-10'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 3. HOOD - REAR (Main Half - only in Full Front) */}
                  <path 
                    d="M420,495 L580,500 L580,545 L420,540 Z"
                    className={`transition-all duration-500 fill-[#00ff88] ${isActive('hood') ? 'opacity-60' : 'opacity-10'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 4. HEADLIGHTS */}
                  <ellipse 
                    cx="130" cy="525" rx="55" ry="25"
                    className={`transition-all duration-500 fill-[#00ff88] ${isActive('headlights') ? 'opacity-80' : 'opacity-20'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 5. MIRROR CAPS */}
                  <path 
                    d="M495,470 L555,470 L555,510 L500,510 Z"
                    className={`transition-all duration-500 fill-[#00ff88] ${isActive('mirrors') ? 'opacity-80' : 'opacity-10'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 6. MAIN BODY (Doors & Quarters - Full Car only) */}
                  <path 
                    d="M320,545 L880,540 L880,680 L280,660 Z"
                    className={`transition-all duration-700 fill-[#00ff88] ${isActive('body') ? 'opacity-40' : 'opacity-0'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 7. ROOF & A-PILLARS (Full Car only) */}
                  <path 
                    d="M460,430 L800,455 L890,520 L350,540 Z"
                    className={`transition-all duration-700 fill-[#00ff88] ${isActive('roof') ? 'opacity-30' : 'opacity-0'}`}
                    filter="url(#neonGlow)"
                  />

                  {/* 8. REAR BUMPER (Full Car only) */}
                  <path 
                    d="M885,540 L975,555 L975,665 L885,680 Z"
                    className={`transition-all duration-700 fill-[#00ff88] ${isActive('rear') ? 'opacity-50' : 'opacity-0'}`}
                    filter="url(#neonGlow)"
                  />
                </svg>

                {/* Tactical Legend Overlay */}
                <div className="absolute inset-0 z-30 pointer-events-none font-mono text-[9px] uppercase tracking-widest font-black text-[#00ff88]">
                  <div className={`absolute top-[52%] left-[6%] transition-all ${isActive('bumper') ? 'opacity-100 scale-110' : 'opacity-30'}`}>[ IMPACT_ZONE_ALPHA ]</div>
                  <div className={`absolute top-[49%] left-[32%] transition-all ${isActive('hood-front') ? 'opacity-100 scale-110' : 'opacity-30'}`}>[ FRONT_HOOD_GRID ]</div>
                  <div className={`absolute top-[46%] right-[40%] transition-all ${isActive('mirrors') ? 'opacity-100 scale-110' : 'opacity-0'}`}>[ MIRROR_CAP_SECURE ]</div>
                  <div className={`absolute bottom-[36%] right-[10%] transition-all ${isActive('rear') ? 'opacity-100' : 'opacity-0'}`}>[ REAR_QUARTER_SHIELD ]</div>
                </div>
              </div>
            </div>

            {/* Tactical Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[linear-gradient(to_right,#00ff88_1px,transparent_1px),linear-gradient(to_bottom,#00ff88_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

          </div>

          {/* Pricing & Deployment Panel */}
          <div className="relative z-40 mt-16 max-w-4xl mx-auto flex flex-col items-center gap-10">
             <div className="text-center space-y-4">
                <div className="flex items-baseline justify-center gap-4">
                   <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter text-white">
                      {packages[selectedPackage].price}
                   </h2>
                   {selectedPackage !== 'full-car' && <span className="font-mono text-xs text-[#00ff88] uppercase tracking-widest italic font-bold">Base Armor Value</span>}
                </div>
                <p className="text-muted-foreground text-sm lg:text-base uppercase tracking-widest italic max-w-xl mx-auto leading-relaxed">
                   {packages[selectedPackage].desc}
                </p>
             </div>

             <Button 
               onClick={() => openQuote(`PPF: ${packages[selectedPackage].title}`)}
               size="lg" 
               className="w-full max-w-md h-18 bg-[#00ff88] text-black font-display text-base font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#00e378] box-glow group"
             >
                DEPLOY PPF PROTECTION
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
             </Button>
          </div>

          {/* Protection Partners */}
          <div className="mt-24 py-12 border-y border-white/5 flex flex-col items-center gap-8">
             <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">AUTHORIZED INSTALLATION PARTNER</p>
             <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="text-3xl font-black italic tracking-tighter text-white">XPEL</div>
                <div className="text-3xl font-black italic tracking-tighter text-white">STEK</div>
                <div className="flex items-center gap-3 border border-white/20 px-4 py-2">
                   <Award size={24} className="text-[#00ff88]" />
                   <span className="font-mono text-xs uppercase tracking-widest font-black text-white">CERTIFIED INSTALLER</span>
                </div>
             </div>
          </div>

          {/* Tech Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Zap size={24} />, title: "SELF-HEALING", desc: "Minor scratches disappear with exposure to heat from the sun or warm water." },
               { icon: <Shield size={24} />, title: "ANTI-YELLOWING", desc: "Optical clarity guaranteed for 10+ years. High-gloss, non-yellowing adhesive." },
               { icon: <Award size={24} />, title: "10-YEAR WARRANTY", desc: "Manufacturer-backed warranty against bubbling, peeling, or fading." },
               { icon: <ClipboardCheck size={24} />, title: "PRECISION FIT", desc: "Computer-cut patterns for every specific body line. No blade ever touches your paint." },
             ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/5 rounded-none space-y-4 hover:border-[#00ff88]/30 transition-all duration-300 group">
                   <div className="text-[#00ff88] group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h4 className="font-display font-black text-sm uppercase tracking-widest text-[#00ff88]">{item.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight italic font-medium">{item.desc}</p>
                </div>
             ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default PPF;
