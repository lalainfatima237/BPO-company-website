import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Loader2, Send, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(50).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    sub: "Available 24/7",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@techtwist.com",
    sub: "Fast Response Guaranteed",
    color: "from-violet-500 to-purple-400"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Business Ave, Tech City, TX 75001",
    sub: "Mon–Fri, 9am–6pm",
    color: "from-emerald-500 to-teal-400"
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const { mutate, isPending } = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting Tech Twist. We'll get back to you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error sending message",
          description: error?.message || "Please try again later.",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <div className="w-8 h-0.5 bg-primary rounded" />
              Get In Touch
              <div className="w-8 h-0.5 bg-primary rounded" />
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Ready to Transform<br />
              <span className="text-gradient-warm">Your Business?</span>
            </h3>
            <p className="text-muted-foreground text-lg">Let's discuss how our tailored solutions can accelerate your growth.</p>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {contactInfo.map((item, i) => (
            <div key={i} className="group flex items-start gap-4 p-6 bg-white border border-border/60 rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-0.5">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                <p className="text-primary text-xs font-semibold mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white border border-border/60 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-indigo-400/5" />

            <h4 className="text-2xl font-black mb-8 relative z-10">Send a Message</h4>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    {...form.register("name")}
                    className={`h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4 ${form.formState.errors.name ? "border-destructive" : ""}`}
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-xs font-medium">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    {...form.register("email")}
                    className={`h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4 ${form.formState.errors.email ? "border-destructive" : ""}`}
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-xs font-medium">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  {...form.register("phone")}
                  className="h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-foreground">How can we help?</label>
                <Textarea
                  placeholder="Tell us about your project or service needs..."
                  {...form.register("message")}
                  className={`min-h-[140px] bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl p-4 resize-none ${form.formState.errors.message ? "border-destructive" : ""}`}
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-xs font-medium">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-13 py-4 text-base font-bold rounded-xl btn-shine text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                disabled={isPending}
              >
                {isPending ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Message...</>
                ) : (
                  <><Send className="mr-2 h-5 w-5" /> Send Message</>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <Clock size={12} />
                <span>We typically respond within 2 business hours</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
