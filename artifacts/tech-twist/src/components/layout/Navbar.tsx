import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      const heroHeight = window.innerHeight * 0.8;
      setIsHeroSection(scrollY < heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (href: string) => {
  //   setIsMobileMenuOpen(false);
  //   const element = document.querySelector(href);
  //   if (element) {
  //     const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
  //     window.scrollTo({ top: offsetTop, behavior: "smooth" });
  //   }
  // };
const scrollToSection = (href: string) => {
  setIsMobileMenuOpen(false); // Mobile menu band karne ke liye
  
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);

  if (element) {
    // 80 is the height of your navbar. 
    // Isko adjust karein agar navbar zyada bada ya chota lage.
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-5",
      isScrolled
        ? isHeroSection ? "glass-nav-dark py-3" : "glass-nav py-3"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className={cn(
              "p-2 rounded-xl transition-colors",
              isHeroSection && !isScrolled ? "bg-white/10" : "bg-primary/10"
            )}>
              <img
                src={`${import.meta.env.BASE_URL}images/Tech1.png`}
                alt="Tech Twist Logo"
                className={cn(
                  "h-10 w-auto object-contain transition-all",
                  isHeroSection && !isScrolled ? "" : ""
                )}
                onError={(e) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('Tech1.png')) {
      target.src = `${import.meta.env.BASE_URL}images/Tech1.png`;
    }
  }}
              />
            </div>
            {isHeroSection && !isScrolled ? (
              <span className="font-display font-black text-2xl tracking-tight hidden sm:block transition-colors text-[#f5f6f7]">
                Tech<span className="text-primary">Twist</span>
              </span>
            ) : (
              <span className="font-display font-black text-2xl tracking-tight hidden sm:block transition-all logo-gradient">
                TechTwist
              </span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center space-x-1 mr-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10",
                    isHeroSection && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <Button
              className="rounded-xl px-6 py-5 font-bold shadow-lg btn-shine text-white border-0 text-sm"
              onClick={() => scrollToSection('#contact')}
            >
              <Zap className="mr-1.5 h-4 w-4" /> Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors",
                isHeroSection && !isScrolled ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden origin-top",
        isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="px-6 py-8 space-y-2 flex flex-col">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-base font-semibold text-foreground py-3 px-4 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
          {/* <Button
            className="w-full mt-4 py-6 rounded-xl font-bold btn-shine text-white"
            onClick={() => scrollToSection('#contact')}
          >
            <Zap className="mr-2 h-5 w-5" /> Get in Touch
          </Button> */}
          <Button
  className="rounded-xl px-6 py-5 font-bold shadow-lg btn-shine text-white border-0 text-sm"
  onClick={() => scrollToSection('#contact')}
>
  <Zap className="mr-1.5 h-4 w-4" /> Get Started
</Button>
        </div>
      </div>
    </nav>
  );
}
