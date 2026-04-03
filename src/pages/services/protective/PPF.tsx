import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Shield, Zap, Award, ClipboardCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PPFExplorer2D from "@/components/PPFExplorer2D";

type PackageKey = "partial" | "fullFront" | "fullCar";

const packages: Record<PackageKey, {
  title: string;
  price: string;
  zones: string[];
  legend: string[];
  desc: string;
}> = {
  partial: {
    title: "PARTIAL FRONT",
    zones: ['bumper-front', 'hood-leading', 'fender-front-leading', 'mirror-left', 'mirror-right', 'door-cup'],
    price: '$800',
    legend: ['Front Bumper', 'Hood Leading Edge (30%)', 'Fender Leading Edge (30%)', 'Mirror Caps', 'Door Cups'],
    desc: "Essential impact protection for high-velocity road debris. Covers the leading 18\" of hood, full front bumper, side mirrors, and door cup areas."
  },
  fullFront: {
    title: "FULL FRONT",
    zones: ['bumper-front', 'hood', 'fender-front', 'mirror-left', 'mirror-right', 'headlight', 'door-cup'],
    price: '$1,400',
    legend: ['Front Bumper', 'Full Hood', 'Full Fenders', 'Mirror Caps', 'Headlights', 'Door Cups'],
    desc: "Complete front-end preservation. Full hood, both fenders, bumper, headlights, and mirrors — the highest-impact zone of any vehicle."
  },
  fullCar: {
    title: "FULL CAR",
    zones: ['hood', 'hood-leading', 'fender-front', 'fender-front-leading', 'bumper-front', 'mirror-left', 'mirror-right', 'door-front', 'door-cup', 'roof', 'trunk', 'bumper-rear', 'fender-rear', 'pillar-a', 'pillar-b', 'pillar-c', 'headlight', 'taillight'],
    price: '$2,800',
    legend: ['Full Vehicle Wrap', 'All Painted Panels', 'Bumpers (F/R)', 'Lights', 'Mirrors', 'Pillars'],
    desc: "Total protection. Every painted surface sealed in self-healing film. The only option that eliminates paint damage risk entirely."
  }
};

const PPF = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>("fullFront");
  const [showIncluded, setShowIncluded] = useState(false);

  const currentPkg = packages[selectedPackage];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-32 overflow-hidden selection:bg-[#39FF14] selection:text-black">
      
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#39FF14]">
            // INTERACTIVE 3D STUDIO
          </p>
          <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">
            AREA 51 <span className="text-[#39FF14]" style={{ textShadow: '0 0 30px #39ff1440' }}>PPF</span> STUDIO
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Select coverage below • Rotate the model to inspect protected zones
          </p>
        </div>
      </div>

      {/* Configurator + UI Layout (Mobile-First Vertical Stack) */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* HUD Metadata (Above Configurator) */}
          <div className="w-full flex justify-between items-end mb-2 px-2 font-mono text-[8px] uppercase tracking-[0.3em] text-[#39FF14]/60">
            <span className="border-b border-[#39FF14]/20 pb-1">Current Schematic: SIDE_PROFILE_V2</span>
            <span className="border-b border-[#39FF14]/20 pb-1 text-right">Config ID: CD-PPF-051</span>
          </div>

          {/* 2D Schematic (60% width via component constraint) */}
          <PPFExplorer2D 
            activeZones={currentPkg.zones} 
          />

          {/* Package Selection (Vertical Flow) */}
          <div className="w-full bg-black/40 backdrop-blur-sm border border-white/5 p-6 mb-8 space-y-5" style={{ borderRadius: '2px' }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#39FF14] font-bold text-center border-b border-white/5 pb-4">
              Coverage Package Selection
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              {(Object.keys(packages) as PackageKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 transition-all duration-200 border ${
                    selectedPackage === key
                      ? 'border-[#39FF14] bg-[#39FF14]/5 text-white'
                      : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white/80'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                      selectedPackage === key ? 'border-[#39FF14]' : 'border-white/20'
                    }`}>
                      {selectedPackage === key && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                      )}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold">{packages[key].title}</span>
                  </div>
                  <span className={`font-mono text-xs font-black ${
                    selectedPackage === key ? 'text-[#39FF14]' : 'text-white/30'
                  }`}>{packages[key].price}</span>
                </button>
              ))}
            </div>

            {/* What's Protected Accordion */}
            <div className="pt-2">
              <button
                onClick={() => setShowIncluded(!showIncluded)}
                className="w-full flex items-center justify-between py-3 text-white/50 hover:text-white/80 transition-colors border-t border-white/5"
              >
                <div className="flex items-center gap-2">
                  <ClipboardCheck size={14} className="text-[#39FF14]/60" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Inc. Components List</span>
                </div>
                {showIncluded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              
              {showIncluded && (
                <ul className="grid grid-cols-1 gap-1.5 pt-2 pb-4">
                  {currentPkg.legend.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/50 items-center bg-white/[0.02] p-2">
                      <span className="text-[#39FF14] font-mono text-[10px] shrink-0">✓</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation (Price + CTA) */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-black/90 backdrop-blur-2xl border-t border-[#39FF14]/20 p-4 pb-8 flex items-center justify-between gap-4 safe-area-bottom">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39FF14]/60">Total Investment</span>
          <span className="text-3xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            {currentPkg.price}
          </span>
        </div>
        
        <Button
          onClick={() => openQuote(`PPF: ${currentPkg.title} (${currentPkg.price})`)}
          className="flex-1 bg-[#39FF14] text-black font-mono text-[11px] uppercase tracking-[0.2em] font-black hover:bg-[#32e612] transition-all py-7 shadow-[0_0_20px_#39ff1440]"
          style={{ borderRadius: '2px' }}
        >
          BOOK INSTALL →
        </Button>
      </div>

      {/* Description + Tech Grid Below */}
      <div className="container mx-auto px-4 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Package Description */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tighter text-white">
              {currentPkg.title}
            </h2>
            <p className="text-white/60 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
              {currentPkg.desc}
            </p>
          </div>

          {/* Protection Partners */}
          <div className="py-12 border-y border-white/5 flex flex-col items-center gap-8 mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">AUTHORIZED INSTALLATION PARTNER</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="text-3xl font-black italic tracking-tighter text-white">XPEL</div>
              <div className="text-3xl font-black italic tracking-tighter text-white">STEK</div>
              <div className="flex items-center gap-3 border border-white/20 px-4 py-2">
                <Award size={24} className="text-[#39FF14]" />
                <span className="font-mono text-xs uppercase tracking-widest font-black text-white">CERTIFIED INSTALLER</span>
              </div>
            </div>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap size={24} />, title: "SELF-HEALING", desc: "Minor scratches disappear with exposure to heat from the sun or warm water." },
              { icon: <Shield size={24} />, title: "ANTI-YELLOWING", desc: "Optical clarity guaranteed for 10+ years. High-gloss, non-yellowing adhesive." },
              { icon: <Award size={24} />, title: "10-YEAR WARRANTY", desc: "Manufacturer-backed warranty against bubbling, peeling, or fading." },
              { icon: <ClipboardCheck size={24} />, title: "PRECISION FIT", desc: "Computer-cut patterns for every specific body line. No blade ever touches your paint." },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02] space-y-4 hover:border-[#39FF14]/30 transition-all duration-300 group">
                <div className="text-[#39FF14] group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-mono font-black text-xs uppercase tracking-widest text-[#39FF14]">{item.title}</h4>
                <p className="text-[11px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPF;
