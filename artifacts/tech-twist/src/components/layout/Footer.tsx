import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Tech Twist Logo" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <span className="font-display font-bold text-2xl tracking-tight">
                Tech <span className="text-primary">Twist</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses globally with premier BPO operations and cutting-edge technological solutions designed to scale.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Inbound/Outbound Call Center</li>
              <li>Tax & Dispatch Operations</li>
              <li>Order Taking & Booking</li>
              <li>Custom POS Solutions</li>
              <li>Hardware & Biometric Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/techtwist" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/techtwist" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com/company/techtwist" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/techtwist" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/techtwist" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tech Twist. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
