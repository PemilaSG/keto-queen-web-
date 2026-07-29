'use client';

import React from 'react';
import Link from 'next/link';
import { RefreshCcw, PackageCheck, Truck, ShieldCheck, Mail, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

export default function RefundPolicyContent() {
  const steps = [
    {
      num: '1',
      title: 'Request Return',
      description: 'Contact customer support within 7 days of order delivery.',
      icon: Mail,
    },
    {
      num: '2',
      title: 'Package Inspection',
      description: 'Pack the item in its original unused condition and return.',
      icon: PackageCheck,
    },
    {
      num: '3',
      title: 'Fast Refund / Swap',
      description: 'Receive full refund to your payment card or item replacement.',
      icon: RefreshCcw,
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
          <span className="text-stone-900 font-bold">Refund Policy</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <RefreshCcw size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
            REFUND & RETURN POLICY
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Hassle-free 7-day return guarantee. We stand behind the quality of every Keto Queen product.
          </p>
          <div className="inline-block bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-extrabold text-[#1e4d2b]">
            🛡️ 7-Day Money Back Guarantee
          </div>
        </div>

        {/* 3-Step Return Process Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#fcfbf9] border border-stone-200/80 rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1e4d2b] text-amber-400 flex items-center justify-center mx-auto shadow-xs">
                  <Icon size={22} />
                </div>
                <h3 className="font-extrabold text-stone-900 text-sm tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-xs font-semibold leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-8 text-stone-700 text-xs sm:text-sm leading-relaxed font-medium shadow-xs">
          
          {/* Eligibility Section */}
          <section className="space-y-4 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              1. Return Eligibility Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Eligible Box */}
              <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-xs uppercase">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Eligible for Return / Refund</span>
                </div>
                <ul className="list-disc pl-5 text-xs text-stone-700 space-y-1 font-semibold">
                  <li>Damaged or defective item upon delivery.</li>
                  <li>Incorrect item or weight delivered.</li>
                  <li>Unopened, sealed product returned within 7 days.</li>
                </ul>
              </div>

              {/* Ineligible Box */}
              <div className="p-4 bg-red-50/60 border border-red-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-red-900 text-xs uppercase">
                  <XCircle size={16} className="text-red-500" />
                  <span>Non-Returnable Items</span>
                </div>
                <ul className="list-disc pl-5 text-xs text-stone-700 space-y-1 font-semibold">
                  <li>Opened or partially consumed food containers.</li>
                  <li>Perishable items past the 7-day notification window.</li>
                  <li>Items bought under clearance sales.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Refund Processing Section */}
          <section className="space-y-3 border-b border-stone-100 pb-6">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              2. Refund Processing Time
            </h2>
            <p>
              Once your returned item is received and inspected, we will notify you of the approval or rejection of your refund. If approved:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600 font-medium">
              <li><strong>Card / Online Payments:</strong> Credit is credited back to your original payment card within 3-5 business days.</li>
              <li><strong>Cash on Delivery (COD):</strong> Refund is issued via direct bank transfer to your provided account details.</li>
            </ul>
          </section>

          {/* Return Shipping Section */}
          <section className="space-y-3 bg-[#f6f5ef] p-6 rounded-2xl border border-stone-200">
            <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
              3. Need Return Support?
            </h2>
            <p className="text-xs text-stone-600 font-medium">
              To initiate a return or exchange, please email our support team with your Order ID and photos of the item:
            </p>
            <div className="text-xs font-bold text-stone-900">
              Support Email: <span className="text-[#1e4d2b]">support@ketoqueen.com</span> | Hotline: <span className="text-[#1e4d2b]">+94 77 123 4567</span>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
