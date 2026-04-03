import { useOutletContext } from "react-router-dom";
import { Shield, Sparkles, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tint = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter text-white">WINDOW <span className="text-[#39FF14] text-glow">TINT</span> SERVICES</h1>
        <p className="font-mono text-xs uppercase tracking-widest text-[#39FF14] opacity-50 italic font-bold tracking-[0.5em]">TINT-SPEC / IR-HEAT REJECTION / PARTNER-OPS</p>
        <div className="max-w-2xl mx-auto p-12 border border-white/5 bg-white/5 space-y-6">
           <p className="text-muted-foreground leading-relaxed italic uppercase font-bold text-sm tracking-widest">Nano-ceramic technology for maximum infrared heat rejection and UV shielding. Privacy and protection combined.</p>
           <h2 className="text-5xl font-black text-[#39FF14] italic tracking-tighter">$199</h2>
           <Button 
             onClick={() => openQuote("Window Tint")}
             size="lg" 
             className="w-full bg-[#39FF14] text-black font-display font-black uppercase italic tracking-[0.2em] transition-all hover:bg-[#32e612] box-glow group"
           >
             REQUEST TINT QUOTE
             <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
           </Button>
           <p className="font-mono text-[10px] text-muted-foreground uppercase italic">* OUTSOURCED TO CERTIFIED PARTNERS</p>
        </div>
      </div>
    </div>
  );
};

export default Tint;
