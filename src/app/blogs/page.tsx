"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   BLOG POST DATA
   (Video path + relevant granite content generated per blog)
──────────────────────────────────────────────── */
const blogPosts = [
  {
    id: 1,
    image: "/blog_1.png",
    category: "Process",
    title: "The Art of Extraction: Sourcing World-Class Granite",
    date: "March 2024",
    duration: "4 min read",
    excerpt:
      "Every masterpiece begins at the source. Our journey starts deep within the earth, where advanced quarrying technology meets decades of expertise. Using automated machinery, we extract massive, high-quality granite blocks with surgical precision, ensuring the natural integrity of the stone is preserved from the very first cut.",
    bullets: [
      "Precision block extraction using diamond saws",
      "Rigorous on-site selection criteria",
      "Sustainable quarry management practices",
      "Capacity for large-scale architectural projects",
    ],
    tag: "Extraction",
  },
  {
    id: 2,
    image: "/blog_2.png",
    category: "Manufacturing",
    title: "Precision Slicing: Turning Blocks into Masterpieces",
    date: "February 2024",
    duration: "5 min read",
    excerpt:
      "Once a block enters our facility, the transformation begins. Our state-of-the-art gang saws and circular cutting machines slice through solid granite like butter. This critical stage demands absolute accuracy to achieve perfectly uniform thickness across every slab, laying the foundation for a flawless finish in your space.",
    bullets: [
      "Multi-wire technology for uniform thickness",
      "Laser-guided cutting precision",
      "Optimized block yields to minimize waste",
      "Handling blocks up to 30 tons",
    ],
    tag: "Machinery",
  },
  {
    id: 3,
    image: "/blog_3.png",
    category: "Technology",
    title: "High-Velocity Cutting: The Power of Diamond Saws",
    date: "January 2024",
    duration: "6 min read",
    excerpt:
      "The roar of the diamond saw is the pulse of our factory. Operating at incredible speeds with water-cooled lubrication, these saws create the precise edges and intricate shapes required for custom designs. This marriage of raw power and technological finesse ensures that even the hardest granites are shaped with stunning detail.",
    bullets: [
      "Industrial-grade diamond-tipped blades",
      "Continuous cooling systems for surface integrity",
      "Digital controls for intricate shape cutting",
      "Reduced vibration for cleaner edges",
    ],
    tag: "Precision",
  },
  {
    id: 4,
    image: "/blog_4.png",
    category: "Refining",
    title: "Surface Perfection: The Polishing & Finishing Process",
    date: "December 2023",
    duration: "5 min read",
    excerpt:
      "A granite slab truly comes alive during the polishing phase. Our multi-head automated polishers use a series of abrasive pads to bring out the natural depth, color, and luster of the stone. From high-gloss mirror finishes to contemporary leathered textures, we refine every surface to meet international quality standards.",
    bullets: [
      "24-head automated polishing lines",
      "Consistency in gloss levels across slabs",
      "Custom finishes: Honed, Leathered, Flamed",
      "Water recycling systems for eco-friendly refining",
    ],
    tag: "Finishing",
  },
  {
    id: 5,
    image: "/blog_5.png",
    category: "Quality Control",
    title: "Final Inspection: Ensuring Excellence in Every Slab",
    date: "November 2023",
    duration: "4 min read",
    excerpt:
      "Before any slab leaves our facility, it must pass a rigorous quality audit. Our technicians inspect each piece for color consistency, structural integrity, and surface perfection. This final step guarantees that only the finest 'Sandhya' grade granite reaches our global partners and discerning homeowners.",
    bullets: [
      "Individual slab grading and mapping",
      "Color matching for consistent project batches",
      "Structural density and stress testing",
      "Secure packaging for damage-free transit",
    ],
    tag: "Excellence",
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
            {/* Video replaced with Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/5 aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
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
                { value: "5", label: "Stories" },
                { value: "Precision", label: "Machinery" },
                { value: "24/7", label: "Operations" },
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
