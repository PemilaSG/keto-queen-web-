'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CookiePolicyContent() {
  const [preferences, setPreferences] = useState({
    essential: true, // Always active
    analytics: true,
    functional: true,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const cookieTypes = [
    {
      key: 'essential' as const,
      title: 'Essential Cookies',
      required: true,
      description: 'Necessary for core website security, keeping you logged in, and remembering shopping cart items.',
    },
    {
      key: 'analytics' as const,
      title: 'Analytics & Performance Cookies',
      required: false,
      description: 'Helps us understand how visitors interact with our pages, improving load speeds and navigation.',
    },
    {
      key: 'functional' as const,
      title: 'Functional & Preference Cookies',
      required: false,
      description: 'Remembers your preferred language, filter selections, and currency settings.',
    },
    {
      key: 'marketing' as const,
      title: 'Marketing & Targeting Cookies',
      required: false,
      description: 'Used to deliver relevant keto promotional deals and tailored health recommendations.',
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">Cookie Policy</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <Cookie size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
            COOKIE POLICY
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Learn how Keto Queen uses cookies and tracking technologies to enhance your browsing experience.
          </p>
          <div className="inline-block bg-white border border-stone-200 px-3 py-1 rounded-full text-[11px] font-bold text-stone-500">
            Last Updated: January 10, 2026
          </div>
        </div>

        {/* Interactive Cookie Preference Manager Box */}
        <div className="max-w-4xl mx-auto bg-[#fdfcf9] border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2">
              <Sliders size={20} className="text-[#1e4d2b]" />
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                Manage Your Cookie Preferences
              </h2>
            </div>
            {saved && (
              <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 animate-fadeIn">
                <CheckCircle2 size={14} /> Preferences Saved!
              </span>
            )}
          </div>

          <div className="space-y-4">
            {cookieTypes.map((item) => {
              const isChecked = preferences[item.key];
              return (
                <div
                  key={item.key}
                  className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-5 flex items-start justify-between gap-4 shadow-2xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-extrabold text-stone-900 text-sm">
                      <span>{item.title}</span>
                      {item.required && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 font-bold px-2 py-0.5 rounded-md uppercase">
                          Always Active
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 text-xs font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    type="button"
                    disabled={item.required}
                    onClick={() => handleToggle(item.key)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      isChecked ? 'bg-[#1e4d2b]' : 'bg-stone-200'
                    } ${item.required ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        isChecked ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleSavePreferences}
              className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-xs uppercase tracking-wider"
            >
              Save Cookie Settings
            </button>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-medium shadow-xs">
          <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
            What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you visit websites. They allow websites to remember your device, preferences, and shopping cart items between sessions.
          </p>
          <p>
            You can modify your browser settings to block or delete cookies at any time, though doing so may disable certain features of our web app.
          </p>
        </div>

      </div>
    </div>
  );
}
