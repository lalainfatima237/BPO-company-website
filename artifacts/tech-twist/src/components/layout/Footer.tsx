import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
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

          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => scrollTo('#home')}
            >
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/15 transition-colors">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="Tech Twist Logo"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                Tech<span className="text-indigo-400">Twist</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses globally with premier BPO operations and cutting-edge technological solutions designed to scale.
            </p>

            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://facebook.com/techtwist" },
                { icon: Twitter, href: "https://twitter.com/techtwist" },
                { icon: Linkedin, href: "https://linkedin.com/company/techtwist" },
                { icon: Instagram, href: "https://instagram.com/techtwist" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-base text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="text-indigo-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base text-white mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Inbound/Outbound Support', 'Tax & Dispatch Operations', 'Order Taking & Booking', 'Custom POS Solutions', 'Hardware Integration'].map(s => (
                <li key={s} className="hover:text-indigo-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base text-white mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-indigo-400 shrink-0 mt-0.5" size={16} />
                <span>123 Business Ave,<br />Tech City, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-indigo-400 shrink-0" size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-400 shrink-0" size={16} />
                <span>info@techtwist.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tech Twist. All rights reserved.</p>
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
