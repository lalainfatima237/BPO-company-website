import { motion } from "framer-motion";
import { Users, Building2, TrendingUp, ChevronRight, Award, Shield, Globe } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Professional Team",
    stat: "200+",
    color: "from-blue-500 to-cyan-400",
    description: "Highly trained experts dedicated to delivering excellence in every interaction."
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    stat: "3",
    color: "from-violet-500 to-purple-400",
    description: "State-of-the-art facilities ensuring 24/7 uninterrupted service delivery globally."
  },
  {
    icon: TrendingUp,
    title: "Client Satisfaction",
    stat: "99%",
    color: "from-emerald-500 to-teal-400",
    description: "A proven track record of boosting ROI and operational efficiency for partners."
  }
];

const perks = ['Customized IT Solutions', 'Global 24/7 Support Coverage', 'Data-Driven Strategies'];

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Tech Twist Call Center Office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl">
                    <p className="font-display text-xl font-bold text-white mb-1">Innovating Since 2014</p>
                    <p className="text-white/70 text-sm">Building the future of outsourced operations</p>
                  </div>
                </div>
              </div>

              {/* Floating card top-left */}
              <div className="absolute -top-6 -left-6 hidden md:block bg-white shadow-elegant border border-border/50 p-5 rounded-2xl animate-float z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white shadow-lg">
                    <Award size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground">10+</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Years Excellence</div>
                  </div>
                </div>
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-8 hidden md:block w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                <div className="w-8 h-0.5 bg-primary rounded-full" />
                About Tech Twist
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-foreground leading-[1.05]">
                We Bridge the Gap<br />
                Between{" "}
                <span className="text-gradient-warm">People & Tech</span>
              </h3>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Tech Twist is not just another outsourcing firm — we are your strategic partner in growth. By combining human empathy with technological precision, we deliver seamless BPO operations and robust IT infrastructures.
              </p>
              <p>
                Whether you need to scale your customer support, implement custom POS systems, or integrate complex hardware, our dedicated teams integrate seamlessly with yours.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {perks.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <ChevronRight size={14} />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mini stat pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Shield, label: "ISO Certified Quality" },
                { icon: Globe, label: "Serving 30+ Countries" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-sm font-semibold text-foreground">
                  <item.icon size={14} className="text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-28">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group relative bg-white border border-border/60 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg`}>
                    <item.icon size={26} />
                  </div>
                  <div className="text-4xl font-black text-foreground/8 font-display">{item.stat}</div>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
