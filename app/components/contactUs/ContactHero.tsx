'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative bg-[#f5f3e9] overflow-hidden py-10 md:py-16 border-b border-stone-200/60">
      {/* Background Nut/Seed Scatter Decoration overlays */}
      <div className="absolute top-4 left-6 opacity-30 pointer-events-none select-none text-2xl">
        🌰 🥜 🌾
      </div>
      <div className="absolute bottom-4 right-1/2 opacity-20 pointer-events-none select-none text-3xl">
        🥑 🌰
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600 mb-6">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">Contact Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e4d2b] tracking-tight uppercase font-sans">
              CONTACT US
            </h1>
            <p className="font-script text-3xl sm:text-4xl text-[#ca5828] font-bold leading-tight drop-shadow-xs">
              We&apos;d Love to Hear From You!
            </p>
            <p className="text-stone-700 text-base sm:text-lg max-w-lg leading-relaxed pt-2 font-medium">
              Have a question, feedback, or need help with your order?
              <br className="hidden sm:inline" /> Our team at Keto Queen is here to assist you.
            </p>
          </div>

          {/* Right Column: Keto Queen Featured Products Visual */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white/80 backdrop-blur-xs transform transition-transform hover:scale-[1.01]">
              <Image
                src="/keto_queen_contact_hero.jpg"
                alt="Keto Queen Omega 3 Mix and Products"
                width={700}
                height={450}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
