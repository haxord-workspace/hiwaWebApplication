import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import eventTeamFormal from "@/assets/event-team-formal.png";
import eventCateringService from "@/assets/event-catering-service.png";
import eventStaffBriefing from "@/assets/event-staff-briefing.png";
import eventBeverageService from "@/assets/event-beverage-service.png";
import eventCorporateGala from "@/assets/event-corporate-gala.jpg";
import eventWeddingReception from "@/assets/event-wedding-reception.jpg";
import eventTechExhibition from "@/assets/event-tech-exhibition.jpg";
import eventProductLaunch from "@/assets/event-product-launch.jpg";
import eventBeachWedding from "@/assets/event-beach-wedding.jpg";
import eventArtExhibition from "@/assets/event-art-exhibition.jpg";
import eventConference from "@/assets/event-conference.jpg";
import eventTradeFair from "@/assets/event-trade-fair.jpg";
import eventGardenParty from "@/assets/event-garden-party.jpg";

const categories = ["All", "Corporate", "Weddings", "Exhibitions", "Our Team"];

const galleryItems = [
  { id: 1, category: "Corporate", title: "Annual Gala Dinner", image: eventCorporateGala },
  { id: 2, category: "Weddings", title: "Grand Wedding Reception", image: eventWeddingReception },
  { id: 3, category: "Exhibitions", title: "Tech Expo 2024", image: eventTechExhibition },
  { id: 4, category: "Corporate", title: "Product Launch Event", image: eventProductLaunch },
  { id: 5, category: "Weddings", title: "Beach Wedding Setup", image: eventBeachWedding },
  { id: 6, category: "Exhibitions", title: "Art Exhibition", image: eventArtExhibition },
  { id: 7, category: "Corporate", title: "Conference & Summit", image: eventConference },
  { id: 8, category: "Exhibitions", title: "Trade Fair 2024", image: eventTradeFair },
  { id: 9, category: "Weddings", title: "Garden Party", image: eventGardenParty },
  { id: 10, category: "Our Team", title: "Formal Event Team", image: eventTeamFormal },
  { id: 11, category: "Our Team", title: "Catering Service Staff", image: eventCateringService },
  { id: 12, category: "Our Team", title: "Staff Briefing Session", image: eventStaffBriefing },
  { id: 13, category: "Our Team", title: "Beverage Service Crew", image: eventBeverageService },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState<typeof galleryItems[0] | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="pt-24">
      <section className="section-padding pb-12">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
              Portfolio
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Event <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              A showcase of events where our team delivered exceptional service and unforgettable experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setPreview(item)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-[4/3] rounded-xl border border-border overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <p className="font-display text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-primary mt-1">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="glass max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-2xl font-bold">{preview.title}</h3>
                <button onClick={() => setPreview(null)} className="p-1 text-muted-foreground hover:text-foreground">
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video rounded-lg border border-border mb-4 overflow-hidden">
                <img src={preview.image} alt={preview.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-muted-foreground">
                Our team provided comprehensive staffing solutions for this {preview.category.toLowerCase()} event, ensuring seamless execution and exceptional guest experience.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
