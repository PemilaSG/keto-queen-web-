'use client';

import React from 'react';
import { Target } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
          
          {/* Mission Card (Left) */}
          <div className="flex-1 bg-[#fdfaf5] border border-orange-200/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-[#e06322] tracking-wide uppercase mb-3">
              OUR MISSION
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-semibold">
              To empower people to live healthier, happier lives through clean, delicious, and effective keto-friendly products.
            </p>
          </div>

          {/* Central Target Icon */}
          <div className="flex items-center justify-center py-2 lg:py-0 shrink-0 select-none">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-orange-200 bg-orange-50 animate-pulse">
              <div className="w-18 h-18 rounded-full border-2 border-[#e06322]/20 flex items-center justify-center bg-white shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#e06322] flex items-center justify-center text-white shadow-md">
                  <Target size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card (Right) */}
          <div className="flex-1 bg-[#fdfaf5] border border-orange-200/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-[#e06322] tracking-wide uppercase mb-3">
              OUR VISION
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-semibold">
              To become a global leader in the keto wellness space and inspire a world that chooses health with confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}