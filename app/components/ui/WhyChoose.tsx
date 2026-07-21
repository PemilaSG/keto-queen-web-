'use client';

import React from 'react';
import { Leaf, CheckSquare, Target, Heart } from 'lucide-react';

export default function WhyChoose() {
  const items = [
    {
      title: 'Clean Ingredients',
      description: 'No Hidden Nasties',
      icon: Leaf,
    },
    {
      title: 'Keto Certified',
      description: '100% Keto Friendly',
      icon: CheckSquare,
    },
    {
      title: 'Nutrition Focused',
      description: 'Fuel Your Goals',
      icon: Target,
    },
    {
      title: 'Made with Love',
      description: 'By Keto Experts',
      icon: Heart,
    },
  ];

  return (
    <section className="my-10 bg-[#f6f5ef] border border-stone-200/60 rounded-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Title */}
        <div className="lg:col-span-4 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] tracking-wide uppercase leading-tight font-sans">
            WHY CHOOSE<br className="hidden lg:inline" /> KETO QUEEN?
          </h2>
        </div>

        {/* Right Side: 4 Features Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 border-r-0 sm:border-r border-stone-200/80 last:border-r-0 pr-0 sm:pr-4 last:pr-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1e4d2b] shadow-xs shrink-0 border border-stone-200/40">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="mt-1">
                  <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-stone-500 mt-0.5 leading-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
