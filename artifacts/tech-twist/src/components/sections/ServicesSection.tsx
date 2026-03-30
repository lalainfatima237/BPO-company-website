import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, Truck, ClipboardList, MonitorSmartphone, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    category: "Call Center Services",
    items: [
      { icon: Headset, title: "Inbound Call Center", desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring high customer satisfaction." },
      { icon: PhoneOutgoing, title: "Outbound Call Center", desc: "Lead generation, telemarketing, and survey campaigns driven by targeted strategies." }
    ]
  },
  {
    category: "Business Services",
    items: [
      { icon: Truck, title: "Tax & Dispatch", desc: "Logistics coordination, route optimization, and reliable dispatch management." },
      { icon: ClipboardList, title: "Order Taking & Booking", desc: "Seamless handling of reservations, appointments, and e-commerce order processing." }
    ]
  },
  {
    category: "Technology Solutions",
    items: [
      { icon: MonitorSmartphone, title: "POS Solutions", desc: "Custom Point of Sale systems for Grocery, Restaurant, and Pharmacy businesses." },
      { icon: Cpu, title: "Hardware Integration", desc: "Manufacturing development, barcode solutions, and secure biometric attendance systems." }
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Comprehensive Solutions for Modern Businesses</h3>
        </div>

        <div className="space-y-16">
          {services.map((category, catIdx) => (
            <div key={category.category}>
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                {category.category}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.items.map((srv, idx) => (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Card className="h-full border-none shadow-md hover:-translate-y-1 transition-transform duration-300">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <srv.icon size={28} />
                        </div>
                        <CardTitle className="text-xl">{srv.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-muted-foreground">
                          {srv.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
