import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import hiwaLogo from "@/assets/hiwa-logo.png";

const Footer = () => (
  <footer className="bg-card/50 border-t border-border">
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={hiwaLogo} alt="Hiwa" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl font-bold">Hiwa</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium event manpower solutions for world-class experiences.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Catering Staff", "Hosts & Hostesses", "Event Captains"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-foreground transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["About Us", "/about"], ["Gallery", "/gallery"], ["Contact", "/contact"], ["Privacy Policy", "/terms"]].map(([name, path]) => (
              <li key={path}><Link to={path} className="hover:text-foreground transition-colors">{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 81297 94377</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hiwaevents1@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> Vengara, Kerala, India</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hiwa Manpower Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
