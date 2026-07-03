import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  Headset, PhoneOutgoing, Car, ClipboardList,
  ShoppingCart, Utensils, Pill, Factory, Barcode, Fingerprint,
  ArrowRight, CheckCircle2, ArrowLeft, Phone, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";

const allServices = [
  {
    id: "inbound-call-center",
    icon: Headset,
    title: "Inbound Call Center",
    shortDesc: "24/7 customer support, query resolution, and technical helpdesk services.",
    fullDesc: "Our inbound call center agents are available around the clock to handle customer queries, complaints, order tracking, and technical support. We integrate seamlessly with your CRM to deliver a personalized experience that drives loyalty and retention.",
    image: "images/service-callcenter.jpg",
    iconColor: "from-blue-500 to-cyan-400",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    category: "Call Center Services",
    tags: ["24/7 Support", "CRM Integration", "Call Recording", "QA Monitoring"],
    features: ["24/7 Live Agent Support", "Multi-language Support", "CRM Integration", "Call Recording & QA", "Real-time Reporting", "Escalation Management"],
    keywords: "inbound call center Pakistan, 24/7 customer support outsourcing, BPO inbound services",
  },
  {
    id: "outbound-call-center",
    icon: PhoneOutgoing,
    title: "Outbound Call Center",
    shortDesc: "Lead generation, telemarketing, follow-ups and targeted survey campaigns.",
    fullDesc: "Drive revenue growth with our data-driven outbound calling services. From cold outreach and lead qualification to appointment setting and customer re-engagement, our trained agents deliver measurable ROI for your sales pipeline.",
    image: "images/slide-callcenter.jpg",
    iconColor: "from-blue-500 to-cyan-400",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    category: "Call Center Services",
    tags: ["Lead Generation", "Cold Calling", "CRM Updates", "Daily Reporting"],
    features: ["Lead Generation & Qualification", "Appointment Setting", "Telemarketing Campaigns", "Customer Win-back Programs", "Survey & Market Research", "Sales Pipeline Reporting"],
    keywords: "outbound call center, lead generation BPO, telemarketing outsourcing Pakistan",
  },
  {
    id: "taxi-dispatch",
    icon: Car,
    title: "Taxi Dispatch Services",
    shortDesc: "Professional dispatch coordination with real-time tracking and 24/7 availability.",
    fullDesc: "Our taxi dispatch team handles high-volume booking coordination with speed and accuracy. We manage driver assignment, route optimization, customer communication, and real-time status updates keeping your fleet running efficiently around the clock.",
    image: "images/taxi.jpg",
    iconColor: "from-violet-500 to-purple-400",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    category: "Business Services",
    tags: ["Live Dispatch", "Route Management", "24/7 Operations", "Fleet Tracking"],
    features: ["24/7 Dispatch Operations", "Real-time Driver Coordination", "Booking & Scheduling", "Customer Notifications", "Fleet Monitoring Support", "Multi-zone Coverage"],
    keywords: "taxi dispatch services outsourcing, cab dispatch BPO, transport coordination services",
  },
  {
    id: "order-taking-booking",
    icon: ClipboardList,
    title: "Order Taking & Booking",
    shortDesc: "Seamless order processing, reservations, and appointment management 24/7.",
    fullDesc: "Never miss a sale or booking again. Our dedicated order-taking agents process inbound orders, manage restaurant reservations, handle appointment scheduling, and coordinate delivery confirmations  fully integrated with your existing systems.",
    image: "images/service-pos.jpg",
    iconColor: "from-violet-500 to-purple-400",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    category: "Business Services",
    tags: ["Phone Orders", "Reservations", "Appointment Booking", "Order Tracking"],
    features: ["Phone & Online Order Processing", "Restaurant Reservation Management", "Appointment Scheduling", "Order Confirmation & Follow-up", "Inventory Sync Support", "E-commerce Integration"],
    keywords: "order taking services BPO, restaurant reservation outsourcing, appointment booking service",
  },
  {
    id: "pos-grocery",
    icon: ShoppingCart,
    title: "POS for Grocery",
    shortDesc: "Fast, reliable point-of-sale systems with inventory management and barcode scanning.",
    fullDesc: "Our grocery POS solution is built for speed at checkout. With real-time inventory tracking, multi-barcode scanning, supplier management, and daily sales reports, you get complete visibility and control over your store operations.",
    image: "images/slide-pos-grocery.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["Barcode Scanning", "Inventory Mgmt", "Multi-cashier", "Daily Reports"],
    features: ["Barcode & QR Scanning", "Real-time Inventory Tracking", "Supplier & Purchase Management", "Daily Sales Reports", "Multi-cashier Support", "Customer Loyalty Module"],
    keywords: "grocery POS system Pakistan, supermarket billing software, retail inventory management",
  },
  {
    id: "pos-restaurant",
    icon: Utensils,
    title: "POS for Restaurant",
    shortDesc: "Complete restaurant billing, table management, and kitchen display system.",
    fullDesc: "Transform your restaurant operations with our all-in-one POS. Manage tables, split bills, send orders to the kitchen display, handle delivery integrations, and analyse peak-hour trends all from a single intuitive interface.",
    image: "images/slide-pos-restaurant.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["Table Management", "Kitchen Display", "Split Billing", "Menu Builder"],
    features: ["Table & Floor Management", "Kitchen Order Display (KDS)", "Menu & Modifier Management", "Split Billing", "Delivery App Integration", "Daily Revenue Reports"],
    keywords: "restaurant POS system Pakistan, billing software restaurant, kitchen display system",
  },
  {
    id: "pos-pharmacy",
    icon: Pill,
    title: "POS for Pharmacy",
    shortDesc: "Pharmacy management with medicine inventory, expiry tracking, and prescriptions.",
    fullDesc: "Our pharmacy POS ensures full compliance and operational efficiency. Track medicine stock in real-time, manage expiry dates, process prescriptions, generate purchase orders automatically, and produce detailed sales and tax reports.",
    image: "images/slide-pos-pharmacy.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["Expiry Tracking", "Prescriptions", "Auto Reorder", "Tax Reports"],
    features: ["Medicine Inventory Management", "Expiry Date Tracking", "Prescription Processing", "Auto Purchase Orders", "Tax & Sales Reports", "Multi-branch Support"],
    keywords: "pharmacy POS system Pakistan, medicine inventory software, drugstore billing system",
  },
  {
    id: "pabx-hardware",
    icon: Factory,
    title: "PABX & Hardware Integration",
    shortDesc: "Custom PABX systems and seamless hardware device integration with automation.",
    fullDesc: "We design and deploy enterprise-grade PABX telephony systems and integrate them with your existing hardware infrastructure. From IP phone setup to automated IVR flows and call routing, we handle the full implementation and ongoing support.",
    image: "images/slide-pabx.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["IP PABX Setup", "IVR Config", "Call Routing", "On-site Support"],
    features: ["IP & Analog PABX Setup", "IVR & Auto-attendant Configuration", "Call Routing & Extensions", "Hardware Device Integration", "Network Infrastructure Support", "On-site & Remote Maintenance"],
    keywords: "PABX system Pakistan, IP telephony setup, office phone system installation Lahore",
  },
  {
    id: "barcode-solutions",
    icon: Barcode,
    title: "Barcode Solutions",
    shortDesc: "End-to-end barcode generation, scanning systems, and label printing.",
    fullDesc: "From barcode label design and printing to scanner hardware setup and software integration, we provide complete barcode solutions for retail, warehouses, and manufacturing. Our systems support 1D, 2D, and QR codes across all major formats.",
    image: "images/slide-barcode.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["Label Printing", "QR Code", "Scanner Supply", "Bulk Generation"],
    features: ["1D, 2D & QR Code Support", "Barcode Label Design & Printing", "Scanner Hardware Supply", "Inventory Software Integration", "Warehouse Management Support", "Bulk Label Generation"],
    keywords: "barcode solutions Pakistan, barcode label printing Lahore, QR code system retail",
  },
  {
    id: "biometric-attendance",
    icon: Fingerprint,
    title: "Biometric Attendance",
    shortDesc: "Secure fingerprint and face recognition attendance tracking for offices and factories.",
    fullDesc: "Eliminate buddy punching and manual timesheets with our biometric attendance systems. We supply, install, and configure fingerprint, face recognition, and card-based devices  integrated with payroll software for automated salary calculations.",
    image: "images/slide-biometric.jpg",
    iconColor: "from-emerald-500 to-teal-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    category: "Technology & POS Solutions",
    tags: ["Fingerprint", "Face Recognition", "Payroll Sync", "Leave Tracking"],
    features: ["Fingerprint & Face Recognition", "Card-based Access Control", "Real-time Attendance Logs", "Payroll Software Integration", "Multi-location Sync", "Overtime & Leave Tracking"],
    keywords: "biometric attendance system Pakistan, fingerprint machine Lahore, face recognition attendance",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "BPO & Technology Services",
  "provider": {
    "@type": "Organization",
    "name": "Tech Twist Global",
    "url": "https://techtwistglobal.com",
    "logo": "https://techtwistglobal.com/images/Tech1.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #312, Eden Tower, Main Boulevard Gulberg III",
      "addressLocality": "Lahore",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-42-34551791",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu"]
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tech Twist Services",
    "itemListElement": allServices.map((s, i) => ({
      "@type": "Offer",
      "position": i + 1,
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "description": s.shortDesc,
        "url": `https://techtwistglobal.com/services#${s.id}`,
      }
    }))
  }
};

