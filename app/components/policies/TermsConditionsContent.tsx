'use client';

import React from 'react';
import Link from 'next/link';
import { FileCheck2, Scale, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TermsConditionsContent() {
  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">Terms & Conditions</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <FileCheck2 size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
            TERMS & CONDITIONS
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Please read these terms and conditions carefully before using the Keto Queen website or purchasing our products.
          </p>
          <div className="inline-block bg-white border border-stone-200 px-3 py-1 rounded-full text-[11px] font-bold text-stone-500">
            Effective Date: January 1, 2026
          </div>
        </div>

        {/* Policy Body */}
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-8 text-stone-700 text-xs sm:text-sm leading-relaxed font-medium shadow-xs">
          
          {/* Section 1 */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase flex items-center gap-2">
              <Scale size={18} className="text-[#1e4d2b]" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              By accessing or using our website, placing an order, or registering an account, you agree to be legally bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#1e4d2b]" />
              <span>2. Product Information & Pricing</span>
            </h2>
            <p>
              All prices listed on Keto Queen are in Sri Lankan Rupees (LKR / Rs.) and include applicable taxes unless stated otherwise. We make every effort to display accurate product descriptions, nutritional facts, and prices; however, we reserve the right to correct pricing errors or modify prices without prior notice.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              3. Orders & Cancellation Policy
            </h2>
            <p>
              Orders are subject to product availability. Keto Queen reserves the right to refuse or cancel any order for reason including stock unavailability, errors in pricing, or suspected fraudulent activity. You may cancel your order before it has been dispatched by contacting customer support.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              4. Health & Medical Disclaimer
            </h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-amber-900">
              <AlertTriangle size={18} className="text-[#ca5828] shrink-0 mt-0.5" />
              <p className="text-xs font-semibold">
                Keto Queen products and nutritional guides are designed for general dietary wellness and low-carb lifestyles. They do not constitute medical advice or diagnosis. Always consult a qualified physician before starting a new diet plan if you have pre-existing health conditions.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              5. Intellectual Property
            </h2>
            <p>
              All trademarks, logos, brand titles, text content, graphics, and images displayed on this site are the intellectual property of Keto Queen (Pvt) Ltd and protected under copyright laws.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 bg-[#f6f5ef] p-6 rounded-2xl border border-stone-200">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              6. Governing Law
            </h2>
            <p className="text-xs text-stone-600 font-medium">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of Sri Lankan courts.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
