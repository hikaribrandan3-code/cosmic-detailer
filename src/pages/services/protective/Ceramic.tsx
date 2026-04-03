import { useState, useRef } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { 
  Shield, 
  Sparkles, 
  Zap, 
  Check, 
  ChevronDown, 
  Droplets, 
  Sun, 
  Beaker, 
  Layers, 
  Search, 
  Menu,
  ArrowRight,
  User,
  Settings,
  Waves,
  Timer,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = {
  entry: { 
    id: 'entry',
    name: 'ENTRY COATING', 
    subtitle: 'Essential protection for lease returns', 
    price: '499', 
    years: '1 Year', 
    layers: '1-Layer SiO2', 
    warranty: '1 Year', 
    features: ['Paint surfaces only', 'Basic maintenance guide', '24-hour cure time'] 
  },
  pro: { 
    id: 'pro',
    name: 'PRO COATING', 
    subtitle: 'Best for daily driven luxury cars', 
    price: '1,100', 
    years: '3 Years', 
    layers: '2-Layer SiO2', 
    warranty: '3 Years', 
    features: ['Paint surfaces only', 'Annual inspection included', 'Premium maintenance kit'] 
  },
  elite: { 
    id: 'elite',
    name: 'ELITE COATING', 
    subtitle: 'Maximum protection for exotics', 
    price: '1,600', 
    years: '5 Years', 
    layers: '3-Layer SiO2', 
    warranty: '5 Years', 
    features: ['Paint surfaces only', '2 annual inspections', 'Transferable warranty', 'Premium maintenance kit'] 
  }
};

type PackageKey = keyof typeof packages;

const Ceramic = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('pro');
  const [openAccordion, setOpenAccordion] = useState<string | null>('hydrophobic');
  const packagesRef = useRef<HTMLDivElement>(null);

  const currentPkg = packages[selectedPackage];

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-sans antialiased overflow-x-hidden pt-16 pb-32">
      {/* Sub-header Bar (Mobile-first feel) */}
      <div className="bg-[#131313] text-[#8eff71] font-mono tracking-tighter uppercase border-b border-white/5 flex justify-between items-center w-full px-6 py-2 z-40 lg:hidden">
        <div className="flex items-center gap-2">
          <Settings className="text-[#8eff71] w-4 h-4" />
          <span className="text-sm font-bold tracking-[0.2em]">CERAMIC_DIVISION</span>
        </div>
        <button 
          onClick={() => openQuote(`Ceramic: ${selectedPackage}`)}
          className="bg-[#8eff71] text-[#053900] px-3 py-1 text-[10px] font-bold tracking-widest rounded-sm font-mono"
        >
          GET QUOTE
        </button>
      </div>

      <main className="w-full max-w-[1400px] mx-auto">
        {/* HERO SECTION - Refined to prevent text cropping */}
        <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-end px-6 pb-20 lg:pb-32 overflow-hidden bg-[#0e0e0e] pt-32">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600&q=80" 
              alt="Ceramic coated car"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto w-full lg:px-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8eff71]/10 border border-[#8eff71]/20 shadow-[0_0_20px_rgba(142,255,113,0.1)]">
              <span className="text-[10px] lg:text-xs font-bold text-[#8eff71] tracking-[0.3em] uppercase">Ceramic Division</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-mono font-black border-l-8 border-[#8eff71] pl-6 leading-[0.8] tracking-tighter uppercase italic drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              CERAMIC<br/><span className="text-[#8eff71]">COATING</span>
            </h1>
            <p className="text-[#adaaaa] text-lg lg:text-2xl font-mono leading-tight max-w-[450px] uppercase tracking-tighter opacity-80">
              Ultra-High Gloss Protection That Outlasts Wax
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-end gap-3 lg:border-r border-white/10 lg:pr-8">
                <span className="text-[#adaaaa] text-xs font-bold uppercase tracking-[0.2em] mb-1">Starting Level</span>
                <span className="text-5xl lg:text-7xl font-mono font-black text-white italic tracking-tighter leading-none">$499</span>
              </div>
              <Button 
                onClick={scrollToPackages}
                className="w-full sm:w-auto py-8 px-12 bg-[#8eff71] text-[#053900] font-black rounded-none uppercase tracking-[0.2em] text-sm shadow-[0_8px_32px_rgba(142,255,113,0.2)] hover:bg-[#7ce065] transition-all duration-300"
              >
                VIEW PACKAGES
              </Button>
            </div>
          </div>
        </section>

        {/* PACKAGE SELECTOR */}
        <section ref={packagesRef} id="packages" className="bg-[#191a1a] py-16 px-6 lg:px-12 border-y border-white/5 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none grid-bg"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-4 lg:gap-8 max-w-7xl mx-auto">
            <div className="border-l-4 border-[#8eff71] pl-6">
              <h2 className="font-mono text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white">Select Armor <span className="text-[#8eff71]">Tier</span></h2>
              <p className="font-mono text-[10px] text-[#adaaaa] font-bold uppercase tracking-[0.4em] mt-2 italic">Base Level Coatings & Sealants</p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 snap-x">
              {(Object.keys(packages) as PackageKey[]).map((pkgKey) => {
                const pkg = packages[pkgKey];
                const isActive = selectedPackage === pkgKey;
                return (
                  <button 
                    key={pkgKey}
                    onClick={() => setSelectedPackage(pkgKey)} 
                    className={`snap-center min-w-[200px] lg:flex-1 p-6 transition-all duration-300 border-l-4 relative group ${
                      isActive 
                        ? 'bg-[#8eff71]/10 border-[#8eff71] ring-1 ring-[#8eff71]/20' 
                        : 'bg-[#202020] border-transparent border-opacity-0 hover:bg-[#262626] grayscale hover:grayscale-0'
                    }`}
                  >
                    {pkgKey === 'pro' && (
                      <div className="absolute top-0 right-0 bg-[#8eff71] px-3 py-1">
                        <span className="text-[10px] font-black text-[#053900] uppercase tracking-tighter italic">Popular</span>
                      </div>
                    )}
                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 ${isActive ? 'text-[#8eff71]' : 'text-[#adaaaa]'}`}>{pkgKey}</span>
                    <div className="flex items-baseline gap-2">
                       <span className={`text-3xl font-mono font-black italic tracking-tighter ${isActive ? 'text-white' : 'text-[#adaaaa]'}`}>${pkg.price}</span>
                       <span className={`text-[10px] font-bold ${isActive ? 'text-[#8eff71]' : 'text-[#adaaaa]/40'}`}>/ {pkg.years}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PACKAGE DETAIL CARD */}
            <div className="mt-8 p-8 lg:p-12 bg-[#202020] border border-white/5 relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#8eff71]/5 blur-3xl rounded-full"></div>
               
               <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4 space-y-4">
                   <h3 className="text-3xl font-mono font-black text-[#8eff71] italic tracking-tighter leading-none mb-1 uppercase">{currentPkg.name}</h3>
                   <p className="text-sm font-mono text-[#adaaaa] font-bold uppercase tracking-widest">{currentPkg.subtitle}</p>
                   <div className="pt-6 border-t border-white/10 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                          <Layers className="text-[#8eff71] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">Layering Profile</p>
                          <p className="text-lg font-mono font-black italic uppercase tracking-tighter">{currentPkg.layers}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-none bg-[#0e0e0e] border border-white/5 flex items-center justify-center shadow-inner">
                          <Shield className="text-[#8eff71] w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest font-mono">Structural Warranty</p>
                          <p className="text-lg font-mono font-black italic uppercase tracking-tighter">{currentPkg.warranty}</p>
                        </div>
                      </div>
                   </div>
                 </div>

                 <div className="lg:col-span-8 flex flex-col justify-between">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {currentPkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 hover:border-[#8eff71]/30 transition-colors">
                          <CheckCircle2 className="text-[#8eff71] w-4 h-4 shrink-0" />
                          <span className="text-xs lg:text-sm font-mono uppercase font-bold tracking-wider text-[#e5e2e1]">{feature}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#adaaaa] text-[10px] font-bold uppercase tracking-widest">Base Investment</span>
                        <span className="text-4xl lg:text-5xl font-mono font-black text-white italic tracking-tighter">${currentPkg.price}</span>
                        <span className="text-xs font-bold text-[#8eff71]">/ {packages[selectedPackage].years}</span>
                      </div>
                      <Button 
                        onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
                        className="w-full sm:w-auto bg-[#8eff71] text-[#053900] px-10 py-6 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#7ce065] transition-all"
                      >
                        REQUEST QUOTE
                      </Button>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-mono text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
              <Sparkles className="text-[#8eff71] w-8 h-8 lg:w-12 lg:h-12" />
              Supplemental Armor
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Timer className="w-6 h-6 text-[#8eff71]" />, title: 'Wheel & Caliper', price: '+$299', desc: 'Permanent brake dust repellent' },
                { icon: <User className="w-6 h-6 text-[#8eff71]" />, title: 'Interior Leather', price: '+$199', desc: 'Dye transfer prevention coat' },
                { icon: <Waves className="w-6 h-6 text-[#8eff71]" />, title: 'Plastic Trim', price: '+$149', desc: 'UV restoration & protection' },
                { icon: <Droplets className="w-6 h-6 text-[#8eff71]" />, title: 'Glass Coating', price: '+$99', desc: 'Extreme rain visibility' },
              ].map((addon, i) => (
                <div key={i} className="p-6 bg-[#191a1a] border border-white/5 hover:border-[#8eff71]/30 transition-all group flex flex-col gap-4">
                  <div className="w-12 h-12 bg-[#0e0e0e] flex items-center justify-center border border-white/10 group-hover:bg-[#8eff71]/10 group-hover:border-[#8eff71]/20 transition-all">
                    {addon.icon}
                  </div>
                  <div>
                    <h4 className="font-mono font-black text-sm uppercase tracking-wider text-white mb-1">{addon.title}</h4>
                    <p className="text-[10px] text-[#adaaaa] font-bold uppercase tracking-widest mb-3">{addon.desc}</p>
                    <span className="text-[#8eff71] font-mono font-black text-sm italic">{addon.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH PROFILE (ACCORDIONS) */}
        <section className="py-20 px-6 lg:px-12 bg-[#131313] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8eff71]/5 blur-[120px] rounded-full"></div>
           
           <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-[10px] font-bold text-[#8eff71] tracking-[0.5em] uppercase block mb-4 italic">Material Science</span>
                <h2 className="font-mono text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white italic">TECH_SPEC <span className="text-[#8eff71]">PROFILE</span></h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    id: 'hydrophobic', 
                    icon: <Droplets className="w-5 h-5" />, 
                    title: 'HYDROPHOBIC CONTACT ANGLE', 
                    desc: 'Engineered at a 110-degree contact angle, forcing water to bead and roll off instantly. Our surfaces eliminate standing water, drastically reducing water spot development.' 
                  },
                  { 
                    id: 'uv', 
                    icon: <Sun className="w-5 h-5" />, 
                    title: 'UV INTERCEPTION BARRIER', 
                    desc: 'Blocks 99.9% of harmful UV-A and UV-B radiation. This nanoscopic shield prevents clear-coat oxidation, drying, and eventual paint fade commonly seen in Naples climate.' 
                  },
                  { 
                    id: 'chemical', 
                    icon: <Beaker className="w-5 h-5" />, 
                    title: 'PH2 - PH13 CHEMICAL RESISTANCE', 
                    desc: 'A structural defense against acidic pollutants. From bird droppings to industrial fall-out, the ceramic layer acts as a sacrificial barrier with immense chemical inertia.' 
                  }
                ].map((spec) => (
                  <div 
                    key={spec.id} 
                    className={`p-6 bg-[#191a1a] border-l-4 transition-all duration-500 cursor-pointer ${
                      openAccordion === spec.id ? 'border-[#8eff71] shadow-[0_0_40px_rgba(142,255,113,0.05)]' : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => toggleAccordion(spec.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className={`${openAccordion === spec.id ? 'text-[#8eff71]' : 'text-white/40'}`}>{spec.icon}</div>
                        <span className="font-mono font-black uppercase text-sm tracking-[0.2em]">{spec.title}</span>
                      </div>
                      <ChevronDown className={`transition-transform duration-500 ${openAccordion === spec.id ? 'rotate-180 text-[#8eff71]' : 'text-white/20'}`} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden ${openAccordion === spec.id ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      <p className="font-mono text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#0e0e0e] p-4 border border-white/5">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* APPLICATION PROCESS TIMELINE */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 border-l-4 border-[#8eff71] pl-8">
              <h2 className="font-mono text-4xl lg:text-6xl font-black uppercase tracking-tighter">Application <span className="text-[#8eff71]">Process</span></h2>
              <p className="font-mono text-xs font-bold text-[#adaaaa] uppercase tracking-[0.3em] mt-3">From Decontamination to Molecular Curing</p>
            </div>
            
            <div className="relative space-y-16 ml-6 py-4">
              <div className="absolute left-[7px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#8eff71]/30"></div>
              
              {[
                { step: '01', title: 'Decontamination', time: '1-2H', desc: 'Surgical strip-wash to remove old waxes, iron particles, and environmental fall-out.' },
                { step: '02', title: 'Paint Correction', time: '4-8H', desc: 'Precision machine polishing to eliminate swirls and restore "Level 0" surface gloss.' },
                { step: '03', title: 'Coating Stage', time: '2-4H', desc: 'Atmosphere-controlled hand application of the ceramic lattice in overlapping sections.' },
                { step: '04', title: 'Infrared Curing', time: 'IND', desc: 'Bonding phase where the ceramic transforms from liquid to a 9H hardness crystal.' },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  <div className={`absolute -left-[14px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0e0e0e] z-10 transition-all duration-500 ${
                    i === 0 ? 'bg-[#8eff71] shadow-[0_0_20px_#8eff71]' : 'bg-[#202020] group-hover:bg-[#8eff71]/50'
                  }`}></div>
                  <div className="flex-1 bg-[#131313] p-6 border border-white/5 group-hover:border-[#8eff71]/20 transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className={`font-mono font-black uppercase text-md tracking-widest ${i === 0 ? 'text-[#8eff71]' : 'text-white/90'}`}>{item.step} {item.title}</h4>
                       <span className="font-mono text-[9px] bg-[#8eff71]/10 text-[#8eff71] px-2 py-1 uppercase font-bold tracking-widest">{item.time}</span>
                    </div>
                    <p className="font-mono text-xs text-[#adaaaa] leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE VS WAX TABLE */}
        <section className="py-20 px-6 lg:px-12 bg-[#191a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-3xl lg:text-5xl font-black uppercase tracking-tighter text-center mb-12">Performance <span className="text-[#8eff71]">Benchmark</span></h2>
            <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl">
              <table className="w-full text-left text-sm border-collapse bg-[#131313]">
                <thead className="bg-[#202020] font-mono font-black text-[10px] uppercase tracking-[0.3em]">
                  <tr>
                    <th className="p-6 border-b border-white/5">Armor_Feature</th>
                    <th className="p-6 border-b border-white/5 text-[#8eff71]">Nano_Ceramic</th>
                    <th className="p-6 border-b border-white/5 text-[#adaaaa]">Standard_Wax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {[
                    { feature: 'Service Life', ceramic: '1-5 YEARS', wax: '2-3 MONTHS' },
                    { feature: 'Hardness Rating', ceramic: '9H DIAMOND', wax: 'ORGANIC SOFT' },
                    { feature: 'Thermal Peak', ceramic: '1100°F+', wax: '180°F' },
                    { feature: 'Thickness', ceramic: '8.5 MICRON+', wax: '< 1 MICRON' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 font-black text-xs uppercase tracking-widest border-r border-white/5">{row.feature}</td>
                      <td className="p-6 text-[#8eff71] font-black text-lg italic tracking-tighter">{row.ceramic}</td>
                      <td className="p-6 text-[#adaaaa]/60 font-medium text-xs tracking-widest">{row.wax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 lg:px-12 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-12 border-l-4 border-[#8eff71] pl-8">Intelligence <span className="text-[#8eff71]">Query</span></h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                { q: 'How long does the application take?', a: 'Typically 1-2 days. The precision correction phase consumes the most time, while the lattice application and IR curing require set climate durations for optimal bonding.' },
                { q: 'When is the first wash permitted?', a: 'We mandate a 7-day minimum cure window before the first chemical contact. After this, maintaining the vehicle becomes exponentially easier with simple pH-neutral solutions.' },
                { q: 'Will it prevent scratches and impacts?', a: 'Nanoceramic provides a 9H hardness barrier against micro-swirling and marring. However, for high-velocity rock chips and deep abrasions, we always recommend pairing it with PPF armor.' },
              ].map((faq, i) => (
                <div key={i} className="py-6 group cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-center" onClick={() => toggleAccordion(`faq-${i}`)}>
                    <span className="font-mono font-black text-sm lg:text-lg uppercase tracking-tight text-white/90 group-hover:text-[#8eff71] transition-colors italic">{faq.q}</span>
                    <ChevronDown className={`transition-all duration-300 ${openAccordion === `faq-${i}` ? 'rotate-180 text-[#8eff71]' : 'text-[#adaaaa]'}`} />
                  </div>
                  <div className={`transition-all duration-500 overflow-hidden ${openAccordion === `faq-${i}` ? 'max-height-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-[11px] lg:text-xs text-[#adaaaa] leading-relaxed uppercase tracking-widest bg-[#131313] p-6 border-l-2 border-[#8eff71]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER AREA */}
        <footer className="py-24 px-6 text-center bg-[#0e0e0e] border-t border-white/5">
          <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <h2 className="font-mono text-5xl font-black italic tracking-tighter uppercase mb-4 text-white">AREA 51 DETAILING</h2>
             <p className="text-[#8eff71] text-xs uppercase tracking-[0.5em] font-black italic">Automotive Excellence Division</p>
          </div>
        </footer>
      </main>

      {/* STICKY BOTTOM CONVERSION BAR (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-xl z-50 flex items-center justify-between px-6 pb-8 pt-4 border-t border-[#8eff71]/20 safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#adaaaa] uppercase tracking-[0.4em] mb-1 italic">Active Plan</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-mono font-black text-white tracking-tighter italic">${currentPkg.price}</span>
            <span className="text-[10px] font-black text-[#8eff71] font-mono tracking-widest uppercase bg-[#8eff71]/10 px-2 ml-1">{selectedPackage}</span>
          </div>
        </div>
        <button 
          onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
          className="bg-[#8eff71] px-8 py-4 rounded-none text-[#053900] font-black uppercase text-xs tracking-[0.3em] active:scale-90 transition-all shadow-[0_0_20px_#8eff7155]"
        >
          BOOK NOW
        </button>
      </div>

      {/* STICKY CTA (DESKTOP) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50">
         <Button 
          onClick={() => openQuote(`Ceramic: ${currentPkg.name}`)}
          className="bg-[#8eff71] text-[#053900] p-10 font-mono font-black italic text-xl uppercase tracking-[0.2em] rounded-none hover:bg-[#7ce065] shadow-[0_20px_50px_rgba(142,255,113,0.3)] transition-all animate-pulse-subtle"
         >
           BOOK YOUR APPOINTMENT <ArrowRight className="ml-4 w-6 h-6" />
         </Button>
      </div>
    </div>
  );
};

export default Ceramic;
