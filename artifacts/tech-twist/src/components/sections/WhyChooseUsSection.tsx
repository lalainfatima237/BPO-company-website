import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Globe, TrendingUp, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality",
    desc: "Rigorous QA processes ensure every customer interaction and tech deployment meets elite standards.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Globe,
    title: "Global Talent Pool",
    desc: "Access to highly skilled professionals across diverse domains tailored to your requirements.",
    color: "from-violet-500 to-purple-400"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Agile onboarding and swift implementation of software solutions to get you running faster.",
    color: "from-amber-500 to-orange-400"
  },
  {
    icon: CheckCircle2,
    title: "Cost Efficiency",
    desc: "Optimize your operational expenses without sacrificing the quality of your output.",
    color: "from-emerald-500 to-teal-400"
  }
];

const bigStats = [
  { value: "98%", label: "Client Retention Rate", icon: Star },
  { value: "15M+", label: "Interactions Handled", icon: TrendingUp },
  { value: "500+", label: "Active Clients", icon: Globe },
  { value: "24/7", label: "Dedicated Support", icon: Zap },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              The Tech Twist Advantage
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Why Partner<br />
              <span className="text-gradient-warm">With Us?</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We go beyond standard service delivery — aligning our goals with yours, providing a dedicated infrastructure that feels like an in-house extension of your team.
            </p>
          </motion.div>
        </div>

        {/* Big Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0f28 0%, #0d1440 50%, #1e1b4b 100%)' }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-0">
            {bigStats.map((stat, i) => (
              <div
                key={i}
                className={`p-10 flex flex-col items-center justify-center text-center ${i < bigStats.length - 1 ? 'border-r border-white/8' : ''} ${i < 2 ? 'border-b md:border-b-0 border-white/8' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-300 mb-4">
                  <stat.icon size={22} />
                </div>
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white border border-border/60 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                  <feature.icon size={22} />
                </div>
                <h4 className="text-base font-bold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}images/service-it.jpg`}
                alt="Happy Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["SJ", "DC", "MT"].map((init, i) => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                          {init}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-white text-sm font-semibold mt-0.5">Loved by 500+ clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
