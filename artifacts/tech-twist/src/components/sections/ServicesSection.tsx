import { motion } from "framer-motion";
import { Headset, PhoneOutgoing, FileText, ClipboardList, ShoppingCart, Utensils, Pill, Factory, Barcode, Fingerprint, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    category: "📞 Call Center Services",
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50",
    services: [
      {
        icon: Headset,
        title: "Inbound Call Center",
        desc: "24/7 customer support, query resolution, and technical helpdesk services ensuring maximum satisfaction.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&fit=crop",
      },
      {
        icon: PhoneOutgoing,
        title: "Outbound Call Center",
        desc: "Lead generation, telemarketing, follow-ups and survey campaigns with targeted outreach strategies.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&fit=crop",
      },
    ],
  },
  {
    category: "📊 Business Services",
    color: "from-violet-500 to-purple-400",
    bgLight: "bg-violet-50",
    services: [
      {
        icon: FileText,
        title: "Tax Dispatch",
        desc: "Accurate tax management, filing, compliance reporting and financial dispatch services for businesses.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&fit=crop",
      },
      {
        icon: ClipboardList,
        title: "Order Taking & Booking",
        desc: "Seamless handling of reservations, appointments, and e-commerce order processing around the clock.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&fit=crop",
      },
    ],
  },
  {
    category: "💻 Technology & POS Solutions",
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50",
    services: [
      {
        icon: ShoppingCart,
        title: "POS for Grocery",
        desc: "Fast, reliable point-of-sale systems with inventory management, barcode scanning and billing for grocery stores.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&fit=crop",
      },
      {
        icon: Utensils,
        title: "POS for Restaurant",
        desc: "Complete restaurant billing, table management, kitchen order display and menu management system.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop",
      },
      {
        icon: Pill,
        title: "POS for Pharmacy",
        desc: "Pharmacy management with medicine inventory, expiry tracking, prescriptions and sales reporting.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
      },
      {
        icon: Factory,
        title: "Manufacturing & Hardware Integration",
        desc: "Custom manufacturing software development with seamless hardware device integration and automation.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop",
      },
      {
        icon: Barcode,
        title: "Barcode Solutions",
        desc: "End-to-end barcode generation, scanning systems and label printing for inventory and retail management.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop",
      },
      {
        icon: Fingerprint,
        title: "Biometric Attendance Systems",
        desc: "Secure fingerprint and face recognition attendance tracking systems for offices and factories.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80&fit=crop",
      },
    ],
  },
];

export function ServicesSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 bg-gray-50/80 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-0.5 bg-primary rounded" />
              Our Expertise
              <span className="w-8 h-0.5 bg-primary rounded" />
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight"
          >
            Comprehensive Solutions <br />
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              for Modern Business
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            From call center operations to advanced tech integrations — we deliver end-to-end business solutions.
          </motion.p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((cat, catIdx) => (
          <div key={cat.category} className="mb-20">
            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${cat.color}`} />
              <h4 className="text-2xl font-bold text-foreground">{cat.category}</h4>
              <div className={`h-px flex-1 bg-gradient-to-r ${cat.color} opacity-20`} />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {cat.services.map((srv, idx) => (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-xl bg-white relative overflow-hidden group rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-1">
                    {/* Top gradient strip on hover */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cat.color} transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20`} />

                    {/* Service Image */}
                    <div className="w-full h-52 relative overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {/* Icon badge on image */}
                      <div className={`absolute bottom-4 left-4 p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg`}>
                        <srv.icon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col gap-3">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {srv.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        {srv.desc}
                      </p>
                      <button
                        onClick={() => scrollTo("#contact")}
                        className={`mt-2 text-sm font-semibold inline-flex items-center gap-1.5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent group-hover:gap-2.5 transition-all duration-300`}
                      >
                        Learn More <ArrowRight size={14} className="text-primary" />
                      </button>
                    </CardContent>
                  </Card>
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
          className="mt-4 text-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="rounded-full h-14 px-10 font-bold text-base bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary text-white shadow-lg shadow-primary/25 transition-all duration-500"
          >
            Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
