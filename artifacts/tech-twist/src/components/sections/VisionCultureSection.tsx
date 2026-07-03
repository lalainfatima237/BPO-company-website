import { motion } from "framer-motion";
import { Target, Zap, Heart, Trophy, BookOpen, Users, TrendingUp, Calendar } from "lucide-react";

const visionPillars = [
  { icon: Target,   label: "Mission-Driven" },
  { icon: Zap,      label: "Innovation First" },
  { icon: Heart,    label: "People Centric" },
];

const cultureStats = [
  { value: "40+",     label: "Training Hours / Agent",  color: "text-primary" },
  { value: "8%",      label: "Monthly Attrition Rate",  color: "text-primary" },
  { value: "2×",      label: "Career Growth Rate",      color: "text-primary" },
  { value: "Monthly", label: "Team Events",             color: "text-primary" },
];

// Team/culture photo grid — using available images
const teamPhotos = [
  "images/l1.jpg",
  "images/l2.jpg",
  "images/l3.jpg",
  "images/pos.jpg",
  "images/order.jpg",
  "images/bar.jpg",
  "images/bio.jpg",
  "images/b1.jpg",
  "images/hard.jpg",
];

export function VisionCultureSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* ── BLOCK 1: Vision ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-6 h-0.5 bg-primary rounded" />
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Vision of <span className="text-gradient-warm">Tech Twist</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                To become the most trusted BPO and technology partner for growing businesses worldwide  known for operational excellence, transparent client relationships, and teams that truly care about your customers.
              </p>
              <p>
                We believe every customer interaction is an opportunity to build loyalty. By combining skilled human talent with proven processes and cutting edge technology, we help our clients reduce costs, improve productivity, and maintain the highest service standards 24 hours a day, 7 days a week.
              </p>
            </div>

            {/* Pillar Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {visionPillars.map((p, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl border border-border/60 text-sm font-semibold text-foreground">
                  <p.icon size={14} className="text-primary" />
                  {p.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Office Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] aspect-[4/3]">
              <img
                src="images/v1.jpg"
                alt="Tech Twist Global Office  Call Center Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── BLOCK 2: Life at Tech Twist ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Photo Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-4 grid-rows-2 gap-2.5"
          >
            {teamPhotos.map((src, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2" : "col-span-1"
                } aspect-square`}
              >
                <img
                  src={src}
                  alt={`Tech Twist team photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* Right — Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-6 h-0.5 bg-primary rounded" />
              Our Culture
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Life at <span className="text-gradient-warm">Tech Twist</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                We invest in our people because they are the engine behind every client success story. From regular training sessions and skill certifications to team outings and recognition programs  we build an environment where talent grows and stays.
              </p>
              <p>
                Our agents work in a modern, supportive workspace with clear career progression paths. Low attrition means your operations are handled by experienced professionals who understand your brand inside and out.
              </p>
            </div>

            {/* Culture Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {cultureStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white border border-border/60 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Extra perks */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: BookOpen, text: "Continuous Learning" },
                { icon: Users,    text: "Collaborative Teams" },
                { icon: TrendingUp, text: "Growth-Focused" },
                { icon: Calendar, text: "Monthly Team Events" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-xl text-xs font-semibold text-foreground border border-border/60">
                  <item.icon size={12} className="text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
