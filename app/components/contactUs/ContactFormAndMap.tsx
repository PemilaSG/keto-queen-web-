'use client';

import React, { useState } from 'react';
import { Send, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactFormAndMap() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Auto clear success message after 5s
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Send Us A Message Form */}
          <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide">
                SEND US A MESSAGE
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 mb-6">
                Fill out the form and we&apos;ll get back to you soon.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm font-semibold animate-fadeIn">
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will reply shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-bold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Find Us Here (Map) */}
          <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide mb-4">
                FIND US HERE
              </h2>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-stone-300/80 shadow-xs bg-[#e5e3d9]">
              {/* Map Iframe fallback / Interactive Styled Map View */}
              <iframe
                title="Keto Queen Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.8500%2C6.8800%2C79.8800%2C6.9100&amp;layer=mapnik&amp;marker=6.8950%2C79.8650"
                className="w-full h-full border-0 filter contrast-[0.95] saturate-[0.9]"
                loading="lazy"
              />

              {/* Styled Location Marker Card matching the design image */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md border border-stone-200 text-xs z-10 max-w-xs">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <MapPin size={16} className="text-[#1e4d2b] fill-[#1e4d2b]/20" />
                  <span>Keto Queen (Pvt) Ltd</span>
                </div>
                <p className="text-stone-600 mt-1 pl-6">
                  123 Wellness Way, Colombo 05
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
