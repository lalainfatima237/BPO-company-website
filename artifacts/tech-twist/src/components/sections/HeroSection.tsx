import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero modern bright corporate office background with people collaborating */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80" 
          alt="Modern office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Leading BPO & Technology Solutions
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Empowering Businesses with <br className="hidden md:block" />
            <span className="text-gradient">Smart BPO & Tech</span> Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Elevate your operations with our world-class call center services and bespoke technology integrations. We build the engine that drives your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollTo('#services')}
            >
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-2"
              onClick={() => scrollTo('#contact')}
            >
              Contact Us <PhoneCall className="ml-2 h-5 w-5 text-primary" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
