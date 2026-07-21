'use client';

import React from 'react';
import { Leaf, FlaskConical, Heart, Truck, Tag } from 'lucide-react';

export default function ValueProps() {
  const features = [
    {
      label: 'Clean Ingredients',
      sub: 'No artificial additives or preservatives',
      icon: Leaf,
    },
    {
      label: 'Keto Certified',
      sub: '100% keto-friendly and trusted',
      icon: FlaskConical,
    },
    {
      label: 'Nutrition Focused',
      sub: 'Products designed to fuel your goals',
      icon: Heart,
    },
    {
      label: 'Fast & Reliable Delivery',
      sub: 'Delivered fresh at your doorstep',
      icon: Truck,
    },
    {
      label: 'Affordable Wellness',
      sub: 'Premium quality at fair prices',
      icon: Tag,
    },
  ];

  return (
    <section className="my-8 bg-[#f6f5ef] border border-stone-200/60 rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide text-center mb-8">
        WHY CHOOSE KETO QUEEN?
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center max-w-[180px] w-full border-r-0 lg:border-r border-stone-200/80 last:border-r-0 pr-0 lg:pr-2 last:pr-0"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1e4d2b] border border-stone-200 shadow-xs mb-4">
                <Icon size={20} strokeWidth={2} />
              </div>
              <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm tracking-tight mb-1">
                {item.label}
              </h4>
              <p className="text-stone-500 text-[10px] sm:text-xs font-semibold leading-snug">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}