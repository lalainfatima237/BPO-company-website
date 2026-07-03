import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, CheckCircle2, Sparkles, TrendingUp, Users } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useLocation } from "wouter";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// Each stat: numeric target + suffix shown after counting
const stats = [
  { label: "Customers Served", target: 5000, suffix: "+",  icon: Users },
  { label: "Years Experience",  target: 4,    suffix: "+",  icon: TrendingUp },
  { label: "Satisfaction Rate", target: 99,   suffix: "%",  icon: CheckCircle2 },
  { label: "Support",           target: 24,   suffix: "/7", icon: Sparkles },
];

const backgroundSlides = [
  "images/slide-pos-grocery.jpg",
  "images/slide-barcode.jpg",
  "images/slide-pabx.jpg",
  "images/hero-3.jpg",
];

// ── Count-up hook ────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Single stat item ─────────────────────────────────────────────
function StatItem({
  stat,
  delay,
  animate,
}: {
  stat: typeof stats[0];
  delay: number;
  animate: boolean;
}) {
  const count = useCountUp(stat.target, 1800, animate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-1"
    >
      <div className="text-4xl font-black text-white tabular-nums">
        {animate ? count.toLocaleString() : 0}
        <span>{stat.suffix}</span>
      </div>
      <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
    </motion.div>
  );
}

// ── Main component ───────────────────────────────────────────────
export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const [, navigate] = useLocation();

  // Trigger count-up when stats row enters viewport
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden hero-bg">

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={500}
          loop={true}
          className="h-full w-full"
        >
          {backgroundSlides.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={`${import.meta.env.BASE_URL}${src}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,15,40,0.2) 0%, rgba(13,20,64,0.88) 50%, rgba(15,26,92,0.2) 100%)' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 animate-grid z-[1]" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 animate-blob z-[1]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-blob animation-delay-2000 z-[1]"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />

      {/* Floating rings */}
      <div className="absolute top-20 right-16 w-64 h-64 rounded-full border border-white/5 animate-spin-slow z-[1]" />
      <div className="absolute bottom-32 left-10 w-40 h-40 rounded-full border border-indigo-500/10 animate-spin-slow z-[1]" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              Premium BPO & Tech Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.0]"
            >
              Empowering Business with{" "}
              <span className="text-gradient">Smart Solutions</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Elevate your operations with world-class call center services and bespoke technology integrations. We build the engine that drives your growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-xl font-bold text-base btn-shine text-white shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300 border-0"
                onClick={() => scrollTo('#services')}
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-xl font-bold text-base bg-white/5 backdrop-blur border border-white/15 text-white hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Get Free Quote <PhoneCall className="ml-2 h-5 w-5 text-indigo-400" />
              </Button>
            </motion.div>

            {/* ── Stats with count-up ── */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/8 pt-10 mt-8"
            >
              {stats.map((stat, i) => (
                <StatItem
                  key={i}
                  stat={stat}
                  delay={0.1 + i * 0.12}
                  animate={statsVisible}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute right-[5%] top-[30%] animate-float hidden xl:block z-10" style={{ animationDelay: '0s' }}>
        <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 min-w-[180px]">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <div className="font-bold text-sm text-white">Uptime</div>
            <div className="text-xs text-slate-400">99.99% Guaranteed</div>
          </div>
        </div>
      </div>

      <div className="absolute left-[5%] bottom-[30%] animate-float hidden xl:block z-10" style={{ animationDelay: '1.5s' }}>
        <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 min-w-[180px]">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <PhoneCall size={20} />
          </div>
          <div>
            <div className="font-bold text-sm text-white">Response Time</div>
            <div className="text-xs text-slate-400">&lt; 3 seconds</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
}
