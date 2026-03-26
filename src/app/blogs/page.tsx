"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   BLOG POST DATA
   (Video path + relevant granite content generated per blog)
──────────────────────────────────────────────── */
const blogPosts = [
  {
    id: 1,
    video: "/blog-videos/blog-1.mp4",
    category: "Stone Guide",
    title: "Black Galaxy Granite: Nature's Starfield in Stone",
    date: "March 2024",
    duration: "4 min read",
    excerpt:
      "Black Galaxy Granite, quarried exclusively from the Star Galaxy mines of Nellore, Andhra Pradesh, is one of India's most sought-after natural stones. Its deep midnight-black base is spectacularly adorned with golden bronze and copper-toned flecks — formed from natural bronzite mineral inclusions — creating a surface that seems to glitter like a galaxy.",
    bullets: [
      "Origin: Nellore, Andhra Pradesh, India",
      "Hardness: 6–7 on the Mohs scale",
      "Best for: Kitchen countertops, accent walls, luxury flooring",
      "Finish: High polish brings out maximum sparkle",
    ],
    tag: "Trending",
  },
  {
    id: 2,
    video: "/blog-videos/blog-2.mp4",
    category: "Interior Design",
    title: "Kashmir White Granite: Timeless Elegance for Modern Spaces",
    date: "February 2024",
    duration: "5 min read",
    excerpt:
      "Kashmir White Granite originates from the quarries of Tamil Nadu and is renowned for its creamy white background interlaced with fine grey veining and deep burgundy garnet crystals. It effortlessly bridges classic and contemporary design, making it one of the most universally loved granites worldwide.",
    bullets: [
      "Origin: Tamil Nadu, India",
      "Pattern: White base with grey veins and garnet spots",
      "Best for: Bathroom counters, island tops, wall cladding",
      "Durability: Highly resistant to heat and scratch",
    ],
    tag: "Popular",
  },
  {
    id: 3,
    video: "/blog-videos/blog-3.mp4",
    category: "Architecture",
    title: "Granite in Commercial Architecture: Case Studies",
    date: "January 2024",
    duration: "6 min read",
    excerpt:
      "From soaring hotel lobbies to sprawling airport terminals, natural granite has long been the material of choice for high-traffic commercial architecture. Its unparalleled compressive strength, resistance to wear, and ability to maintain a polished finish for decades make it the definitive choice when longevity is non-negotiable.",
    bullets: [
      "Compressive strength: 150–300 MPa",
      "Slip resistance: R9–R11 ratings available",
      "Maintenance: Low — routine sealing every 1–2 years",
      "Lifespan: 100+ years with minimal maintenance",
    ],
    tag: "Featured",
  },
  {
    id: 4,
    video: "/blog-videos/blog-4.mp4",
    category: "Process",
    title: "From Quarry to Counter: The Journey of a Granite Slab",
    date: "December 2023",
    duration: "5 min read",
    excerpt:
      "The journey of a granite slab from the earth to your kitchen counter is a story of precision, craftsmanship, and technology. It begins deep in open-pit quarries where diamond wire saws slice massive blocks from the bedrock. These rough blocks — each weighing up to 30 tonnes — are then transported to processing facilities where they are transformed into the gleaming slabs you see in showrooms.",
    bullets: [
      "Step 1: Extraction with diamond wire saws",
      "Step 2: Block transport to processing plant",
      "Step 3: Gang saw slicing into rough slabs",
      "Step 4: Grinding, polishing, and quality inspection",
    ],
    tag: "Education",
  },
  {
    id: 5,
    video: "/blog-videos/blog-5.mp4",
    category: "Trends",
    title: "2024 Granite Trends: Bold Patterns, Dark Stones & Leathered Finishes",
    date: "November 2023",
    duration: "4 min read",
    excerpt:
      "The design world is moving boldly in 2024. Where neutral whites and greys dominated the previous decade, today's architects and homeowners are reaching for dramatic dark granites, bold movement patterns, and tactile leathered finishes. The leathered finish — a matte, slightly textured surface — is rapidly becoming the designer's preferred choice over traditional high-gloss polishing.",
    bullets: [
      "Trend 1: Leathered & brushed matte finishes",
      "Trend 2: Waterfall edges for kitchen islands",
      "Trend 3: Dark granites — Absolute Black, Blue Pearl",
      "Trend 4: Large-format slabs with minimal seams",
    ],
    tag: "Trends 2024",
  },
  {
    id: 6,
    video: "/blog-videos/blog-6.mp4",
    category: "Maintenance",
    title: "Caring for Your Granite: The Complete Maintenance Guide",
    date: "October 2023",
    duration: "3 min read",
    excerpt:
      "Natural granite is incredibly durable, but a little care goes a long way in preserving its beauty for generations. Proper sealing, cleaning with pH-neutral products, and avoiding harsh chemicals are the three pillars of granite maintenance. A well-maintained granite surface will look as good in 50 years as it did on the day it was installed.",
    bullets: [
      "Seal every 12–18 months with penetrating sealer",
      "Clean with mild soap and warm water only",
      "Avoid acidic cleaners — vinegar, lemon, bleach",
      "Use trivets under hot pots (though granite is heat resistant)",
    ],
    tag: "Tips",
  },
];

