'use client';

import React from 'react';
import Image from 'next/image';

export default function ShopHero() {
  return (
    <section className="relative bg-[#f5f3e9] overflow-hidden py-10 md:py-14 border-b border-stone-200/60 my-4 rounded-3xl">
      {/* Background Nut/Seed Scatter Decoration */}
      <div className="absolute top-4 left-6 opacity-30 pointer-events-none select-none text-2xl">
        🌱 🌾 🌰
      </div>
      <div className="absolute bottom-4 right-1/2 opacity-20 pointer-events-none select-none text-3xl">
        🥑 🥜
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-7 space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase font-sans">
              <span className="text-[#1e4d2b]">SHOP OUR </span>
              <span className="text-[#e06322]">KETO ESSENTIALS</span>
            </h1>

            <p className="text-stone-800 text-base sm:text-lg font-bold">
              Premium Quality. Keto Approved.
              <br className="hidden sm:inline" /> For a Healthier You!
            </p>
          </div>

          {/* Right Column: Hero Products Display */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white/80 backdrop-blur-xs">
              <Image
                src="/keto_queen_contact_hero.jpg"
                alt="Keto Essentials Products"
                width={600}
                height={350}
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
