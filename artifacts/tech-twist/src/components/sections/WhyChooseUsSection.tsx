import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: ShieldCheck, title: "Uncompromised Quality", desc: "Rigorous QA processes ensure every customer interaction and tech deployment meets elite standards." },
  { icon: Globe, title: "Global Talent Pool", desc: "Access to highly skilled professionals across diverse domains tailored to your requirements." },
  { icon: Zap, title: "Rapid Deployment", desc: "Agile onboarding and swift implementation of software solutions to get you running faster." },
  { icon: CheckCircle2, title: "Cost Efficiency", desc: "Optimize your operational expenses without sacrificing the quality of your output." }
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-6">
              <span className="w-10 h-0.5 bg-primary rounded-full"></span>
              The Tech Twist Advantage
            </h2>
            <h3 className="text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-8">
              Why Partner <br/> With Us?
            </h3>
            <p className="text-lg text-muted-foreground font-medium mb-12 max-w-lg leading-relaxed">
              We go beyond standard service delivery. We align our goals with yours, providing a dedicated infrastructure that feels like an in-house extension of your team.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-black text-primary">98%</div>
                <div className="text-sm font-bold text-foreground uppercase tracking-wider">Client Retention</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-primary">15M+</div>
                <div className="text-sm font-bold text-foreground uppercase tracking-wider">Interactions Handled</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Happy Team" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <Card key={idx} className="border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-indigo-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <feature.icon size={26} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
