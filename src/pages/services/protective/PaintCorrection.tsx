import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Sparkles, Zap, Target, Gauge, Fingerprint, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaintCorrection = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [sliderPos, setSliderPos] = useState(50);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMoving) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const pos = ((x - rect.left) / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, pos)));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 selection:bg-[#39FF14] selection:text-black">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] font-mono text-[10px] uppercase tracking-[0.3em]">
             <Gauge size={12} className="animate-pulse" />
             RESTORATION / STAGE 2 CLARITY
          </div>
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none">
            PAINT <span className="text-[#39FF14] text-glow">CORRECTION</span>
          </h1>
          <p className="font-mono text-xs lg:text-sm uppercase tracking-[0.4em] text-muted-foreground max-w-2xl mx-auto italic">
            PROFESSIONAL CLEAR COAT RESURFACING / MIRROR FINISH
          </p>
        </div>

        {/* Before/After Simulation */}
        <div className="max-w-5xl mx-auto mb-24">
          <div 
            className="relative aspect-video overflow-hidden cursor-ew-resize border border-white/10 rounded-xl select-none"
            onMouseDown={() => setIsMoving(true)}
            onMouseUp={() => setIsMoving(false)}
            onMouseLeave={() => setIsMoving(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsMoving(true)}
            onTouchEnd={() => setIsMoving(false)}
            onTouchMove={handleMouseMove}
          >
            {/* After Image */}
            <img 
              src="/images/paint-correction-split.png" 
              alt="Mirror Finish After" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
            {/* Before Overlay (Left Side) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 grayscale brightness-50"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
               <img 
                 src="/images/paint-correction-split.png" 
                 alt="Swirl Marks Before" 
                 className="absolute inset-0 w-[100vw] h-full object-cover" 
               />
               <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#39FF14] z-30 pointer-events-none shadow-[0_0_20px_#39FF14]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border-2 border-[#39FF14] rounded-full flex items-center justify-center">
                 <div className="flex gap-1">
                   <div className="w-1 h-3 bg-[#39FF14]" />
                   <div className="w-1 h-3 bg-[#39FF14]" />
                 </div>
              </div>
            </div>

            {/* Tactical Labels */}
            <div className="absolute top-4 left-4 z-40 px-2 py-1 bg-red-600 text-white font-mono text-[8px] uppercase tracking-widest font-black">
              SWIRL DAMAGE DETECTED
            </div>
            <div className="absolute top-4 right-4 z-40 px-2 py-1 bg-[#39FF14] text-black font-mono text-[8px] uppercase tracking-widest font-black">
              MIRROR CLARITY ACHIEVED
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest italic">
            Slide to visualize stage-two paint restoration
          </p>
        </div>

        {/* Service Tiers */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                 <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">THE CORRECTION PROCESS</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Paint correction is the strategic removal of surface imperfections (swirl marks, bird dropping etching, oxidation) through mechanical polishing. We are not filling scratches—we are removing them forever.
                 </p>
              </div>

              <div className="space-y-6">
                 <div className="p-6 border border-white/5 bg-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#39FF14]">
                      <Target size={16} />
                      <h4 className="font-mono text-xs uppercase tracking-widest font-black">1-STEP GLOSS ENHANCEMENT</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight italic">
                       Removes light swirl marks and increases depth. Perfect for newer vehicles or well-maintained specimens.
                    </p>
                 </div>

                 <div className="p-6 border border-[#39FF14]/20 bg-[#39FF14]/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#39FF14]">
                      <Zap size={16} />
                      <h4 className="font-mono text-xs uppercase tracking-widest font-black">2-STEP MAJOR RESTORATION</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight italic">
                       Heavy compounding followed by fine polishing. Removes deep scratches, 85-95% of imperfections, and restores showroom clarity.
                    </p>
                 </div>
              </div>

              <Button 
                onClick={() => openQuote("Paint Correction")}
                size="lg" 
                className="w-full h-16 bg-[#39FF14] text-black font-display text-sm font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#32e612] box-glow group"
              >
                REQUEST CORRECTION QUOTE
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
              </Button>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={20} />, label: "Inspection", desc: "Digital clear coat measurement & finish analysis." },
                { icon: <Fingerprint size={20} />, label: "Paint Chemistry", desc: "Custom compound pairing for specific clear coat hardness." },
                { icon: <Gauge size={20} />, label: "Precision", desc: "Rotary & dual-action mechanical restoration." },
                { icon: <Sparkles size={20} />, label: "Final Clarity", desc: "Mirror-finish depth & long-term gloss preservation." },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/5 space-y-3 hover:border-[#39FF14]/30 transition-all">
                   <div className="text-[#39FF14]">{item.icon}</div>
                   <h5 className="font-mono text-[10px] uppercase font-black text-white">{item.label}</h5>
                   <p className="text-[9px] text-muted-foreground leading-relaxed italic uppercase">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default PaintCorrection;
