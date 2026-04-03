import { useOutletContext, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Shield, Droplets, Zap, Sparkles } from "lucide-react";

const ServicesPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: () => void }>();

  return (
    <div>
      {/* Header */}
      <section className="py-24 lg:py-32 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Services</p>
          <h1 className="text-4xl font-bold lg:text-6xl">Precision-Engineered <span className="text-primary text-glow">Detailing</span></h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Every service is tailored to your vehicle's needs. From quick maintenance washes to full paint correction and ceramic coatings.</p>
        </div>
      </section>

      {/* Detailing Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {/* Interior */}
          <ServiceBlock
            title="Interior Detailing"
            price="Starting at $180"
            bgImage="/images/bg/interior-bg.png"
            items={[
              "Full vacuum of all seats, floors, cracks and crevices",
              "Carpet, floor mats, door panels, and trunk cleaned",
              "Center console wiped down and detailed",
              "Seats cleaned — leather conditioning included on leather surfaces",
              "Shampooing and extraction available as an add-on service",
            ]}
          />

          {/* Wax */}
          <ServiceBlock
            title="Wax Packages"
            price="Starting at $150"
            bgImage="/images/bg/wax-bg.png"
            items={[
              "High-quality professional wax applied by hand",
              "Deep gloss and shine enhancement",
              "Paint surface protection from UV and elements",
              "Streak-free finish using premium microfiber towels",
            ]}
          />

          {/* Mini Detail */}
          <ServiceBlock
            title="Mini Detail"
            price="Starting at $150"
            bgImage="/images/bg/mini-detail-bg.png"
            items={[
              "Quick maintenance service for vehicles in good condition",
              "Exterior hand wash and dry",
              "Interior vacuum and wipe down",
              "Window cleaning inside and out",
            ]}
          />

          {/* Full Detail */}
          <ServiceBlock
            title="Full Detail"
            price="Starting at $250"
            bgImage="/images/bg/full-detail-bg.png"
            items={[
              "Complete interior and exterior service combined",
              "Door jambs cleaned and detailed",
              "Tire and wheel cleaning with dressing applied",
            ]}
          />

          {/* Exterior */}
          <ServiceBlock
            title="Exterior Detail"
            price="Quote Based"
            bgImage="/images/bg/exterior-bg.png"
            items={[
              "Two-bucket hand wash method to prevent swirl marks",
              "Pre-soak and foam cannon treatment",
              "Spotless water rinse for streak-free finish",
            ]}
          />

          {/* Water Spot */}
          <ServiceBlock
            title="Water Spot Treatment & Removal"
            price="Quote Based"
            bgImage="/images/bg/waterspot-bg.png"
            items={[
              "Safe chemical and mechanical removal of mineral deposits",
              "Paint-safe process with no damage to clear coat",
            ]}
          />

          {/* One-Step */}
          <ServiceBlock
            title="One-Step Polish"
            price="Quote Based"
            bgImage="/images/bg/onestep-bg.png"
            items={[
              "Light machine polish removes minor swirls and light scratches",
              "Restores gloss and clarity to dull or oxidized paint",
            ]}
          />

          {/* Two-Step */}
          <ServiceBlock
            title="Two-Step Polish — Paint Correction"
            price="Quote Based"
            bgImage="/images/bg/twostep-bg.png"
            items={[
              "Stage 1: Cutting compound removes heavy scratches and oxidation",
              "Stage 2: Finishing polish refines surface to mirror-like clarity",
              "Full restoration of paint's depth and reflectivity",
            ]}
          />
        </div>
      </section>

      {/* NEW PROTECTIVE SERVICES SECTION */}
      <section className="py-24 lg:py-32 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter">PROTECTIVE <span className="text-[#39FF14] text-glow">SERVICES</span></h2>
             <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground italic font-bold">LONG-TERM PAINT DEFENSE / MISSION CRITICAL PROTECTION</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ceramic */}
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
               <Zap size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black italic uppercase tracking-tighter">CERAMIC COATING</h3>
               <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,100+</p>
               <Link to="/services/protective/ceramic" className="w-full">
                 <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all">
                   LEARN MORE
                 </Button>
               </Link>
            </div>

            {/* PPF */}
            <div className="p-8 border border-[#39FF14]/30 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 scale-105 shadow-[0_0_50px_rgba(57,255,20,0.1)] hover:border-[#39FF14]/60 transition-all group">
               <Shield size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black italic uppercase tracking-tighter">PAINT PROTECTION FILM</h3>
               <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,300+</p>
               <Link to="/services/protective/ppf" className="w-full">
                 <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all box-glow">
                   LEARN MORE
                 </Button>
               </Link>
            </div>

            {/* Window Tint */}
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
               <Droplets size={48} className="text-white group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black italic uppercase tracking-tighter">WINDOW TINT</h3>
               <p className="font-mono text-2xl text-white font-bold">$199+</p>
               <Link to="/services/protective/tint" className="w-full">
                 <Button className="w-full bg-white text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-white/90 transition-all">
                   LEARN MORE
                 </Button>
               </Link>
            </div>
          </div>

          <p className="mt-12 text-center font-mono text-[10px] text-muted-foreground uppercase italic tracking-widest">
            NOTE: PPF & WINDOW TINT OUTSOURCED TO CERTIFIED PARTNERS / XPEL & STEK OFFICIAL
          </p>
        </div>
      </section>
    </div>
  );
};

const ServiceBlock = ({ title, price, items, bgImage }: { title: string; price: string; items: string[]; bgImage?: string }) => (
  <div className="relative overflow-hidden rounded-xl border border-border/50 transition-all hover:border-primary/40 group">
    {/* Background Image Layer */}
    {bgImage && (
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    )}
    
    {/* Overlay Layer */}
    <div className={`absolute inset-0 z-10 ${bgImage ? "bg-gradient-to-r from-black/95 via-black/80 to-black/40" : "bg-card/30"}`} />

    {/* Content Layer */}
    <div className="relative z-20 grid gap-8 lg:grid-cols-2 items-start p-8 lg:p-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold lg:text-3xl tracking-tight text-foreground">{title}</h2>
        <p className="font-mono text-sm text-primary font-semibold tracking-wider uppercase">{price}</p>
      </div>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item} className="flex gap-3 text-foreground/90 group-hover:text-foreground transition-colors">
            <Check className="mt-1 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" size={16} />
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServicesPage;
