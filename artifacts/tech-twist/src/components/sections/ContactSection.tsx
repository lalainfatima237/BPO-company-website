import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";
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
          description: "Thank you for contacting Tech Twist. We will get back to you shortly.",
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
    <section id="contact" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" 
          alt="Contact Support Team" 
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2">
            Get In Touch
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1]">
            Ready to Transform <br/> Your Business?
          </h3>
          <p className="text-muted-foreground text-xl font-medium">Let's discuss how our tailored solutions can accelerate your growth.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-elegant border border-border/50 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl"><Phone size={28} /></div>
                  <div>
                    <h4 className="font-extrabold text-xl mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                    <p className="text-sm font-bold text-primary mt-2 uppercase tracking-wider">Available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-elegant border border-border/50 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl"><Mail size={28} /></div>
                  <div>
                    <h4 className="font-extrabold text-xl mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-lg">info@techtwist.com</p>
                    <p className="text-sm font-bold text-primary mt-2 uppercase tracking-wider">Fast Response</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-elegant border border-border/50 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl"><MapPin size={28} /></div>
                  <div>
                    <h4 className="font-extrabold text-xl mb-1">Visit Us</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">123 Business Ave,<br/>Tech City, TX 75001</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <h4 className="text-3xl font-extrabold mb-8 relative z-10">Send a Message</h4>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    {...form.register("name")} 
                    className={`h-14 bg-secondary/50 border-transparent focus:bg-white transition-colors rounded-2xl px-5 text-lg ${form.formState.errors.name ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                  />
                  {form.formState.errors.name && <p className="text-destructive text-sm font-medium">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address</label>
                    <Input 
                      placeholder="john@example.com" 
                      type="email"
                      {...form.register("email")} 
                      className={`h-14 bg-secondary/50 border-transparent focus:bg-white transition-colors rounded-2xl px-5 text-lg ${form.formState.errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                    />
                    {form.formState.errors.email && <p className="text-destructive text-sm font-medium">{form.formState.errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone Number</label>
                    <Input 
                      placeholder="+1 (555) 000-0000" 
                      {...form.register("phone")} 
                      className="h-14 bg-secondary/50 border-transparent focus:bg-white transition-colors rounded-2xl px-5 text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">How can we help?</label>
                  <Textarea 
                    placeholder="Tell us about your project or service needs..." 
                    {...form.register("message")} 
                    className={`min-h-[160px] bg-secondary/50 border-transparent focus:bg-white transition-colors rounded-2xl p-5 text-lg resize-none ${form.formState.errors.message ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm font-medium">{form.formState.errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-16 text-lg font-bold rounded-2xl btn-shine text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1" 
                  disabled={isPending}
                >
                  {isPending ? (
                    <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Sending Message...</>
                  ) : (
                    <><Send className="mr-2 h-6 w-6" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
