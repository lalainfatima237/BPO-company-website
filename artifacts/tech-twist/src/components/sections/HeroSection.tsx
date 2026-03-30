import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full px-5 py-2 bg-white shadow-elegant border border-primary/10 text-sm font-bold text-primary mb-2"
          >
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Premium BPO & Tech Partner
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Empowering Business with <br className="hidden lg:block" />
            <span className="text-gradient relative inline-block">
              Smart Solutions
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Elevate your operations with our world-class call center services and bespoke technology integrations. We build the engine that drives your growth.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-16 px-10 rounded-full font-bold text-lg btn-shine text-white shadow-[0_10px_40px_-10px_rgba(29,78,216,0.5)] hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollTo('#services')}
            >
              Explore Services <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-16 px-10 rounded-full font-bold text-lg bg-white/50 backdrop-blur-md border-2 border-border hover:bg-white hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollTo('#contact')}
            >
              Contact Us <PhoneCall className="ml-2 h-5 w-5 text-primary" />
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-16 pb-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl border-t border-border/50 pt-8">
              {[
                { label: "Active Clients", value: "500+" },
                { label: "Years Experience", value: "10+" },
                { label: "Satisfaction", value: "99%" },
                { label: "Support", value: "24/7" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-start sm:items-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block mt-10 lg:mt-0"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Call Center" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 animate-float border border-white/50">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Performance Driven</div>
                  <div className="text-sm text-gray-600">Accelerating business growth</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute right-[10%] top-[30%] animate-float hidden lg:block">
        <div className="bg-white/80 backdrop-blur shadow-elegant p-4 rounded-2xl border border-white flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={24} /></div>
          <div>
            <div className="font-bold text-sm">Uptime</div>
            <div className="text-xs text-muted-foreground">99.99%</div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-[10%] bottom-[25%] animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="bg-white/80 backdrop-blur shadow-elegant p-4 rounded-2xl border border-white flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600"><PhoneCall size={24} /></div>
          <div>
            <div className="font-bold text-sm">Response Time</div>
            <div className="text-xs text-muted-foreground">&lt; 3 seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
