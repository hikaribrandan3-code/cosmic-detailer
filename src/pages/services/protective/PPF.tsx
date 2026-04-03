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
                

{/* INTERACTIVE GLOW ZONES — CSS Percentage-Based (1:1 Image Map) */}
                <div className="absolute inset-0 pointer-events-none z-20 mix-blend-screen">

                  {/* FRONT BUMPER + HEADLIGHTS — left face of car */}
                  <div className={`absolute transition-all duration-500 rounded-sm ${isActive('bumper') ? 'opacity-70' : 'opacity-10'}`}
                    style={{ top: '47%', left: '13%', width: '13%', height: '24%', background: 'radial-gradient(ellipse, #00ff88 0%, #00ff8880 60%, transparent 100%)' }} />

                  {/* HOOD FRONT SECTION (Partial front only — typical 24" cut) */}
                  <div className={`absolute transition-all duration-500 ${isActive('hood-front') || isActive('hood') ? 'opacity-60' : 'opacity-10'}`}
                    style={{ top: '36%', left: '25%', width: '18%', height: '16%', background: 'linear-gradient(160deg, transparent 0%, #00ff8860 40%, #00ff88 100%)', borderRadius: '4px 0 0 4px', transform: 'skewX(-8deg)' }} />

                  {/* HOOD REAR SECTION (Full front only) */}
                  <div className={`absolute transition-all duration-500 ${isActive('hood') ? 'opacity-55' : 'opacity-10'}`}
                    style={{ top: '35%', left: '42%', width: '16%', height: '15%', background: 'linear-gradient(160deg, #00ff88 0%, #00ff8870 80%, transparent 100%)', borderRadius: '0 4px 4px 0', transform: 'skewX(-10deg)' }} />

                  {/* HEADLIGHTS — distinct slanted bar on front face */}
                  <div className={`absolute transition-all duration-500 ${isActive('headlights') ? 'opacity-90' : 'opacity-20'}`}
                    style={{ top: '48%', left: '14%', width: '10%', height: '8%', background: 'radial-gradient(ellipse, #ffffff 0%, #00ff88 40%, transparent 100%)', borderRadius: '50%' }} />

                  {/* MIRROR CAPS — small precise box on driver mirror */}
                  <div className={`absolute transition-all duration-500 ${isActive('mirrors') ? 'opacity-90' : 'opacity-10'}`}
                    style={{ top: '37%', left: '50%', width: '5%', height: '6%', background: 'radial-gradient(ellipse, #00ff88 20%, #00ff8860 80%, transparent 100%)', borderRadius: '3px' }} />

                  {/* MAIN BODY PANELS — door skins, rockers (Full Car) */}
                  <div className={`absolute transition-all duration-700 ${isActive('body') ? 'opacity-35' : 'opacity-0'}`}
                    style={{ top: '48%', left: '24%', width: '60%', height: '24%', background: 'linear-gradient(to right, #00ff8820, #00ff8860, #00ff8820)', borderRadius: '2px' }} />

                  {/* ROOF (Full Car) */}
                  <div className={`absolute transition-all duration-700 ${isActive('roof') ? 'opacity-30' : 'opacity-0'}`}
                    style={{ top: '27%', left: '44%', width: '43%', height: '20%', background: 'linear-gradient(to bottom, transparent, #00ff8850, #00ff8870)', borderRadius: '8px 8px 0 0', transform: 'skewX(-5deg)' }} />

                  {/* REAR BUMPER (Full Car) */}
                  <div className={`absolute transition-all duration-700 ${isActive('rear') ? 'opacity-55' : 'opacity-0'}`}
                    style={{ top: '47%', left: '83%', width: '10%', height: '23%', background: 'radial-gradient(ellipse, #00ff88 0%, #00ff8870 70%, transparent 100%)' }} />

                </div>

                {/* Tactical Labels — anchored to zones */}
                <div className="absolute inset-0 z-30 pointer-events-none font-mono text-[9px] uppercase tracking-widest font-black text-[#00ff88]">
                  <div className={`absolute transition-all duration-300 ${isActive('bumper') ? 'opacity-100' : 'opacity-25'}`} style={{ top: '72%', left: '10%' }}>[ IMPACT_ZONE ]</div>
                  <div className={`absolute transition-all duration-300 ${isActive('hood-front') || isActive('hood') ? 'opacity-100' : 'opacity-25'}`} style={{ top: '53%', left: '27%' }}>[ HOOD ]</div>
                  <div className={`absolute transition-all duration-300 ${isActive('mirrors') ? 'opacity-100' : 'opacity-0'}`} style={{ top: '33%', left: '48%' }}>[ MIRROR ]</div>
                  <div className={`absolute transition-all duration-300 ${isActive('rear') ? 'opacity-100' : 'opacity-0'}`} style={{ top: '72%', right: '5%' }}>[ REAR ]</div>
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