const categories = ["All", "Call Center Services", "Business Services", "Technology & POS Solutions"];

export default function ServicesPage() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Handle hash-based deep link (e.g. /services#pos-grocery)
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Services | BPO, Call Center, POS & Tech Solutions  Tech Twist Global"
        description="Explore Tech Twist Global's full range of services: 24/7 inbound & outbound call center, taxi dispatch, order taking, POS systems for grocery, restaurant & pharmacy, PABX, barcode, and biometric attendance solutions in Pakistan."
        keywords="BPO services Pakistan, call center outsourcing, POS system Lahore, inbound outbound call center, taxi dispatch services, biometric attendance system, PABX installation Pakistan, barcode solutions, Tech Twist Global"
        canonical="https://techtwistglobal.com/services"
        structuredData={structuredData}
      />

      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f28 0%, #0d1440 50%, #0f1a5c 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              10 Services · 3 Categories
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              All Our Services  <span className="text-gradient">In One Place</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              From call center operations to POS systems and biometric solutions Tech Twist Global delivers end-to-end outsourcing and technology services tailored for your business.
            </p>

            {/* Breadcrumb — SEO */}
            <nav aria-label="breadcrumb" className="mt-6 flex justify-center items-center gap-2 text-xs text-slate-500">
              <a href="https://techtwistglobal.com" className="hover:text-indigo-400 transition-colors">Home</a>
              <span>/</span>
              <span className="text-slate-400">Services</span>
            </nav>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Quick Nav Pills */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.slice(1).map((cat) => (
              <button key={cat}
                onClick={() => {
                  const id = cat === "Call Center Services" ? "inbound-call-center"
                    : cat === "Business Services" ? "taxi-dispatch"
                    : "pos-grocery";
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border border-border/60 text-foreground/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                {cat}
              </button>
            ))}
            <a href="https://techtwistglobal.com/contact"
              onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
              className="flex-shrink-0 ml-auto px-5 py-1.5 rounded-full text-sm font-bold btn-shine text-white border-0">
              Get Free Quote →
            </a>
          </div>
        </div>
      </div>

      {/* All Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Call Center & Business Services — 4 col */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-10">
            <span className="text-2xl">📞</span>
            <h2 className="text-2xl font-bold text-foreground">Call Center & Business Services</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-purple-400 opacity-30" />
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {allServices.slice(0, 4).map((srv, idx) => (
              <motion.article key={srv.id} id={srv.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={srv.image} alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${srv.iconColor} flex items-center justify-center text-white shadow-lg`}>
                      <srv.icon size={18} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{srv.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">{srv.shortDesc}</p>
                    {/* Keyword Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {srv.tags.map((tag) => (
                        <span key={tag} className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${srv.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Technology & POS — 3 col */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-10">
            <span className="text-2xl">💻</span>
            <h2 className="text-2xl font-bold text-foreground">Technology & POS Solutions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-30" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.slice(4).map((srv, idx) => (
              <motion.article key={srv.id} id={srv.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="group bg-white border border-border/60 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={srv.image} alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${srv.iconColor} flex items-center justify-center text-white shadow-lg`}>
                      <srv.icon size={18} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{srv.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">{srv.shortDesc}</p>
                    {/* Keyword Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {srv.tags.map((tag) => (
                        <span key={tag} className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${srv.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Internal Backlinks Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-4 rounded-3xl p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0f28 0%, #1e1b4b 100%)" }}>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-3">Ready to Get Started?</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Talk to our team today. Get a free consultation and a customised quote for any of our services.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg"
              onClick={() => navigate("/contact")}
              className="h-14 px-10 rounded-xl font-bold btn-shine text-white border-0 shadow-lg shadow-primary/20">
              <Zap className="mr-2 h-5 w-5" /> Get Free Quote
            </Button>
            <a href="tel:04234551791"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-base">
              <Phone size={18} className="text-indigo-400" /> 042-34551791
            </a>
          </div>

          {/* Internal links for SEO backlinking */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">Explore More</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "About Tech Twist", href: "/", hash: "about" },
                { label: "Why Choose Us", href: "/", hash: "why-us" },
                { label: "Client Testimonials", href: "/", hash: "testimonials" },
                { label: "Pricing Packages", href: "/", hash: "packages" },
                { label: "Contact Us", href: "/contact", hash: "" },
              ].map((link) => (
                <a key={link.label}
                  href={link.href === "/contact" ? "https://techtwistglobal.com/contact" : `https://techtwistglobal.com/#${link.hash}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href === "/contact") {
                      navigate("/contact");
                    } else {
                      sessionStorage.setItem("scrollToSection", link.hash);
                      navigate("/");
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-indigo-400/40 transition-all text-sm font-semibold">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
