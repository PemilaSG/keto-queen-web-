'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RefreshCcw, MoreVertical, Search, Eye } from 'lucide-react';

interface Transaction {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: 'Paid' | 'Pending' | 'Refunded';
  amount: number;
}

export default function TransactionsTable() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Paid' | 'Pending' | 'Refunded'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'KQ-8401', customer: 'Dulani Perera', email: 'dulani.perera@gmail.com', date: 'Jul 21, 2026', status: 'Paid', amount: 14500 },
    { id: 'KQ-8402', customer: 'Ranil Silva', email: 'ranil.silva@yahoo.com', date: 'Jul 20, 2026', status: 'Pending', amount: 4250 },
    { id: 'KQ-8403', customer: 'Nisha Fernando', email: 'nisha.f@gmail.com', date: 'Jul 20, 2026', status: 'Paid', amount: 8990 },
    { id: 'KQ-8404', customer: 'Sajith Alwis', email: 'sajith.al@outlook.com', date: 'Jul 19, 2026', status: 'Refunded', amount: 6490 },
    { id: 'KQ-8405', customer: 'Imara Senanayake', email: 'imara.sena@live.com', date: 'Jul 18, 2026', status: 'Paid', amount: 12800 },
    { id: 'KQ-8406', customer: 'Kasun Rajapaksa', email: 'kasun.raja@gmail.com', date: 'Jul 18, 2026', status: 'Pending', amount: 2299 },
  ]);

  const handleUpdateStatus = (id: string, newStatus: 'Paid' | 'Pending' | 'Refunded') => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter = activeFilter === 'All' || t.status === activeFilter;
    const matchesSearch =
      t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: 'Paid' | 'Pending' | 'Refunded') => {
    switch (status) {
      case 'Paid':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 size={12} className="text-emerald-600" />
            <span>Paid</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-amber-200">
            <AlertCircle size={12} className="text-amber-600" />
            <span>Pending</span>
          </span>
        );
      case 'Refunded':
        return (
          <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-600 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-stone-200">
            <RefreshCcw size={12} className="text-stone-500" />
            <span>Refunded</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-xs transition-shadow my-6">
      {/* Title & Filter Control Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
        <div>
          <h3 className="font-extrabold text-stone-900 text-sm sm:text-base tracking-tight">
            Financial Transactions
          </h3>
          <p className="text-xs text-stone-400 font-semibold mt-0.5">
            Monitor and manage customer billing statements.
          </p>
        </div>

        {/* Filter status buttons */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {(['All', 'Paid', 'Pending', 'Refunded'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Inline Live Search Bar */}
      <div className="relative max-w-sm mb-4">
        <input
          type="text"
          placeholder="Filter customer, email, order..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2 pl-9 pr-4 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] transition-all"
        />
        <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
      </div>

      {/* Grid Scroll frame */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-sm text-stone-700">
          <thead>
            <tr className="border-b border-stone-100 text-stone-500 font-bold bg-stone-50/50">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Amount</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filteredTransactions.map((t) => (
              <tr key={t.id} className="hover:bg-stone-50/30 transition-colors font-medium">
                <td className="py-4 px-4 font-bold text-stone-900">{t.id}</td>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-bold text-stone-900">{t.customer}</div>
                    <div className="text-[10px] text-stone-400 font-semibold">{t.email}</div>
                  </div>
                </td>
                <td className="py-4 px-4 text-stone-500">{t.date}</td>
                <td className="py-4 px-4">{getStatusBadge(t.status)}</td>
                <td className="py-4 px-4 text-right font-black text-[#1e4d2b]">
                  Rs. {t.amount.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    {/* Action dropdown preview */}
                    <button
                      onClick={() => handleUpdateStatus(t.id, t.status === 'Paid' ? 'Refunded' : 'Paid')}
                      title="Toggle Status (Test)"
                      className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                    >
                      <Eye size={14} />
                    </button>
                    
                    <button
                      title="Options"
                      className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 text-stone-400 transition-colors cursor-pointer"
                    >
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredTransactions.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-stone-400 font-semibold">
                  No matching transaction statements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
