'use client';

import React from 'react';
import { Phone, Mail, MapPin, Headphones } from 'lucide-react';

export default function ContactInfoCards() {
  const cards = [
    {
      id: 'phone',
      icon: Phone,
      title: 'PHONE',
      lines: ['+94 77 123 4567', '+94 71 987 6543'],
      subtext: 'Mon - Sat : 9.00 AM - 6.00 PM',
    },
    {
      id: 'email',
      icon: Mail,
      title: 'EMAIL',
      lines: ['support@ketoqueen.com', 'info@ketoqueen.com'],
      subtext: 'We reply within 24 hours',
    },
    {
      id: 'address',
      icon: MapPin,
      title: 'ADDRESS',
      lines: ['Keto Queen (Pvt) Ltd,', '123 Wellness Way,', 'Colombo 05, Sri Lanka.'],
      subtext: null,
    },
    {
      id: 'livechat',
      icon: Headphones,
      title: 'LIVE CHAT',
      lines: ['Chat with our support team for quick assistance.'],
      subtext: null,
      buttonText: 'Start Live Chat',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Top row with icon & title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1e4d2b] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-extrabold text-stone-900 tracking-wider text-sm uppercase">
                      {card.title}
                    </h3>
                  </div>

                  {/* Content lines */}
                  <div className="text-stone-700 text-xs sm:text-sm font-medium space-y-1">
                    {card.lines.map((line, idx) => (
                      <p key={idx} className="leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Subtext or Button */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  {card.subtext && (
                    <p className="text-stone-500 text-xs font-normal">{card.subtext}</p>
                  )}
                  {card.buttonText && (
                    <button className="w-full sm:w-auto bg-[#1e4d2b] hover:bg-[#15381f] text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors shadow-xs hover:shadow-md cursor-pointer">
                      {card.buttonText}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
