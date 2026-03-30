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
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold uppercase tracking-wider text-sm">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground text-lg">Contact us today to discuss how our solutions can fit your needs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-secondary/50 p-8 rounded-3xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-primary mt-1">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><Mail /></div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">info@techtwist.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-muted-foreground">123 Business Ave,<br/>Tech City, TX 75001</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder (Iframe) */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x864c21b227e1b101%3A0x6b4f74d9e03d526!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Twist Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-border">
              <h4 className="text-2xl font-bold mb-6">Send us a Message</h4>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    {...form.register("name")} 
                    className={form.formState.errors.name ? "border-destructive focus-visible:ring-destructive/10" : ""}
                  />
                  {form.formState.errors.name && <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input 
                      placeholder="john@example.com" 
                      type="email"
                      {...form.register("email")} 
                      className={form.formState.errors.email ? "border-destructive focus-visible:ring-destructive/10" : ""}
                    />
                    {form.formState.errors.email && <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number (Optional)</label>
                    <Input 
                      placeholder="+1 (555) 000-0000" 
                      {...form.register("phone")} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">How can we help?</label>
                  <Textarea 
                    placeholder="Tell us about your project or service needs..." 
                    {...form.register("message")} 
                    className={form.formState.errors.message ? "border-destructive focus-visible:ring-destructive/10" : ""}
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="w-full h-14 text-lg" 
                  disabled={isPending}
                >
                  {isPending ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Send Message</>
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
