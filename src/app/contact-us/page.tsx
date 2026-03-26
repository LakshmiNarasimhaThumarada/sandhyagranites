"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Footer from "@/components/Footer";

function ContactForm() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 h-full">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal/20 flex items-center justify-center text-teal mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl text-white mb-4">Request Sent Successfully!</h3>
        <p className="font-raleway text-sm sm:text-base text-cream/70 max-w-sm mx-auto">
          Thank you for reaching out to Sandhya Granites. We have received your request and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action="https://formsubmit.co/sandhyagranite@gmail.com" method="POST" className="flex flex-col gap-6">
      {/* Honeypot & Config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <input type="hidden" name="_subject" value="New Granite Quote Request!" />
      <input type="hidden" name="_template" value="table" />
      {mounted && (
          <input type="hidden" name="_next" value={window.location.origin + "/contact-us?success=true"} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/70">Full Name</label>
          <input type="text" name="name" required className="bg-transparent border-b border-white/20 px-0 py-3 text-white font-raleway text-sm sm:text-base focus:outline-none focus:border-teal transition-colors rounded-none w-full" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/70">Phone Number</label>
          <input type="tel" name="phone" required className="bg-transparent border-b border-white/20 px-0 py-3 text-white font-raleway text-sm sm:text-base focus:outline-none focus:border-teal transition-colors rounded-none w-full" placeholder="+91 90000 00000" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/70">Email Address</label>
        <input type="email" name="email" required className="bg-transparent border-b border-white/20 px-0 py-3 text-white font-raleway text-sm sm:text-base focus:outline-none focus:border-teal transition-colors rounded-none w-full" placeholder="john@company.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/70">Product / Project Details</label>
        <textarea name="message" required rows={4} className="bg-transparent border-b border-white/20 px-0 py-3 text-white font-raleway text-sm sm:text-base focus:outline-none focus:border-teal transition-colors rounded-none w-full resize-none" placeholder="I'm looking for a quote on Kashmir White granite for a 500sqft lobby..."></textarea>
      </div>

      <motion.button 
        type="submit"
        className="mt-4 self-start bg-teal px-8 py-3.5 sm:py-4 font-raleway text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-teal/90 transition-colors duration-300 shadow-[0_0_20px_rgba(58,172,176,0.25)]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Request Quote
      </motion.button>

      <p className="font-raleway text-[10px] sm:text-[11px] text-cream/40 mt-2">
        By submitting this form, you agree to receive email or phone communications from Sandhya Granites regarding your inquiry.
      </p>
    </form>
  );
}

export default function ContactUsPage() {
  return (
    <main className="relative min-h-screen bg-[#1C1C1C]">
      <Navbar />

      <div className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto min-h-[calc(100vh-100px)] flex flex-col items-center">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

        <div className="text-center mb-12 sm:mb-16 z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-8 h-[1px] bg-teal" />
              <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal font-medium">Get in Touch</span>
              <span className="block w-8 h-[1px] bg-teal" />
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
              Let&apos;s Build <span className="italic font-light text-teal">Together</span>
            </h1>
            <p className="font-raleway text-sm md:text-base text-cream/60 font-light max-w-2xl mx-auto">
              Discuss your project requirements with our stone experts. We provide tailored solutions and competitive quotes worldwide.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24 relative z-10">
          
          {/* Left Column: Info */}
          <motion.div 
            className="w-full lg:w-5/12 flex flex-col gap-8 sm:gap-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1f1f1f]/50 border border-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl flex flex-col gap-8 h-full">
              
              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.227.598l-1.59 2.982a4.5 4.5 0 01-1.09.894A17.9 17.9 0 0110.8 14.25c-.295-.31-.555-.638-.79-.982a4.5 4.5 0 01-.894-1.09l2.982-1.59a1.125 1.125 0 00.598-1.227l-.535-3.21C12.066 5.602 11.616 5.25 11.1 5.25H9.75a2.25 2.25 0 00-2.25 2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Call Us</span>
                  <a href="tel:+919381332314" className="font-cinzel text-lg sm:text-xl text-white hover:text-teal transition-colors">
                    9381332314
                  </a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Email Us</span>
                  <a href="mailto:sandhyagranite@gmail.com" className="font-cinzel text-base sm:text-lg text-white hover:text-teal transition-colors break-all">
                    sandhyagranite@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-raleway text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/50 mb-1">Headquarters</span>
                  <span className="font-raleway text-sm sm:text-base text-cream/80 max-w-[250px] leading-relaxed mb-2">
                    Mitta Chinthalavaripalli Rd, Palyampalle, Andhra Pradesh 517247
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#1a1a1a] shadow-2xl shadow-black/80 border border-teal/20 rounded-2xl p-6 sm:p-8 md:p-10 h-full flex flex-col justify-center">
              <Suspense fallback={<div className="text-white">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="w-full h-[350px] sm:h-[450px] md:h-[500px] mt-16 sm:mt-24 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Sandhya%20Granites&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
