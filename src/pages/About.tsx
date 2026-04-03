import { Award, Star, Shield, Zap, Car, Heart, Target, Sparkles } from "lucide-react";
import jasonPhoto from "/jason.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-card/30 py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 blur-xl" />
              <img
                src={jasonPhoto}
                alt="Jason Midler - CEO of Area 51 Detailing"
                className="relative rounded-lg border border-border object-cover w-full aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded bg-background/90 backdrop-blur px-4 py-3 border border-border">
                <p className="font-display text-sm font-semibold">Jason Midler</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">CEO & Lead Detailer</p>
              </div>
            </div>

            {/* Intro */}
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl mb-6">
                Meet the Mind Behind <span className="text-primary text-glow">Area 51</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a passion for automotive perfection has evolved into Naples' premier mobile detailing experience. 
                I'm not just detailing cars — I'm preserving investments and exceeding expectations, one vehicle at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={24} />, number: "15+", label: "Years in Automotive" },
              { icon: <Star size={24} />, number: "7+", label: "Years Professional Detailing" },
              { icon: <Car size={24} />, number: "$100M+", label: "Cars Detailed" },
              { icon: <Heart size={24} />, number: "∞", label: "Passion for Perfection" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card/50">
                <span className="text-primary mb-3 block">{stat.icon}</span>
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {/* Block 1 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">Built on a Foundation of Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over <strong className="text-foreground">15 years in the automotive industry</strong> and 
                  <strong className="text-foreground"> 7+ years of professional detailing experience</strong>, I've honed my craft 
                  working on some of the most valuable vehicles in the world. My clients have collectively trusted me with 
                  over <strong className="text-foreground">$100 million worth of cars</strong> — from daily drivers to rare exotics.
                  Every vehicle receives the same meticulous attention, regardless of its price tag.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">Above & Beyond is the Standard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I pride myself on always going above and beyond. That's not just a tagline — it's my operating philosophy. 
                  When you book Area 51 Detailing, you're not getting a quick wash and vacuum. You're getting 
                  <strong className="text-foreground"> the highest level of detailing expertise</strong>, period. 
                  I treat every car like it's my own, because I understand that your vehicle is more than transportation — 
                  it's an investment, a passion, and often a reflection of who you are.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">The Mobile Revolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I saw a gap in the mobile detailing industry. Too many "mobile" detailers were cutting corners, 
                  showing up unprepared, or delivering results that didn't justify the price. I knew there was a better way. 
                  So I made the decision to build a <strong className="text-foreground">full custom detailing rig</strong> — 
                  complete with generator, pressure washer, water tank, and professional-grade equipment. 
                  Now I bring the <strong className="text-foreground">best detailing experience directly to your doorstep</strong>, 
                  fully self-sufficient, with zero compromise on quality.
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="text-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-3">Never Stop Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The detailing industry evolves constantly. New products, new techniques, new coatings. 
                  I <strong className="text-foreground">continue to hone my craft yearly</strong>, staying up to date 
                  with the latest advancements in paint correction, ceramic coatings, and protection technology. 
                  When you choose Area 51, you're choosing a detailer who invests in knowledge — so your car gets 
                  the benefit of cutting-edge expertise combined with time-tested technique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">Ready to Experience the Difference?</p>
          <h2 className="text-3xl font-bold lg:text-4xl mb-6">
            Let Me Show You What <span className="text-primary">Out-of-This-World</span> Detailing Looks Like
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you drive a daily commuter or a garage queen, your vehicle deserves the Area 51 treatment. 
            Book your appointment today and discover why Naples trusts me with their most prized possessions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-display text-sm uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-display text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
