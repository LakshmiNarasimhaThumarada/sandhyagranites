"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/components/AboutUs";


/* ─────────────────────────────────────────────
   LOGO COMPONENT
   ───────────────────────────────────────────── */
const Logo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="Sandhya Granites Logo"
    width={800}
    height={533}
    className={`object-contain ${className}`}
    style={{ width: "100%", height: "auto" }}
    priority
  />
);

/* ─────────────────────────────────────────────
   GRANITE IMAGE DATA
   ───────────────────────────────────────────── */
const graniteImages = [
  { src: "/viscon_white.png", name: "Viscon White", alt: "Viscon White" },
  { src: "/black1.png", name: "Black Galaxy", alt: "Black Galaxy" },
  { src: "/brown1.png", name: "Aadhoni Brown", alt: "Aadhoni Brown" },
];

/* ─────────────────────────────────────────────
   GEOMETRIC DECORATIONS
   ───────────────────────────────────────────── */
const GeometricDecorations = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Radial gradients for depth */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-charcoal/10 blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[100px]" />
    <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-surface/5 blur-[80px]" />
    {/* Diagonal lines */}
    <div
      className="diagonal-line"
      style={{ left: "15%", top: "10%", height: "250px", transform: "rotate(25deg)" }}
    />
    <div
      className="diagonal-line"
      style={{ left: "35%", top: "30%", height: "200px", transform: "rotate(-15deg)" }}
    />
    <div
      className="diagonal-line"
      style={{ right: "20%", top: "5%", height: "300px", transform: "rotate(35deg)" }}
    />
    <div
      className="diagonal-line"
      style={{ right: "40%", bottom: "10%", height: "180px", transform: "rotate(-25deg)" }}
    />
    <div
      className="diagonal-line"
      style={{ left: "8%", bottom: "20%", height: "220px", transform: "rotate(18deg)" }}
    />
  </div>
);

/* ─────────────────────────────────────────────
   NAV LINKS
   ───────────────────────────────────────────── */
const navLinks = ["Home", "About Us", "Blogs"];


/* ─────────────────────────────────────────────
   PAGE LOADER
   ───────────────────────────────────────────── */
