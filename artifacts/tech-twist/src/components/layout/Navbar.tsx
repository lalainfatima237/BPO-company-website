import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "#packages" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  // Check if we're on the home page
  const isHomePage = location === "/" || location === "";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After navigating to home, scroll to stored section
  useEffect(() => {
    if (isHomePage) {
      const pendingSection = sessionStorage.getItem("scrollToSection");
      if (pendingSection) {
        sessionStorage.removeItem("scrollToSection");
        // Wait for page to fully render
        setTimeout(() => {
          const element = document.getElementById(pendingSection);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const offsetPosition = (elementRect - bodyRect) - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 120);
      }
    }
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // Direct page routes (e.g. /services, /contact)
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    const targetId = href.replace("#", "");

    if (isHomePage) {
      // Already on home — just scroll
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = (elementRect - bodyRect) - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      // On another page — save target, navigate home, scroll after mount
      sessionStorage.setItem("scrollToSection", targetId);
      navigate("/");
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "glass-nav-dark py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/Tech1.png`}
              alt="Tech Twist Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes("Tech1.png")) {
                  target.src = `${import.meta.env.BASE_URL}images/Tech1.png`;
                }
              }}
            />
            <span className="font-display font-black text-2xl tracking-tight hidden sm:block text-white">
              Tech<span className="text-indigo-400">Twist</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center space-x-1 mr-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <Button
              className="rounded-xl px-6 py-5 font-bold shadow-lg btn-shine text-white border-0 text-sm"
              onClick={() => navigate("/contact")}
            >
              <Zap className="mr-1.5 h-4 w-4" /> Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-colors text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden origin-top bg-slate-900/95",
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 space-y-2 flex flex-col">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-base font-semibold text-white/80 py-3 px-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
          <Button
            className="rounded-xl px-6 py-5 font-bold shadow-lg btn-shine text-white border-0 text-sm mt-2"
            onClick={() => navigate("/contact")}
          >
            <Zap className="mr-1.5 h-4 w-4" /> Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
