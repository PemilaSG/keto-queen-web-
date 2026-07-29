'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, ShoppingBag, ShieldCheck, CreditCard, RefreshCcw, Mail, ChevronRight } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FaqContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('q1');

  const categories = [
    { name: 'All', icon: HelpCircle },
    { name: 'Orders & Shipping', icon: ShoppingBag },
    { name: 'Products & Keto Diet', icon: ShieldCheck },
    { name: 'Payments & Billing', icon: CreditCard },
    { name: 'Returns & Refunds', icon: RefreshCcw },
  ];

  const faqs: FaqItem[] = [
    {
      id: 'q1',
      category: 'Orders & Shipping',
      question: 'How long does shipping take for Keto Queen orders?',
      answer: 'Standard shipping takes 2 to 4 business days nationwide. Orders placed before 12:00 PM (IST) are dispatched on the same business day.',
    },
    {
      id: 'q2',
      category: 'Orders & Shipping',
      question: 'Do you offer Cash on Delivery (COD)?',
      answer: 'Yes! Cash on Delivery is available for all addresses across Sri Lanka for orders up to Rs. 25,000.',
    },
    {
      id: 'q3',
      category: 'Orders & Shipping',
      question: 'How can I track my package once dispatched?',
      answer: 'Once your order is shipped, you will receive an SMS and email notification with your tracking number and direct live tracking link.',
    },
    {
      id: 'q4',
      category: 'Products & Keto Diet',
      question: 'Are all Keto Queen products 100% Keto-friendly?',
      answer: 'Absolutely. Every product in our catalog is rigorously formulated to maintain ultra-low net carbs, high healthy fats, zero added sugars, and clean ingredients.',
    },
    {
      id: 'q5',
      category: 'Products & Keto Diet',
      question: 'Where can I find the net carb count for each product?',
      answer: 'The exact net carb and full nutritional information is listed clearly on the product package label as well as on every product details page on our store.',
    },
    {
      id: 'q6',
      category: 'Payments & Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept VISA, Mastercard, PayPal, Apple Pay, and Cash on Delivery (COD). All online card transactions are processed via 256-bit SSL encryption.',
    },
    {
      id: 'q7',
      category: 'Payments & Billing',
      question: 'Will I receive a tax invoice for my purchase?',
      answer: 'Yes, an electronic receipt/invoice will automatically be emailed to you upon order confirmation.',
    },
    {
      id: 'q8',
      category: 'Returns & Refunds',
      question: 'What is your return policy if a product arrives damaged?',
      answer: 'We offer a 7-day return guarantee. If your package arrives damaged or defective, contact customer support within 7 days for a hassle-free replacement or full refund.',
    },
    {
      id: 'q9',
      category: 'Returns & Refunds',
      question: 'How long does it take to process a refund?',
      answer: 'Refunds for online card payments are processed within 3-5 business days back to your original payment method.',
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">FAQ</span>
        </nav>

        {/* Hero Header & Search */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <HelpCircle size={32} />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-medium">
              Got questions about our keto products, shipping, or payments? Find answers here.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative flex items-center">
            <input
              type="text"
              placeholder="Search questions (e.g. shipping, net carbs, returns)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-full py-3.5 pl-12 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all shadow-xs font-medium"
            />
            <Search size={20} className="absolute left-4 text-stone-400 pointer-events-none" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1e4d2b] text-white shadow-xs'
                    : 'bg-[#f6f5ef] border border-stone-200/80 text-stone-700 hover:bg-stone-200/70'
                }`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-stone-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs hover:shadow-xs transition-shadow"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-extrabold text-stone-900 text-sm sm:text-base hover:bg-stone-50/80 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#1e4d2b] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 bg-[#fbfbf8] leading-relaxed font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-stone-50 border border-dashed border-stone-200 rounded-2xl">
              <p className="text-stone-500 font-bold text-sm">No questions matched your search term.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-2 text-xs font-extrabold text-[#1e4d2b] underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="max-w-4xl mx-auto bg-[#183921] text-white rounded-3xl p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-6 shadow-md">
          <div className="space-y-1">
            <h3 className="text-lg font-black uppercase tracking-wide">STILL HAVE QUESTIONS?</h3>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Can&apos;t find what you are looking for? Our friendly Keto Queen team is ready to help!
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            <Mail size={16} />
            <span>Contact Support</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
