import { motion } from "framer-motion";
import { Users, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Users,
    title: "Professional Team",
    description: "Highly trained experts dedicated to delivering excellence in every interaction."
  },
  {
    icon: Building2,
    title: "Excellent Environment",
    description: "State-of-the-art facilities ensuring 24/7 uninterrupted service delivery."
  },
  {
    icon: TrendingUp,
    title: "Client Satisfaction",
    description: "A proven track record of boosting ROI and operational efficiency for our partners."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-primary font-semibold uppercase tracking-wider text-sm">About Tech Twist</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              We Bridge the Gap Between <span className="text-primary">People</span> and <span className="text-primary">Technology</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tech Twist is not just another outsourcing firm. We are your strategic partner in growth. By combining human empathy with technological precision, we deliver seamless BPO operations and robust IT infrastructures tailored to your unique business model.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need to scale your customer support, implement custom POS systems, or integrate complex hardware, our dedicated teams are built to integrate seamlessly with yours.
            </p>
          </motion.div>

          {/* Image & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* about section modern call center agents working */}
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80" 
                alt="Tech Twist Team" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay stats card */}
            <div className="absolute -bottom-10 -left-10 hidden md:block bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-foreground">10+</h4>
                  <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl group bg-secondary/30">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
