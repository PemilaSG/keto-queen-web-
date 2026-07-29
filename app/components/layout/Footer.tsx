'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Crown } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full text-white mt-auto">
      {/* Stay Updated Newsletter Banner */}
      <div className="bg-[#183921] py-8 px-4 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#255230] flex items-center justify-center text-emerald-300 shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-white">
                STAY UPDATED WITH KETO QUEEN
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-medium">
                Subscribe to get exclusive offers, health tips and the latest product updates.
              </p>
            </div>
          </div>

          {/* Right: Email Input + Orange Subscribe Button */}
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center max-w-md">
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-white text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm px-4 py-3 rounded-l-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e06322] hover:bg-[#c95318] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-r-lg uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              {subscribed ? 'Subscribed!' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="bg-[#0e2413] py-12 px-4 border-t border-emerald-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          {/* Col 1: Brand & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <div className="bg-[#1e4d2b] text-white font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs">
                <span className="text-lg tracking-wider font-black font-sans">KETO</span>
                <Crown size={16} className="text-amber-400 fill-amber-400" />
                <span className="text-lg tracking-wider font-black text-amber-400 font-sans">QUEEN</span>
              </div>
            </div>
            <p className="text-stone-300 leading-relaxed font-medium">
              Fueling Better Lives<br />with the Power of Keto.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#183921] hover:bg-amber-500 hover:text-white flex items-center justify-center text-stone-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#183921] hover:bg-amber-500 hover:text-white flex items-center justify-center text-stone-200 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#183921] hover:bg-amber-500 hover:text-white flex items-center justify-center text-stone-200 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#183921] hover:bg-amber-500 hover:text-white flex items-center justify-center text-stone-200 transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.33 1.54-1.34 2.55.01 1.1.58 2.14 1.51 2.7.94.57 2.16.63 3.14.16.89-.42 1.55-1.26 1.72-2.22.06-2.62.03-5.24.03-7.86.02-3.28.01-6.57.01-9.85z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: QUICK LINKS */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-white mb-4 text-xs">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-medium">
              <li>
                <Link href="/User/homePage" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/User/shop" className="hover:text-amber-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/User/aboutUs" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/User/contactUs" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: CUSTOMER SERVICE */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-white mb-4 text-xs">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-medium">
              <li>
                <Link href="/account" className="hover:text-amber-400 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-amber-400 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: OUR POLICIES */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-white mb-4 text-xs">
              OUR POLICIES
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-medium">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-amber-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: PAYMENT METHODS */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-white mb-4 text-xs">
              PAYMENT METHODS
            </h4>
            <div className="grid grid-cols-2 gap-2 max-w-[180px]">
              <div className="bg-white px-2 py-1.5 rounded-sm flex items-center justify-center font-extrabold text-blue-900 text-[11px] italic tracking-tight">
                VISA
              </div>
              <div className="bg-white px-2 py-1.5 rounded-sm flex items-center justify-center">
                <span className="w-3 h-3 bg-red-600 rounded-full inline-block -mr-1"></span>
                <span className="w-3 h-3 bg-amber-500 rounded-full inline-block opacity-80"></span>
              </div>
              <div className="bg-white px-2 py-1.5 rounded-sm flex items-center justify-center font-extrabold text-blue-800 text-[10px] italic">
                PayPal
              </div>
              <div className="bg-white px-2 py-1.5 rounded-sm flex items-center justify-center font-bold text-black text-[10px]">
                 Pay
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#09170c] py-4 px-4 text-center text-[11px] text-stone-400 font-medium border-t border-emerald-950/60">
        © 2024 Keto Queen. All Rights Reserved.
      </div>
    </footer>
  );
}
