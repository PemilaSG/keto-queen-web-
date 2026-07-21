'use client';

import React from 'react';
import { Bell, Search, Calendar, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-stone-200 py-4 px-6 flex items-center justify-between gap-4">
      {/* Title & Welcome */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-stone-900 leading-none">
          Dashboard Overview
        </h1>
        <p className="text-xs text-stone-500 font-semibold mt-1">
          Welcome back, Queen Regent! Here is what is happening today.
        </p>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Search orders, products..."
            className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2 pl-9 pr-4 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] transition-all"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
        </div>

        {/* Date Selector widget */}
        <button className="flex items-center gap-2 border border-stone-200 bg-white hover:bg-stone-50 rounded-xl px-3 py-2 text-xs font-bold text-stone-700 transition-colors shadow-2xs cursor-pointer">
          <Calendar size={14} className="text-[#1e4d2b]" />
          <span>Last 30 Days</span>
          <ChevronDown size={12} className="text-stone-400" />
        </button>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl border border-stone-200 hover:bg-stone-50 flex items-center justify-center text-stone-600 transition-colors cursor-pointer shadow-2xs">
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
            4
          </span>
        </button>
      </div>
    </header>
  );
}
