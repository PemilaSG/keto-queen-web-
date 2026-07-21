'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f3e9] overflow-hidden py-10 md:py-16 border-b border-stone-200/60">
      {/* Background decorations */}
      <div className="absolute top-4 left-6 opacity-30 pointer-events-none select-none text-2xl">
        🌱 🌾
      </div>
      <div className="absolute bottom-4 right-1/2 opacity-20 pointer-events-none select-none text-3xl">
        🌰 🥑
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600 mb-6">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">About Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e4d2b] tracking-tight uppercase font-sans">
              ABOUT US
            </h1>
            <p className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
              Fueling Better Lives with the Power of Keto.
            </p>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-xl font-medium pt-2">
              At Keto Queen, we believe that healthy living should be simple, enjoyable, and accessible to everyone. Our mission is to provide premium keto products that support your wellness journey without compromising on taste or quality.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white/85 backdrop-blur-xs">
              <Image
                src="/keto_queen_contact_hero.jpg"
                alt="About Keto Queen Products"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}