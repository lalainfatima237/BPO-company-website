import { motion } from "framer-motion";
import { Users, Building2, TrendingUp, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Users,
    title: "Professional Team",
    stat: "200+",
    description: "Highly trained experts dedicated to delivering excellence in every interaction."
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    stat: "3",
    description: "State-of-the-art facilities ensuring 24/7 uninterrupted service delivery globally."
  },
  {
    icon: TrendingUp,
    title: "Client Satisfaction",
    stat: "99%",
    description: "A proven track record of boosting ROI and operational efficiency for partners."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image & Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Tech Twist Modern Office" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="font-display text-2xl font-bold mb-2">Innovating Since 2014</p>
                  <p className="text-white/80 text-sm">Building the future of outsourced operations and custom tech.</p>
                </div>
              </div>
            </div>
            
            {/* Overlapping smaller image */}
            <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-30 animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -top-8 -left-8 hidden md:block bg-white p-6 rounded-3xl shadow-elegant border border-white/40 z-30 animate-float">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary to-blue-400 text-white rounded-2xl shadow-lg">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-foreground">10+</h4>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Years Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-12 h-0.5 bg-primary rounded-full"></span>
                About Tech Twist
              </h2>
              <h3 className="text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1]">
                We Bridge the Gap Between <br/>
                <span className="text-gradient">People & Tech</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                Tech Twist is not just another outsourcing firm. We are your strategic partner in growth. By combining human empathy with technological precision, we deliver seamless BPO operations and robust IT infrastructures.
              </p>
              <p>
                Whether you need to scale your customer support, implement custom POS systems, or integrate complex hardware, our dedicated teams are built to integrate seamlessly with yours.
              </p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {['Customized IT Solutions', 'Global 24/7 Support Coverage', 'Data-Driven Strategies'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-bold">
                  <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                    <ChevronRight size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-none shadow-elegant bg-white group hover-lift overflow-hidden relative">
                {/* Hover gradient border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon size={32} />
                    </div>
                    <span className="text-4xl font-extrabold text-foreground/10 group-hover:text-primary/10 transition-colors font-display">
                      {item.stat}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
