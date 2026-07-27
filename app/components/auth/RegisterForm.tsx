'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Crown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  X,
  Gift,
  Sparkles,
  Truck,
} from 'lucide-react';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: 'bg-stone-200' };

    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', color: 'bg-red-500', textColor: 'text-red-600' };
      case 2:
        return { score: 2, label: 'Fair', color: 'bg-amber-500', textColor: 'text-amber-600' };
      case 3:
        return { score: 3, label: 'Good', color: 'bg-emerald-500', textColor: 'text-emerald-600' };
      case 4:
        return { score: 4, label: 'Strong', color: 'bg-[#1e4d2b]', textColor: 'text-[#1e4d2b]' };
      default:
        return { score: 0, label: 'Very Weak', color: 'bg-stone-300', textColor: 'text-stone-400' };
    }
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify your confirm password.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('You must agree to the Terms & Conditions to create an account.');
      return;
    }

    setIsLoading(true);

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#f8f7f2] border border-stone-200/80 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Visual Brand Showcase & Benefits */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1b4325] via-[#15381f] to-[#0e2413] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Decorative Blur Highlights */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Brand Logo Header */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                <span className="text-lg tracking-wider font-black font-sans text-white">KETO</span>
                <Crown size={16} className="text-amber-400 fill-amber-400 animate-pulse" />
                <span className="text-lg tracking-wider font-black text-amber-400 font-sans">QUEEN</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase font-sans">
                  JOIN THE KETO QUEEN FAMILY
                </h2>
                <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                  Create your free account today and unlock exclusive member perks, rewards, and faster order checkout.
                </p>
              </div>
            </div>

            {/* Member Perks List */}
            <div className="relative my-6 space-y-3.5 z-10">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Gift size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Welcome Reward</h4>
                  <p className="text-[11px] text-stone-300 font-medium">Get 10% off your first keto order upon signing up.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Truck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Express Order Updates</h4>
                  <p className="text-[11px] text-stone-300 font-medium">Receive real-time order tracking and delivery SMS alerts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">VIP Deals & Recipes</h4>
                  <p className="text-[11px] text-stone-300 font-medium">Early access to new product launches and keto meal plans.</p>
                </div>
              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-emerald-200">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>100% Safe & Secure Signup</span>
              </div>
              <span className="text-amber-400">👑 Keto Approved</span>
            </div>
          </div>

          {/* Right Column: Register Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full space-y-6">
              
              {/* Form Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1e4d2b] uppercase tracking-wide">
                  CREATE AN ACCOUNT
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm font-medium mt-1">
                  Fill in your details below to set up your account.
                </p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <button onClick={() => setErrorMessage('')} className="text-red-500 hover:text-red-700">
                    <X size={14} />
                  </button>
                </div>
              )}

              {/* Success Screen */}
              {isSuccess ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#1e4d2b] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#1e4d2b] uppercase">Welcome to Keto Queen!</h3>
                  <p className="text-stone-700 text-xs sm:text-sm font-medium leading-relaxed">
                    Your account has been successfully created for <span className="font-bold text-stone-900">{email}</span>.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-xs uppercase tracking-wider"
                    >
                      <span>Proceed to Log In</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ) : (
                /* Actual Register Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* 1. Full Name (Required) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sara Perera"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all font-medium"
                      />
                      <User size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Email Address (Required) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all font-medium"
                      />
                      <Mail size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* 3. Phone Number (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <span className="text-[10px] text-stone-400 font-semibold">Optional (For order updates)</span>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="tel"
                        placeholder="+94 77 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] focus:ring-1 focus:ring-[#1e4d2b] transition-all font-medium"
                      />
                      <Phone size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* 4. Password + Show/Hide toggle */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Create a strong password"
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

                    {/* Password Strength Indicator */}
                    {password && (
                      <div className="pt-1.5 space-y-1 animate-fadeIn">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-stone-500">Password Strength:</span>
                          <span className={strength.textColor}>{strength.label}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 h-1.5">
                          {[1, 2, 3, 4].map((step) => (
                            <div
                              key={step}
                              className={`h-full rounded-full transition-all duration-300 ${
                                step <= strength.score ? strength.color : 'bg-stone-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 5. Confirm Password (Required) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full bg-stone-50 border rounded-xl py-3 pl-10 pr-11 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 transition-all font-medium ${
                          confirmPassword && confirmPassword !== password
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                            : confirmPassword && confirmPassword === password
                            ? 'border-emerald-400 focus:border-[#1e4d2b] focus:ring-[#1e4d2b]'
                            : 'border-stone-200 focus:border-[#1e4d2b] focus:ring-[#1e4d2b]'
                        }`}
                      />
                      <Lock size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                        className="absolute right-3 text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {/* Live Password Match Status */}
                    {confirmPassword && (
                      <div className="text-[11px] font-semibold flex items-center gap-1 pt-0.5">
                        {confirmPassword === password ? (
                          <span className="text-emerald-700 flex items-center gap-1 font-bold">
                            <CheckCircle2 size={12} className="text-emerald-600" /> Passwords match
                          </span>
                        ) : (
                          <span className="text-red-600 flex items-center gap-1 font-bold">
                            <AlertCircle size={12} className="text-red-500" /> Passwords do not match
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* 6. Terms & Conditions Checkbox (Required) */}
                  <div className="pt-1 space-y-2">
                    <label className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                      />
                      <span className="leading-snug font-medium">
                        I agree to the{' '}
                        <a href="#" className="text-[#1e4d2b] font-bold hover:underline">
                          Terms & Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-[#1e4d2b] font-bold hover:underline">
                          Privacy Policy
                        </a>{' '}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>

                    {/* Optional Newsletter Checkbox */}
                    <label className="flex items-start gap-2.5 text-xs text-stone-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={subscribeNewsletter}
                        onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                      />
                      <span className="leading-snug font-medium">
                        Subscribe to get exclusive keto offers, recipes & health tips.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading || !agreeTerms}
                      className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer uppercase tracking-wider"
                    >
                      {isLoading ? (
                        <span>Creating Account...</span>
                      ) : (
                        <>
                          <span>CREATE ACCOUNT</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* 7. Already have an account? Log in Link */}
              <div className="pt-4 border-t border-stone-100 text-center text-xs font-semibold text-stone-600">
                <span>Already have an account? </span>
                <Link href="/login" className="text-[#1e4d2b] font-extrabold hover:underline">
                  Log in
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
