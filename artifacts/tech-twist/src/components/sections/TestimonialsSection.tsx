import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Operations Director, RetailFast",
    text: "Tech Twist transformed our customer support. Their inbound team reduced our wait times by 60%, and the integration with our systems was flawless.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Owner, Spice Route Restaurant",
    text: "The custom POS solution they built for us completely revolutionized how we handle orders. Incredibly intuitive and reliable hardware.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "CEO, LogicLogistics",
    text: "Relying on Tech Twist for our dispatch services was the best decision we made this year. Professional, accurate, and always available.",
    rating: 5
  }
];

const clients = ["NovaTech", "GlobalReach", "PrimeRetail", "FoodSync", "MedSupply"];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-200 font-semibold uppercase tracking-wider text-sm">Client Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/15 transition-colors h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 flex-1">"{test.text}"</p>
                  <div>
                    <p className="font-bold text-xl">{test.name}</p>
                    <p className="text-blue-200">{test.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Ribbon */}
        <div className="border-t border-white/20 pt-12 text-center">
          <p className="text-blue-200 mb-8 font-medium">PARTNERING WITH</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {clients.map((client, i) => (
              <div key={client} className="flex items-center gap-2 text-2xl font-bold font-display opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded bg-white/20" />
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
