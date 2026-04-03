import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Shield, Settings, ArrowRight } from 'lucide-react';
import PPFFrontSVG from '@/components/PPFFrontSVG';

const packages = {
  partial: {
    zones: ['bumper-front', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-cup-left', 'door-cup-right'],
    price: '800',
    legend: ['Front Bumper', 'Hood Leading Edge (30%)', 'Fender Leading Edges', 'Mirror Caps', 'Door Cups']
  },
  fullFront: {
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right'],
    price: '1,400',
    legend: ['Front Bumper', 'Full Hood', 'Full Fenders', 'Mirror Caps', 'Headlights', 'Door Cups']
  },
  fullCar: {
    zones: ['bumper-front', 'hood', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-left', 'door-right', 'door-cup-left', 'door-cup-right', 'roof', 'headlight-left', 'headlight-right'],
    price: '2,800',
    legend: ['Full Vehicle Protection', 'All Painted Panels', 'Bumpers', 'Hood & Fenders', 'Doors & Roof', 'Lights & Mirrors']
  }
};

type PackageKey = 'partial' | 'fullFront' | 'fullCar';

export default function PPF() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [currentPackage, setCurrentPackage] = useState<PackageKey>('fullFront');
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const selectPackage = (pkg: PackageKey) => {
    setCurrentPackage(pkg);
  };

  const handleZoneClick = (zoneId: string) => {
    // Find smallest package that includes this zone
    if (packages.partial.zones.includes(zoneId)) selectPackage('partial');
    else if (packages.fullFront.zones.includes(zoneId)) selectPackage('fullFront');
    else selectPackage('fullCar');
  };

  const isZoneActive = (zoneId: string) => {
    return packages[currentPackage].zones.includes(zoneId);
  };

  const currentConfig = packages[currentPackage];

  // Zone label for hover
  const formatZoneLabel = (zoneId: string) => {
    return zoneId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col pt-16">
      {/* Header element to replace the custom one - integrated smoothly within the flow */}
      <div className="bg-[#131313] text-[#39ff14] font-mono tracking-tighter uppercase border-b border-white/5 flex justify-between items-center w-full px-6 py-4 z-50">
        <div className="flex items-center gap-3">
          <Settings className="text-[#39ff14] w-5 h-5" />
          <span className="text-xl font-bold tracking-[0.2em] text-[#39ff14]">PRECISION_PPF</span>
        </div>
        <button 
          onClick={() => openQuote(`PPF: ${currentPackage} (${currentConfig.price})`)}
          className="bg-[#39ff14] text-[#053900] px-4 py-1.5 text-xs font-bold tracking-widest hover:bg-[#39ff14]/90 transition-all rounded-sm font-mono"
        >
          GET QUOTE
        </button>
      </div>

      {/* MOBILE LAYOUT (< 1024px) */}
      <main className="flex-grow flex flex-col pt-4 pb-32 lg:hidden">
        <div className="px-6 mb-2">
          <div className="flex justify-between items-end border-l-2 border-[#39ff14] pl-4">
            <div>
              <p className="font-mono text-[#c6c6c6] text-[10px] tracking-[0.2em] uppercase">Current Schematic</p>
              <h1 className="font-mono text-xl font-black tracking-tight text-[#e5e2e1] uppercase mt-1">MODEL S <span className="text-[#39ff14]">/ PPF</span></h1>
            </div>
            <div className="text-right">
              <p className="font-mono text-[#c6c6c6] text-[10px] tracking-[0.2em] uppercase">Config ID</p>
              <p className="font-mono text-xs font-black text-[#e5e2e1] mt-1">#TS-MS-24</p>
            </div>
          </div>
        </div>

        {/* Mobile Car Diagram */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center p-4">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-r border-b border-[#c6c6c6]"></div>
            ))}
          </div>
          
          <PPFFrontSVG 
            currentPackage={currentPackage}
            isZoneActive={isZoneActive}
            handleZoneClick={handleZoneClick}
            setHoveredZone={setHoveredZone}
          />
          
          {/* Hover Label */}
          {hoveredZone && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none bg-[#131313]/90 backdrop-blur-sm border border-[#39ff14] text-[#39ff14] px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              {formatZoneLabel(hoveredZone)}
            </div>
          )}
          
          {/* Price Badge */}
          <div className="absolute top-8 right-6 bg-[#131313]/80 backdrop-blur-lg border-l-2 border-[#39ff14] p-3 shadow-2xl">
            <span className="font-mono text-[9px] tracking-widest text-[#c6c6c6] uppercase block mb-0.5">Package Value</span>
            <div className="flex items-start">
              <span className="font-mono text-xs text-[#39ff14] mt-1 mr-1 font-bold">$</span>
              <span className="font-mono text-3xl font-black italic text-[#e5e2e1] tracking-tighter">{currentConfig.price}</span>
            </div>
          </div>
        </div>

        {/* Mobile Package Selector */}
        <div className="px-4 space-y-4">
          <div className="flex w-full bg-[#1c1b1b] p-1 rounded-sm gap-1 border border-white/5">
            {(['partial', 'fullFront', 'fullCar'] as PackageKey[]).map((pkg) => (
              <button
                key={pkg}
                onClick={() => selectPackage(pkg)}
                className={`flex-1 py-3 px-2 flex flex-col items-center justify-center border-b-2 sm:border-l-4 sm:border-b-0 transition-all ${
                  currentPackage === pkg 
                    ? 'border-[#39ff14] text-[#39ff14] bg-[#39ff14]/5' 
                    : 'border-transparent text-[#c6c6c6] hover:text-white bg-white/[0.01]'
                }`}
              >
                <span className={`font-mono text-[9px] font-bold tracking-widest uppercase mb-1 ${currentPackage === pkg ? '' : 'opacity-60'}`}>
                  {pkg === 'partial' ? 'Entry' : pkg === 'fullFront' ? 'Standard' : 'Elite'}
                </span>
                <span className="font-mono text-[11px] font-black tracking-tighter uppercase whitespace-nowrap">
                  {pkg === 'partial' ? 'PARTIAL' : pkg === 'fullFront' ? 'FULL FRONT' : 'FULL CAR'}
                </span>
              </button>
            ))}
          </div>
          
          {/* Legend */}
          <div className="bg-[#1c1b1b] rounded-sm border border-[#3c4b35]/20 overflow-hidden">
            <div className="p-5 bg-gradient-to-br from-[#1c1b1b] to-[#131313]">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                <Shield className="text-[#39ff14] w-4 h-4" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#e5e2e1]">Included Focus Areas</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {currentConfig.legend.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full mt-1.5 shrink-0 shadow-[0_0_5px_#39ff14]"></div>
                    <span className="text-[10px] font-mono leading-tight uppercase tracking-wider text-[#baccb0]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 mt-6 opacity-50 text-center">
          <p className="text-[9px] font-mono leading-relaxed uppercase tracking-[0.15em] text-[#baccb0]">
            * All packages include edge wrapping. 8.5 mil TPU standard. 10-year anti-yellowing warranty.
          </p>
        </div>
      </main>

      {/* DESKTOP LAYOUT (≥ 1024px) */}
      <main className="hidden lg:flex flex-grow bg-[#0a0a0a]">
        {/* Left: Car Section */}
        <div className="w-[60%] flex items-center justify-center p-8 relative bg-gradient-to-br from-[#0a0a0a] to-[#131313] border-r border-[#202020]">
          <div className="w-full max-w-4xl relative">
            <div className="absolute top-0 left-0 border-l-4 border-[#39ff14] pl-5">
              <p className="font-mono text-[#c6c6c6] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Current Schematic</p>
              <h1 className="font-mono text-5xl font-black italic tracking-tighter text-[#e5e2e1] uppercase">MODEL S <span className="text-[#39ff14]">/ PPF</span></h1>
              <p className="font-mono text-[10px] tracking-widest text-[#c6c6c6] mt-3 uppercase font-bold opacity-70">Config ID: #TS-MS-24</p>
            </div>
            
            <PPFFrontSVG 
              currentPackage={currentPackage}
              isZoneActive={isZoneActive}
              handleZoneClick={handleZoneClick}
              setHoveredZone={setHoveredZone}
            />

            {/* Hover Tooltip for Desktop */}
             {hoveredZone && (
              <div className="absolute top-4 right-4 pointer-events-none bg-[#131313]/90 backdrop-blur-sm border border-[#39ff14] text-[#39ff14] px-4 py-2 font-mono uppercase tracking-widest font-black shadow-[0_0_20px_rgba(57,255,20,0.15)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
                {formatZoneLabel(hoveredZone)}
              </div>
            )}
          </div>
        </div>
        
        {/* Right: Controls Section */}
        <div className="w-[40%] bg-gradient-to-bl from-[#131313] to-[#0a0a0a] p-12 flex flex-col justify-center">
          <div className="mb-12 border-l border-[#39ff14]/30 pl-6">
            <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-[#c6c6c6] uppercase">Total Investment</span>
            <div className="flex items-baseline mt-2">
              <span className="font-mono text-3xl font-black text-[#39ff14] mr-2">$</span>
              <span className="font-mono text-7xl font-black italic tracking-tighter text-[#e5e2e1] drop-shadow-[0_0_25px_rgba(57,255,20,0.1)]">{currentConfig.price}</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-10">
            {(['partial', 'fullFront', 'fullCar'] as PackageKey[]).map((pkg) => (
              <button
                key={pkg}
                onClick={() => selectPackage(pkg)}
                className={`w-full p-5 border-l-4 text-left transition-all duration-300 ${
                  currentPackage === pkg 
                    ? 'border-[#39ff14] bg-[#39ff14]/10 shadow-[0_0_30px_rgba(57,255,20,0.05)]' 
                    : 'border-white/5 bg-[#201f1f]/30 hover:bg-[#201f1f]/80'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className={`font-mono text-[9px] font-bold tracking-[0.3em] uppercase block mb-1 ${currentPackage === pkg ? 'text-[#39ff14]' : 'text-[#c6c6c6]'}`}>
                      {pkg === 'partial' ? 'Entry Level' : pkg === 'fullFront' ? 'Standard Standard' : 'Elite Grade'}
                    </span>
                    <span className={`font-mono text-xl font-black uppercase tracking-tighter ${currentPackage === pkg ? 'text-white' : 'text-[#e5e2e1]'}`}>
                      {pkg === 'partial' ? 'Partial Front' : pkg === 'fullFront' ? 'Full Front' : 'Full Vehicle'}
                    </span>
                  </div>
                  <span className={`font-mono text-2xl font-black ${currentPackage === pkg ? 'text-[#39ff14]' : 'text-white/40'}`}>
                    ${packages[pkg].price}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-[#1c1b1b]/50 backdrop-blur-sm border border-white/5 rounded-sm p-8 mb-8">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#e5e2e1] mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
              <Shield className="text-[#39ff14] w-4 h-4" />
              Protection Legend Check
            </h3>
            <div className="space-y-4">
              {currentConfig.legend.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#39ff14] rounded-full shadow-[0_0_8px_#39ff14]"></div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#baccb0]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => openQuote(`PPF: ${currentPackage} (${currentConfig.price})`)}
            className="w-full bg-[#39ff14] text-[#053900] py-6 px-8 rounded-sm shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_40px_rgba(57,255,20,0.4)] hover:bg-[#32e612] transition-all active:scale-[0.98] font-mono text-sm font-black uppercase tracking-[0.25em] flex justify-center items-center gap-3"
          >
            <span>Lock In Selection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-[9px] font-mono text-center leading-relaxed uppercase tracking-[0.2em] text-[#c6c6c6] mt-6 opacity-40">
            * 10-year warranty against yellowing and cracking included.
          </p>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 h-24 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#39ff14]/20 flex justify-between items-center px-6 safe-area-bottom">
        <div className="flex flex-col mb-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#c6c6c6] mb-1">Total Package</span>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl font-black italic tracking-tighter text-[#39ff14]">${currentConfig.price}</span>
            <span className="text-[8px] text-[#c6c6c6] font-bold uppercase tracking-widest bg-white/5 px-1 py-0.5 ml-1">USD</span>
          </div>
        </div>
        <button 
          onClick={() => openQuote(`PPF: ${currentPackage} (${currentConfig.price})`)}
          className="bg-[#39ff14] text-[#053900] h-12 px-6 flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:bg-[#32e612] transition-all active:scale-95 duration-100 mb-2"
        >
          <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em]">Reserve</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </nav>
    </div>
  );
}
