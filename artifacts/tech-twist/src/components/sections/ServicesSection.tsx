import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, FileText, ClipboardList, ShoppingCart, Utensils, Pill, Factory, Barcode, Fingerprint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    category: "Call Center Services",
    emoji: "📞",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    services: [
      {
        icon: Headset,
        title: "Inbound Call Center",
        desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring maximum satisfaction.",
        image: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?w=700&q=80&fit=crop",
      },
      {
        icon: PhoneOutgoing,
        title: "Outbound Call Center",
        desc: "Lead generation, telemarketing, follow-ups and survey campaigns with targeted outreach strategies.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80&fit=crop",
      },
    ],
  },
  {
    category: "Business Services",
    emoji: "📊",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    services: [
      {
        icon: FileText,
        title: "Tax Dispatch",
        desc: "Accurate tax management, filing, compliance reporting and financial dispatch services for businesses.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&fit=crop",
      },
      {
        icon: ClipboardList,
        title: "Order Taking & Booking",
        desc: "Seamless handling of reservations, appointments, and e-commerce order processing around the clock.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&fit=crop",
      },
    ],
  },
  {
    category: "Technology & POS Solutions",
    emoji: "💻",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    services: [
      {
        icon: ShoppingCart,
        title: "POS for Grocery",
        desc: "Fast, reliable point-of-sale systems with inventory management, barcode scanning and billing.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80&fit=crop",
      },
      {
        icon: Utensils,
        title: "POS for Restaurant",
        desc: "Complete restaurant billing, table management, kitchen order display and menu management system.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&fit=crop",
      },
      {
        icon: Pill,
        title: "POS for Pharmacy",
        desc: "Pharmacy management with medicine inventory, expiry tracking, prescriptions and sales reporting.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop",
      },
      {
        icon: Factory,
        title: "PABX & Hardware Integration",
        desc: "Custom PABX systems and seamless hardware device integration with automation solutions.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop",
      },
      {
        icon: Barcode,
        title: "Barcode Solutions",
        desc: "End-to-end barcode generation, scanning systems and label printing for inventory and retail.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80&fit=crop",
      },
      {
        icon: Fingerprint,
        title: "Biometric Attendance",
        desc: "Secure fingerprint and face recognition attendance tracking systems for offices and factories.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80&fit=crop",
      },
    ],
  },
];

export function ServicesSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)' }}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              Our Expertise
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Comprehensive Solutions<br />
              <span className="text-gradient-warm">for Modern Business</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From call center operations to advanced tech integrations — we deliver end-to-end business solutions.
            </p>
          </motion.div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((cat, catIdx) => (
          <div key={cat.category} className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <h4 className="text-2xl font-bold text-foreground">{cat.category}</h4>
              <div className={`h-px flex-1 bg-gradient-to-r ${cat.color} opacity-30`} />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((srv, idx) => (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg`}>
                        <srv.icon size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {srv.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{srv.desc}</p>
                      <button
                        onClick={() => scrollTo("#contact")}
                        className={`mt-1 text-sm font-semibold inline-flex items-center gap-1.5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-300`}
                      >
                        Learn More <ArrowRight size={13} className="text-primary" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="h-14 px-10 rounded-xl font-bold btn-shine text-white border-0 shadow-lg shadow-primary/20"
          >
            Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
