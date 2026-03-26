"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
];

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Sandhya Granites"
    width={800}
    height={533}
    className="object-contain"
    style={{ width: "100%", height: "auto" }}
    priority
  />
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 sm:w-16 md:w-20">
            <Logo />
          </div>
          <div className="hidden sm:flex flex-col justify-center">
            <p className="font-raleway text-xs md:text-sm font-bold tracking-[0.2em] text-white leading-none">
              SANDHYA GRANITES
            </p>
            <p className="font-raleway text-[10px] md:text-xs italic text-white/60 tracking-widest mt-1">
              Solid Stone. Solid Trust.
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace("/#", "/"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-raleway text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 relative group ${
                  isActive ? "text-teal" : "text-white/70 hover:text-teal"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-teal transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="font-raleway text-xs font-semibold uppercase tracking-[0.15em] text-teal border border-teal/60 px-4 sm:px-5 py-2 hover:bg-teal/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 sm:w-6 h-[2px] bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[#1a1a1a]/98 backdrop-blur-xl border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center py-5 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-raleway text-sm uppercase tracking-[0.2em] text-white/70 hover:text-teal transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="font-raleway text-sm uppercase tracking-[0.2em] text-teal border border-teal/60 px-6 py-2 mt-1"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
