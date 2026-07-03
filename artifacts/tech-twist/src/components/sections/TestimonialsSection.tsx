import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "RetailFast",
    text: "Tech Twist transformed our customer support. Their inbound team reduced our wait times by 60%, and the integration with our systems was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Owner",
    company: "Spice Route Restaurant",
    text: "The custom POS solution they built for us completely revolutionized how we handle orders. Incredibly intuitive and reliable hardware.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "LogicLogistics",
    text: "Relying on Tech Twist for our dispatch services was the best decision we made this year. Professional, accurate, and always available.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

const clients = [
  { name: "Du Telecom",      image: "du.png" },
  { name: "EDI",             image: "edi.png" },
  { name: "Career House",    image: "career.png" },
  { name: "E Corp",          image: "idea.png" },
  { name: "MWH",             image: "mh.png" },
  { name: "UAE Partners",    image: "uae.png" },
  { name: "Cloud Solutions", image: "cloud.png" },
  { name: "D Services",      image: "task.png" },
  { name: "OutSource Pro",   image: "out.jfif" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-10 pb-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0f28 0%, #0d1440 50%, #0f1a5c 100%)' }}>

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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't take our word for it here's what our partners say about working with Tech Twist.
          </p>
        </div>

        {/* Testimonial Cards — no quote icons */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative h-full bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text — no quotes */}
                <p className="text-slate-300 leading-relaxed text-base mb-8 flex-1">
                  {test.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/40 flex-shrink-0">
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{test.name}</p>
                    <p className="text-indigo-400 text-xs font-medium">{test.role} · {test.company}</p>
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
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-10">
            Trusted Partners &amp; Clients
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {clients.slice(0, 6).map((client) => (
              <div key={client.name}
                className="w-[120px] h-[90px] bg-white/8 hover:bg-white/14 border border-white/10 hover:border-indigo-400/40 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group cursor-default"
                title={client.name}>
                <img
                  src={`${import.meta.env.BASE_URL}images/${client.image}`}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.slice(6).map((client) => (
              <div key={client.name}
                className="w-[120px] h-[90px] bg-white/8 hover:bg-white/14 border border-white/10 hover:border-indigo-400/40 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group cursor-default"
                title={client.name}>
                <img
                  src={`${import.meta.env.BASE_URL}images/${client.image}`}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
