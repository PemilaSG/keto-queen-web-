'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Truck,
  XCircle,
  Eye,
  ChevronDown
} from 'lucide-react';

export interface AdminOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  itemsSummary: string;
  itemsCount: number;
  totalAmount: number;
  paymentMethod: string;
  status: 'Pending' | 'Processing' | 'Dispatched' | 'Delivered' | 'Cancelled';
}

export default function AdminOrdersContent() {
  const [orders, setOrders] = useState<AdminOrder[]>([
    {
      id: 'KQ-9842',
      customerName: 'Sara Perera',
      customerPhone: '+94 77 123 4567',
      date: 'July 24, 2026',
      itemsSummary: 'Omega 3 Mix (2), Almond Iced Coffee (1)',
      itemsCount: 3,
      totalAmount: 4850,
      paymentMethod: 'VISA Card',
      status: 'Dispatched',
    },
    {
      id: 'KQ-9843',
      customerName: 'Kamal Silva',
      customerPhone: '+94 71 987 6543',
      date: 'July 25, 2026',
      itemsSummary: 'Keto Protein Powder (Chocolate)',
      itemsCount: 1,
      totalAmount: 2480,
      paymentMethod: 'Cash on Delivery (COD)',
      status: 'Pending',
    },
    {
      id: 'KQ-9840',
      customerName: 'Dilhani Samarasinghe',
      customerPhone: '+94 70 444 3322',
      date: 'July 23, 2026',
      itemsSummary: 'MCT Oil (2), Keto Granola (1)',
      itemsCount: 3,
      totalAmount: 5550,
      paymentMethod: 'PayPal',
      status: 'Delivered',
    },
    {
      id: 'KQ-9839',
      customerName: 'Nalin Fernando',
      customerPhone: '+94 76 555 1122',
      date: 'July 22, 2026',
      itemsSummary: 'Keto Peanut Butter (2)',
      itemsCount: 2,
      totalAmount: 2980,
      paymentMethod: 'MasterCard',
      status: 'Delivered',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleStatusChange = (orderId: string, newStatus: AdminOrder['status']) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
  };

  const filteredOrders = orders.filter((ord) => {
    const matchesStatus = statusFilter === 'All' || ord.status === statusFilter;
    const matchesSearch =
      ord.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerPhone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: AdminOrder['status']) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Dispatched':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Processing':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Pending':
        return 'bg-[#1e4d2b]/10 text-[#1e4d2b] border-[#1e4d2b]/20';
      case 'Cancelled':
        return 'bg-red-100 text-red-900 border-red-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase font-sans tracking-tight">
            ORDER MANAGEMENT
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm font-medium mt-0.5">
            Monitor customer orders, track payments, and update shipping fulfillment status.
          </p>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Total Orders</span>
          <span className="block text-2xl font-black text-stone-900">{orders.length}</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pending Fulfillment</span>
          <span className="block text-2xl font-black text-amber-600">
            {orders.filter((o) => o.status === 'Pending' || o.status === 'Processing').length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">In Transit</span>
          <span className="block text-2xl font-black text-blue-700">
            {orders.filter((o) => o.status === 'Dispatched').length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Delivered Success</span>
          <span className="block text-2xl font-black text-emerald-700">
            {orders.filter((o) => o.status === 'Delivered').length}
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Search by Order ID, Customer Name, or Phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] font-medium"
          />
          <Search size={16} className="absolute left-3 text-stone-400 pointer-events-none" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter size={16} className="text-stone-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-stone-800 focus:outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Dispatched">Dispatched</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0e2413] text-white text-[11px] font-black uppercase tracking-wider">
                <th className="p-4">Order ID & Date</th>
                <th className="p-4">Customer Details</th>
                <th className="p-4">Items Summary</th>
                <th className="p-4">Amount (Rs.)</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Fulfillment Status</th>
                <th className="p-4 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs font-medium text-stone-700">
              {filteredOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-stone-50/80 transition-colors">
                  {/* Order ID & Date */}
                  <td className="p-4">
                    <span className="font-extrabold text-stone-900 text-xs block">{ord.id}</span>
                    <span className="text-[10px] text-stone-400 font-semibold">{ord.date}</span>
                  </td>

                  {/* Customer */}
                  <td className="p-4">
                    <span className="font-extrabold text-stone-900 text-xs block">{ord.customerName}</span>
                    <span className="text-[10px] text-stone-500 font-semibold">{ord.customerPhone}</span>
                  </td>

                  {/* Items Summary */}
                  <td className="p-4">
                    <span className="block text-stone-800 font-semibold">{ord.itemsSummary}</span>
                    <span className="text-[10px] text-stone-400 font-bold">{ord.itemsCount} total items</span>
                  </td>

                  {/* Amount */}
                  <td className="p-4 font-black text-[#1e4d2b]">
                    Rs. {ord.totalAmount.toLocaleString()}
                  </td>

                  {/* Payment Method */}
                  <td className="p-4 font-bold text-stone-700">
                    {ord.paymentMethod}
                  </td>

                  {/* Status Badge */}
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border uppercase ${getStatusBadge(ord.status)}`}>
                      {ord.status}
                    </span>
                  </td>

                  {/* Actions Dropdown */}
                  <td className="p-4 text-right">
                    <select
                      value={ord.status}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value as any)}
                      className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-stone-800 focus:outline-none cursor-pointer"
                    >
                      <option value="Pending">Set to Pending</option>
                      <option value="Processing">Set to Processing</option>
                      <option value="Dispatched">Set to Dispatched</option>
                      <option value="Delivered">Set to Delivered</option>
                      <option value="Cancelled">Set to Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
