import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  Headset, PhoneOutgoing, Users, TrendingUp,
  MessageSquare, BarChart3, Zap, Shield, Star,
  Phone, Mail, Repeat2, Search, ClipboardCheck, UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ── INBOUND DATA ─────────────────────────────────────────────────
const inboundStats = [
  { value: "3,000+", label: "Calls Handled / Day" },
  { value: "30s",  label: "Avg. Answer Time" },
  { value: "98%",    label: "First-Call Resolution" },
  { value: "24/7",   label: "Coverage" },
];

const inboundSubServices = [
  { icon: Phone,          title: "Customer Support",         desc: "Live agents resolve complaints, queries, and issues under your brand name." },
  { icon: MessageSquare,  title: "Technical Helpdesk",       desc: "Tier-1 & Tier-2 tech support for software, hardware, and connectivity issues." },
  { icon: ClipboardCheck, title: "Order Tracking & Status",  desc: "Real-time order updates, delivery confirmations, and return handling." },
  { icon: Mail,           title: "Email & Chat Support",     desc: "Omnichannel support across email, live chat, and messaging platforms." },
  { icon: Shield,         title: "Complaints & Escalations", desc: "Structured escalation workflows ensuring every issue reaches resolution." },
  { icon: UserCheck,      title: "Account Management",       desc: "Dedicated agents managing customer accounts, renewals, and upsells." },
];

const inboundKeywords = [
  "24/7 Live Support", "CRM Integration", "Call Recording", "QA Monitoring",
  "Multi-language", "Helpdesk", "Ticket Management", "SLA Guarantee",
];

// ── OUTBOUND DATA ────────────────────────────────────────────────
const outboundStats = [
  { value: "500+", label: "Leads Generated / Day" },
  { value: "40+",  label: "Active SDR Agents" },
  { value: "3×",   label: "Avg. Pipeline Growth" },
  { value: "B2B",  label: "& B2C Campaigns" },
];

const outboundSubServices = [
  { icon: Search,        title: "Lead Generation",           desc: "Identify, qualify, and deliver high-intent prospects into your sales funnel." },
  { icon: PhoneOutgoing, title: "Cold Calling",              desc: "Trained SDRs make targeted outreach calls to your ideal customer profile." },
  { icon: TrendingUp,    title: "Appointment Setting",       desc: "Book qualified discovery calls directly onto your sales team's calendar." },
  { icon: Repeat2,       title: "Customer Win-back",         desc: "Re-engage lapsed customers with personalised campaigns and offers." },
  { icon: BarChart3,     title: "Market Research & Surveys", desc: "Collect data, measure NPS, and validate product ideas through live surveys." },
  { icon: Users,         title: "B2B Sales Campaigns",       desc: "Full cycle outbound campaigns from prospecting to pipeline reporting." },
];

const outboundKeywords = [
  "Lead Qualification", "Cold Calling", "CRM Updates", "Daily Reporting",
  "Appointment Setting", "SDR Agents", "Pipeline Growth", "Follow-ups",
];

// ── REUSABLE BLOCK ────────────────────────────────────────────────
function ShowcaseBlock({
  badge,
  title,
  titleHighlight,
  description,
  stats,
  subServices,
  keywords,
  image,
  imageAlt,
  accentColor,
  tagColor,
  reverse = false,
}: {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: { value: string; label: string }[];
  subServices: { icon: React.ElementType; title: string; desc: string }[];
  keywords: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  tagColor: string;
  reverse?: boolean;
}) {
  const [, navigate] = useLocation();

  const TextCol = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-6 flex flex-col justify-center"
    >
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-widest w-fit ${tagColor}`}>
        <Headset size={13} />
        {badge}
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
        {title}{" "}
        <span className={`bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
          {titleHighlight}
        </span>
      </h2>

      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-border/60 rounded-2xl px-5 py-4 shadow-sm">
            <div className={`text-2xl font-black bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <span key={kw} className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${tagColor}`}>
            {kw}
          </span>
        ))}
      </div>

      <Button
        onClick={() => navigate("/contact")}
        className="h-12 px-8 rounded-xl font-bold btn-shine text-white border-0 shadow-lg shadow-primary/20 w-fit"
      >
        <Zap className="mr-2 h-4 w-4" /> Get a Free Quote
      </Button>
    </motion.div>
  );

  const ImageCol = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-5"
    >
      {/* Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] h-72 w-full">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-white text-xs font-semibold">Live Operations</span>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-yellow-400 text-yellow-400" />)}
          <span className="text-white text-xs font-semibold ml-1">5.0 Rated</span>
        </div>
      </div>

      {/* Sub-service cards */}
      <div className="grid grid-cols-2 gap-3">
        {subServices.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex items-start gap-3 bg-white border border-border/60 rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
              <item.icon size={15} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground leading-snug">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {reverse ? (
          <>
            {ImageCol}
            {TextCol}
          </>
        ) : (
          <>
            {TextCol}
            {ImageCol}
          </>
        )}
      </div>
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────
export function CallCenterShowcase() {
  return (
    <section className="py-14 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              Core BPO Services
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              World Class <span className="text-gradient-warm">Call Center Operations</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fully managed inbound and outbound call center services operating 24/7 under your brand  powered by trained agents, real time reporting, and enterprise grade infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* INBOUND — Text left, Image+cards right */}
        <ShowcaseBlock
          badge="Core Service · Inbound"
          title="Inbound Call Center"
          titleHighlight=""
          description="Our inbound call center agents work as a seamless extension of your team handling every customer interaction with professionalism, empathy, and speed. From first contact to resolution, we guarantee a consistent brand experience that drives loyalty and repeat business."
          stats={inboundStats}
          subServices={inboundSubServices}
          keywords={inboundKeywords}
          image="images/inbound.jpeg"
          imageAlt="Tech Twist Inbound Call Center Operations"
          accentColor="from-blue-500 to-cyan-400"
          tagColor="bg-blue-50 text-blue-700 border-blue-200"
          reverse={false}
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* OUTBOUND — Image+cards left, Text right */}
        <ShowcaseBlock
          badge="Core Service · Outbound"
          title="Outbound Call Center "
          titleHighlight=""
          description="Our outbound teams are built to fill your pipeline and accelerate revenue. Trained SDR agents identify high value prospects, qualify leads with precision, and book appointments directly onto your calendar  so your sales team focuses only on closing deals."
          stats={outboundStats}
          subServices={outboundSubServices}
          keywords={outboundKeywords}
          image="images/outbound.jpg"
          imageAlt="Tech Twist Outbound Lead Generation Team"
          accentColor="from-violet-500 to-indigo-500"
          tagColor="bg-violet-50 text-violet-700 border-violet-200"
          reverse={true}
        />

      </div>
    </section>
  );
}
