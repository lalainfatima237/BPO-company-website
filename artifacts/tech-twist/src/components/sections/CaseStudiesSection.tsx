import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { TrendingDown, TrendingUp, Users, Clock, Star, Phone, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    tag: "Lahore Based Restaurant Chain",
    service: "POS for Restaurant",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    challenge:
      "Manual billing was causing 25–30 min wait times per table. Order errors averaged 18% and the kitchen had no visibility on incoming orders. Monthly revenue leakage from untracked orders.",
    solution:
      "Tech Twist deployed a full restaurant POS with table management, kitchen display system (KDS), and digital menu. All orders routed directly to kitchen screens  eliminating verbal relay errors.",
    results: [
      { icon: TrendingDown, label: "Order Errors",     before: "18%",       after: "2%",        change: "-89%" },
      { icon: Clock,        label: "Table Wait Time",  before: "28 min",    after: "8 min",     change: "-71%" },
      { icon: TrendingUp,   label: "Monthly Revenue",  before: "Baseline",  after: "+34%",      change: "+34%" },
    ],
    quote: "Within 2 weeks our kitchen was running smoother than ever. We expanded to a second branch within 3 months.",
    author: "Owner, Spice Route Restaurant, Lahore",
  },
  {
    tag: "UK-Based Taxi Fleet Operator",
    service: "Taxi Dispatch Services",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    challenge:
      "A 60 car fleet with in house dispatch was missing 22% of weekend bookings due to capacity limits. Driver no-show rate was 19% and rider complaints were increasing weekly.",
    solution:
      "Tech Twist took over 24/7 dispatch operations with a dedicated 12 agent team, real time driver coordination, automated booking confirmations, and live GPS status updates.",
    results: [
      { icon: TrendingDown, label: "Missed Bookings",  before: "22%",    after: "3%",     change: "-86%" },
      { icon: TrendingDown, label: "No-Show Rate",     before: "19%",    after: "4%",     change: "-79%" },
      { icon: Users,        label: "Rider Complaints", before: "High",   after: "-65%",   change: "-65%" },
    ],
    quote: "Zero downtime on weekends now. Our riders book again because they know the service is reliable.",
    author: "Fleet Operations Manager, UK",
  },
  {
    tag: "Karachi Retail Pharmacy Group",
    service: "POS for Pharmacy + Inbound Support",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    challenge:
      "3 branch pharmacy losing stock to expiry significant monthly waste. Prescription errors and manual billing were causing regulatory compliance risks.",
    solution:
      "Deployed pharmacy POS across all 3 branches with expiry tracking, auto reorder triggers, and prescription logs. Added inbound support agents handling phone prescription queries.",
    results: [
      { icon: TrendingDown, label: "Expiry Waste",     before: "High Loss",  after: "Near Zero",  change: "-85%" },
      { icon: Star,         label: "CSAT Score",       before: "61%",         after: "93%",         change: "+32%" },
      { icon: Phone,        label: "Query Resolution", before: "Next day",    after: "Same call",   change: "100%" },
    ],
    quote: "Stock losses dropped immediately. Our pharmacists now focus on patients, not paperwork.",
    author: "Director, Karachi Pharmacy Group",
  },
  {
    tag: "UAE E-commerce Brand",
    service: "Outbound Call Center & Lead Generation",
    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
    challenge:
      "In-house sales team of 8 was generating 40 qualified leads/month. Cost per lead was AED 320 and conversion rate sat at 11%. Scaling internally was cost-prohibitive.",
    solution:
      "Tech Twist deployed 15 outbound SDR agents with CRM integration (HubSpot), daily performance reporting, and structured lead qualification scripts tailored to UAE market.",
    results: [
      { icon: TrendingUp,   label: "Leads / Month",   before: "40",     after: "280+",   change: "+600%" },
      { icon: TrendingDown, label: "Cost Per Lead",   before: "AED 320", after: "AED 65", change: "-80%" },
      { icon: TrendingUp,   label: "Conversion Rate", before: "11%",    after: "24%",    change: "+118%" },
    ],
    quote: "Our pipeline grew 6x in 60 days. Tech Twist's agents understand our product better than some of our own staff.",
    author: "Head of Growth, UAE E-commerce Brand",
  },
];

export function CaseStudiesSection() {
  const [, navigate] = useLocation();

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-8 h-0.5 bg-primary rounded" />
            Proven Results
            <div className="w-8 h-0.5 bg-primary rounded" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight mb-4">
            Case Studies &{" "}
            <span className="text-gradient-warm">Current Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes from real partnerships. See how Tech Twist has helped clients cut costs, fix operations, and scale faster.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-border/70 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Tag row */}
              <div className="flex items-center justify-between gap-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wide ${cs.tagColor}`}>
                  {cs.tag}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground flex-shrink-0" />
              </div>

              {/* Service label */}
              <p className="text-xs font-bold text-primary uppercase tracking-widest -mt-2">{cs.service}</p>

              {/* Challenge */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground mb-1">Challenge</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Solution</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
              </div>

              {/* Results */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground mb-3">Results</p>
                <div className="grid grid-cols-3 gap-3">
                  {cs.results.map((r, j) => (
                    <div key={j} className="bg-secondary/60 rounded-xl p-3">
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <r.icon size={11} />
                        <span className="text-xs font-medium truncate">{r.label}</span>
                      </div>
                      <div className="text-xs text-muted-foreground line-through mb-0.5">{r.before}</div>
                      <div className="text-base font-black text-foreground">{r.after}</div>
                      <div className="text-xs font-bold text-primary">{r.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-secondary/40 border border-border/50 rounded-xl px-5 py-4 mt-auto">
                <p className="text-sm text-foreground leading-relaxed italic">{cs.quote}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-2">{cs.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="h-14 px-10 rounded-xl font-bold btn-shine text-white border-0 shadow-lg shadow-primary/20"
          >
            <Zap className="mr-2 h-5 w-5" /> Get a Free Quote
          </Button>
        </div>

      </div>
    </section>
  );
}
