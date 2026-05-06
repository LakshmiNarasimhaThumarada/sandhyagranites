"use client";

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen bg-[#1C1C1C]">
      <Navbar />
      <div>
        <AboutUs />
      </div>

      <Footer />
    </main>
  );
}
