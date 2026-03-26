"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

/* ─── Animation helpers – shorter durations for snappier feel ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

/* ─── Pillar Card ─── */
const PillarCard = ({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div
    {...fadeUp(delay)}
    className="flex flex-col gap-4 p-5 sm:p-6 border border-white/5 rounded-xl bg-white/[0.02] hover:border-teal/30 hover:bg-white/[0.04] transition-all duration-500 group"
  >
    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors duration-300 shrink-0">
      {icon}
    </div>
    <h4 className="font-cinzel text-sm sm:text-base text-white">{title}</h4>
    <p className="font-raleway text-xs sm:text-sm text-cream/60 leading-relaxed">{desc}</p>
  </motion.div>
);

/* ─── Stat Item ─── */
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1">
    <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-white">{value}</span>
    <span className="font-raleway text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-teal">{label}</span>
  </div>
);

export default function AboutUs() {
  const applications = [
    { name: "Countertops", image: "/app_countertops.png" },
    { name: "Flooring", image: "/app_flooring.png" },
    { name: "Wall Cladding", image: "/app_wall_cladding.png" },
    { name: "Fireplaces", image: "/app_fireplaces.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % applications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, applications.length]);

  return (
    <section id="about-us" className="relative bg-[#1C1C1C] overflow-hidden">

      {/* ══════════════════════════════════════
          SECTION 1 · Heritage Introduction
      ═══════════════════════════════════════ */}
      <div className="relative py-16 sm:py-24 md:py-32">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

            {/* Text */}
            <motion.div className="w-full lg:w-1/2 flex flex-col" {...fadeLeft()}>
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-[1px] bg-teal" />
                <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">Our Legacy</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Crafting the <br />
                <span className="italic font-light text-teal">World&apos;s Finest</span> <br />
                Stone Surfaces
              </h2>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-4">
                With over <span className="text-white font-medium">15 years of deep-rooted expertise</span>, Sandhya Granites has been at the forefront of the natural stone industry. We source the most exquisite materials directly from premier quarries, ensuring every slab we deliver is a masterpiece of nature.
              </p>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-8">
                From raw quarry blocks to impeccably polished surfaces, our state-of-the-art processing technology brings out the distinct character, depth, and vibrant colours innate to each stone. Our zero-compromise quality control ensures absolute consistency in every batch.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 sm:gap-8 pt-5 border-t border-white/5">
                <Stat value="15+" label="Years Experience" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="5000+" label="Happy Customers" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="100%" label="Natural Stone" />
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div className="w-full lg:w-1/2 relative h-[320px] sm:h-[440px] lg:h-[600px]" {...fadeRight(0.15)}>
              <div className="absolute top-0 right-0 w-[82%] h-[74%] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
                <Image src="/granite-about-1.png" alt="Premium Granite Slab" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-[54%] h-[46%] rounded-2xl overflow-hidden border-[4px] sm:border-[6px] border-[#1C1C1C] shadow-2xl z-20"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image src="/granite-about-2.png" alt="Granite Application" fill sizes="(max-width: 768px) 50vw, 28vw" className="object-cover" />
              </motion.div>
              <div className="absolute top-[18%] left-[8%] w-16 h-16 sm:w-20 sm:h-20 border border-teal/25 -z-10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 · From the Quarry (full-bleed)
      ═══════════════════════════════════════ */}
      <div className="relative min-h-[400px] sm:min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/granite-quarry.png" alt="Granite quarry" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/85 to-[#1C1C1C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-[#1C1C1C]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
          <motion.div className="max-w-xl" {...fadeLeft(0.1)}>
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-[1px] bg-teal" />
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">Source of Excellence</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-5 leading-snug">
              From the <br />
              <span className="italic font-light text-teal">Heart of Viscon White</span>
            </h2>
            <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-4">
              Loacted in the home region of premium Viscon White granite, Sandhya Granites brings you stones directly from the source. We carefully select and process each slab to ensure top quality,consistency and durability. From Adoni brown to pure black, every piece is chosen with strict quality standards.
            </p>
            <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed">
              By managing our production and supply chain, we deliver authentic granite, competitive pricing and reliable service - without compromise.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 3 · Processing Workshop
      ═══════════════════════════════════════ */}
      <div className="relative py-16 sm:py-24 md:py-32 bg-[#181818]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-24">

            {/* Workshop image */}
            <motion.div className="w-full lg:w-1/2 relative h-[260px] sm:h-[360px] md:h-[480px] rounded-2xl overflow-hidden" {...fadeRight(0)}>
              <Image src="/granite-workshop.png" alt="Granite processing workshop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-[#1C1C1C]/80 backdrop-blur-md border border-teal/30 px-4 sm:px-5 py-2 sm:py-3">
                <p className="font-raleway text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-teal mb-1">State-of-the-Art</p>
                <p className="font-cinzel text-xs sm:text-sm text-white">Processing Facility</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div className="w-full lg:w-1/2 flex flex-col" {...fadeLeft(0.1)}>
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-[1px] bg-teal" />
                <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">Our Process</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-snug">
                Precision Processing,<br />
                <span className="italic font-light text-teal">Global Quality</span>
              </h2>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-4">
                At Sandhya Granites, we source premium granite blocks directly from trusted quarries and conduct a dertailed inspection to ensure only the finest material enters our production line.
              </p>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-8">
                Using advanced cutting machines and modern processing technology,each block is transformed into precision-cut slabs with expcetional dimensional accuary. Our facility operates 24/7 under strict quailty supervision, ensuring consistency across every batch.
              </p>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-8">
                Each slab is then expertly hand-polished by skilled craftsmen,achieving a superior surface finish,rich color clarity and long-lasting durability. From raw blocks to finished slab, every step reflects our commitment to international quality standards and export excellence.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8 pt-5 border-t border-white/5">
                <Stat value="7-Step" label="Quality Check" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="CNC" label="Precision Cutting" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="ISO" label="Certified Plant" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 4 · Applications
      ═══════════════════════════════════════ */}
      <div className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">

          {/* Header */}
          <motion.div className="text-center mb-10 sm:mb-16" {...fadeUp(0)}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-8 h-[1px] bg-teal" />
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">Applications</span>
              <span className="block w-8 h-[1px] bg-teal" />
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Stone that Elevates <span className="italic font-light text-teal">Every Space</span>
            </h2>
          </motion.div>

          {/* New Names List beneath heading */}
          <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-10" {...fadeUp(0.1)}>
            {applications.map((app, index) => (
              <button
                key={app.name}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={`font-raleway text-xs sm:text-sm md:text-base uppercase tracking-[0.1em] transition-all duration-300 pb-1 border-b-2 ${activeIndex === index ? "text-teal border-teal" : "text-cream/60 border-transparent hover:text-white"
                  }`}
              >
                {app.name}
              </button>
            ))}
          </motion.div>

          {/* Interactive Slideshow Box */}
          <motion.div
            className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-none overflow-hidden mb-8 sm:mb-12 group"
            {...fadeUp(0.2)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {applications.map((app, index) => (
              <div
                key={app.name}
                className={`absolute inset-0 transition-opacity duration-1000 ${activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image src={app.image} alt={app.name} fill sizes="100vw" className="object-cover object-center transition-transform duration-10000 group-hover:scale-105" />

                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20">
                  <span className="font-raleway text-sm sm:text-lg uppercase tracking-[0.2em] text-white bg-[#1C1C1C]/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-none">
                    {app.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pillar cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <PillarCard
              delay={0}
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>}
              title="Residential Spaces"
              desc="From kitchen countertops to master bathrooms, our granite brings timeless luxury to every home interior."
            />
            <PillarCard
              delay={0.05}
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>}
              title="Commercial Projects"
              desc="Hotels, corporate lobbies, and shopping centres rely on Sandhya Granites for premium-grade stone."
            />
            <PillarCard
              delay={0.1}
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>}
              title="Global Export"
              desc="We export to clients across the Middle East, Europe, USA, and Southeast Asia — seamless logistics."
            />
            <PillarCard
              delay={0.15}
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>}
              title="Certified Quality"
              desc="Every slab is certified to surpass international standards. Our quality guarantee protects your investment."
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 5 · Global Exporting & Quality
      ═══════════════════════════════════════ */}
      <div className="relative py-14 sm:py-20 bg-[#171717] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">

            {/* Left */}
            <motion.div className="flex-1" {...fadeLeft(0)}>
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl text-white mb-4">Precision Global Exporting</h3>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-6">
                Our global logistics network delivers 100% natural granite safely to any destination. We manage every detail — from custom packaging and container loading to customs documentation — so your stone arrives in pristine condition, on time, every time.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                <Stat value="10+" label="Countries Served" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="Direct" label="From Quarry" />
              </div>
            </motion.div>

            <div className="hidden lg:block w-[1px] bg-white/5 self-stretch" />

            {/* Right */}
            <motion.div className="flex-1" {...fadeRight(0.1)}>
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl text-white mb-4">Zero-Compromise Quality</h3>
              <p className="font-raleway text-sm md:text-base text-cream/70 font-light leading-relaxed mb-6">
                Every slab bearing the Sandhya Granites name undergoes a rigorous multi-point quality inspection — checking dimensional accuracy, flawless polish, structural integrity, and colour consistency — before it is approved for dispatch.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                <Stat value="10+" label="Years Experience" />
                <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
                <Stat value="100%" label="Natural Stone" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
