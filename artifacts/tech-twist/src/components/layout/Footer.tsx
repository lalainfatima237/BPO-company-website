import { useState } from "react";
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [, navigate] = useLocation();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #080c1e 0%, #0a0f28 100%)' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-3 space-y-6">
            <div
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => scrollTo('#home')}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/Tech1.png`}
                alt="Tech Twist Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-display font-black text-2xl tracking-tight text-white">
                Tech<span className="text-indigo-400">Twist</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses globally with premier BPO operations and cutting-edge technological solutions designed to scale.
            </p>

            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1AdkGAojZa/", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/techtwistglobal", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/techtwist_ali?igsh=Y3FjYmM1eWFqZ2s5", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', action: () => { sessionStorage.setItem("scrollToSection", "home"); navigate("/"); } },
                { label: 'About', action: () => { sessionStorage.setItem("scrollToSection", "about"); navigate("/"); } },
                { label: 'Services', action: () => navigate("/services") },
                { label: 'Why Us', action: () => { sessionStorage.setItem("scrollToSection", "why-us"); navigate("/"); } },
                { label: 'Contact', action: () => navigate("/contact") },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="text-indigo-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base text-white mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Inbound/Outbound Support', 'Taxi Dispatch Operations', 'Order Taking & Booking', 'Custom POS Solutions', 'Barcode & Biometric Systems'].map(s => (
                <li key={s} className="hover:text-indigo-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-base text-white mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                <span>Office #312 Eden Tower, Main Boulevard Gulberg III, Lahore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-indigo-400 shrink-0" size={16} />
                <a href="tel:04234551791" className="hover:text-indigo-400 transition-colors">042-34551791</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-400 shrink-0" size={16} />
                <a href="mailto:admin@techtwistglobal.com" className="hover:text-indigo-400 transition-colors">admin@techtwistglobal.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-bold text-base text-white mb-3">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Button
                type="submit"
                className={`w-full font-bold py-6 rounded-lg transition-all shadow-lg ${
                  isSubscribed
                    ? "bg-green-500 hover:bg-green-600 shadow-green-500/20"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-indigo-500/20"
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={18} /> Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2">You have been subscribed!</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tech Twist Global. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
