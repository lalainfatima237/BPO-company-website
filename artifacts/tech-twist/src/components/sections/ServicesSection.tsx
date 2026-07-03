import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, ClipboardList, ShoppingCart, Utensils, Pill, Factory, Barcode, Fingerprint, ArrowRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const topServices = {
  services: [
    {
      icon: Headset,
      title: "Inbound Call Center",
      desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring maximum satisfaction.",
      image: "images/service-callcenter.jpg",
      iconColor: "from-blue-500 to-cyan-400",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
      tags: ["24/7 Support", "CRM Integration", "Call Recording", "QA Monitoring"],
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Call Center",
      desc: "Lead generation, telemarketing, follow-ups and survey campaigns with targeted outreach strategies.",
      image: "images/slide-callcenter.jpg",
      iconColor: "from-blue-500 to-cyan-400",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
      tags: ["Lead Generation", "Cold Calling", "CRM Updates", "Daily Reporting"],
    },
    {
      icon: Car,
      title: "Taxi Dispatch Services",
      desc: "Accurate dispatch coordination, route management and real-time tracking services for taxi fleets.",
      image: "images/taxi.jpg",
      iconColor: "from-violet-500 to-purple-400",
      tagColor: "bg-violet-50 text-violet-700 border-violet-200",
      tags: ["Live Dispatch", "Route Management", "24/7 Operations", "Fleet Tracking"],
    },
    {
      icon: ClipboardList,
      title: "Order Taking & Booking",
      desc: "Seamless handling of reservations, appointments, and e-commerce order processing around the clock.",
      image: "images/service-pos.jpg",
      iconColor: "from-violet-500 to-purple-400",
      tagColor: "bg-violet-50 text-violet-700 border-violet-200",
      tags: ["Phone Orders", "Reservations", "Appointment Booking", "Order Tracking"],
    },
  ],
};

const posServices = {
  category: "Technology & POS Solutions",
  emoji: "💻",
  color: "from-emerald-500 to-teal-400",
  tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  services: [
    {
      icon: ShoppingCart,
      title: "POS for Grocery",
      desc: "Fast, reliable point-of-sale systems with inventory management, barcode scanning and billing.",
      image: "images/slide-pos-grocery.jpg",
      tags: ["Barcode Scanning", "Inventory Mgmt", "Multi-cashier", "Daily Reports"],
    },
    {
      icon: Utensils,
      title: "POS for Restaurant",
      desc: "Complete restaurant billing, table management, kitchen order display and menu management system.",
      image: "images/slide-pos-restaurant.jpg",
      tags: ["Table Management", "Kitchen Display", "Split Billing", "Menu Builder"],
    },
    {
      icon: Pill,
      title: "POS for Pharmacy",
      desc: "Pharmacy management with medicine inventory, expiry tracking, prescriptions and sales reporting.",
      image: "images/slide-pos-pharmacy.jpg",
      tags: ["Expiry Tracking", "Prescriptions", "Auto Reorder", "Tax Reports"],
    },
    {
      icon: Factory,
      title: "PABX & Hardware Integration",
      desc: "Custom PABX systems and seamless hardware device integration with automation solutions.",
      image: "images/slide-pabx.jpg",
      tags: ["IP PABX Setup", "IVR Config", "Call Routing", "On-site Support"],
    },
    {
      icon: Barcode,
      title: "Barcode Solutions",
      desc: "End-to-end barcode generation, scanning systems and label printing for inventory and retail.",
      image: "images/slide-barcode.jpg",
      tags: ["Label Printing", "QR Code", "Scanner Supply", "Bulk Generation"],
    },
    {
      icon: Fingerprint,
      title: "Biometric Attendance",
      desc: "Secure fingerprint and face recognition attendance tracking systems for offices and factories.",
      image: "images/slide-biometric.jpg",
      tags: ["Fingerprint", "Face Recognition", "Payroll Sync", "Leave Tracking"],
    },
  ],
};

export function ServicesSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const [, navigate] = useLocation();

  return (
    <section id="services" className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)' }}>
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              Our Expertise
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Comprehensive Solutions <span className="text-gradient-warm">for Modern Business</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From call center operations to advanced tech integrations we deliver end-to-end business solutions.
            </p>
          </motion.div>
        </div>

        {/* Top 4 — Call Center & Business Services */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-10">
            <span className="text-2xl">📞</span>
            <h4 className="text-2xl font-bold text-foreground">Call Center & Business Services</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-purple-400 opacity-30" />
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {topServices.services.map((srv, idx) => (
              <motion.div key={srv.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img src={srv.image} alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${srv.iconColor} flex items-center justify-center text-white shadow-lg`}>
                      <srv.icon size={18} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{srv.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">{srv.desc}</p>
                    {/* Keyword Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {srv.tags.map((tag) => (
                        <span key={tag} className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${srv.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology & POS Solutions */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-10">
            <span className="text-2xl">{posServices.emoji}</span>
            <h4 className="text-2xl font-bold text-foreground">{posServices.category}</h4>
            <div className={`h-px flex-1 bg-gradient-to-r ${posServices.color} opacity-30`} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posServices.services.map((srv, idx) => (
              <motion.div key={srv.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img src={srv.image} alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${posServices.color} flex items-center justify-center text-white shadow-lg`}>
                      <srv.icon size={18} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{srv.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">{srv.desc}</p>
                    {/* Keyword Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {srv.tags.map((tag) => (
                        <span key={tag} className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${posServices.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-4">
          <Button size="lg" onClick={() => scrollTo("#contact")}
            className="h-14 px-10 rounded-xl font-bold btn-shine text-white border-0 shadow-lg shadow-primary/20">
            Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
