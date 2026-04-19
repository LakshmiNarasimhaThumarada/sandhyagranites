"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

/* ─── Social Button ─── */
function SocialButton({
  href,
  label,
  color,
  icon,
}: {
  href: string;
  label: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`flex items-center gap-2.5 px-4 py-2.5 border transition-all duration-300 font-raleway text-[10px] uppercase tracking-[0.2em] font-semibold group ${color}`}
    >
      <span className="w-4 h-4 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

/* ─── Contact Form ─── */
function ContactForm({ successRef }: { successRef: React.RefObject<HTMLDivElement> }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/sandhyagranite@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch (_) {
      // Still show success — email may have gone through
    }

    setSubmitted(true);
    setSending(false);

    // Auto-scroll to success message
    setTimeout(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }

  if (submitted) {
    return (
      <motion.div
        ref={successRef as React.RefObject<HTMLDivElement>}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center py-16 px-6 border border-teal/20 bg-teal/5"
      >
        <div className="w-16 h-16 border border-teal/40 bg-teal/10 flex items-center justify-center text-teal mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-cinzel text-2xl text-white mb-3">Quote Request Sent!</h3>
        <p className="font-raleway text-sm text-cream/60 max-w-sm leading-relaxed">
          Thank you for reaching out to Sandhya Granites. Our team will review your request and respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "bg-white/[0.03] border border-white/10 py-3.5 px-4 text-white font-raleway text-sm focus:outline-none focus:border-teal focus:bg-white/[0.06] transition-all duration-300 w-full placeholder:text-white/25 rounded-none";
  const labelClass =
    "font-raleway text-[9px] uppercase tracking-[0.25em] text-teal/70 mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_subject" value="New Granite Quote Request!" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name</label>
          <input type="text" name="name" required className={inputClass} placeholder="John Doe" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" required className={inputClass} placeholder="+91 90000 00000" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <input type="email" name="email" required className={inputClass} placeholder="john@company.com" />
      </div>

      <div>
        <label className={labelClass}>Your Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project or requirements..."
        />
      </div>

      {/* Submit + Social */}
      <div className="flex flex-col gap-6 pt-2 border-t border-white/8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <motion.button
            type="submit"
            disabled={sending}
            className="relative bg-teal px-10 py-4 font-raleway text-xs font-bold uppercase tracking-[0.25em] text-charcoal hover:bg-teal/90 disabled:opacity-60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {sending ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Get Quote
                </>
              )}
            </span>
          </motion.button>
          <p className="font-raleway text-[10px] text-cream/30 leading-relaxed max-w-xs">
            Our team responds within 24 hours. Available globally, 24 / 7.
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex flex-col gap-3">
          <p className="font-raleway text-[9px] uppercase tracking-[0.3em] text-white/25">Or reach us directly</p>
          <div className="flex flex-wrap gap-3">
            {/* WhatsApp */}
            <SocialButton
              href="https://wa.me/919381332314"
              label="WhatsApp"
              color="border-[#25D366]/30 text-[#25D366]/70 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10"
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
            />
            {/* Instagram */}
            <SocialButton
              href="https://instagram.com/sandhyagranites"
              label="Instagram"
              color="border-[#E1306C]/30 text-[#E1306C]/70 hover:border-[#E1306C] hover:text-[#E1306C] hover:bg-[#E1306C]/10"
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
            />
            {/* LinkedIn */}
            <SocialButton
              href="https://linkedin.com/company/sandhyagranites"
              label="LinkedIn"
              color="border-[#0A66C2]/30 text-[#0A66C2]/70 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
}

/* ─── Info Card ─── */
function InfoCard({
  icon,
  label,
  children,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-4 p-7 border border-white/8 bg-white/[0.025] group hover:border-teal/30 hover:bg-white/[0.04] transition-all duration-500 h-full"
    >
      <div className="w-11 h-11 border border-white/10 flex items-center justify-center text-teal group-hover:border-teal/40 transition-colors duration-500">
        {icon}
      </div>
      <div>
        <p className="font-raleway text-[9px] uppercase tracking-[0.3em] text-teal/70 mb-2">{label}</p>
        <div className="font-raleway text-sm text-cream/80 leading-relaxed">{children}</div>
      </div>
      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

/* ─── Page ─── */
export default function ContactUsPage() {
  const successRef = useRef<HTMLDivElement>(null);
  return (
    <main className="relative min-h-screen bg-[#1C1C1C]">
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-10 relative z-10">
          {/* Left: eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-teal" />
              <span className="font-raleway text-[10px] uppercase tracking-[0.35em] text-teal font-medium">
                Contact Us
              </span>
            </div>
            {/* Updated 24/7 availability badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              <span className="font-raleway text-xs text-cream/60 tracking-wide">
                Available Globally &mdash; <span className="text-teal font-semibold">24 / 7</span>
              </span>
            </div>
          </motion.div>

          {/* Right: headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="sm:text-right"
          >
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-none">
              Start Your<br />
              <span className="italic font-light text-teal">Story</span> With Us.
            </h1>
          </motion.div>
        </div>

        {/* Narrow image strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.95 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] mt-10 overflow-hidden border border-white/8"
        >
          <Image
            src="/contact_banner.png"
            alt="Sandhya Granites Facility"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-black/40 to-[#1C1C1C]/60" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </section>

      {/* ══════════════ INFO CARDS ══════════════ */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">

          <div className="relative overflow-hidden">
            <InfoCard
              label="Main Office"
              delay={0}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              }
            >
              Mitta Chinthalavaripalli Rd,<br />
              Palyampalle, Andhra Pradesh 517247
            </InfoCard>
          </div>

          <div className="relative overflow-hidden">
            <InfoCard
              label="Mail Support 24/7"
              delay={0.1}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
            >
              <a href="mailto:sandhyagranite@gmail.com" className="hover:text-teal transition-colors duration-300 break-all">
                sandhyagranite@gmail.com
              </a>
            </InfoCard>
          </div>

          <div className="relative overflow-hidden">
            <InfoCard
              label="Call Us"
              delay={0.2}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.227.598l-1.59 2.982a4.5 4.5 0 01-1.09.894A17.9 17.9 0 0110.8 14.25c-.295-.31-.555-.638-.79-.982a4.5 4.5 0 01-.894-1.09l2.982-1.59a1.125 1.125 0 00.598-1.227l-.535-3.21C12.066 5.602 11.616 5.25 11.1 5.25H9.75a2.25 2.25 0 00-2.25 2.25z" />
                </svg>
              }
            >
              <a href="tel:+919381332314" className="hover:text-teal transition-colors duration-300 block">
                +91 9381332314
              </a>
            </InfoCard>
          </div>

        </div>
      </section>

      {/* ══════════════ CUSTOMER BANNER ══════════════ */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.97 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[180px] sm:h-[240px] md:h-[300px] overflow-hidden border-y border-white/8"
      >
        <Image
          src="/contact_banner.png"
          alt="Sandhya Granites — Our Customers"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/70 via-black/30 to-[#1C1C1C]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
          <span className="font-raleway text-[9px] uppercase tracking-[0.4em] text-teal font-medium">Trusted By</span>
          <p className="font-cinzel text-xl sm:text-2xl md:text-3xl font-medium text-white text-center px-4">
            Stone Craftsmen & Builders Worldwide
          </p>
        </div>
      </motion.div>

      {/* ══════════════ GET A QUOTE SECTION ══════════════ */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto py-10 sm:py-16 border-b border-white/5">

        {/* Section heading — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-teal" />
            <span className="font-raleway text-[10px] uppercase tracking-[0.3em] text-teal font-medium">
              Get a Quote
            </span>
            <span className="block w-8 h-[1px] bg-teal" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
            Request Your{" "}
            <span className="italic font-light text-teal">Custom Quote</span>
          </h2>
          <p className="font-raleway text-sm text-cream/40 mt-4 max-w-xl leading-relaxed">
            Fill in your details and our stone specialists will prepare a tailored quote for your project — delivered within time.
          </p>
        </motion.div>

        {/* Centered form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <ContactForm successRef={successRef} />
        </motion.div>

      </section>

      {/* ══════════════ MAP ══════════════ */}
      <section className="mt-10 sm:mt-16 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden"
        >
          <iframe
            src="https://maps.google.com/maps?q=Sandhya%20Granites%20Palyampalle&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Gradient overlays to merge with dark bg */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1C1C1C] to-transparent pointer-events-none z-10" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
