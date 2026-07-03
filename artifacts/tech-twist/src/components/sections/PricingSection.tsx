import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Plan",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses getting started with outsourced support.",
    color: "from-blue-500 to-cyan-400",
    features: [
      "1 Dedicated Agent",
      "8 hours/day coverage",
      "Email + chat Support",
      "Weekly Performance report",
      "Basic Training included",
      "CRM Access",
    ],
  },
  {
    name: "Growth Plan",
    price: "$2,499",
    period: "/month",
    description: "Ideal for growing teams needing extended coverage and integrations.",
    color: "from-violet-500 to-purple-400",
    popular: true,
    features: [
      "2 Dedicated agents",
      "Phone + Email + chat Support",
      "16 Hours/Day coverage",
      "Dedicated team leader",
      "Daily Performance report",
      "Call recording + QA",
      "CRM integration (HubSpot+Zoho)",
      "Priority onboarding",
    ],
  },
  {
    name: "Premium Plan",
    price: "$4,499",
    period: "/month",
    description: "Enterprise-grade support with full coverage and dedicated management.",
    color: "from-emerald-500 to-teal-400",
    features: [
      "5+ Dedicated agents",
      "24/7 Full coverage",
      "Omnichannel Support (call, chat, email, whatsapp)",
      "Dedicated Supervisor + QA team",
      "Advance Reporting Dashboard",
      "Monthly strategy meetings",
      "SLA Guarantee (99%)",
    ],
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(99,102,241,0.06) 0%, transparent 50%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              Pricing
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Simple, Transparent <span className="text-gradient-warm">Pricing Plans</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Choose a plan that fits your business needs. Scale up as you grow.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className={cn(
                "h-full flex flex-col relative overflow-hidden",
                plan.popular ? "border-primary/30 shadow-xl shadow-primary/10 scale-105" : "border-border/50"
              )}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-purple-400 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                <div className={`h-1.5 w-full bg-gradient-to-r ${plan.color}`} />
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-black text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="text-5xl font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground font-medium">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={cn(
                      "w-full rounded-xl font-bold h-12",
                      plan.popular
                        ? "btn-shine text-white border-0 shadow-lg shadow-primary/20"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    <Zap className="mr-1.5 h-4 w-4" /> Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


