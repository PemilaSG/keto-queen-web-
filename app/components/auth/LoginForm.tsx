'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Lock, Eye, EyeOff, Crown, ArrowRight, ShieldCheck, KeyRound, CheckCircle2, X } from 'lucide-react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!username.trim()) {
      setErrorMessage('Please enter your username or email.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);

    // Simulate login API response
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
      setShowForgotModal(false);
      setResetEmail('');
    }, 3000);
  };

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#f8f7f2] border border-stone-200/80 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Visual Brand Showcase */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1b4325] via-[#15381f] to-[#0e2413] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Decorative Circles & Leaves */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-6 right-6 opacity-20 text-3xl pointer-events-none select-none">
              🌱
            </div>

            {/* Top Brand Logo */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                <span className="text-lg tracking-wider font-black font-sans text-white">KETO</span>
                <Crown size={16} className="text-amber-400 fill-amber-400 animate-pulse" />
                <span className="text-lg tracking-wider font-black text-amber-400 font-sans">QUEEN</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase font-sans">
                  WELCOME BACK TO KETO LIVING
                </h2>
                <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                  Fuel your body with premium low-carb nutrition. Log in to track orders, access saved favorites, and enjoy member rewards.
                </p>
              </div>
            </div>

            {/* Center Product Graphic Card */}
            <div className="relative my-8 z-10">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                <Image
                  src="/keto_queen_contact_hero.jpg"
                  alt="Keto Queen Products"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold flex items-center justify-between">
                  <span>100% Keto • Premium Quality</span>
                  <span className="text-amber-400">👑</span>
                </div>
              </div>
            </div>

            {/* Bottom Trust Badges */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-emerald-200">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <span>Fast & Safe</span>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full space-y-6">
              
              {/* Form Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1e4d2b] uppercase tracking-wide">
                  ACCOUNT LOGIN
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm font-medium mt-1">
                  Please enter your username and password to log in.
                </p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center justify-between animate-fadeIn">
                  <span>{errorMessage}</span>
                  <button onClick={() => setErrorMessage('')} className="text-red-500 hover:text-red-700">
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* Success Notification */}
              {isSuccess ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1e4d2b]">Login Successful!</h3>
                  <p className="text-stone-600 text-xs font-medium">
                    Welcome back, <span className="font-bold text-stone-900">{username}</span>. Redirecting you to your account...
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setUsername('');
                      setPassword('');
                    }}
                    className="mt-2 text-xs font-bold text-[#1e4d2b] underline hover:text-emerald-800"
                  >
                    Log in as another user
                  </button>
                </div>
              ) : (
                /* Actual Login Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Username / Email Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Username / Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        required
                        placeholder="Enter your username or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all font-medium"
                      />
                      <User size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-10 pr-11 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all font-medium"
                      />
                      <Lock size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        className="absolute right-3 text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-1 text-xs font-semibold">
                    <label className="flex items-center gap-2 text-stone-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                      />
                      <span>Remember Me</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                      className="text-[#ca5828] hover:text-[#a8441c] font-bold hover:underline cursor-pointer transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer uppercase tracking-wider"
                    >
                      {isLoading ? (
                        <span>Logging In...</span>
                      ) : (
                        <>
                          <span>LOG IN</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Sign Up Link Prompt */}
              <div className="pt-4 border-t border-stone-100 text-center text-xs font-semibold text-stone-600">
                <span>Don&apos;t have an account? </span>
                <Link href="#" className="text-[#1e4d2b] font-extrabold hover:underline">
                  Create an Account
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Forgot Password Placeholder Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-4">
            
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#ca5828] mx-auto">
              <KeyRound size={22} />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-xl font-black text-stone-900 uppercase">FORGOT PASSWORD</h3>
              <p className="text-stone-500 text-xs font-medium">
                Enter your email address below and we will send you a password reset link.
              </p>
            </div>

            {forgotSent ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-800 text-xs font-bold animate-fadeIn">
                ✓ Reset instructions sent! Please check your inbox.
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your registered email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] font-medium"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Send Reset Link
                </button>
              </form>
            )}

            <p className="text-[11px] text-stone-400 text-center font-medium pt-1">
              (Note: Password reset service will be integrated soon.)
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
