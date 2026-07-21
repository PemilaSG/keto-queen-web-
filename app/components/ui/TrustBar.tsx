'use client';

import { CheckCircle2, Award, Truck, Lock, RotateCcw } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { label: '100% Keto', sublabel: 'Healthy & Delicious', icon: CheckCircle2 },
    { label: 'Premium Quality', sublabel: 'Carefully Sourced', icon: Award },
    { label: 'Fast Delivery', sublabel: 'At Your Doorstep', icon: Truck },
    { label: 'Secure Payment', sublabel: '100% Safe & Secure', icon: Lock },
    { label: 'Easy Returns', sublabel: 'Hassle Free Returns', icon: RotateCcw },
  ];

  return (
    <section className="my-6 bg-[#f6f5ef] border border-stone-200/60 rounded-2xl p-4 sm:p-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 justify-items-center md:justify-items-stretch">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 text-stone-900 w-full px-2 py-1 md:py-0 border-r-0 md:border-r border-stone-200/80 last:border-r-0"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e4d2b] shadow-xs shrink-0 border border-stone-200/40">
                <Icon size={18} strokeWidth={2.25} />
              </div>
              <div className="leading-tight">
                <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm tracking-wide uppercase">
                  {item.label}
                </h4>
                <p className="text-[10px] sm:text-xs font-semibold text-stone-500 mt-0.5">
                  {item.sublabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}