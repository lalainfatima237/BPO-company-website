import { motion } from "framer-motion";
import {
  Calendar, Users, PhoneCall, Heart, UsersRound,
  Globe, Briefcase, Monitor, Building2, CheckCircle2,
} from "lucide-react";

const achievements = [
  { icon: Calendar,    value: "4+",    label: "Years of Experience" },
  { icon: Users,       value: "5,000+", label: "Customers Served" },
  { icon: PhoneCall,   value: "1M+",   label: "Calls Managed" },
  { icon: Heart,       value: "99.2%", label: "Customer Satisfaction" },
  { icon: UsersRound,  value: "100+",  label: "Team Size" },
  { icon: Globe,       value: "3+",    label: "Countries Served" },
  { icon: Briefcase,   value: "20+",   label: "Ongoing Projects" },
];

const certifications = [
  {
    icon: Monitor,
    title: "Pakistan Software Export Board Approved",
    short: "PSEB",
    desc: "Officially registered and approved by PSEB Pakistan's premier authority for IT & software export companies.",
    status: "Approved",
  },
  {
    icon: Building2,
    title: "Approved by Securities and Exchange Commission of Pakistan",
    short: "SECP",
    desc: "Fully incorporated and compliant with SECP regulations, ensuring transparent corporate governance and legal standing.",
    status: "Approved",
  },
];

export function AchievementsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Subtle grid — matches site style */}
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Company Achievements ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Proven Track Record</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Company Achievements</h2>
        </motion.div>

        {/* Achievement Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex flex-col items-center gap-2 bg-white border border-border/60 rounded-2xl px-7 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-[120px]"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={20} />
              </div>
              <div className="text-2xl font-black text-foreground">{item.value}</div>
              <div className="text-xs text-muted-foreground font-medium text-center leading-tight">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

        {/* ── Certifications & Standards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Trust & Compliance</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Certifications & Standards</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We are approved by Pakistan's leading technology and corporate regulators, with strict internal quality and data-security protocols in place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group flex items-start gap-4 bg-white border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <cert.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-sm font-bold text-foreground leading-snug">{cert.title}</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                    <CheckCircle2 size={10} /> {cert.status}
                  </span>
                </div>
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-1">{cert.short}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
