import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Shield, Droplets, Car, Clock, MapPin, Phone, Sparkles, Star, ChevronRight, Wrench, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const Index = () => {
  const { openQuote } = useOutletContext<{ openQuote: () => void }>();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center hero-gradient grid-bg overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Premium car detailing" width={1920} height={1080} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">Naples' Premier Mobile Detailing</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Mobile Detailing.{" "}
              <span className="text-primary">Perfected.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              We come to you. 15 years. Naples.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
                Get Quote
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-md">
          <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-6 lg:grid-cols-4 lg:px-8">
            {[
              { icon: <Award size={20} />, label: "15+ Years" },
              { icon: <Clock size={20} />, label: "7 Days/Week" },
              { icon: <Car size={20} />, label: "Fully Mobile" },
              { icon: <Shield size={20} />, label: "Licensed & Insured" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-primary">{s.icon}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold lg:text-5xl mb-10">Why We're <span className="text-primary">Different</span></h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Zap className="mt-1 shrink-0 text-primary" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Fully mobile — we bring water &amp; power</p>
                  <p className="text-muted-foreground text-sm mt-1">Generator, pressure washer, and water tank onboard. No shop, no commute.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Zap className="mt-1 shrink-0 text-primary" size={20} />
                <div>
                  <p className="font-semibold text-foreground">15 years expertise, every car custom</p>
                  <p className="text-muted-foreground text-sm mt-1">No templates. Every detail is tailored to your specific vehicle and paint condition.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Zap className="mt-1 shrink-0 text-primary" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Results that speak for themselves</p>
                  <p className="text-muted-foreground text-sm mt-1">We don't need to oversell it. The finish does the talking.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Services</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Our Services</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Interior Detailing", price: "From $180", image: "/images/bg/interior-bg.png", path: "/services#interior" },
              { title: "Wax Packages", price: "From $150", image: "/images/bg/wax-bg.png", path: "/services#other-services" },
              { title: "Full Detail", price: "From $250", image: "/images/bg/full-detail-bg.png", path: "/services#full-detail" },
              { title: "Paint Correction", price: "Quote Based", image: "/images/bg/onestep-bg.png", path: "/services#paint-correction" },
              { title: "Ceramic Coating", price: "From $1,100", image: "/images/bg/ceramic-bg.png", path: "/services/protective/ceramic" },
              { title: "PPF & Window Tint", price: "From $1,300", image: "/images/bg/ppf-tint-bg.png", path: "/services/protective/ppf" },
            ].map(s => (
              <Link 
                key={s.title} 
                to={s.path || "/services"}
                className="group relative aspect-square overflow-hidden rounded-xl border border-primary/10 bg-card transition-all duration-500"
              >
                {/* Specimen Image Layer */}
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Stealth Overlay Layer */}
                <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-black/20 group-hover:backdrop-blur-none" />

                {/* Content Layer */}
                <div className="relative z-20 flex h-full flex-col justify-end p-8">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="font-mono text-sm text-primary font-bold drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">{s.price}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                    Explore Details <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Why Area 51</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Why Us</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Clock size={28} />, title: "7 Days/Week", desc: "8AM–6PM, by appointment. We work around your schedule." },
              { icon: <Car size={28} />, title: "Fully Self-Contained", desc: "Generator, pressure washer, water tank — all onboard." },
              { icon: <Shield size={28} />, title: "Licensed & Insured", desc: "Complete peace of mind for your vehicle." },
              { icon: <MapPin size={28} />, title: "30-Mile Radius", desc: "Naples, Bonita Springs, Marco Island, Estero & more." },
            ].map(d => (
              <div key={d.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-secondary text-primary">
                  {d.icon}
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group aspect-[4/3] rounded-lg border border-border bg-secondary flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-2 text-primary/40" size={32} />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Project Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Social Proof</p>
            <h2 className="text-3xl font-bold lg:text-5xl">What Our Clients Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Michael T., Porsche Owner", text: "Best detailer in Naples, period." },
              { name: "Sarah K., Tesla Owner", text: "The ceramic coating is incredible. Water just rolls right off. Truly out of this world service." },
              { name: "David R., Naples", text: "Professional, on time, and the results speak for themselves." },
            ].map(r => (
              <div key={r.name} className="rounded-lg border border-border bg-card p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="border-t border-border py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
            <h2 className="text-3xl font-bold lg:text-5xl">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How long does ceramic coating take?", a: "4–12 hours. Full cure in 7 days." },
              { q: "Are you really fully mobile?", a: "Yes. Generator, water tank, pressure washer — all onboard. We're completely self-sufficient." },
              { q: "How far do you travel?", a: "Up to 30 miles from Naples." },
            ].map(f => (
              <div key={f.q} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-sm font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-border font-display uppercase tracking-wider text-sm hover:border-primary hover:text-primary">
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold lg:text-5xl mb-6">
            Ready for a <span className="text-primary">Professional Transformation?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Book your appointment today. We come to you.
          </p>
          <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm hover:opacity-90 box-glow">
            Get Quote →
          </Button>
        </div>
      </section>
    </div>
  );
};

const X = ({ className, size }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default Index;
