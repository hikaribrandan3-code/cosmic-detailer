import { useOutletContext, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

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
            items={[
              "Safe chemical and mechanical removal of mineral deposits",
              "Paint-safe process with no damage to clear coat",
            ]}
          />

          {/* One-Step */}
          <ServiceBlock
            title="One-Step Polish"
            price="Quote Based"
            items={[
              "Light machine polish removes minor swirls and light scratches",
              "Restores gloss and clarity to dull or oxidized paint",
            ]}
          />

          {/* Two-Step */}
          <ServiceBlock
            title="Two-Step Polish — Paint Correction"
            price="Quote Based"
            items={[
              "Stage 1: Cutting compound removes heavy scratches and oxidation",
              "Stage 2: Finishing polish refines surface to mirror-like clarity",
            ]}
          />
        </div>
      </section>

      {/* Ceramic Coating */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Protection</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Ceramic Coating Packages</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Extreme hydrophobic protection — dirt rolls right off. UV protection prevents oxidation and fading. Enhanced gloss with a harder surface layer that protects against light scratches.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              { tier: "1-Year Coating", price: "Quote Based", featured: false },
              { tier: "3-Year Coating", price: "Starting at $1,100", featured: true },
              { tier: "5-Year Coating", price: "Starting at $1,600", featured: false },
            ].map(c => (
              <div key={c.tier} className={`rounded-lg border p-8 text-center ${c.featured ? "glow-border bg-card" : "border-border bg-card"}`}>
                <h3 className="font-display text-lg font-semibold mb-2">{c.tier}</h3>
                <p className="font-mono text-2xl text-primary font-bold mb-6">{c.price}</p>
                <Button onClick={openQuote} className={`w-full font-display uppercase tracking-wider text-sm ${c.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                  Get Quote <ChevronRight size={14} />
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-6 text-center">Ceramic Add-Ons</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Wheels, Faces & Calipers", price: "$399" },
                { name: "Trim Ceramic Coating", price: "$199" },
                { name: "All Glass Ceramic Coating", price: "$99" },
                { name: "Leather Ceramic Coating", price: "From $399" },
              ].map(a => (
                <div key={a.name} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                  <span className="text-sm">{a.name}</span>
                  <span className="font-mono text-sm text-primary">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPF */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Paint Protection</p>
            <h2 className="text-3xl font-bold lg:text-5xl">PPF — Paint Protection Film</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">XPEL & SunTek — 10-Year Manufacturer Warranty</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {[
              { name: "Partial Front", price: "Starting at $1,300" },
              { name: "Full Front", price: "Starting at $2,100" },
              { name: "Full Car PPF", price: "Quote Based" },
            ].map(p => (
              <div key={p.name} className="rounded-lg border border-border bg-card p-8 text-center">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-2">{p.name}</h3>
                <p className="font-mono text-xl text-primary mb-6">{p.price}</p>
                <Button onClick={openQuote} variant="outline" className="w-full border-border font-display uppercase tracking-wider text-xs hover:border-primary hover:text-primary">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Tint */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Window Tint</p>
          <h2 className="text-3xl font-bold lg:text-5xl mb-4">Premium Window Tinting</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">XPEL and SunTek brands exclusively. Lifetime warranty on all installations.</p>
          <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
            Get a Free Quote →
          </Button>
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
