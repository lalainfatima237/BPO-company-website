import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CallCenterShowcase } from "@/components/sections/CallCenterShowcase";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { VisionCultureSection } from "@/components/sections/VisionCultureSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Chatbot } from "@/components/widgets/Chatbot";
import { WhatsAppButton } from "@/components/widgets/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-sans relative">
      <SEOHead
        title="Tech Twist Global | BPO Services & Tech Solutions | Call Center, POS & IT Support"
        description="Tech Twist Global offers premium BPO services including 24/7 call center support, outbound lead generation, custom POS systems, PABX, barcode & biometric solutions. Get your free quote today."
        keywords="BPO services, call center Pakistan, outsourcing, customer support, lead generation, POS system, PABX, barcode solutions, biometric attendance, Tech Twist, virtual assistant, taxi dispatch"
        canonical="https://techtwistglobal.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tech Twist Global",
          "url": "https://techtwistglobal.com",
          "logo": "https://techtwistglobal.com/images/Tech1.png",
          "description": "Premium BPO and technology services company based in Lahore, Pakistan.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office #312, Eden Tower, Main Boulevard Gulberg III",
            "addressLocality": "Lahore",
            "addressCountry": "PK"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-42-34551791",
            "contactType": "customer service",
            "email": "admin@techtwistglobal.com"
          },
          "sameAs": [
            "https://www.facebook.com/share/1AdkGAojZa/",
            "https://www.instagram.com/techtwist_ali"
          ]
        }}
      />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
        style={{ scaleX, background: 'linear-gradient(to right, #6366f1, #60a5fa, #a78bfa)' }}
      />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CallCenterShowcase />
        <WhyChooseUsSection />
        <AchievementsSection />
        <VisionCultureSection />
        <TestimonialsSection />
        <PricingSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>

      <Footer />
      
      {/* Floating Widgets */}
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}
