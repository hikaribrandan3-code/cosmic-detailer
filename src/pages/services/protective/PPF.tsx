import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';


type PpfPackage = 'partial' | 'fullFront' | 'trackPackage' | 'stealth';
type Usage = 'city' | 'highway' | null;
type Threat = 'rocks' | 'bugs' | null;

const packages = {
  partial: {
    id: 'partial',
    name: 'PARTIAL FRONT',
    price: '1,200',
    image: '/images/ppf/partial-front.png',
    zones: ['bumper-front', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-cup-left', 'door-cup-right'],
    features: ['Bumper + Hood Leading Edge (30%)', 'Mirror Caps + Door Cups', '2-Year Warranty']
  },
  fullFront: {
    id: 'fullFront',
    name: 'FULL FRONT',
    price: '1,800',
    image: '/images/ppf/full-front.png',
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right'],
    features: ['Full Hood, Fenders, Bumper', 'Mirrors, Headlights, Door Cups', '10-Year Warranty']
  },
  trackPackage: {
    id: 'trackPackage',
    name: 'TRACK PACKAGE',
    price: '2,400',
    image: '/images/ppf/track-package.png',
    zones: ['bumper-front', 'hood', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'headlight-left', 'headlight-right', 'door-cup-left', 'door-cup-right', 'door-left', 'door-right'],
    features: ['Everything in Full Front', 'Rocker Panels & A-Pillars', 'Extended Side Impact Protection']
  },
  stealth: {
    id: 'stealth',
    name: 'STEALTH FULL',
    price: 'GET QUOTE',
    image: '/images/ppf/full-vehicle.png',
    zones: ['bumper-front', 'hood', 'hood-leading', 'fender-left', 'fender-right', 'mirror-left', 'mirror-right', 'door-left', 'door-right', 'door-cup-left', 'door-cup-right', 'roof', 'headlight-left', 'headlight-right'],
    features: ['Every Painted Surface Covered', 'Matte/Satin Finish Available', 'Transferable Lifetime Warranty']
  }
};

export default function PPF() {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  const [selectedPackage, setSelectedPackage] = useState<PpfPackage>('fullFront');

  // Quiz State
  const [usage, setUsage] = useState<Usage>(null);
  const [threat, setThreat] = useState<Threat>(null);

  const funnelRef = useRef<HTMLDivElement>(null);

  // Engine: Quiz mapping
  useEffect(() => {
    if (usage && threat) {
      if (usage === 'highway' || threat === 'rocks') {
        setSelectedPackage('fullFront');
      } else {
        setSelectedPackage('partial');
      }
      setTimeout(() => {
        funnelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [usage, threat]);

  const currentPkg = packages[selectedPackage];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-24 overflow-x-hidden selection:bg-[#39ff14] selection:text-[#053900]">

      {/* HERO SECTION - CENTER STACKED */}
      <section className="px-6 pt-24 pb-6 lg:pt-32 lg:pb-8 relative overflow-hidden bg-[#0e0e0e] flex flex-col items-center justify-center text-center border-b border-white/5">
        {/* Background Image with Fade */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg/ppf-tint-bg.png"
            alt="PPF Application installation preview"
            className="w-full h-full object-cover opacity-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/80 via-transparent to-[#0e0e0e]/40"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-2xl">
            PAINT PROTECTION FILM
          </h1>
          <p className="mt-4 text-[#39FF14] font-mono text-sm lg:text-base font-bold uppercase tracking-widest">
            (Polyurethane film to prevent rock chips and road rash)
          </p>
          <p className="mt-8 text-[#e5e5e5] text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Your factory paint is under attack the moment you leave the lot. Road debris. Bug guts. UV damage. It adds up.
          </p>

          {/* Trust Bar */}
          <div className="mt-8 mb-0 w-full flex justify-center">
            <p className="text-[10px] lg:text-xs font-mono font-black tracking-[0.2em] lg:tracking-[0.3em] text-[#adaaaa] uppercase border-y border-white/10 py-4 px-4 w-full md:w-auto">
              <span className="hidden md:inline">9MIL THICK • SELF-HEALING • CERAMIC-INFUSED • 10-YEAR WARRANTY</span>
              <span className="md:hidden flex flex-col gap-2">
                <span>9MIL THICK • SELF-HEALING</span>
                <span>CERAMIC-INFUSED • 10-YEAR WARRANTY</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PPF PACKAGE VISUALIZER ─── */}
      <section id="coverage-map" className="bg-[#0e0e0e] border-b border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-0">
          <h2 className="text-center font-display text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-4 leading-[0.8]">SELECT YOUR <span className="text-[#39FF14]">SHIELD</span></h2>

          {/* ── TAB STRIP ── */}
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 mb-0 pt-4">
            {(Object.keys(packages) as PpfPackage[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isActive = selectedPackage === pkgKey;
              return (
                <button
                  key={pkgKey}
                  onClick={() => setSelectedPackage(pkgKey)}
                  className={`relative flex-shrink-0 px-6 py-3 font-display font-black text-sm lg:text-lg uppercase tracking-[0.1em] transition-all duration-200 border ${
                    isActive
                      ? 'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10 shadow-[0_0_15px_rgba(57,255,20,0.1)]'
                      : 'border-white/10 text-[#adaaaa] hover:text-white hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {pkgKey === 'fullFront' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-[#39FF14] text-[#053900] text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap shadow-[0_4px_10px_rgba(57,255,20,0.3)]">★ RECOMMENDED</span>
                    </div>
                  )}
                  {pkg.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── FULL-WIDTH IMAGE PANEL ── */}
        <div className="relative w-full bg-[#111] overflow-hidden">
          <div
            className="w-full transition-opacity duration-500"
            style={{
              filter: 'saturate(1.5) brightness(1.1)',
            }}
          >
            <img
              key={selectedPackage}
              src={currentPkg.image}
              alt={currentPkg.name + ' PPF coverage'}
              className="w-full h-auto object-contain mx-auto block -mt-10 lg:-mt-20 scale-105"
              style={{ maxHeight: '480px', objectPosition: 'center' }}
            />
          </div>

          {/* ── ANIMATED POINTER LINES ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-20"
            >
              <div className="relative w-full h-full max-w-4xl mx-auto">
                {/* BUMPER LINE */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-[65%] left-[18%] flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <div className="h-[1px] w-8 bg-white/50" />
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Bumper</span>
                </motion.div>

                {/* HOOD LINE */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-[48%] left-[28%] flex flex-col items-center gap-1"
                >
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Full Hood</span>
                  <div className="w-[1px] h-6 bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                </motion.div>

                {/* FENDER / MIRROR LINE */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-[55%] left-[45%] flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <div className="h-[1px] w-12 bg-white/50" />
                  <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">
                    {selectedPackage === 'partial' ? 'Mirrors' : 'Full Fenders'}
                  </span>
                </motion.div>

                {/* ROCKER PANEL / REAR (Only for higher tiers) */}
                {(selectedPackage === 'trackPackage' || selectedPackage === 'stealth') && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="absolute top-[75%] left-[55%] flex flex-col items-center gap-1"
                  >
                    <span className="font-mono text-[8px] lg:text-[10px] uppercase font-bold text-white tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">Rockers / A-Pillars</span>
                    <div className="w-[1px] h-6 bg-white/50" />
                    <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle dark vignette edges */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 50%, #0e0e0e 100%)'
          }} />
        </div>

        {/* ── DETAIL PANEL - LUXURY SPLIT ── */}
        <div className="max-w-5xl mx-auto px-6 pt-4 lg:pt-0 pb-12 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Bio / Summary */}
            <div className="space-y-6">
              <h3 className="font-display text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.8]">
                {currentPkg.name}
              </h3>
              <p className="text-sm lg:text-base text-[#adaaaa] leading-relaxed font-medium max-w-md">
                {selectedPackage === 'partial'
                  ? 'Covers the highest-impact front zones: bumper, hood leading edge, mirrors and door cups. Ideal for daily drivers who want smart protection on a tighter budget.'
                  : selectedPackage === 'fullFront'
                  ? 'The industry standard choice. Full hood, fenders, bumper, headlights, mirrors — everything at the front of the car that takes the punishment of the road.'
                  : selectedPackage === 'trackPackage'
                  ? 'Everything in Full Front, plus extended rocker panels and A-pillars for drivers who push harder. Built for highway commuters and track-day enthusiasts.'
                  : 'Complete head-to-toe protection. Every painted surface wrapped. Available in gloss, matte, or satin. The only way to truly set it and forget it.'}
              </p>
            </div>

            {/* Right: Technical Specs & Pricing */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#39FF14]">Package Inclusive</h4>
                <ul className="flex flex-col gap-4">
                  {currentPkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#39FF14]" />
                      <span className="font-mono text-[10px] lg:text-xs text-[#e5e2e1] uppercase tracking-wider">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10 shrink-0">
                <div className="flex flex-col">
                  <span className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">Base Investment</span>
                  <span className="font-display font-black italic text-5xl lg:text-6xl tracking-tighter text-white leading-none">
                    {currentPkg.price !== 'GET QUOTE' ? `$${currentPkg.price}` : 'CALL'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* REVIEW MARQUEE */}
      <section className="py-12 bg-[#191a1a] border-y border-white/10 overflow-hidden">
        <div className="relative w-full will-change-transform">
          <div className="flex whitespace-nowrap animate-marquee">
            {[
              { text: '"Absolutely amazing job. Best detailing I\'ve had on any of my cars. 100% recommended!"', author: 'Manu GP, Tesla Model Y' },
              { text: '"Found them on Google and the reviews convinced me. My 9-month-old Tesla came back flawless."', author: 'Tesla Model Y Owner, Naples' },
              { text: '"Pricing was very affordable and the PPF is invisible. My paint still looks factory perfect."', author: 'Local Customer, Naples FL' },
            ].map((r, i) => (
              <div key={i} className="inline-flex flex-col px-8 border-r border-white/10 w-[340px] shrink-0 whitespace-normal">
                <div className="flex gap-1 text-[#39FF14] mb-2">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold italic font-display uppercase tracking-wider mb-1 text-white line-clamp-2">{r.text}</p>
                <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest">{r.author}</span>
              </div>
            ))}
            {[
              { text: '"Absolutely amazing job. Best detailing I\'ve had on any of my cars. 100% recommended!"', author: 'Manu GP, Tesla Model Y' },
              { text: '"Found them on Google and the reviews convinced me. My 9-month-old Tesla came back flawless."', author: 'Tesla Model Y Owner, Naples' },
              { text: '"Pricing was very affordable and the PPF is invisible. My paint still looks factory perfect."', author: 'Local Customer, Naples FL' },
            ].map((r, i) => (
              <div key={`dup-${i}`} className="inline-flex flex-col px-8 border-r border-white/10 w-[340px] shrink-0 whitespace-normal">
                <div className="flex gap-1 text-[#39FF14] mb-2">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold italic font-display uppercase tracking-wider mb-1 text-white line-clamp-2">{r.text}</p>
                <span className="text-[10px] text-[#adaaaa] uppercase tracking-widest">{r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="bg-[#131313] px-6 py-6 lg:py-8 border-y border-white/5">
        <p className="text-center font-mono font-bold text-[9px] uppercase tracking-[0.4em] text-white mb-6">Certified Film Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-100">
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black italic tracking-tighter text-white">STEK</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#39FF14]">Authorized Dealer</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black tracking-tight text-white">XPEL</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#39FF14]">Ultimate Plus</span>
          </div>
          <div className="flex flex-col items-center hover:opacity-100 transition-opacity">
            <span className="text-3xl lg:text-5xl font-display font-black italic tracking-tighter text-white">3M</span>
            <span className="font-mono text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1 text-[#39FF14]">Pro Series</span>
          </div>
        </div>
      </section>

      {/* SMART RECOMMENDER */}
      <section className="px-6 py-12 lg:py-16 bg-[#0e0e0e]" id="funnel" ref={funnelRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-display font-black uppercase tracking-tighter italic text-white">NOT SURE? <span className="text-[#39FF14]">WE'LL HELP.</span></h2>
            <div className="h-1 w-12 bg-[#39FF14] mx-auto mt-6 shadow-[0_0_10px_#39FF14]"></div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#adaaaa]">
              <span className="lg:hidden">Answer 2 quick questions and we'll tell you exactly what your car needs.</span>
              <span className="hidden lg:inline">Answer 2 questions to find your coverage tier.</span>
            </p>
          </div>

          <div className="space-y-12">

            {/* Step 1 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#39FF14]">01 — How do you drive?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setUsage('city')}
                  className={`py-8 px-6 border-2 transition-all font-display text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'city' ? 'border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  City/Suburban
                </button>
                <button
                  onClick={() => setUsage('highway')}
                  className={`py-8 px-6 border-2 transition-all font-display text-sm font-black uppercase italic tracking-widest flex items-center justify-center ${usage === 'highway' ? 'border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14]' : 'border-[#262626] bg-[#131313] hover:border-[#484847] text-white hover:bg-[#1a1a1a]'}`}
                >
                  Highway Commuter
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <p className="font-mono font-bold uppercase text-[10px] tracking-[0.3em] text-[#39FF14]">02 — What's your main concern?</p>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => setThreat('rocks')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'rocks' ? 'bg-[#39FF14]/10 border-[#39FF14]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-display text-sm font-black uppercase italic tracking-widest ${threat === 'rocks' ? 'text-[#39FF14]' : 'text-white'}`}>Rock chips and road debris</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'rocks' ? 'opacity-100 text-[#39FF14]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
                <button
                  onClick={() => setThreat('bugs')}
                  className={`flex justify-between items-center p-6 lg:p-8 border-2 transition-all group ${threat === 'bugs' ? 'bg-[#39FF14]/10 border-[#39FF14]' : 'bg-[#131313] border-[#262626] hover:bg-white/5'}`}
                >
                  <span className={`font-display text-sm font-black uppercase italic tracking-widest ${threat === 'bugs' ? 'text-[#39FF14]' : 'text-white'}`}>UV exposure and environmental fallout</span>
                  <ArrowRight className={`w-5 h-5 transition-opacity ${threat === 'bugs' ? 'opacity-100 text-[#39FF14]' : 'opacity-0 group-hover:opacity-50 text-white'}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="px-6 py-6 lg:py-12 bg-[#0e0e0e] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-8 text-center italic">REQUEST A <span className="text-[#39FF14]">QUOTE</span></h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openQuote(`Quote Request from PPF page`); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Name</label>
                <input type="text" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Phone</label>
                <input type="tel" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none" placeholder="(xxx) xxx-xxxx" required />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Vehicle (Year / Make / Model)</label>
              <input type="text" className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none" placeholder="e.g. 2024 Porsche 911 GT3" required />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[#131313] border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none" placeholder="Any specific concerns?" />
            </div>
            <button type="submit" className="w-full bg-[#39FF14] text-[#053900] font-display font-black uppercase tracking-[0.2em] p-6 hover:bg-[#32e612] transition-all text-xl italic pt-8 pb-8 mt-4 rounded-none shadow-[0_0_20px_rgba(57,255,20,0.2)]">
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* STICKY BAR */}
      <div className="fixed bottom-0 w-full z-[60] bg-black/95 backdrop-blur-2xl border-t border-[#39FF14]/20 px-6 py-4 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col max-w-[50%]">
          <span className="lg:hidden text-[8px] text-[#39FF14] uppercase font-bold tracking-[0.3em] font-mono mb-1 animate-pulse">We come to you. Most installs same week.</span>
          <span className="font-display text-2xl lg:text-4xl font-black italic uppercase tracking-tighter text-white truncate leading-none mt-1">
            {currentPkg.name}
          </span>
        </div>
        <button
          onClick={() => openQuote(`PPF: ${currentPkg.name} (${currentPkg.price})`)}
          className="whitespace-nowrap shrink-0 px-6 lg:px-8 py-3 lg:py-4 font-display font-black uppercase italic tracking-[0.1em] text-base lg:text-2xl rounded-none transition-all bg-[#39FF14] text-[#053900] hover:bg-[#32e612] shadow-[0_0_20px_rgba(57,255,20,0.2)]"
        >
          <span className="lg:hidden">GET QUOTE →</span>
          <span className="hidden lg:inline">
            BOOK NOW — {currentPkg.price !== 'GET QUOTE' ? '$' : ''}{currentPkg.price}
          </span>
        </button>
      </div>

    </div>
  );
}
