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
      zones: ["hood", "bumper", "headlights"],
      desc: "Essential impact protection for high-velocity road debris."
    },
    "full-front": {
      title: "FULL FRONT",
      price: "$2,100",
      zones: ["hood", "bumper", "headlights", "mirrors", "pillars"],
      desc: "Complete front-end preservation. Includes mirrors and A-pillars."
    },
    "full-car": {
      title: "FULL CAR",
      price: "QUOTE",
      zones: ["hood", "bumper", "headlights", "mirrors", "pillars", "body"],
      desc: "Total mission critical protection. Every painted surface sealed."
    }
  };

  const isActive = (zone: string) => packages[selectedPackage].zones.includes(zone);

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 overflow-hidden selection:bg-[#39FF14] selection:text-black">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Tactical Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] font-mono text-[10px] uppercase tracking-[0.3em]">
             <Target size={12} className="animate-pulse" />
             PPF / SPECIMEN-03 ANALYSIS
          </div>
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            AREA 51 <span className="text-[#39FF14] text-glow">PPF</span> DIVISION
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
                    ? "bg-[#39FF14] border-[#39FF14] text-black shadow-[0_0_30px_#39FF14/30]" 
                    : "bg-transparent border-white/10 text-white/50 hover:border-[#39FF14]/50 hover:text-white"
                }`}
              >
                {packages[pkg].title}
              </button>
            ))}
          </div>

          {/* THE CAR MAP (3/4 Front Reference) */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            {/* Base Specimen Image */}
            <div className="relative z-10">
              <img 
                src="/images/tesla-model3-ppf-reference.png" 
                alt="Tesla PPF Specimen" 
                className={`w-full max-w-4xl mx-auto transition-all duration-700 ${selectedPackage === 'full-car' ? 'brightness-110' : 'opacity-90'}`} 
              />
              
              {/* INTERACTIVE GLOW ZONES (3/4 View Mapping) */}
              <svg 
                viewBox="0 0 1000 1000" 
                className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
              >
                {/* Hood Zone (Frontal) */}
                <path 
                  d="M100,530 L550,450 L750,490 L650,560 L150,600 Z" 
                  className={`transition-all duration-500 fill-[#39FF14] ${isActive('hood') ? 'opacity-30 blur-2xl animate-pulse' : 'opacity-0'}`}
                />
                
                {/* Bumper Zone (Base) */}
                <path 
                   d="M70,600 L450,560 L750,560 L780,650 L100,750 Z"
                   className={`transition-all duration-500 fill-[#39FF14] ${isActive('bumper') ? 'opacity-40 blur-3xl animate-pulse' : 'opacity-0'}`}
                />

                {/* Headlights Zone */}
                <circle cx="150" cy="540" r="40" className={`transition-all duration-500 fill-[#39FF14] ${isActive('headlights') ? 'opacity-50 blur-xl' : 'opacity-0'}`} />
                <circle cx="500" cy="530" r="30" className={`transition-all duration-500 fill-[#39FF14] ${isActive('headlights') ? 'opacity-50 blur-xl' : 'opacity-0'}`} />

                {/* Mirror Caps Zone */}
                <path 
                   d="M650,410 L740,410 L750,460 L680,460 Z"
                   className={`transition-all duration-500 fill-[#39FF14] ${isActive('mirrors') ? 'opacity-60 blur-md' : 'opacity-0'}`}
                />

                {/* Full Body Glow (All panels) */}
                <path 
                   d="M100,530 L800,250 L950,450 L950,750 L100,750 Z"
                   className={`transition-all duration-1000 fill-[#39FF14] ${isActive('body') ? 'opacity-20 blur-[120px]' : 'opacity-0'}`}
                />
              </svg>

              {/* Tactical Labels */}
              <div className="absolute inset-0 z-30 pointer-events-none font-mono text-white">
                
                {/* Bumper Pointer */}
                <div className={`absolute bottom-[28%] left-[10%] transition-all duration-500 ${isActive('bumper') ? 'opacity-100' : 'opacity-20'}`}>
                   <div className="flex flex-col gap-1 items-start">
                     <div className="px-2 py-0.5 bg-[#39FF14] text-black text-[9px] font-black uppercase">FRONT BUMPER</div>
                     <div className="text-[8px] text-white/50 tracking-widest leading-none">STRATEGIC DEFENSE</div>
                   </div>
                </div>

                {/* Hood Pointer */}
                <div className={`absolute top-[45%] left-[25%] transition-all duration-500 ${isActive('hood') ? 'opacity-100' : 'opacity-20'}`}>
                   <div className="flex flex-col gap-1 items-start text-right">
                     <div className="px-2 py-0.5 bg-[#39FF14] text-black text-[9px] font-black uppercase">FULL HOOD</div>
                     <div className="text-[8px] text-white/50 tracking-widest leading-none">NO IMPACT ZONE</div>
                   </div>
                </div>

                {/* Mirror Pointer */}
                <div className={`absolute top-[38%] right-[25%] transition-all duration-500 ${isActive('mirrors') ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="flex flex-col gap-1 items-start">
                     <div className="px-2 py-0.5 bg-[#39FF14] text-black text-[9px] font-black uppercase">MIRROR CAPS</div>
                     <div className="text-[8px] text-white/50 tracking-widest leading-none">HIGH-RISK EDGE</div>
                   </div>
                </div>

              </div>
            </div>

            {/* Tactical Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

          </div>

          {/* Pricing & Deployment Panel */}
          <div className="relative z-40 mt-16 max-w-4xl mx-auto flex flex-col items-center gap-10">
             <div className="text-center space-y-4">
                <div className="flex items-baseline justify-center gap-4">
                   <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter text-white">
                      {packages[selectedPackage].price}
                   </h2>
                   {selectedPackage !== 'full-car' && <span className="font-mono text-xs text-[#39FF14] uppercase tracking-widest italic font-bold">Base Armor Value</span>}
                </div>
                <p className="text-muted-foreground text-sm lg:text-base uppercase tracking-widest italic max-w-xl mx-auto leading-relaxed">
                   {packages[selectedPackage].desc}
                </p>
             </div>

             <Button 
               onClick={() => openQuote(`PPF: ${packages[selectedPackage].title}`)}
               size="lg" 
               className="w-full max-w-md h-18 bg-[#39FF14] text-black font-display text-base font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#32e612] box-glow group"
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
                   <Award size={24} className="text-[#39FF14]" />
                   <span className="font-mono text-xs uppercase tracking-widest font-black">CERTIFIED INSTALLER</span>
                </div>
             </div>
          </div>

          {/* Warranty & Tech Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Zap size={24} />, title: "SELF-HEALING", desc: "Minor scratches disappear with exposure to heat from the sun or warm water." },
               { icon: <Shield size={24} />, title: "ANTI-YELLOWING", desc: "Optical clarity guaranteed for 10+ years. High-gloss, non-yellowing adhesive." },
               { icon: <Award size={24} />, title: "10-YEAR WARRANTY", desc: "Manufacturer-backed warranty against bubbling, peeling, or fading." },
               { icon: <ClipboardCheck size={24} />, title: "PRECISION FIT", desc: "Computer-cut patterns for every specific body line. No blade ever touches your paint." },
             ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/5 rounded-none space-y-4 hover:border-[#39FF14]/30 transition-all duration-300 group">
                   <div className="text-[#39FF14] group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h4 className="font-display font-black text-sm uppercase tracking-widest text-[#39FF14]">{item.title}</h4>
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
