import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4",
        isScrolled ? "glass-nav py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('#home')}>
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Tech Twist Logo" 
                className="h-8 w-auto object-contain mix-blend-multiply" 
              />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-foreground hidden sm:block">
              Tech<span className="text-primary">Twist</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                </button>
              ))}
            </div>
            <Button 
              className="rounded-full px-8 py-6 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all btn-shine text-white border-0"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 hover:bg-secondary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden origin-top",
          isMobileMenuOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 space-y-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-lg font-bold text-foreground py-3 border-b border-border/30 hover:text-primary hover:pl-2 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full mt-6 py-6 rounded-2xl font-bold btn-shine text-white shadow-xl shadow-primary/20"
            onClick={() => scrollToSection('#contact')}
          >
            <PhoneCall className="mr-2 h-5 w-5" /> Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
