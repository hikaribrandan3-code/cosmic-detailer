import { useOutletContext, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Droplets, Zap, Clock, Star, ChevronRight, Gauge, Layers } from "lucide-react";

const ServicesPage = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  return (
    <div className="bg-background">

      {/* Header */}
      <section className="pt-32 pb-16 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">// SERVICE SPECIFICATIONS</p>
          <h1 className="text-5xl font-black italic lg:text-7xl tracking-tighter uppercase">
            Technical <span className="text-primary text-glow">Execution</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-mono text-xs uppercase tracking-widest leading-relaxed">
            Each service below is documented step-by-step. Read the inclusion list — that's where your money goes.
          </p>
        </div>
      </section>

      {/* ─────────── SERVICE 01: FULL DETAIL ─────────── */}
      <ServiceDetail
        id="full-detail"
        badge="MOST RECOMMENDED"
        serviceNumber="01"
        title="FULL DETAIL"
        tagline="The Complete Package. Interior + Exterior + Everything Most Shops Skip."
        price="Starting at $250"
        time="5–6 hours"
        ctaLabel="Book Full Detail"
        ctaService="Full Detail"
        openQuote={openQuote}
        bgImage="/images/bg/full-detail-bg.png"
        experience="Your vehicle leaves in a state that requires documentation — not because it needs it, but because the result is measurable. The Full Detail combines every interior and exterior process into a single appointment, including the tasks that deteriorate resale value over time: engine bay buildup, wheel well contamination, and the silicone-stripped rubber seals most shops ignore entirely."
        sections={[
          {
            category: "INTERIOR",
            items: [
              { label: "Vacuum", detail: "All seating surfaces, carpets, floor mats, trunk/cargo area, and crevices via dedicated extraction tool" },
              { label: "Surface Treatment", detail: "Dashboard, door panels, and trim conditioned; center console sanitized; cup holders, switches, controls, and air vents cleared" },
              { label: "Seat Restoration", detail: "Leather cleaned and conditioned; fabric seats extracted and stain-treated; Alcantara/suede handled with dry-clean process; headliner spot-cleaned" },
              { label: "Finishing Pass", detail: "Interior glass cleaned streak-free with two-towel method; door jambs wiped and dressed; floor mats shampooed; UV light final inspection" },
            ]
          },
          {
            category: "EXTERIOR",
            items: [
              { label: "Pre-Wash", detail: "Foam cannon pre-soak to loosen surface contamination before contact wash" },
              { label: "Two-Bucket Hand Wash", detail: "Dedicated wash and rinse buckets with grit guards — prevents cross-contamination and swirl introduction" },
              { label: "Iron Decontamination", detail: "Chemical fallout remover applied to all painted surfaces to dissolve embedded brake dust and metallic contamination" },
              { label: "Clay Bar Treatment", detail: "Full paint decontamination pass for bonded contaminants clay cannot be removed by wash alone" },
              { label: "Wheel & Tire Detail", detail: "Face, spokes, barrel, and caliper faces cleaned; tire sidewalls dressed; lug nut wells cleared" },
              { label: "Exterior Glass", detail: "Polished and sealed with glass-safe product; streak-free exterior and interior surfaces" },
              { label: "Door & Trunk Jambs", detail: "All jamb surfaces wiped and dressed — one of the first areas inspectors and buyers check" },
            ]
          },
          {
            category: "THE EXTRAS",
            items: [
              { label: "Engine Bay", detail: "Surface wiped, dressed, and degreased where accessible — extends the life of rubber components and prevents corrosion" },
              { label: "Wheel Wells", detail: "Cleaned and dressed to prevent accelerated rust and contamination buildup" },
              { label: "Exhaust Tips", detail: "Polished to remove carbon deposits" },
              { label: "Gas Cap Recess", detail: "Cleaned — oxidation here is a common resale red flag" },
              { label: "Rubber Seals", detail: "All door and trunk seals conditioned to prevent cracking and improve weatherproofing" },
              { label: "Final Paint Inspection", detail: "LED light walkthrough to verify no missed areas; panel-by-panel sign-off" },
            ]
          }
        ]}
        difference="Choose this if your vehicle hasn't had a comprehensive detail in the last 6 months, if you're preparing for sale or trade-in, or if you simply want a complete baseline reset. Everything else on the menu is a subset of this service."
      />

      {/* ─────────── SERVICE 02: INTERIOR ─────────── */}
      <ServiceDetail
        id="interior"
        serviceNumber="02"
        title="INTERIOR DETAILING"
        tagline="Cabin Restoration. Deep Extraction and Surface Treatment — Not Vacuum-and-Wipe."
        price="Starting at $180"
        time="2–4 hours (condition-dependent)"
        ctaLabel="Book Interior Detail"
        ctaService="Interior Detailing"
        openQuote={openQuote}
        bgImage="/images/bg/interior-bg.png"
        experience="The interior sees more accumulated contamination than any other part of the vehicle — food residue, body oils, pet dander, salt, and UV degradation that standard cleaning misses by design. This service goes surface-by-surface with the correct tool for each substrate: extraction equipment for upholstery, dedicated conditioners for leather, specialized process for Alcantara. The result is a cabin that's measurably cleaner, not just visually tidier."
        sections={[
          {
            category: "VACUUM & DEEP CLEAN",
            items: [
              { label: "Full Seat Extraction", detail: "All seating surfaces vacuumed including crevice tool extraction for seat rail channels, under-seat, and between cushions" },
              { label: "Carpet & Mats", detail: "Carpets, floor mats, and trunk/cargo liners extracted; pet hair removal included" },
              { label: "Crevice Tool Pass", detail: "Door pockets, console gaps, seatbelt channels, cup holder bases, and vent interiors cleared" },
            ]
          },
          {
            category: "SURFACE TREATMENT",
            items: [
              { label: "Dashboard & Trim", detail: "Cleaned and conditioned with UV-protective product — prevents fading and cracking" },
              { label: "Door Panels", detail: "All card surfaces, armrests, and map pockets wiped and treated" },
              { label: "Center Console", detail: "Sanitized throughout including lid, storage compartment, base, and gear surround" },
              { label: "Controls & Switches", detail: "All buttons, toggles, and rocker switches cleaned with appropriate applicator — no liquid pooling" },
              { label: "Air Vents", detail: "Blade-by-blade cleaned using detail brush; particularly important for musty odor sources" },
            ]
          },
          {
            category: "SEAT RESTORATION",
            items: [
              { label: "Leather", detail: "pH-balanced leather cleaner applied, agitated, and extracted; leather conditioner applied to prevent cracking" },
              { label: "Fabric / Cloth", detail: "Hot water extraction with stain pre-treatment; drying time 1–2 hours post-service" },
              { label: "Alcantara / Suede", detail: "Dry-clean process only — no water; specialized brush and suede-safe product" },
              { label: "Headliner", detail: "Spot cleaning for stains and marks; full saturation avoided to prevent delamination" },
            ]
          },
          {
            category: "FINISHING PASS",
            items: [
              { label: "Interior Glass", detail: "All windows cleaned with two-towel method to eliminate streaking — including windshield haze" },
              { label: "Door Jambs", detail: "Sill plates, jamb faces, and striker housings wiped" },
              { label: "Floor Mat Shampoo", detail: "Rubber and carpet mats extracted separately; rubber mats washed and dried; carpet mats brushed and extracted" },
              { label: "UV Inspection", detail: "Light pass to identify missed areas before sign-off" },
            ]
          }
        ]}
        difference="Interior-only when the exterior is maintained and doesn't need full decontamination. If the outside needs work too, the Full Detail is the more efficient booking — it adds exterior + the extras at a fraction of the sum of both separately."
      />

      {/* ─────────── SERVICE 03: ONE-STEP POLISH ─────────── */}
      <ServiceDetail
        id="one-step"
        serviceNumber="03"
        title="ONE-STEP POLISH"
        tagline="Single-Stage Machine Polish. Light Correction for Maintenance or Newer Paint."
        price="Quote-Based"
        time="2–3 hours"
        ctaLabel="Get Polish Quote"
        ctaService="One-Step Polish"
        openQuote={openQuote}
        bgImage="/images/bg/onestep-bg.png"
        experience="Not every vehicle needs a multi-stage correction process. The One-Step Polish uses a single-stage machine application with a light-to-medium compound to address minor surface defects without removing excess clear coat. It delivers 60–70% defect correction and meaningful gloss improvement in a fraction of the time and cost of full paint correction."
        sections={[
          {
            category: "THE PROCESS",
            items: [
              { label: "Prep Wash", detail: "Full decontamination wash before any machine work — no polish applied to a contaminated surface" },
              { label: "Panel Tape-Off", detail: "Trim, rubber, and plastic protected prior to machine work" },
              { label: "Machine Application", detail: "Dual-action or rotary application (vehicle-dependent) with light compound on appropriate foam or microfiber pad" },
              { label: "Single Correction Pass", detail: "Panel-by-panel; compound worked until clear, wiped, and inspected under LED light" },
              { label: "Final Wipe-Down", detail: "Panel wipe with IPA solution to remove any remaining oils before optional protection step" },
            ]
          },
          {
            category: "DEFECTS ADDRESSED",
            items: [
              { label: "Minor Swirl Marks", detail: "Light wash-induced marring and fine scratches — the most common complaint on dark vehicles" },
              { label: "Light Oxidation", detail: "Surface haze and early-stage dullness on single-stage paint or neglected clear coats" },
              { label: "Water Spot Etching", detail: "Mineral deposit etching at light depth; deeper etching requires multi-stage correction" },
              { label: "Light Scratches", detail: "Surface scratches that don't catch a fingernail — below that threshold requires compounding" },
            ]
          },
          {
            category: "WHAT IT DOESN'T DO",
            items: [
              { label: "Deep Scratches", detail: "Scratches visible under fingernail, or scratches into the paint layer — require Paint Correction" },
              { label: "Heavy Oxidation", detail: "Chalking or severe fade from prolonged UV exposure — requires compounding stage" },
              { label: "Holograms", detail: "Machine-induced marring from improper prior polishing — requires compounding to remove" },
            ]
          }
        ]}
        difference="Use the One-Step for newer vehicles (under 3 years), maintenance polish between full corrections, or as prep step before ceramic or PPF. If a fingernail catches on the defects you're trying to fix, book Paint Correction instead."
      />

      {/* ─────────── SERVICE 04: PAINT CORRECTION ─────────── */}
      <ServiceDetail
        id="paint-correction"
        serviceNumber="04"
        title="PAINT CORRECTION"
        tagline="Permanent Defect Removal. Multi-Stage. Wet Sanding When Required."
        price="Quote-Based — Size, Condition, Correction Level"
        time="4–12 hours"
        ctaLabel="Book Correction Consultation"
        ctaService="Paint Correction"
        openQuote={openQuote}
        bgImage="/images/bg/twostep-bg.png"
        experience="Paint correction is not polishing. It's a controlled removal of damaged clear coat to eliminate defects permanently — not fill them. Every vehicle is measured with a paint depth gauge before work begins to confirm there's material to work with. The process is documented, and the result is confirmed under LED inspection before any protection is applied. This is the prerequisite step before ceramic coating or PPF on any vehicle with visible paint defects."
        sections={[
          {
            category: "BEFORE WORK BEGINS",
            items: [
              { label: "Clear Coat Measurement", detail: "Paint depth gauge used on every panel — establishes baseline and confirms correction is safe to perform" },
              { label: "LED Light Inspection", detail: "Full-panel inspection under correction lighting to catalog all defects prior to starting" },
              { label: "Full Decontamination Wash", detail: "Iron decontamination + clay bar before machine work — no compounds applied to contaminated paint" },
              { label: "Panel Tape-Off", detail: "All trim, badging, and rubber masked to prevent compound damage" },
            ]
          },
          {
            category: "STAGE ONE — COMPOUNDING",
            items: [
              { label: "Heavy Compound Application", detail: "Cutting compound + appropriate cutting or foam pad applied via dual-action or rotary — selected per panel hardness and defect depth" },
              { label: "Wet Sanding (When Required)", detail: "1500–3000 grit wet sand for severe orange peel, deep scratches, or paint runs; always followed by compounding to remove sanding marks" },
              { label: "Clear Coat Leveling", detail: "Establishes flat surface required for Stage Two to achieve mirror finish" },
              { label: "LED Verification", detail: "Panel-by-panel check after compounding; second pass applied where defects remain" },
            ]
          },
          {
            category: "STAGE TWO — FINISHING",
            items: [
              { label: "Fine Polish Application", detail: "Fine finishing polish + soft foam or microfiber pad to remove any micro-marring left by Stage One compound" },
              { label: "Clarity Restoration", detail: "This stage is what produces the mirror-like depth — compounding alone leaves haze visible under light" },
              { label: "Correction Verification", detail: "LED light pass confirms defect removal; any remaining marks re-addressed before sign-off" },
              { label: "IPA Final Wipe", detail: "Panel wipe with isopropyl solution removes polish residue and prepares surface for protection" },
            ]
          },
          {
            category: "DEFECTS PERMANENTLY REMOVED",
            items: [
              { label: "Swirl Marks", detail: "Fine circular marring from improper wash technique or automated car washes" },
              { label: "Water Spot Etching", detail: "Mineral deposits that have etched into the clear coat below surface level" },
              { label: "Oxidation", detail: "UV-induced surface degradation; moderate to heavy on single-stage paint and older clear coats" },
              { label: "Light to Moderate Scratches", detail: "Any scratch that doesn't penetrate through the clear coat to primer or bare metal" },
              { label: "Buffer Holograms", detail: "Marring left by prior improper machine polishing" },
              { label: "Chemical Etching", detail: "Bird dropping or industrial fallout etching into the clear coat" },
              { label: "RIDS / Deep Scratches", detail: "Random isolated deep scratches addressed via wet sanding where clear coat depth permits" },
            ]
          }
        ]}
        difference="Paint Correction is required when defects are visible in direct sunlight, when a fingernail catches on scratches, or when you're preparing a vehicle for ceramic coating or PPF. If defects are limited to light swirls and the paint is in good overall condition, start with the One-Step Polish."
      />

      {/* ADDITIONAL SERVICES GRID */}
      <section id="other-services" className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-3">// ADDITIONAL</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Other Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Wax Package", price: "From $150", desc: "Hand-applied professional wax. UV protection and gloss enhancement. Not a substitute for paint correction — a maintenance layer for paint in good condition." },
              { title: "Mini Detail", price: "From $150", desc: "Quick maintenance service for vehicles already in good condition. Exterior hand wash, interior vacuum and wipe-down, interior/exterior glass." },
              { id: "exterior", title: "Exterior Detail", price: "Quote-Based", desc: "Two-bucket hand wash, foam pre-soak, iron decontamination, clay bar, wheel/tire detail. Exterior-only when the interior is maintained." },
              { title: "Water Spot Treatment", price: "Quote-Based", desc: "Chemical and mechanical removal of mineral deposit etching. Paint-safe process — clear coat measurement confirmed before work begins." },
              { title: "Ceramic Coating", price: "From $1,100", desc: "Nano-ceramic molecular bond to the clear coat. 3–5 year protection layer against contamination, UV, and water etching. Requires paint correction if defects are present.", link: "/services/protective/ceramic" },
              { title: "PPF / Window Tint", price: "From $1,300", desc: "Physical film protection and infrared-blocking tint. Both outsourced to certified installation partners — XPEL and STEK film exclusively.", link: "/services/protective/ppf" },
            ].map(s => (
              <div key={s.title} id={s.id} className="p-6 border border-border/40 bg-card/20 space-y-3 hover:border-primary/30 transition-all group">
                <h3 className="font-display font-black uppercase tracking-wider text-sm text-foreground">{s.title}</h3>
                <p className="font-mono text-xs text-primary font-bold">{s.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.link ? (
                  <Link to={s.link}>
                    <Button variant="ghost" size="sm" className="mt-2 text-xs uppercase tracking-widest font-mono text-primary hover:text-primary/80 p-0 h-auto">
                      Full Details <ChevronRight size={12} className="ml-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" size="sm" onClick={() => openQuote(s.title)} className="mt-2 text-xs uppercase tracking-widest font-mono text-primary hover:text-primary/80 p-0 h-auto">
                    Get Quote <ChevronRight size={12} className="ml-1" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTECTIVE SERVICES SECTION */}
      <section className="py-24 lg:py-32 bg-card/20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// LONG-TERM PROTECTION</p>
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter">PROTECTIVE <span className="text-[#39FF14] text-glow">SERVICES</span></h2>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground italic font-bold">OUTSOURCED TO CERTIFIED XPEL & STEK INSTALLATION PARTNERS</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
              <Zap size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">CERAMIC COATING</h3>
              <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,100+</p>
              <Link to="/services/protective/ceramic" className="w-full">
                <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-[#39FF14]/30 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 scale-105 shadow-[0_0_50px_rgba(57,255,20,0.1)] hover:border-[#39FF14]/60 transition-all group">
              <Shield size={48} className="text-[#39FF14] group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">PAINT PROTECTION FILM</h3>
              <p className="font-mono text-2xl text-[#39FF14] font-bold">$1,300+</p>
              <Link to="/services/protective/ppf" className="w-full">
                <Button className="w-full bg-[#39FF14] text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-[#32e612] transition-all box-glow">
                  FULL DETAILS
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center space-y-6 hover:border-[#39FF14]/40 transition-all group">
              <Droplets size={48} className="text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">WINDOW TINT</h3>
              <p className="font-mono text-2xl text-white font-bold">$199+</p>
              <Link to="/services/protective/tint" className="w-full">
                <Button className="w-full bg-white text-black font-display text-xs uppercase tracking-widest font-black italic hover:bg-white/90 transition-all">
                  FULL DETAILS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─────────────────────────────────────────────
// SERVICE DETAIL COMPONENT
// ─────────────────────────────────────────────
interface SectionItem { label: string; detail: string; }
interface Section { category: string; items: SectionItem[]; }

interface ServiceDetailProps {
  id: string;
  badge?: string;
  serviceNumber: string;
  title: string;
  tagline: string;
  price: string;
  time: string;
  ctaLabel: string;
  ctaService: string;
  openQuote: (service?: string) => void;
  bgImage?: string;
  experience: string;
  sections: Section[];
  difference: string;
}

const ServiceDetail = ({ id, badge, serviceNumber, title, tagline, price, time, ctaLabel, ctaService, openQuote, bgImage, experience, sections, difference }: ServiceDetailProps) => (
  <section id={id} className="py-24 border-t border-border/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

        {/* LEFT — Content */}
        <div className="space-y-12">

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase">// {serviceNumber}</span>
              {badge && (
                <span className="px-2 py-0.5 bg-primary text-black font-mono text-[9px] font-black uppercase tracking-widest">
                  ★ {badge}
                </span>
              )}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none">{title}</h2>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed border-l-2 border-primary pl-4">
              {tagline}
            </p>
          </div>

          {/* The Experience */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">THE EXPERIENCE</h3>
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">{experience}</p>
          </div>

          {/* What's Included */}
          <div className="space-y-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">WHAT'S INCLUDED</h3>
            {sections.map(section => (
              <div key={section.category} className="space-y-3">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50 border-b border-border/30 pb-2">
                  ┌─ {section.category}
                </h4>
                <ul className="space-y-3 pl-2">
                  {section.items.map((item, i) => (
                    <li key={item.label} className="flex gap-3 text-sm">
                      <span className="font-mono text-primary/60 shrink-0 mt-0.5 text-xs">
                        {i < section.items.length - 1 ? "├─" : "└─"}
                      </span>
                      <span>
                        <span className="font-bold text-foreground">{item.label}:</span>{" "}
                        <span className="text-muted-foreground leading-relaxed">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* The Difference */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">THE DIFFERENCE</h3>
            <p className="text-foreground/70 leading-relaxed text-sm border border-border/30 bg-card/20 p-4 rounded">{difference}</p>
          </div>
        </div>

        {/* RIGHT — Sticky Booking Card */}
        <div className="lg:sticky lg:top-28 space-y-6">
          <div className="border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
            {bgImage && (
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
              </div>
            )}
            <div className="p-6 space-y-6">
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Pricing</p>
                <p className="text-2xl font-black text-primary italic tracking-tight">{price}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Estimated Time</p>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Clock size={14} className="text-primary" />
                  <span className="text-sm font-mono">{time}</span>
                </div>
              </div>
              <div className="h-px bg-border/30" />
              <Button
                onClick={() => openQuote(ctaService)}
                className="w-full bg-primary text-primary-foreground font-display uppercase tracking-widest text-xs font-black hover:opacity-90 box-glow py-6"
              >
                {ctaLabel} →
              </Button>
              <p className="font-mono text-[9px] text-muted-foreground text-center uppercase tracking-widest">
                Mobile service — we come to you
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesPage;
