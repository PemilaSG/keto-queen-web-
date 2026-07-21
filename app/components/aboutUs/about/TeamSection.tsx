'use client';

import React from 'react';
import { Crown } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: 'Sara Khan',
      role: 'Founder & CEO',
      avatarSvg: (
        <svg className="w-full h-full text-emerald-850" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      name: 'Ali Raza',
      role: 'Head of Operations',
      avatarSvg: (
        <svg className="w-full h-full text-emerald-850" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      name: 'Maha Fatima',
      role: 'Head of Product',
      avatarSvg: (
        <svg className="w-full h-full text-emerald-850" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      name: 'Usman Ahmed',
      role: 'Customer Experience Lead',
      avatarSvg: (
        <svg className="w-full h-full text-emerald-850" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide text-center mb-10">
          MEET THE TEAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {/* 4 Team Member Cards */}
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#fdfcfb] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Image Placeholder Frame */}
                <div className="w-24 h-24 rounded-full bg-emerald-50 border-2 border-emerald-700/10 mx-auto mb-4 flex items-center justify-center p-3 text-stone-300">
                  {member.avatarSvg}
                </div>
                
                <h3 className="font-extrabold text-stone-900 text-sm tracking-tight">
                  {member.name}
                </h3>
                <p className="text-stone-500 text-xs font-semibold mt-0.5 mb-4">
                  {member.role}
                </p>
              </div>

              {/* Social Media Link Icons */}
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-stone-100 text-stone-500">
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-stone-100 hover:bg-[#1e4d2b] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V1h-3a4 4 0 00-4 4v3z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-stone-100 hover:bg-[#1e4d2b] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-full bg-stone-100 hover:bg-[#1e4d2b] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Let's Grow Together Card */}
          <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-6 text-center flex flex-col justify-between shadow-xs">
            <div className="text-left space-y-3">
              <h3 className="font-black text-stone-900 text-sm tracking-wider uppercase">
                LET&apos;S GROW TOGETHER
              </h3>
              <p className="text-stone-600 text-xs font-semibold leading-relaxed">
                We&apos;re more than just a brand - we&apos;re a community. Thank you for being a part of the Keto Queen family.
              </p>
            </div>

            <div className="flex items-end justify-between mt-6 pt-3 border-t border-stone-200/50">
              <span className="font-script text-2xl font-bold text-[#e06322] italic leading-none pl-1">
                Thank you!
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 shadow-xs border border-stone-200/40 shrink-0">
                <Crown size={18} className="fill-amber-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}