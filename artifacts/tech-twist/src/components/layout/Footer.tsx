import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-10 border-t-4 border-primary relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-primary opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('#home')}>
              <div className="bg-white/10 p-2 rounded-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Tech Twist Logo" 
                  className="h-8 w-auto object-contain brightness-0 invert" 
                />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight">
                Tech<span className="text-primary">Twist</span>
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed pr-4 font-medium">
              Empowering businesses globally with premier BPO operations and cutting-edge technological solutions designed to scale.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com/techtwist" },
                { icon: Twitter, href: "https://twitter.com/techtwist" },
                { icon: Linkedin, href: "https://linkedin.com/company/techtwist" },
                { icon: Instagram, href: "https://instagram.com/techtwist" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" 
                   className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Why Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-slate-400 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="transform -translate-x-4 group-hover:translate-x-0 transition-transform">{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-base text-slate-400 font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">Inbound/Outbound Support</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Tax & Dispatch Operations</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Order Taking & Booking</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Custom POS Solutions</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Hardware Integration</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6 text-white">Contact Info</h4>
            <ul className="space-y-5 text-base text-slate-400 font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>123 Business Ave,<br/>Tech City, TX 75001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@techtwist.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Tech Twist. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
