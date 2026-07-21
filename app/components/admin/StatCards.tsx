'use client';

import React from 'react';
import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react';

export default function StatCards() {
  const stats = [
    {
      title: 'Total Revenue',
      value: 'Rs. 1,248,300',
      trend: '+12.5%',
      subtext: 'vs last month',
      icon: DollarSign,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      sparkline: (
        <svg className="w-16 h-8 text-emerald-500" viewBox="0 0 100 30" fill="none">
          <path d="M0 25 Q15 15 30 20 T60 10 T90 5 T100 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Total Orders',
      value: '3,842',
      trend: '+8.2%',
      subtext: 'vs last month',
      icon: ShoppingBag,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      sparkline: (
        <svg className="w-16 h-8 text-blue-500" viewBox="0 0 100 30" fill="none">
          <path d="M0 20 Q15 25 30 15 T60 22 T90 10 T100 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Avg Order Value',
      value: 'Rs. 4,250',
      trend: '+2.1%',
      subtext: 'vs last month',
      icon: TrendingUp,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      sparkline: (
        <svg className="w-16 h-8 text-amber-500" viewBox="0 0 100 30" fill="none">
          <path d="M0 15 Q15 18 30 12 T60 15 T90 8 T100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Active Customers',
      value: '1,840',
      trend: '+15.4%',
      subtext: 'vs last month',
      icon: Users,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      sparkline: (
        <svg className="w-16 h-8 text-purple-500" viewBox="0 0 100 30" fill="none">
          <path d="M0 28 Q15 22 30 25 T60 12 T90 6 T100 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 tracking-wider uppercase">
                {stat.title}
              </span>
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${stat.color}`}>
                <Icon size={16} />
              </div>
            </div>

            {/* Value & Sparkline row */}
            <div className="flex items-end justify-between mt-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-stone-900 leading-none">
                  {stat.value}
                </h3>
                {/* Trend badges */}
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] bg-emerald-50 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded-sm">
                    {stat.trend}
                  </span>
                  <span className="text-[10px] text-stone-400 font-semibold">
                    {stat.subtext}
                  </span>
                </div>
              </div>
              
              {/* Sparkline graphical trend preview */}
              <div className="pb-1 select-none pointer-events-none">
                {stat.sparkline}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
