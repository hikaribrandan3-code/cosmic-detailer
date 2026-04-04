import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2,
  TrendingDown
} from 'lucide-react';
import PPFFrontSVG from '@/components/PPFFrontSVG';

type PpfPackage = 'partial' | 'fullFront' | 'stealth';
type Usage = 'city' | 'highway' | null;
type Threat = 'rocks' | 'bugs' | null;

const packages = {
  partial: {
    id: 'partial',
    name: 'PARTIAL FRONT',
    price: '1,200',
    zones: ['bumper-front', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-cup-left', 'door-cup-right'],
    features: ['Bumper + Hood Leading Edge (30%)', 'Mirror Caps + Door Cups', '2-Year Warranty']
  },
  fullFront: {
    id: 'fullFront',
    name: 'FULL FRONT',
    price: '1,800',
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right'],
    features: ['Full Hood, Fenders, Bumper', 'Mirrors, Headlights, Door Cups', '10-Year Warranty']
  },
  stealth: {
    id: 'stealth',
    name: 'STEALTH FULL',
    price: 'GET QUOTE',
    zones: ['bumper-front', 'hood', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-left', 'door-right', 'door-cup-left', 'door-cup-right', 'roof', 'headlight-left', 'headlight-right'],
    features: ['Every Painted Surface Covered', 'Matte/Satin Finish Available', 'Transferable Lifetime Warranty']
  }
};

export default function PPF() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  
  // Master State
  const [selectedPackage, setSelectedPackage] = useState<PpfPackage | null>(null);
  
  // Quiz State
  const [usage, setUsage] = useState<Usage>(null);
  const [threat, setThreat] = useState<Threat>(null);

  // Interaction State
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  
  const funnelRef = useRef<HTMLDivElement>(null);

  // Engine: Quiz mapping
  useEffect(() => {
    if (usage && threat) {
      if (usage === 'highway' || threat === 'rocks') {
        setSelectedPackage('fullFront');
      } else {
        setSelectedPackage('partial');
      }
      
      // Give DOM time to un-hide the recommendation box
      setTimeout(() => {
        funnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [usage, threat]);

  // Engine: Zone click mapping
  const handleZoneClick = (zoneId: string) => {
    if (packages.partial.zones.includes(zoneId)) setSelectedPackage('partial');
    else if (packages.fullFront.zones.includes(zoneId)) setSelectedPackage('fullFront');
    else setSelectedPackage('stealth');
  };

  const isZoneActive = (zoneId: string) => {
    if (!selectedPackage) return false;
    return packages[selectedPackage].zones.includes(zoneId);
  };

  // Label formatting
  const formatZoneLabel = (zoneId: string) => {
    return zoneId.replace(/-/g, ' ').toUpperCase();
  };

  const currentPkg = selectedPackage ? packages[selectedPackage] : null;

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-32 overflow-x-hidden selection:bg-[#00FF41] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="px-6 py-16 lg:py-32 relative overflow-hidden bg-[#0e0e0e] border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="text-[#00FF41] font-mono font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">Just Took Delivery?</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-mono font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-lg">
              <span className="lg:hidden">YOUR NEW CAR IS PERFECT. FOR NOW.</span>
              <span className="hidden lg:inline">PROTECT IT BEFORE<br/><span className="text-[#00FF41]">THE FIRST CHIP</span></span>
            </h2>
            <p className="mt-6 text-[#adaaaa] max-w-md font-mono text-xs lg:text-sm uppercase tracking-widest leading-relaxed">
              <span className="lg:hidden">Highway debris hits at 140mph. PPF stops it first.</span>
              <span className="hidden lg:inline">That new car smell comes with a countdown. Highway debris hits at <span className="text-white font-bold">140mph</span>. Your factory paint won't survive the drive home.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full pt-12 lg:pt-0">
             {/* PAIN POINTS */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#131313] p-6 lg:p-8 border-l-4 border-[#ff725e] group hover:border-[#ff725e]/50 transition-all">
                <div className="flex items-center gap-2 text-[#ff725e] mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-mono font-bold uppercase text-[10px] tracking-[0.3em]">Paint Matching = Impossible</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-mono font-black uppercase leading-tight italic text-white">BODY SHOPS CAN'T MATCH ROBOTS</h3>
                <p className="mt-2 text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed opacity-80">
                  Factory: 3-stage electrostatic precision. Body shop: Gravity-fed spray gun + hope. Your metallic pearl will never lay the same way twice.
                </p>
              </div>
              <div className="bg-[#131313] p-6 lg:p-8 border-l-4 border-[#ff725e] group hover:border-[#ff725e]/50 transition-all">
                <div className="flex items-center gap-2 text-[#ff725e] mb-3">
                  <TrendingDown className="w-4 h-4" />
                  <span className="font-mono font-bold uppercase text-[10px] tracking-[0.3em]">CARFAX Flags</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-mono font-black uppercase leading-tight italic text-white">A RESPRAY IS A RED FLAG</h3>
                <p className="mt-2 text-[#adaaaa] font-mono text-[9px] uppercase tracking-widest leading-relaxed opacity-80">
                  One "minor" chip leads to a panel respray. One respray leads to a "Minor Accident" flag on CARFAX. Resale value drops 15% instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CAR DIAGRAM */}
      <section className="py-20 lg:py-32 px-6 bg-[#0e0e0e] border-b border-white/5">
        <h3 className="text-center font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-8 lg:mb-12 text-[#adaaaa]">Select Impact Zones to View Tier Coverage</h3>
        <div className="relative w-full max-w-4xl mx-auto flex justify-center">
          
          <PPFFrontSVG 
            currentPackage={selectedPackage || ''}
            isZoneActive={isZoneActive}
            handleZoneClick={handleZoneClick}
            setHoveredZone={setHoveredZone}
          />
          
          {hoveredZone && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none bg-[#131313]/90 backdrop-blur-sm border border-[#00FF41]/30 text-[#00FF41] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.3em] font-black shadow-[0_0_20px_rgba(0,255,65,0.15)] flex flex-col items-center gap-1 z-20">
              <span>{formatZoneLabel(hoveredZone)}</span>
              {hoveredZone === 'bumper-front' && <span className="text-[#ff725e] text-[8px] animate-pulse whitespace-nowrap">60% IMPACT RISK</span>}
            </div>
          )}

        </div>
        <p className="text-center font-mono text-[9px] uppercase tracking-widest text-white/30 mt-8">Graphic uses Model S layout. Coverage applies to all makes/models.</p>
      </section>

      {/* PACKAGE CARDS */}
      <section className="py-20 px-6 lg:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {(Object.keys(packages) as PpfPackage[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isActive = selectedPackage === pkgKey;
              return (
                <div 
                  key={pkgKey}
                  onClick={() => setSelectedPackage(pkgKey)}
                  className={`cursor-pointer transition-all duration-300 border-l-4 relative overflow-hidden ${
                    isActive 
                      ? 'bg-[#1a1b1a] border-[#00FF41] shadow-[0_0_30px_rgba(0,255,65,0.1)] -translate-y-2' 
                      : 'bg-[#191a1a] border-white/5 hover:bg-[#202020]'
                  }`}
                >
                  {pkgKey === 'fullFront' && (
                    <div className="absolute top-0 right-0 bg-[#00FF41] text-[#053900] px-4 py-1">
                      <span className="font-mono text-[9px] font-black uppercase tracking-widest">Industry Standard ★</span>
                    </div>
                  )}
                  <div className="p-8">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-50 block mb-2">{pkgKey === 'stealth' ? 'Premium Tier' : 'Clear Bra'}</span>
                    <h3 className={`text-3xl font-mono font-black italic uppercase leading-none tracking-tighter ${isActive ? 'text-[#00FF41]' : 'text-white'}`}>{pkg.name}</h3>
                    <div className="mt-8 mb-8">
                      <span className={`font-mono text-4xl font-black italic tracking-tighter ${isActive ? 'text-white' : 'text-[#adaaaa]'}`}>
                        {pkg.price !== 'GET QUOTE' && '$'}{pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${isActive ? 'text-[#00FF41]' : 'text-[#484847]'}`} />
                           <span className="font-mono text-[9px] lg:text-[10px] text-[#e5e2e1] uppercase tracking-wider">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SMART RECOMMENDER */}
      <section className="px-6 py-20 lg:py-32 bg-[#0e0e0e]" id="funnel" ref={funnelRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-mono font-black uppercase tracking-tighter italic text-white">NOT SURE? <span className="text-[#00FF41]">WE'LL HELP.</span></h2>
            <div className="h-1 w-12 bg-[#00FF41] mx-auto mt-6 shadow-[0_0_10px_#00FF41]"></div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#adaaaa]">Answer 2 questions to find your coverage tier.</p>
          </div>
          
          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#00FF41]">01 — How do you drive?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setUsage('city')}
                  className={`py-8 px-6 border-2 transition-all font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'city' ? 'border-[#00FF41] bg-[#00FF41]/10 text-[#00FF41]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  City/Suburban
                </button>
                <button 
                  onClick={() => setUsage('highway')}
                  className={`py-8 px-6 border-2 transition-all font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'highway' ? 'border-[#00FF41] bg-[#00FF41]/10 text-[#00FF41]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  Highway Commuter
                </button>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#00FF41]">02 — What's your main concern?</p>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setThreat('rocks')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'rocks' ? 'bg-[#00FF41]/10 border-[#00FF41]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest ${threat === 'rocks' ? 'text-[#00FF41]' : 'text-white'}`}>Rock chips and road debris</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'rocks' ? 'opacity-100 text-[#00FF41]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
                <button 
                  onClick={() => setThreat('bugs')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'bugs' ? 'bg-[#00FF41]/10 border-[#00FF41]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-mono text-sm lg:text-sm font-black uppercase italic tracking-widest ${threat === 'bugs' ? 'text-[#00FF41]' : 'text-white'}`}>UV exposure and environmental fallout</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'bugs' ? 'opacity-100 text-[#00FF41]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="bg-[#131313] px-6 py-12 lg:py-16 border-y border-white/5">
        <p className="text-center font-mono font-bold text-[9px] uppercase tracking-[0.4em] text-[#adaaaa] mb-10">Certified Film Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white">STEK</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Authorized Dealer</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-black tracking-tight text-white">XPEL</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Ultimate Plus</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white">3M</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#00FF41]">Pro Series</span>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 w-full z-[60] bg-[#1a1b1a]/95 backdrop-blur-2xl border-t border-[#00FF41]/20 px-6 py-4 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col max-w-[50%]">
          <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-[#adaaaa] mb-1">Selected Plan</span>
          <span className="font-mono text-sm lg:text-xl font-black italic uppercase tracking-tighter text-white truncate">
          {selectedPackage ? packages[selectedPackage].name : 'No package selected'}
          </span>
        </div>
        <button 
          onClick={() => {
            if (currentPkg) openQuote(`PPF: ${currentPkg.name} (${currentPkg.price})`);
            else document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`px-8 lg:px-12 py-4 lg:py-5 font-mono font-black uppercase italic tracking-[0.2em] text-[10px] lg:text-sm rounded-none transition-all shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] ${
            selectedPackage ? 'bg-[#00FF41] text-[#053900] hover:bg-[#32e612]' : 'bg-[#262626] text-white hover:bg-[#333]'
          }`}
        >
          {selectedPackage ? `Book — ${currentPkg?.price !== 'GET QUOTE' ? '$' : ''}${currentPkg?.price}` : 'Choose Your Coverage'}
        </button>
      </div>

    </div>
  );
}
