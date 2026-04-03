import React from 'react';

interface PPFExplorer2DProps {
  activeZones: string[];
}

const PPFExplorer2D: React.FC<PPFExplorer2DProps> = ({ activeZones }) => {
  const isSelected = (zone: string) => activeZones.includes(zone);

  return (
    <div className="w-full flex items-center justify-center p-4 lg:p-8 bg-[#131313]/50 rounded-lg border border-white/5 relative overflow-hidden">
      {/* Tactical Grid Overlay (Optional, matches 3D feel) */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <style>{`
        .config-zone {
          transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out, filter 0.3s ease-in-out;
          cursor: pointer;
          fill: transparent;
          stroke: #444;
          stroke-width: 1.5;
        }
        .config-zone:hover {
          fill: rgba(57, 255, 20, 0.1);
          stroke: #39ff14;
        }
        .active-zone {
          fill: rgba(57, 255, 20, 0.25) !important;
          stroke: #39ff14 !important;
          stroke-width: 2.5 !important;
          filter: drop-shadow(0 0 8px rgba(57, 255, 20, 0.4));
        }
        .inactive-zone {
          fill: transparent;
          stroke: #333;
          stroke-opacity: 0.4;
        }
      `}</style>

      <svg className="w-full h-auto max-w-4xl drop-shadow-2xl relative z-10" viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg">
        {/* Ground Shadow */}
        <ellipse cx="500" cy="320" fill="rgba(0,0,0,0.6)" filter="blur(15px)" rx="450" ry="15"/>
        
        <g fill="none">
          {/* Front Bumper */}
          <path 
            className={`config-zone ${isSelected('bumper-front') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="bumper-front" 
            d="M10,240 Q10,210 50,190 L120,190 Q130,220 120,260 L40,260 Z"
          />
          
          {/* Headlight */}
          <path 
            className={`config-zone ${isSelected('headlight') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="headlight" 
            d="M50,190 Q80,180 110,190 L100,210 Q70,200 50,210 Z"
          />
          
          {/* Hood Leading Edge (30% - for Partial) */}
          <path 
            className={`config-zone ${isSelected('hood-leading') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="hood-leading" 
            d="M110,190 Q150,170 200,165 L200,175 Q150,180 110,195 Z"
          />
          
          {/* Hood Full */}
          <path 
            className={`config-zone ${isSelected('hood') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="hood" 
            d="M200,165 Q350,155 450,170 L450,185 Q350,170 200,175 Z"
          />
          
          {/* Fender Front Leading (30%) */}
          <path 
            className={`config-zone ${isSelected('fender-front-leading') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="fender-front-leading" 
            d="M120,190 Q140,210 140,240 L160,240 Q160,210 140,190 Z"
          />
          
          {/* Fender Front Full */}
          <path 
            className={`config-zone ${isSelected('fender-front') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="fender-front" 
            d="M140,190 Q250,185 300,200 L300,260 L160,260 Q160,210 140,190 Z"
          />
          
          {/* Mirror Left */}
          <path 
            className={`config-zone ${isSelected('mirror-left') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="mirror-left" 
            d="M430,170 Q410,150 450,150 L460,170 Z"
          />
          
          {/* Mirror Right */}
          <path 
            className={`config-zone ${isSelected('mirror-right') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="mirror-right" 
            d="M430,170 Q450,150 410,150 L400,170 Z"
          />
          
          {/* Pillar A */}
          <path 
            className={`config-zone ${isSelected('pillar-a') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="pillar-a" 
            d="M450,170 L500,100 L530,105 L480,170 Z"
          />
          
          {/* Roof */}
          <path 
            className={`config-zone ${isSelected('roof') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="roof" 
            d="M500,100 Q700,80 800,120 L780,135 Q680,100 530,105 Z"
          />
          
          {/* Pillar B */}
          <path 
            className={`config-zone ${isSelected('pillar-b') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="pillar-b" 
            d="M630,95 L630,170 L660,170 L660,100 Z"
          />
          
          {/* Pillar C */}
          <path 
            className={`config-zone ${isSelected('pillar-c') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="pillar-c" 
            d="M800,120 L880,170 L850,185 L780,135 Z"
          />
          
          {/* Door Front */}
          <path 
            className={`config-zone ${isSelected('door-front') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="door-front" 
            d="M300,200 Q450,190 600,200 L600,280 L300,280 Z"
          />
          
          {/* Door Cup */}
          <path 
            className={`config-zone ${isSelected('door-cup') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="door-cup" 
            d="M540,220 Q550,215 560,220 L560,230 Q550,235 540,230 Z"
          />
          
          {/* Fender Rear */}
          <path 
            className={`config-zone ${isSelected('fender-rear') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="fender-rear" 
            d="M750,200 Q850,195 950,210 L950,260 L750,260 Z"
          />
          
          {/* Trunk */}
          <path 
            className={`config-zone ${isSelected('trunk') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="trunk" 
            d="M880,170 Q950,175 980,195 L980,210 Q950,200 880,190 Z"
          />
          
          {/* Taillight */}
          <path 
            className={`config-zone ${isSelected('taillight') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="taillight" 
            d="M960,195 Q990,200 990,215 L970,215 Q970,205 960,205 Z"
          />
          
          {/* Bumper Rear */}
          <path 
            className={`config-zone ${isSelected('bumper-rear') ? 'active-zone' : 'inactive-zone'}`} 
            data-zone="bumper-rear" 
            d="M950,210 Q1000,220 990,260 L920,260 Q930,220 950,210 Z"
          />
          
          {/* Wheels (decorative, non-interactive) */}
          <circle cx="230" cy="260" r="45" stroke="#444" strokeWidth="2" opacity="0.4"/>
          <circle cx="230" cy="260" r="35" stroke="#444" strokeWidth="2" opacity="0.3"/>
          <circle cx="830" cy="260" r="45" stroke="#444" strokeWidth="2" opacity="0.4"/>
          <circle cx="830" cy="260" r="35" stroke="#444" strokeWidth="2" opacity="0.3"/>
          
          {/* Chassis Line */}
          <path d="M50,260 L950,260" stroke="#444" strokeWidth="1" opacity="0.3"/>
        </g>
      </svg>
    </div>
  );
};

export default PPFExplorer2D;
