"use client";

import React, { useState, useEffect, useRef } from "react";
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

// StatItem and useCountUp hook removed

/* ─────────────────────────────────────────────
   GRANITE IMAGE DATA
   ───────────────────────────────────────────── */
const graniteImages = [
  { src: "/viscon_white.jpeg", name: "Viscon White", alt: "Viscon White" },
  { src: "/black1.jpeg", name: "Black Galaxy", alt: "Black Galaxy" },
  { src: "/brown1.jpeg", name: "Aadhoni Brown", alt: "Aadhoni Brown" },
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
            <motion.a
              href="#about-us"
              className="clip-cta inline-block bg-teal px-6 sm:px-8 py-3 sm:py-3.5 font-raleway text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-teal/90 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Collections
            </motion.a>
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
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                {/* Lighter overlay to highlight more */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />

                {/* Accent bar on right edge */}
                <div
                  className="absolute top-0 right-0 w-[3px] h-full"
                  style={{
                    background: `linear-gradient(180deg, #3AACB0, #2A2A2A, #1C1C1C)`,
                  }}
                />

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
   FULLSCREEN VIDEO SECTION
   ───────────────────────────────────────────── */
const VideoFullscreen = ({ visible }: { visible: boolean }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/videos/Vid_1.MP4",
    "/videos/Vid_2.MP4",
    "/videos/VId_3.MP4"
  ];

  return (
    <motion.section
      className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <AnimatePresence>
        <motion.video
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onEnded={() => {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
          }}
          onLoadedData={(e: any) => {
            if (currentVideoIndex === 0) {
              e.currentTarget.playbackRate = 2.5;
            } else {
              e.currentTarget.playbackRate = 1.0;
            }
          }}
          className="absolute top-0 left-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
      </AnimatePresence>

      {/* Overlay to blend with adjacent sections */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-[#1C1C1C] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-[#1C1C1C] to-transparent pointer-events-none" />
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

      {/* When loading is false and showMain is true, the rest of the site is displayed instantly */}
      <Navbar visible={showMain} />

      {/* Fixed Hero Background for Overlapping Scroll */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero visible={showMain} />
      </div>

      {/* Spacer to allow scrolling past the fixed Hero */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Content that scrolls over the Hero */}
      <div className="relative z-10 bg-[#1C1C1C]">
        <VideoFullscreen visible={showMain} />
        <Footer />
      </div>
    </main>
  );
}
