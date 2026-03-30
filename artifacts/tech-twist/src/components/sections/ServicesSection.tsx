import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, Truck, ClipboardList, MonitorSmartphone, Cpu, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Call Center",
    items: [
      { icon: Headset, title: "Inbound Support", desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring high customer satisfaction.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop" },
      { icon: PhoneOutgoing, title: "Outbound Sales", desc: "Lead generation, telemarketing, and survey campaigns driven by targeted strategies.", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  {
    category: "Business Ops",
    items: [
      { icon: Truck, title: "Tax & Dispatch", desc: "Logistics coordination, route optimization, and reliable dispatch management.", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=600&auto=format&fit=crop" },
      { icon: ClipboardList, title: "Order Taking", desc: "Seamless handling of reservations, appointments, and e-commerce order processing.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" }
    ]
  },
  {
    category: "Technology",
    items: [
      { icon: MonitorSmartphone, title: "POS Solutions", desc: "Custom Point of Sale systems for Grocery, Restaurant, and Pharmacy businesses.", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=600&auto=format&fit=crop" },
      { icon: Cpu, title: "Hardware Integration", desc: "Manufacturing development, barcode solutions, and secure biometric attendance systems.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" }
    ]
  }
];

export function ServicesSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-primary"></span>
            Our Expertise
            <span className="w-8 h-0.5 bg-primary"></span>
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1]">
            Comprehensive Solutions <br/> for Modern Business
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.flatMap(category => 
            category.items.map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border border-border/50 shadow-sm hover-lift bg-white relative overflow-hidden group rounded-3xl flex flex-col">
                  {/* Top gradient line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-indigo-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20"></div>
                  
                  {/* Inline Image */}
                  <div className="w-full h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src={srv.image} 
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  <CardContent className="p-8 flex-1 flex flex-col">
                    {/* Badge */}
                    <div className="mb-6 -mt-12 relative z-20">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white text-primary shadow-md border border-gray-100">
                        {category.category}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <srv.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3 pt-1">
                        <h4 className="text-2xl font-bold text-foreground">{srv.title}</h4>
                        <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
        
        <div className="mt-20 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full h-14 px-8 font-bold border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-300"
            onClick={() => scrollTo('#contact')}
          >
            Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