const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // 1.5 seconds is exactly the time needed for the intro animations to fully play
    const timer = setTimeout(onComplete, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#1C1C1C" }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="flex flex-col items-center justify-center p-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
          }
        }}
      >
        {/* Logo Reveal */}
        <motion.div
          layoutId="nav-logo"
          className="w-72 md:w-[400px] flex flex-col items-center justify-center p-2 mb-4"
          variants={{
            hidden: { scale: 0.9, opacity: 0, filter: "blur(10px)", y: 20 },
            visible: {
              scale: 1, opacity: 1, filter: "blur(0px)", y: 0,
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <Logo />
        </motion.div>

        {/* Brand name and Tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden">
            <motion.h1
              className="font-raleway text-2xl md:text-3xl font-bold tracking-[0.35em] text-white"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0, opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              SANDHYA GRANITES
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-3">
            <motion.p
              className="font-raleway text-sm md:text-base italic tracking-widest text-cream"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0, opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
                }
              }}
            >
              Solid Stone. Solid Trust.
            </motion.p>
          </div>
        </div>

        {/* Progress bar shimmer effect */}
        <motion.div
          className="mt-12 w-64 h-[1px] bg-white/10 relative overflow-hidden"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: {
              opacity: 1, scaleX: 1,
              transition: { delay: 0.4, duration: 1, ease: "easeInOut" }
            }
          }}
        >
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-transparent via-teal to-transparent w-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

import SharedNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   NAVBAR (animated wrapper around shared Navbar)
   ───────────────────────────────────────────── */
const Navbar = ({ visible }: { visible: boolean }) => (
  <motion.div
    className="relative z-50"
    initial={{ y: -100, opacity: 0 }}
    animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
  >
    <SharedNavbar />
  </motion.div>
);

/* ─────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────── */
const Hero = ({ visible }: { visible: boolean }) => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#1C1C1C]">
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <GeometricDecorations />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 min-h-screen flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        {/* ── LEFT COLUMN (60%) ── */}
        <motion.div
          className="relative z-20 w-full lg:w-[58%] flex flex-col justify-center"
          initial={{ x: -80, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-10 h-[1px] bg-teal" />
            <span className="font-raleway text-xs uppercase tracking-[0.3em] text-teal font-medium">
              Est. Since Generations
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-cinzel leading-[0.95] mb-6 md:mb-8">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-white">
              Carved by
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium italic text-teal">
              Nature.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-outline">
              Perfected
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-white">
              by Us.
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-raleway text-base md:text-lg text-cream/60 font-light max-w-md leading-relaxed mb-10">
            Discover the world&apos;s finest natural granite, sourced directly from premier quarries
            and crafted to perfection for your dream spaces.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6 mt-4">
            <Link
              href="/blogs"
              className="clip-cta inline-block bg-teal px-6 sm:px-8 py-3 sm:py-3.5 font-raleway text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-teal/90 transition-colors duration-300"
            >
              Visit Blogs
            </Link>
          </div>

          {/* Stats section removed as requested */}
        </motion.div>

        {/* ── RIGHT COLUMN (40%) — hidden on smallest mobile, visible from sm ── */}
        <motion.div
          className="relative w-full lg:w-[42%] h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[650px] -translate-y-6 lg:-translate-y-12"
          initial={{ x: 80, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        >
          {/* Gradient fade on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(90deg, #1C1C1C, transparent)" }}
          />

          {/* Image grid */}
          <div className="h-full flex flex-col gap-1 relative">
            {graniteImages.map((img, idx) => (
              <div
                key={img.name}
                className="relative flex-1 overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 border border-white/20"
                />
                {/* Lighter overlay to highlight more */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />

                {/* 4-side sharp border overlay */}
                <div className="absolute inset-0 border border-white/30 pointer-events-none z-10" />

                {/* Label */}
                <div className="absolute bottom-4 left-5 z-10">
                  <p className={`font-raleway text-[10px] uppercase tracking-[0.25em] ${idx === 1 ? 'text-cream/50' : 'text-black/70 font-bold'}`}>
                    Premium Stone
                  </p>
                  <p className={`font-cinzel text-lg ${idx === 1 ? 'text-white font-medium' : 'text-black font-extrabold'}`}>
                    {img.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>



      {/* ── SCROLL INDICATOR — only on md+ ── */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-8 md:left-10 z-30 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="w-[1px] scroll-pulse bg-gradient-to-b from-teal to-transparent" />
        <span className="font-raleway text-[10px] uppercase tracking-[0.25em] text-cream/40 [writing-mode:vertical-rl]">
          Scroll to explore
        </span>
      </motion.div>

      {/* Bottom gradient fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #1C1C1C)" }}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

/* ─────────────────────────────────────────────
   WHO WE SERVE SECTION
   ───────────────────────────────────────────── */
const WhoWeServe = () => {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-teal">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
      title: "Individual Customers",
      desc: "Whether you are building your dream home or renovating your kitchen, we supply premium-grade granite slabs tailored for individual residential projects — with personal guidance every step of the way.",
      accent: "border-white/10",
      bg: "bg-white/3",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-teal">
          <path d="M3 9h18l-1.5 9H4.5L3 9z" />
          <path d="M3 9l1.5-4.5h15L21 9" />
          <path d="M9 12v3M12 12v3M15 12v3" />
        </svg>
      ),
      title: "Granite Shops & Dealers",
      desc: "We are the trusted wholesale partner for granite retailers and showrooms across India. Consistent quality, competitive pricing, and reliable stock ensure your business never misses a beat.",
      accent: "border-white/10",
      bg: "bg-white/3",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-teal">
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
        </svg>
      ),
      title: "International Export",
      desc: "Sandhya Granites proudly exports to clients across the Middle East, Europe, and Southeast Asia. Our granite crosses borders carrying the same promise — unmatched quality from quarry to destination.",
      accent: "border-teal/30",
      bg: "bg-teal/5",
      highlight: true,
    },
  ];

  return (
    <section className="relative bg-[#1C1C1C] py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-teal/4 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="block w-8 h-[1px] bg-teal" />
            <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">
              Serving Every Need
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
            Who We <span className="italic font-light text-teal">Supply</span>
          </h2>
          <p className="mt-4 font-raleway text-sm md:text-base text-white/50 font-light max-w-xl leading-relaxed">
            From the first-time homeowner to the global distributor — our granite finds its place in every project, big or small.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative p-7 border ${card.accent} ${card.bg} flex flex-col gap-4 group overflow-hidden`}
            >
              {/* Top-right glow for export card */}
              {card.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 blur-[60px] pointer-events-none" />
              )}
              {/* Animated dot for export */}
              {card.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <span className="font-raleway text-[9px] uppercase tracking-[0.25em] text-teal">Exporting Globally</span>
                </div>
              )}

              <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 shrink-0">
                {card.icon}
              </div>
              <h3 className="font-cinzel text-white text-xl font-medium leading-snug">{card.title}</h3>
              <p className="font-raleway text-sm text-white/55 leading-relaxed">{card.desc}</p>

              {/* Bottom teal line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Export highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-7 border border-teal/20 bg-teal/5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-teal/40 shrink-0">
              <span className="text-teal text-lg">✈</span>
            </div>
            <div>
              <p className="font-cinzel text-white text-base md:text-lg font-medium">Granite Export — Trusted Worldwide</p>
              <p className="font-raleway text-xs text-white/45 mt-0.5">Middle East · Europe · Southeast Asia · and beyond</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-[1px] w-8 bg-teal/40" />
            <span className="font-raleway text-[10px] uppercase tracking-[0.25em] text-teal">International Shipping Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   FULLSCREEN VIDEO SECTION
   ───────────────────────────────────────────── */
const VideoFullscreen = () => {
  const baseImages = [
    "/blogs_1.png",
    "/blogs_2.png",
    "/blogs_3.png",
    "/blogs_4.png",
    "/blogs_5.png",
  ];
  // Duplicate: CSS animation moves -50% = exactly one set, seamless loop
  const images = [...baseImages, ...baseImages];

  return (
    <motion.section
      className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden bg-[#1C1C1C]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {/* ── Scrolling strip (pure CSS for reliability) ── */}
      <div
        className="marquee-track flex h-full"
        style={{ width: "max-content" }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative h-full w-[88vw] sm:w-[70vw] md:w-[55vw] flex-shrink-0 group overflow-hidden mx-[3px]"
          >
            <Image
              src={src}
              alt={`View ${(idx % baseImages.length) + 1}`}
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 55vw"
              className="object-cover"
              priority={idx < 3}
            />
            {/* Outer border */}
            <div className="absolute inset-0 border-2 border-white/25 pointer-events-none z-10" />
            {/* Inner teal frame */}
            <div className="absolute inset-[10px] border border-teal/30 pointer-events-none z-10 group-hover:border-teal/65 transition-colors duration-700" />
            {/* Bottom teal sweep accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        ))}
      </div>

      {/* ── Left side teal border ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal/50 z-30 pointer-events-none" />
      {/* ── Right side teal border ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-teal/50 z-30 pointer-events-none" />

      {/* Top + bottom fade into site background */}
      <div className="absolute inset-x-0 top-0 h-14 md:h-20 bg-gradient-to-b from-[#1C1C1C] to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-14 md:h-20 bg-gradient-to-t from-[#1C1C1C] to-transparent pointer-events-none z-20" />
    </motion.section>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    // Small delay before revealing content
    setTimeout(() => setShowMain(true), 100);
  };

  if (!mounted) return null;

  return (
    <main className="relative bg-transparent min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <Navbar visible={showMain} />
      <Hero visible={showMain} />
      <div className="relative z-10 bg-[#1C1C1C]">
        <WhoWeServe />
        <VideoFullscreen />
        <Footer />
      </div>
    </main>
  );
}
