import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpringPromoProps {
  onClaim: (service: string) => void;
}

const SpringPromo = ({ onClaim }: SpringPromoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Default to true until we check cookie

  useEffect(() => {
    // Check for cookie
    const hidePromo = document.cookie.split("; ").find(row => row.startsWith("hidePromo="));
    if (!hidePromo) {
      setIsDismissed(false);
      // Entrance delay
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Set cookie for 24h
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = `hidePromo=true; expires=${date.toUTCString()}; path=/`;
    setTimeout(() => setIsDismissed(true), 500); // Wait for exit animation
  };

  if (isDismissed) return null;

  const promoContent = (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
      <div className="space-y-1">
        <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
          SPRING RESET: <span className="text-[#39FF14]">INTERIOR + EXTERIOR DECON ($249)</span>
        </h3>
        <p className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-white/70">
          Naples & Marco Island’s Premier Pollen Removal.
        </p>
      </div>
      <Button 
        onClick={() => onClaim("Spring Reset Special $249")}
        className="bg-[#39FF14] text-black font-display text-[10px] sm:text-xs uppercase tracking-widest font-bold py-1 px-4 h-auto hover:bg-[#32e612] transition-colors box-glow"
      >
        CLAIM SPECIAL
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Banner */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[100] hidden lg:block transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="relative border-b border-[#39FF14]/30 bg-background/80 backdrop-blur-xl px-4 py-3 shadow-[0_4px_20px_rgba(57,255,20,0.1)]">
          {promoContent}
          <button 
            onClick={handleDismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1"
          >
            <X size={16} />
          </button>
          
          {/* Glowing bottom border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#39FF14]/50 shadow-[0_0_10px_#39FF14]" />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[100] lg:hidden transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="relative border-t border-[#39FF14]/30 bg-background/80 backdrop-blur-xl px-4 pt-4 pb-8 shadow-[0_-4px_20px_rgba(57,255,20,0.1)]">
          {promoContent}
          <button 
            onClick={handleDismiss}
            className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors p-1"
          >
            <X size={16} />
          </button>
          
          {/* Glowing top border line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#39FF14]/50 shadow-[0_0_10px_#39FF14]" />
        </div>
      </div>
    </>
  );
};

export default SpringPromo;
