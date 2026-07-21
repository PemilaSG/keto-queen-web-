'use client';

import React from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, ChevronDown, Crown } from 'lucide-react';

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage = 'CONTACT US' }: HeaderProps) {
  const navItems = [
    { name: 'HOME', href: '/User/homePage' },
    { name: 'SHOP', href: '#' },
    { name: 'CATEGORIES', href: '#', hasDropdown: true },
    { name: 'OFFERS', href: '#', badge: 'HOT' },
    { name: 'ABOUT US', href: '/User/aboutUs' },
    { name: 'CONTACT US', href: '/User/contactUs' },
  ];

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#1a3d24] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 font-medium text-center">
          <div className="flex items-center gap-1.5">
            <Crown size={14} className="text-amber-400 fill-amber-400" />
            <span>Free Shipping on Orders Above $999</span>
          </div>
          <span className="hidden sm:inline text-emerald-600">|</span>
          <span>Cash on Delivery Available</span>
          <span className="hidden sm:inline text-emerald-600">|</span>
          <div className="flex items-center gap-1">
            <span className="text-amber-400">🛡️</span>
            <span>100% Keto • 100% You</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/User/homePage" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center">
            {/* Logo Badge */}
            <div className="bg-[#1e4d2b] text-white font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs transition-transform group-hover:scale-105">
              <span className="text-xl tracking-wider font-black font-sans">KETO</span>
              <Crown size={18} className="text-amber-400 fill-amber-400 animate-pulse" />
              <span className="text-xl tracking-wider font-black text-amber-400 font-sans">QUEEN</span>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-stone-50 border border-stone-200 rounded-full py-2.5 pl-5 pr-12 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all"
            />
            <button
              aria-label="Search"
              className="absolute right-1 top-1 bottom-1 w-10 bg-[#1e4d2b] hover:bg-[#15381f] text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-stone-700 font-medium text-xs">
          <button className="flex flex-col items-center gap-1 hover:text-[#1e4d2b] transition-colors group">
            <User size={22} className="group-hover:scale-110 transition-transform" />
            <span>Account</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-[#1e4d2b] transition-colors group">
            <Heart size={22} className="group-hover:scale-110 transition-transform" />
            <span>Wishlist</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-[#1e4d2b] transition-colors relative group">
            <div className="relative">
              <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>
            <span>Cart</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Menu */}
      <nav className="border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 md:gap-12 py-3 overflow-x-auto text-xs font-bold tracking-wider">
          {navItems.map((item) => {
            const isActive = activePage === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 flex items-center gap-1 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#1e4d2b] font-extrabold border-b-2 border-[#1e4d2b]'
                    : 'text-stone-700 hover:text-[#1e4d2b]'
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} className="text-stone-500" />}
                {item.badge && (
                  <span className="bg-amber-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-xs tracking-tighter uppercase ml-0.5 animate-pulse">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}