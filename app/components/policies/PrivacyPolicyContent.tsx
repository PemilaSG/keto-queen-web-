'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

export default function PrivacyPolicyContent() {
  const sections = [
    { id: 'collection', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Data Sharing & Security' },
    { id: 'cookies', title: '4. Cookies & Tracking Technologies' },
    { id: 'rights', title: '5. Your Privacy Rights & Choices' },
    { id: 'contact', title: '6. Contact Privacy Team' },
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
          <span className="text-stone-900 font-bold">Privacy Policy</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
            PRIVACY POLICY
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Your privacy matters to us. Learn how Keto Queen collects, protects, and handles your personal information.
          </p>
          <div className="inline-block bg-white border border-stone-200 px-3 py-1 rounded-full text-[11px] font-bold text-stone-500">
            Last Updated: January 15, 2026
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Table of Contents Sticky Sidebar */}
          <div className="lg:col-span-4 bg-[#fbfbf8] border border-stone-200/80 rounded-2xl p-5 sticky top-24 space-y-3 hidden lg:block">
            <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider border-b border-stone-200 pb-2">
              ON THIS PAGE
            </h3>
            <nav className="space-y-1.5 text-xs font-bold text-stone-600">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block py-1.5 px-2.5 rounded-lg hover:bg-[#1e4d2b]/10 hover:text-[#1e4d2b] transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Policy Text Main Column */}
          <div className="lg:col-span-8 space-y-8 text-stone-700 text-xs sm:text-sm leading-relaxed font-medium">
            
            {/* Intro Alert Box */}
            <div className="p-5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex items-start gap-3 text-emerald-900">
              <Lock size={20} className="text-[#1e4d2b] shrink-0 mt-0.5" />
              <p className="text-xs font-semibold">
                At Keto Queen (Pvt) Ltd, we are committed to safeguarding the confidentiality of your personal details. We do not sell or rent your personal data to third parties.
              </p>
            </div>

            {/* Section 1 */}
            <section id="collection" className="space-y-3 border-b border-stone-100 pb-6">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                1. Information We Collect
              </h2>
              <p>
                When you visit our store, create an account, or place an order, we collect information necessary to fulfill your requests:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 font-medium">
                <li><strong>Personal Identity:</strong> Full Name, Email Address, Delivery Address, and Phone Number.</li>
                <li><strong>Payment Data:</strong> Payment transaction reference tokens (card processing is securely handled directly by PCI-DSS compliant payment gateways).</li>
                <li><strong>Browsing Data:</strong> IP address, device type, browser settings, and pages visited.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="usage" className="space-y-3 border-b border-stone-100 pb-6">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                2. How We Use Your Information
              </h2>
              <p>We use the collected information for specific operational and service purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 font-medium">
                <li>Processing and delivering your keto orders accurately.</li>
                <li>Sending order confirmation, tracking updates, and receipt invoices.</li>
                <li>Providing customer care assistance and responding to inquiries.</li>
                <li>Sending promotional offers and health newsletters (only if opted in).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="sharing" className="space-y-3 border-b border-stone-100 pb-6">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                3. Data Sharing & Security
              </h2>
              <p>
                We maintain SSL 256-bit encryption on all data transfers. We only share information with trusted third-party service providers (such as courier partners for package delivery and payment processors for transaction clearance).
              </p>
            </section>

            {/* Section 4 */}
            <section id="cookies" className="space-y-3 border-b border-stone-100 pb-6">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                4. Cookies & Tracking Technologies
              </h2>
              <p>
                We use essential cookies to remember your shopping cart items, keep you logged in, and analyze site performance. For more details, please view our <Link href="/User/cookiePolicy" className="text-[#1e4d2b] font-bold underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* Section 5 */}
            <section id="rights" className="space-y-3 border-b border-stone-100 pb-6">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                5. Your Privacy Rights & Choices
              </h2>
              <p>
                You have full control over your personal information. You can access, edit, or request complete deletion of your account and personal data at any time by contacting our support team.
              </p>
            </section>

            {/* Section 6 */}
            <section id="contact" className="space-y-3 bg-[#f6f5ef] p-6 rounded-2xl border border-stone-200">
              <h2 className="text-base sm:text-lg font-black text-[#1e4d2b] uppercase">
                6. Contact Privacy Team
              </h2>
              <p className="text-xs text-stone-600 font-medium">
                If you have questions regarding our privacy practices or wish to submit a data request:
              </p>
              <div className="text-xs font-bold text-stone-900 space-y-1">
                <p>Email: <span className="text-[#1e4d2b]">privacy@ketoqueen.com</span></p>
                <p>Address: Keto Queen (Pvt) Ltd, 123 Wellness Way, Colombo 05, Sri Lanka</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
