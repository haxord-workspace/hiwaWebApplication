import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", location: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = "https://hiwa-user-management-backend.onrender.com/api/v1/enquires";
    const alternateEndpoint = "https://hiwa-user-management-backend.onrender.com/api/v1/enquires";

    const submitTo = async (url: string) => {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const body = await res.text();
      if (!res.ok) {
        const detail = body ? `: ${body}` : "";
        throw new Error(`API error ${res.status}${detail}`);
      }

      return body;
    };

    try {
      try {
        await submitTo(endpoint);
      } catch (error: any) {
        if (error.message.includes("404")) {
          await submitTo(alternateEndpoint);
        } else {
          throw error;
        }
      }

      alert("Thank you! Your enquiry is submitted. We'll get back to you within 24 hours.");
      setForm({ name: "", phone: "", date: "", location: "", message: "" });
    } catch (error) {
      console.error("Contact form submit failed:", error);
      alert(`There was a problem sending your message: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
                Get in Touch
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ready to elevate your next event? Contact us for a personalized staffing solution.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+91 81297 94377" },
                { icon: Mail, label: "Email", value: "hiwaevents1@gmail.com" },
                { icon: MapPin, label: "Location", value: "Vengara, Kerala, India" },
              ].map((item) => (
                <div key={item.label} className="glass p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="glass aspect-[4/3] overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4787.696966217697!2d75.95901532122025!3d11.048586020714513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzUzLjYiTiA3NcKwNTcnNDIuNyJF!5e0!3m2!1sen!2sin!4v1774695777395!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hiwa Manpower Solutions Location"
                ></iframe>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass p-8 space-y-5">
                <h3 className="font-display text-xl font-semibold mb-2">Request Manpower</h3>
                <input
                  type="text" placeholder="Full Name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <input
                  type="tel" placeholder="Phone Number" required
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <input
                  type="date" required
                  value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <input
                  type="text" placeholder="Location" required
                  value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <textarea
                  placeholder="Message" rows={5} required
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Request Manpower
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
