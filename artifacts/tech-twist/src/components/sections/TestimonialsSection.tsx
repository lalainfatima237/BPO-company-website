import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Operations Director, RetailFast",
    text: "Tech Twist transformed our customer support. Their inbound team reduced our wait times by 60%, and the integration with our systems was flawless.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "David Chen",
    role: "Owner, Spice Route Restaurant",
    text: "The custom POS solution they built for us completely revolutionized how we handle orders. Incredibly intuitive and reliable hardware.",
    rating: 5,
    initials: "DC"
  },
  {
    name: "Marcus Thorne",
    role: "CEO, LogicLogistics",
    text: "Relying on Tech Twist for our dispatch services was the best decision we made this year. Professional, accurate, and always available.",
    rating: 5,
    initials: "MT"
  }
];

const clients = ["NovaTech", "GlobalReach", "PrimeRetail", "FoodSync", "MedSupply"];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '48px 48px' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2">
            Client Success Stories
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-white">Trusted by Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 text-white backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 h-full rounded-3xl hover:-translate-y-2 relative shadow-2xl">
                {/* Large decorative quote mark */}
                <div className="absolute -top-4 right-6 text-7xl text-slate-700/50 font-serif leading-none font-black select-none">"</div>
                
                <CardContent className="p-10 flex flex-col h-full relative z-10">
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-500 text-yellow-500" size={22} />
                    ))}
                  </div>
                  <p className="text-xl leading-relaxed mb-10 flex-1 font-medium text-slate-300">"{test.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-lg font-bold shadow-lg">
                      {test.initials}
                    </div>
                    <div>
                      <p className="font-bold text-xl">{test.name}</p>
                      <p className="text-primary font-medium">{test.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Ribbon */}
        <div className="border-t border-slate-800 pt-16 text-center">
          <p className="text-slate-400 mb-10 font-bold uppercase tracking-widest text-sm">Empowering Industry Innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {clients.map((client, i) => (
              <div key={client} className="text-2xl font-bold font-display opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20"></div>
                </div>
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
