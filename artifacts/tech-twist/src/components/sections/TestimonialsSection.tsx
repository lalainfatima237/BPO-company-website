import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "RetailFast",
    text: "Tech Twist transformed our customer support. Their inbound team reduced our wait times by 60%, and the integration with our systems was flawless.",
    rating: 5,
    initials: "SJ",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Owner",
    company: "Spice Route Restaurant",
    text: "The custom POS solution they built for us completely revolutionized how we handle orders. Incredibly intuitive and reliable hardware.",
    rating: 5,
    initials: "DC",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "LogicLogistics",
    text: "Relying on Tech Twist for our dispatch services was the best decision we made this year. Professional, accurate, and always available.",
    rating: 5,
    initials: "MT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

const clients = ["NovaTech", "GlobalReach", "PrimeRetail", "FoodSync", "MedSupply", "DataCore"];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f28 0%, #0d1440 50%, #0f1a5c 100%)' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-xs">
            <div className="w-8 h-0.5 bg-indigo-400 rounded" />
            Client Success Stories
            <div className="w-8 h-0.5 bg-indigo-400 rounded" />
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-white">Trusted by Leaders</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Don't take our word for it — here's what our partners say about working with Tech Twist.</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="group relative h-full bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-indigo-400/20">
                  <Quote size={40} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-300 leading-relaxed text-base mb-8 flex-1">"{test.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/40 flex-shrink-0">
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{test.name}</p>
                    <p className="text-indigo-400 text-xs font-medium">{test.role}, {test.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16"
        >
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-10">Empowering Industry Innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-400/60" />
                </div>
                <span className="text-white font-bold text-lg font-display">{client}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
