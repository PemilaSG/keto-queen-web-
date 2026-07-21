'use client';

import React from 'react';
import Image from 'next/image';

export default function PromoBanners() {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Banner 1: Left (Green Gradient) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#21512f] to-[#122e1b] text-white p-8 min-h-[220px] flex items-center justify-between border border-emerald-950/20 shadow-sm group">
          {/* Decorative background leaves overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-[55%] space-y-4 z-10">
            <h3 className="text-xl sm:text-2xl font-black leading-tight tracking-wide uppercase font-sans">
              HEALTHY TODAY<br />STRONG TOMORROW
            </h3>
            
            {/* Promo Tag */}
            <div className="flex items-center gap-1">
              <span className="text-stone-300 text-xs font-semibold uppercase">UP TO</span>
              <span className="text-amber-400 text-xl sm:text-2xl font-black">20% OFF</span>
            </div>

            <button className="bg-white hover:bg-stone-100 text-[#1e4d2b] font-extrabold text-xs px-5 py-2.5 rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow-xs">
              SHOP NOW
            </button>
          </div>

          {/* Product image alignment on right */}
          <div className="absolute right-4 bottom-0 top-0 w-[42%] flex items-end justify-center select-none pointer-events-none">
            <div className="relative w-full h-[85%] rounded-t-xl overflow-hidden shadow-md border-t-2 border-x-2 border-white/20 transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/keto_queen_contact_hero.jpg"
                alt="Healthy Today Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Banner 2: Right (Orange Gradient) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#e37130] to-[#c75518] text-white p-8 min-h-[220px] flex items-center justify-between border border-amber-800/20 shadow-sm group">
          {/* Light overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-300/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-[55%] space-y-4 z-10">
            <h3 className="text-xl sm:text-2xl font-black leading-tight tracking-wide uppercase font-sans">
              KETO COMBO PACKS<br />BEST VALUE!
            </h3>
            
            <div className="pt-1">
              <button className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-5 py-2.5 rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow-xs">
                SAVE MORE
              </button>
            </div>
          </div>

          {/* Product Image and Discount Badge overlay */}
          <div className="absolute right-4 bottom-0 top-0 w-[42%] flex items-end justify-center select-none pointer-events-none">
            <div className="relative w-full h-[85%] rounded-t-xl overflow-hidden shadow-md border-t-2 border-x-2 border-white/20 transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/keto_queen_combo_promo.jpg"
                alt="Keto Combo Packs Best Value"
                fill
                className="object-cover"
              />
              
              {/* Floating Badge "UP TO 25% OFF" inside mapping */}
              <div className="absolute top-2 right-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1e4d2b] border border-white/30 text-white flex flex-col items-center justify-center text-center font-bold tracking-tighter leading-none shadow-md">
                <span className="text-[7px] sm:text-[8px] uppercase">UP TO</span>
                <span className="text-[12px] sm:text-[14px] font-black">25%</span>
                <span className="text-[7px] sm:text-[8px] uppercase">OFF</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}