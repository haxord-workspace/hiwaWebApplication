import { Target, Eye, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const whyUs = [
  "Rigorously trained and groomed professionals",
  "On-time deployment guaranteed",
  "Flexible team scaling — 5 to 500+ staff",
  "Dedicated account manager for every client",
  "24/7 operational support during events",
  "Comprehensive uniform and grooming standards",
];

const About = () => (
  <div className="pt-24">
    {/* Header */}
    <section className="section-padding pb-12">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
            About Us
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Powering Events with <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hiwa Manpower Solutions is a professional event staffing company dedicated to providing trained, reliable personnel for events, exhibitions, and corporate functions across the UAE and beyond.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="glass p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver top-tier event manpower that elevates every experience. We are committed to professionalism, reliability, and setting new standards in event staffing.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="glass p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Eye size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted manpower solutions partner in the MENA region, known for excellence, innovation, and an unwavering commitment to client satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Why Choose <span className="text-primary">Hiwa</span></h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.08}>
              <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Counters */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={100} suffix="+" label="Events Managed" />
            <AnimatedCounter end={500} suffix="+" label="Staff Members" />
            <AnimatedCounter end={50} suffix="+" label="Corporate Clients" />
            <AnimatedCounter end={10} suffix="+" label="Years Experience" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