/* ─────────────────────────────────────────────
   SINGLE BLOG ENTRY COMPONENT
──────────────────────────────────────────────── */
function BlogEntry({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0; // even = video left, odd = video right

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center relative border-b border-white/5"
    >
      {/* Background gradient per row */}
      <div
        className={`absolute inset-0 pointer-events-none ${index % 3 === 0
          ? "bg-gradient-to-br from-teal/5 via-transparent to-transparent"
          : index % 3 === 1
            ? "bg-gradient-to-bl from-white/3 via-transparent to-transparent"
            : "bg-gradient-to-tr from-white/2 via-transparent to-teal/3"
          }`}
      />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-12 xl:gap-16`}
        >
          {/* ── VIDEO SIDE ── */}
          <motion.div
            className="w-full lg:w-[55%] relative"
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-teal bg-[#1C1C1C]/80 backdrop-blur-sm border border-teal/40 px-2 sm:px-3 py-1 sm:py-1.5">
                {post.tag}
              </span>
            </div>
            {/* Video */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/5 aspect-video">
              <video
                src={post.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.9)" }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

          </motion.div>

          {/* ── CONTENT SIDE ── */}
          <motion.div
            className="w-full lg:w-[45%] flex flex-col"
            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.25em] text-teal font-medium">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-raleway text-[10px] sm:text-xs text-white/40">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-raleway text-[10px] sm:text-xs text-white/40">{post.duration}</span>
            </div>

            {/* Title */}
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-5 leading-snug">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="font-raleway text-sm md:text-base text-white/60 font-light leading-relaxed mb-5 sm:mb-6">
              {post.excerpt}
            </p>

            {/* Bullet facts */}
            <ul className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
              {post.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-4 h-[1px] bg-teal shrink-0" />
                  <span className="font-raleway text-xs sm:text-sm text-white/70 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Read more CTA */}
            <motion.button
              className="self-start font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal border border-teal/50 px-5 sm:px-6 py-2 sm:py-3 hover:bg-teal/10 transition-all duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >

            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BLOG PAGE
──────────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#1C1C1C]">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <span className="block w-8 h-[1px] bg-teal" />
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">
                Knowledge & Insights
              </span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight">
              The Granite <span className="italic font-light text-teal">Diaries</span>
            </h1>
            <p className="font-raleway text-sm md:text-base text-white/60 font-light max-w-2xl leading-relaxed">
              Explore stories from the world of natural stone — from quarry to interior, from selection to installation. Expert insights, design trends, and care guides for the discerning stone enthusiast.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 pt-6 border-t border-white/5">
              {[
                { value: "6", label: "Stories" },
                { value: "10+", label: "Years of Knowledge" },
                { value: "500+", label: "Stone Varieties" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-cinzel text-xl sm:text-2xl text-white">{value}</span>
                  <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-teal">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog entries */}
      {blogPosts.map((post, index) => (
        <BlogEntry key={post.id} post={post} index={index} />
      ))}

      <Footer />
    </main>
  );
}
