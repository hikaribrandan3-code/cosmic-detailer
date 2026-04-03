import { useEffect, useState } from "react";

const ServiceRadar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8 space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-[#39FF14] font-bold">
          AREA 51 SERVICE ZONES
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground italic">
          Serving Naples & surrounding areas within 30 miles
        </p>
      </div>

      {/* Radar Container */}
      <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-[#39FF14]/20 bg-black/40 overflow-hidden group">
        
        {/* Sonar Sweep Animation */}
        <div className="absolute inset-0 animate-[radar-sweep_4s_linear_infinite] origin-center z-10 pointer-events-none">
          <div className="w-full h-1/2 bg-gradient-to-t from-[#39FF14]/30 to-transparent border-l border-[#39FF14]/50" />
        </div>

        {/* Global Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#39FF14]" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#39FF14]" />
        </div>

        {/* SVG Components */}
        <svg viewBox="0 0 400 400" className="relative z-20 w-full h-full drop-shadow-[0_0_15px_#39FF14/20]">
          {/* Concentric Circles */}
          <circle cx="200" cy="200" r="50" fill="none" stroke="#39FF14" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-40" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#39FF14" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-40" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#39FF14" strokeWidth="1" strokeDasharray="8 8" className="opacity-60 shadow-[0_0_10px_#39FF14]" />

          {/* Zone Labels */}
          <text x="255" y="195" className="font-mono text-[8px] fill-[#39FF14]/60 uppercase">10MI</text>
          <text x="305" y="195" className="font-mono text-[8px] fill-[#39FF14]/60 uppercase">20MI</text>
          <text x="355" y="195" className="font-mono text-[8px] fill-[#39FF14]/80 uppercase font-black">30MI</text>

          {/* Target: Naples (Center) */}
          <g className="animate-pulse">
            <circle cx="200" cy="200" r="4" fill="#39FF14" className="shadow-[0_0_10px_#39FF14]" />
            <circle cx="200" cy="200" r="8" fill="none" stroke="#39FF14" strokeWidth="1" className="animate-[ping_2s_infinite]" />
          </g>
          <text x="210" y="215" className="font-mono text-[9px] fill-[#39FF14] font-black uppercase tracking-tighter">NAPLES [CMD]</text>
          <text x="210" y="225" className="font-mono text-[7px] fill-white opacity-70 uppercase tracking-widest leading-none">YOU ARE HERE</text>

          {/* Surrounding Targets */}
          {/* Bonita Springs */}
          <g className="cursor-crosshair">
            <circle cx="180" cy="120" r="2.5" fill="#39FF14" />
            <text x="188" y="123" className="font-mono text-[7px] fill-white/80 uppercase">BONITA_SPRINGS</text>
          </g>

          {/* Marco Island */}
          <g className="cursor-crosshair">
            <circle cx="230" cy="320" r="2.5" fill="#39FF14" />
            <text x="238" y="323" className="font-mono text-[7px] fill-white/80 uppercase">MARCO_ISLAND</text>
          </g>

          {/* Estero */}
          <g className="cursor-crosshair">
            <circle cx="140" cy="80" r="2.5" fill="#39FF14" />
            <text x="100" y="75" className="font-mono text-[7px] fill-white/80 uppercase">ESTERO_SEC.B</text>
          </g>

          {/* Fort Myers */}
          <g className="cursor-crosshair">
            <circle cx="280" cy="60" r="2.5" fill="#39FF14" />
            <text x="288" y="63" className="font-mono text-[7px] fill-white/80 uppercase">FT_MYERS_Z.0</text>
          </g>
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#39FF14]/5 to-transparent pointer-events-none" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default ServiceRadar;
