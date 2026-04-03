import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a ceramic coating take?", a: "A ceramic coating application takes 4–12 hours depending on the package selected and vehicle size. Full cure takes 7 days — during this time, the vehicle should not be washed or exposed to heavy rain." },
  { q: "What maintenance is required for ceramic coatings?", a: "An annual decontamination wash is required to maintain the warranty. We offer maintenance wash packages to keep your coating performing at its best." },
  { q: "Are you truly mobile? What do you bring?", a: "Yes, we are fully self-sufficient. Our rig includes a generator, professional-grade pressure washer, and a full water tank. We bring everything needed — no power outlets or water hookups required from you." },
  { q: "How far do you travel for appointments?", a: "We serve up to 30 miles from Naples, covering Bonita Springs, Marco Island, Estero, Fort Myers, Cape Coral, Pelican Bay, Port Royal, Moorings, Vanderbilt Beach, and surrounding areas." },
  { q: "What's the difference between XPEL and 3M PPF?", a: "XPEL is our preferred brand for its superior technology, anti-yellowing properties, and self-healing capabilities. Both provide excellent protection, but XPEL consistently delivers better long-term clarity and durability." },
  { q: "What payment methods do you accept?", a: "We accept Cash, Credit/Debit Cards, Venmo, and Zelle for your convenience." },
  { q: "What are your hours of operation?", a: "We're available Monday through Sunday, 8:00 AM – 6:00 PM, by appointment. Contact us to schedule your service." },
  { q: "Do I need to prepare my vehicle before you arrive?", a: "Just make sure your vehicle is accessible and personal belongings are removed from the interior. We handle everything else." },
];

const FAQPage = () => (
  <div>
    <section className="py-24 lg:py-32 hero-gradient grid-bg">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Knowledge Base</p>
        <h1 className="text-4xl font-bold lg:text-6xl">Frequently Asked <span className="text-primary text-glow">Questions</span></h1>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="font-display text-sm font-semibold hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQPage;
