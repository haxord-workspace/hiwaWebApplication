import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, UserCheck, Sparkles, Crown, HardHat, ClipboardCheck, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import RequestStaffModal from "@/components/RequestStaffModal";

const services = [
  { icon: UtensilsCrossed, name: "Catering Staff", desc: "Professional servers, helpers, and catering crew for seamless food & beverage service at any scale.", category: "service" },
  { icon: UserCheck, name: "Hosts & Hostesses", desc: "Elegant and well-trained hosts and hostesses for guest reception, registration, and front-of-house duties.", category: "hospitality" },
  { icon: Sparkles, name: "Hosting Boys & Girls", desc: "Energetic and presentable brand ambassadors for promotions, activations, and guest engagement.", category: "hospitality" },
]

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
              What We Offer
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive event staffing solutions tailored to your needs. Every professional is trained, vetted, and ready to deliver excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                      <service.icon size={26} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{service.desc}</p>
                    <button
                      onClick={() => openModal(service.name)}
                      className="w-full py-3 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Request Staff
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <RequestStaffModal open={modalOpen} onClose={() => setModalOpen(false)} service={selectedService} />
    </div>
  );
};

export default Services;
