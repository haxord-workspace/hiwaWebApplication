import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Calendar, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

import heroBg from "@/assets/hero-bg.jpeg";
import eventCorporateGala from "@/assets/event-corporate-gala.jpg";
import eventWeddingReception from "@/assets/event-wedding-reception.jpg";
import eventTechExhibition from "@/assets/event-tech-exhibition.jpg";
import eventTeamFormal from "@/assets/event-team-formal.png";
import eventCateringService from "@/assets/event-catering-service.png";
import eventStaffBriefing from "@/assets/event-staff-briefing.png";
import brand1 from "@/assets/brand1.jpeg";
import brand2 from "@/assets/brand2.jpeg";
import brand3 from "@/assets/brand3.jpeg";
import brand4 from "@/assets/brand4.jpeg";
import brand5 from "@/assets/brand5.jpeg";
import brand6 from "@/assets/brand6.jpeg";
import brand7 from "@/assets/brand7.jpeg";
import brand8 from "@/assets/brand8.jpeg";
import brand9 from "@/assets/brand9.jpeg";
import brand10 from "@/assets/brand10.jpeg";
import brand11 from "@/assets/brand11.jpeg";
import brand12 from "@/assets/brand12.jpeg";
import brand13 from "@/assets/brand13.jpeg";

const highlights = [
  { icon: Users, title: "Trained Professionals", desc: "Skilled and experienced event staff" },
  { icon: Award, title: "Premium Quality", desc: "Exceeding client expectations" },
  { icon: Calendar, title: "Flexible Staffing", desc: "Scale up or down as needed" },
  { icon: Shield, title: "Reliable & Punctual", desc: "Always on time, always prepared" },
];

const testimonials = [
  { name: "Sarah Al-Rashid", role: "Event Director, EXPO Events", text: "Hiwa's team was outstanding. Professional, well-groomed, and incredibly reliable. They handled our 500-guest gala flawlessly." },
  { name: "Ahmed Khan", role: "CEO, Grand Celebrations", text: "We've been working with Hiwa for 3 years. Their staff quality and reliability is unmatched in the region." },
  { name: "Lisa Thompson", role: "Marketing Director, Corp Events UAE", text: "From hosting to logistics, Hiwa delivered premium service. Our clients were thoroughly impressed." },
];

const featuredEvents = [
  { image: eventCorporateGala, title: "Corporate Gala", category: "Corporate" },
  { image: eventWeddingReception, title: "Wedding Reception", category: "Weddings" },
  { image: eventTechExhibition, title: "Tech Exhibition", category: "Exhibitions" },
];

const brandImages = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13
];

const Home = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8\">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6">
              Premier Event Staffing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Elite Manpower for{" "}
            <span className="text-primary">World-Class</span> Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From hosting to logistics, we provide trained professionals for every event need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 flex items-center justify-center"
            >
              Request Staff
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg border border-border text-foreground font-semibold text-base sm:text-lg hover:bg-secondary transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Get Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
                See it in Action
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Experience Our Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch how our professional team brings your events to life
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10"
            >
              <div className="aspect-video bg-card/50 flex items-center justify-center group cursor-pointer relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23111111' width='1200' height='675'/%3E%3C/svg%3E"
                >
                  <source src="https://res.cloudinary.com/dksirwbit/video/upload/v1774766478/IMG_6955_1_lgwelr.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass p-6 text-center hover-lift group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Showcase */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
                Our Work
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Featured <span className="text-primary">Events</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.15}>
                <Link to="/gallery" className="group block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">{event.category}</p>
                      <p className="font-display text-xl font-semibold">{event.title}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Team Showcase */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
                Our People
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                The <span className="text-primary">Team</span> Behind Every Event
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                Professional, well-trained, and always ready to deliver excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: eventTeamFormal, title: "Formal Event Staff", desc: "Impeccably dressed professionals" },
              { image: eventCateringService, title: "Service Excellence", desc: "Trained catering personnel" },
              { image: eventStaffBriefing, title: "Team Briefings", desc: "Thorough preparation for every event" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="rounded-xl overflow-hidden border border-border group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card/30">
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

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">What Our <span className="text-primary">Clients Say</span></h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass p-8 md:p-12 relative">
              <Star size={32} className="text-accent/30 mb-4" />
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                "{testimonials[testimonialIdx].text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[testimonialIdx].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].role}</p>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 text-center">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Trusted by Leading Brands</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {brandImages.map((brand, i) => (
                  <div key={i} className="w-24 h-12 flex items-center justify-center">
                    <img
                      src={brand}
                      alt={`Brand ${i + 1}`}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
