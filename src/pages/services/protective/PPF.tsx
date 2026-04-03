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

      {/* Configurator + UI Overlay */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto relative group">
          
          {/* 2D Schematic */}
          <PPFExplorer2D 
            activeZones={currentPkg.zones} 
          />

          {/* HUD Styled Decorative Overlays */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] uppercase tracking-[0.3em] text-[#39FF14]/40 flex flex-col items-end pointer-events-none">
            <span>Current Schematic: SIDE_PROFILE_V2</span>
            <span>Config ID: CD-PPF-051</span>
          </div>

          {/* UI Overlay — Package Selector */}
          <div className="absolute top-4 left-4 z-20 w-72 bg-black/80 backdrop-blur-xl border border-white/10 p-5 space-y-4 pointer-events-auto" style={{ borderRadius: '2px' }}>
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#39FF14] font-bold">Coverage Selection</p>
            
            <div className="space-y-2">
              {(Object.keys(packages) as PackageKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 transition-all duration-200 border ${
                    selectedPackage === key
                      ? 'border-[#39FF14] bg-[#39FF14]/10 text-white'
                      : 'border-white/5 bg-white/2 text-white/50 hover:border-white/20 hover:text-white/80'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                      selectedPackage === key ? 'border-[#39FF14]' : 'border-white/30'
                    }`}>
                      {selectedPackage === key && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold">{packages[key].title}</span>
                  </div>
                  <span className={`font-mono text-xs font-black ${
                    selectedPackage === key ? 'text-[#39FF14]' : 'text-white/40'
                  }`}>{packages[key].price}</span>
                </button>
              ))}
            </div>

            {/* What's Protected Accordion */}
            <button
              onClick={() => setShowIncluded(!showIncluded)}
              className="w-full flex items-center justify-between text-white/60 hover:text-white transition-colors"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em]">What's Protected?</span>
              {showIncluded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
            
            {showIncluded && (
              <ul className="space-y-1.5 border-t border-white/5 pt-3">
                {currentPkg.legend.map((item, i) => (
                  <li key={i} className="flex gap-2 text-white/60">
                    <span className="text-[#39FF14] font-mono text-[9px] shrink-0 mt-0.5">✓</span>
                    <span className="font-mono text-[9px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <Button
              onClick={() => openQuote(`PPF: ${currentPkg.title} (${currentPkg.price})`)}
              className="w-full bg-[#39FF14] text-black font-mono text-[10px] uppercase tracking-widest font-black hover:bg-[#32e612] transition-all py-5"
              style={{ borderRadius: '2px', boxShadow: '0 0 20px #39ff1430' }}
            >
              Get Quote →
            </Button>
          </div>

          {/* Dynamic Price Tag — Bottom Right */}
          <div className="absolute bottom-4 right-4 z-20 text-right pointer-events-none">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Selected Package</p>
            <p className="text-4xl lg:text-5xl font-black italic tracking-tighter text-white" style={{ textShadow: '0 0 40px #39ff1420' }}>
              {currentPkg.price}
            </p>
          </div>
        </div>
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
