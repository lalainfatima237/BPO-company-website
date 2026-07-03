import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  MapPin, Phone, Mail, Loader2, Send, Clock,
  ArrowLeft, Zap, CheckCircle2, HeadphonesIcon,
  MessageSquare, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short").max(20).optional().or(z.literal("")),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  "Inbound Call Center",
  "Outbound Call Center",
  "Taxi Dispatch Services",
  "Order Taking & Booking",
  "POS for Grocery",
  "POS for Restaurant",
  "POS for Pharmacy",
  "PABX & Hardware Integration",
  "Barcode Solutions",
  "Biometric Attendance",
  "Other / General Inquiry",
];

const contactCards = [
  {
    icon: Phone,
    title: "Call Us Directly",
    value: "042-34551791",
    sub: "Available 24/7",
    color: "from-blue-500 to-cyan-400",
    link: "tel:04234551791",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "admin@techtwistglobal.com",
    sub: "Response within 2 business hours",
    color: "from-violet-500 to-purple-400",
    link: "mailto:admin@techtwistglobal.com",
    bg: "bg-violet-50",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Office #312, Eden Tower, Main Boulevard Gulberg III, Lahore",
    sub: "Mon–Sat, 10am–7pm PKT",
    color: "from-emerald-500 to-teal-400",
    link: "https://www.google.com/maps/search/?api=1&query=Eden+Tower+Main+Boulevard+Gulberg+III+Lahore",
    bg: "bg-emerald-50",
  },
];

const perks = [
  { icon: Clock, text: "Response within 2 hours" },
  { icon: HeadphonesIcon, text: "Dedicated account manager" },
  { icon: CheckCircle2, text: "Free consultation call" },
  { icon: Globe, text: "Serving 3+ countries" },
  { icon: MessageSquare, text: "No commitment required" },
  { icon: Zap, text: "Quick onboarding process" },
];

export default function ContactPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isPending, setIsPending] = React.useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Contact form data:", data);
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will get back to you within 2 business hours.",
      });
      form.reset();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us | Get a Free Quote  Tech Twist Global"
        description="Contact Tech Twist Global for a free consultation. Reach our BPO and tech solutions team via phone, email, or our contact form. Office in Lahore, Pakistan. 24/7 support available."
        keywords="contact Tech Twist Global, BPO services quote, call center outsourcing Pakistan, free consultation BPO, Tech Twist Lahore contact"
        canonical="https://techtwistglobal.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Tech Twist Global",
          "url": "https://techtwistglobal.com/contact",
          "description": "Get in touch with Tech Twist Global for BPO and technology services.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Tech Twist Global",
            "telephone": "+92-42-34551791",
            "email": "admin@techtwistglobal.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office #312, Eden Tower, Main Boulevard Gulberg III",
              "addressLocality": "Lahore",
              "addressCountry": "PK"
            }
          }
        }}
      />
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f28 0%, #0d1440 50%, #0f1a5c 100%)" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              Get Your Free Quote Today
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              Tell us about your project and we'll craft a tailored solution. No commitment just a conversation about how we can help your business grow.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {contactCards.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-4 p-6 bg-white border border-border/60 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}
              >
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-0.5">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                <p className="text-primary text-xs font-semibold mt-1">{item.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Content: Form + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-border/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm">Fill out the form below and our team will reach out promptly.</p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder=""
                      {...form.register("name")}
                      className={`h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4 ${form.formState.errors.name ? "border-destructive" : ""}`}
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-xs font-medium">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder=""
                      {...form.register("email")}
                      className={`h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4 ${form.formState.errors.email ? "border-destructive" : ""}`}
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-xs font-medium">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5 phone-input-container">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <PhoneInput
                      defaultCountry="pk"
                      value={form.watch("phone")}
                      onChange={(phone) => form.setValue("phone", phone)}
                      className="w-full"
                      inputClassName="!flex !h-12 !w-full !rounded-xl !border-transparent !bg-secondary/50 !px-4 !py-2 !text-sm !transition-all focus:!bg-white focus:!border-primary/30 !outline-none !text-foreground"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!flex !h-12 !rounded-xl !border-transparent !bg-secondary/50 !px-3 !mr-2 !transition-all hover:!bg-secondary/80",
                      }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">Company Name</label>
                    <Input
                      placeholder=""
                      {...form.register("company")}
                      className="h-12 bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">
                    Service You're Interested In <span className="text-destructive">*</span>
                  </label>
                  <select
                    {...form.register("service")}
                    className={`w-full h-12 bg-secondary/50 border border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl px-4 text-sm text-foreground outline-none cursor-pointer ${form.formState.errors.service ? "border-destructive" : ""}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {form.formState.errors.service && (
                    <p className="text-destructive text-xs font-medium">{form.formState.errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">
                    Tell Us About Your Needs <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder=""
                    {...form.register("message")}
                    className={`min-h-[150px] bg-secondary/50 border-transparent focus:bg-white focus:border-primary/30 transition-all rounded-xl p-4 resize-none ${form.formState.errors.message ? "border-destructive" : ""}`}
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-xs font-medium">{form.formState.errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full h-14 text-base font-bold rounded-xl btn-shine text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-xs">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                  We never share your data.
                </p>
              </form>
            </div>
          </motion.div>

          {/* RIGHT — Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Why Choose Us */}
            <div className="bg-white border border-border/60 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-black text-foreground mb-6">Why Work With Us?</h3>
              <ul className="space-y-4">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <perk.icon size={16} />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{perk.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Card */}
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a0f28 0%, #1e1b4b 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10">
                <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">Our Track Record</p>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: "5000+", label: "Customers Served" },
                    { value: "4+", label: "Years Experience" },
                    { value: "99%", label: "Satisfaction Rate" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 bg-white/5 rounded-2xl">
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/92423455179"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-3xl border border-green-200 bg-green-50 hover:bg-green-100 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-green-800 text-sm">Chat on WhatsApp</p>
                <p className="text-green-600 text-xs mt-0.5">Get instant response from our team</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
