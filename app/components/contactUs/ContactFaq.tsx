'use client';

import React, { useState } from 'react';
import { ChevronDown, Headphones } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function ContactFaq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'What are your customer service hours?',
      answer:
        'Our customer service team is available Monday through Saturday, from 9:00 AM to 6:00 PM (IST). We aim to respond to all inquiries within 24 hours.',
    },
    {
      id: 2,
      question: 'How can I track my order?',
      answer:
        'Once your order has been dispatched, you will receive an email and SMS containing your order tracking code and a direct link to monitor delivery status.',
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer:
        'We accept major Credit/Debit Cards (VISA, Mastercard), PayPal, Apple Pay, and Cash on Delivery (COD) for supported delivery zones.',
    },
    {
      id: 4,
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to selected international destinations. Shipping rates and estimated delivery times are automatically calculated at checkout.',
    },
    {
      id: 5,
      question: 'How can I return a product?',
      answer:
        'If you receive damaged or incorrect items, please contact our support team within 7 days of delivery for hassle-free returns or exchanges.',
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-stone-900 text-sm sm:text-base hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-stone-600 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#1e4d2b]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 border-t border-stone-100 bg-stone-50/50 leading-relaxed pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need More Help Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#f6f5ef] border border-stone-200/90 rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#1e4d2b] shadow-xs">
                <Headphones size={32} />
              </div>
              <h3 className="text-lg font-black text-stone-900">Need More Help?</h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-xs font-medium">
                Our support team is always ready to help you.
              </p>
              <button className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-bold py-3 px-6 rounded-lg text-xs sm:text-sm transition-colors shadow-xs hover:shadow-md cursor-pointer mt-2">
                Contact via Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
