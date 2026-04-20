"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 md:px-10 mt-auto relative z-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 w-max">
              <div className="w-12 sm:w-16">
                <Image src="/logo.png" alt="Sandhya Granites" width={400} height={266} className="w-full h-auto object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-raleway text-sm font-bold tracking-[0.2em] text-white leading-none">
                  SANDHYA GRANITES
                </p>
                <p className="font-raleway text-xs italic text-white/60 tracking-widest mt-1">
                  Solid Stone. Solid Trust.
                </p>
              </div>
            </Link>
            <p className="font-raleway text-sm text-cream/50 leading-relaxed mt-2">
              Mitta Chinthalavaripalli Rd, Palyampalle, Andhra Pradesh 517247
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-cinzel text-lg text-white mb-1">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="font-raleway text-sm text-cream/60 hover:text-teal tracking-wider transition-colors inline-block">Home</Link></li>
              <li><Link href="/about-us" className="font-raleway text-sm text-cream/60 hover:text-teal tracking-wider transition-colors inline-block">About Us</Link></li>
              <li><Link href="/blogs" className="font-raleway text-sm text-cream/60 hover:text-teal tracking-wider transition-colors inline-block">Blogs</Link></li>
              <li><Link href="/contact-us" className="font-raleway text-sm text-cream/60 hover:text-teal tracking-wider transition-colors inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="font-cinzel text-lg text-white mb-1">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:sandhyagranite@gmail.com" className="flex items-center gap-3 group w-max">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-charcoal transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="font-raleway text-sm text-cream/60 group-hover:text-white transition-colors">sandhyagranite@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919381332314" className="flex items-center gap-3 group w-max">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-charcoal transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.227.598l-1.59 2.982a4.5 4.5 0 01-1.09.894A17.9 17.9 0 0110.8 14.25c-.295-.31-.555-.638-.79-.982a4.5 4.5 0 01-.894-1.09l2.982-1.59a1.125 1.125 0 00.598-1.227l-.535-3.21C12.066 5.602 11.616 5.25 11.1 5.25H9.75a2.25 2.25 0 00-2.25 2.25z" />
                    </svg>
                  </span>
                  <span className="font-raleway text-sm text-cream/60 group-hover:text-white transition-colors">+91 9381332314</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-5">
            <h4 className="font-cinzel text-lg text-white mb-1">Follow Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://instagram.com/sandhyagranites" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group w-max">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-charcoal transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <span className="font-raleway text-sm text-cream/60 group-hover:text-white transition-colors">@sandhyagranites</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sandhya-granites/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group w-max">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-charcoal transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span className="font-raleway text-sm text-cream/60 group-hover:text-white transition-colors">Sandhya Granites</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-raleway text-[11px] sm:text-xs text-white/40 uppercase tracking-[0.2em] text-center sm:text-left">
            © {new Date().getFullYear()} Sandhya Granites. All rights reserved.
          </p>
          <p className="font-raleway text-[10px] text-white/30 uppercase tracking-[0.2em] text-center sm:text-right">
            Solid Stone. Solid Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
