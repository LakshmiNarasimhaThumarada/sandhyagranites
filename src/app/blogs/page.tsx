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
    category: "Source",
    title: "Where Our Granite Comes From",
    date: "March 2024",
    duration: "4 min read",
    excerpt:
      "Everything starts at the quarry. We dig deep into the earth to find the best natural granite. Our team uses powerful machines to carefully cut huge blocks of solid stone. We make sure every piece is strong and top-quality, so it lasts a lifetime in your home.",
    bullets: [
      "Careful cutting of big stone blocks",
      "Strict quality checks right at the source",
      "Safe and earth-friendly methods",
      "Ready for homes and large buildings",
    ],
    tag: "Quarrying",
  },
  {
    id: 2,
    image: "/blog_2.png",
    category: "Cutting",
    title: "Slicing Blocks Into Perfect Slabs",
    date: "February 2024",
    duration: "5 min read",
    excerpt:
      "After the block arrives at our factory, the real work begins. We use very sharp, advanced saws to slice the giant stone blocks. The machines cut the stone evenly so every slab has the exact same thickness. This careful work makes it much easier to install later.",
    bullets: [
      "Large machines for straight cuts",
      "Getting the exact same thickness",
      "Less waste and better use of the stone",
      "Handling giant stones up to 30 tons",
    ],
    tag: "Machinery",
  },
  {
    id: 3,
    image: "/blog_3.png",
    category: "Polishing",
    title: "Making The Stone Smooth And Shiny",
    date: "January 2024",
    duration: "5 min read",
    excerpt:
      "Once the slabs are cut, our skilled factory workers carefully polish every piece. Using large polishing machines and lots of water, they smooth out the rough stone until it glows. This step brings out the beautiful colors and unique patterns hidden inside the granite.",
    bullets: [
      "Expert team using large polishing machines",
      "A perfect, beautiful glow on every slab",
      "Bringing out the natural stone patterns",
      "Water cooling to keep the air clean",
    ],
    tag: "Finishing",
  },
  {
    id: 4,
    image: "/blog_4.png",
    category: "Packing",
    title: "Packing Your Orders Safely",
    date: "December 2023",
    duration: "4 min read",
    excerpt:
      "We want your beautiful granite to arrive in perfect condition. After polishing, we carefully pack the heavy slabs into strong wooden crates. The crates are stacked safely inside our warehouse, keeping the stone totally protected until it is ready to travel.",
    bullets: [
      "Strong wooden crates for every order",
      "Careful stacking in our warehouse",
      "Keeping the polished surfaces safe",
      "Preparing the stone for long trips",
    ],
    tag: "Warehouse",
  },
  {
    id: 5,
    image: "/blog_5.png",
    category: "Delivery",
    title: "Shipping Granite To The World",
    date: "November 2023",
    duration: "4 min read",
    excerpt:
      "When the granite is ready, we load the heavy wooden crates directly into big shipping containers. Our team uses special equipment to load everything safely. From our factory, these containers travel by land and sea to deliver premium granite to customers everywhere.",
    bullets: [
      "Safe loading into shipping containers",
      "Special equipment for heavy crates",
      "Shipping to homes and countries worldwide",
      "Arriving exactly when you need it",
    ],
    tag: "Export",
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
