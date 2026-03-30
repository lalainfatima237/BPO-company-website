import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, Truck, ClipboardList, MonitorSmartphone, Cpu, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Call Center",
    items: [
      { icon: Headset, title: "Inbound Support", desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring high customer satisfaction." },
      { icon: PhoneOutgoing, title: "Outbound Sales", desc: "Lead generation, telemarketing, and survey campaigns driven by targeted strategies." }
    ]
  },
  {
    category: "Business Ops",
    items: [
      { icon: Truck, title: "Tax & Dispatch", desc: "Logistics coordination, route optimization, and reliable dispatch management." },
      { icon: ClipboardList, title: "Order Taking", desc: "Seamless handling of reservations, appointments, and e-commerce order processing." }
    ]
  },
  {
    category: "Technology",
    items: [
      { icon: MonitorSmartphone, title: "POS Solutions", desc: "Custom Point of Sale systems for Grocery, Restaurant, and Pharmacy businesses." },
      { icon: Cpu, title: "Hardware Integration", desc: "Manufacturing development, barcode solutions, and secure biometric attendance systems." }
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
                <Card className="h-full border border-border/50 shadow-sm hover-lift bg-white relative overflow-hidden group rounded-3xl">
                  {/* Top gradient line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-indigo-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  
                  <CardContent className="p-8">
                    {/* Badge */}
                    <div className="mb-8">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-secondary text-secondary-foreground">
                        {category.category}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <srv.icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold text-foreground">{srv.title}</h4>
                        <p className="text-muted-foreground font-medium leading-relaxed">
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
