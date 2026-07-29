'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Plus, Minus, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: string;
}

export default function InventoryList() {
  const [products, setProducts] = useState<ProductItem[]>([
    { id: 'PROD-01', name: 'Omega 3 Mix (100g Bag)', category: 'Snacks', stock: 120, price: 'Rs. 1,499' },
    { id: 'PROD-02', name: 'Almond Iced Coffee (200ml)', category: 'Beverages', stock: 12, price: 'Rs. 699' },
    { id: 'PROD-03', name: 'Omega 3 Mix (Jar 200g)', category: 'Snacks', stock: 45, price: 'Rs. 2,299' },
    { id: 'PROD-04', name: 'Keto Protein Powder (500g)', category: 'Supplements', stock: 85, price: 'Rs. 2,999' },
    { id: 'PROD-05', name: 'MCT Oil (250ml Bottle)', category: 'Beverages', stock: 0, price: 'Rs. 1,799' },
    { id: 'PROD-06', name: 'Keto Granola (300g Bag)', category: 'Snacks', stock: 60, price: 'Rs. 1,399' },
  ]);

  const handleStockAdjust = (id: string, amount: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updatedStock = Math.max(0, p.stock + amount);
          return { ...p, stock: updatedStock };
        }
        return p;
      })
    );
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) {
      return (
        <span className="bg-red-50 text-red-700 font-extrabold text-[9px] px-2 py-0.5 rounded-sm border border-red-100 uppercase tracking-wider">
          Out of Stock
        </span>
      );
    }
    if (stock < 20) {
      return (
        <span className="bg-amber-50 text-amber-700 font-extrabold text-[9px] px-2 py-0.5 rounded-sm border border-amber-100 uppercase tracking-wider">
          Low Stock
        </span>
      );
    }
    return (
      <span className="bg-emerald-50 text-emerald-700 font-extrabold text-[9px] px-2 py-0.5 rounded-sm border border-emerald-100 uppercase tracking-wider">
        In Stock
      </span>
    );
  };

  return (
    <div className="bg-white border border-stone-200/80 rounded-2xl p-5 hover:shadow-xs transition-shadow my-6">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Package size={18} className="text-[#1e4d2b]" />
          <h3 className="font-extrabold text-stone-900 text-sm sm:text-base tracking-tight">
            Inventory & Catalog Stock
          </h3>
        </div>
        <Link
          href="/Admin/products"
          className="flex items-center gap-1 bg-[#1e4d2b]/10 hover:bg-[#1e4d2b] hover:text-white text-[#1e4d2b] font-bold px-3 py-1.5 rounded-xl text-xs transition-colors cursor-pointer"
        >
          <span>Manage Products</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-sm text-stone-700">
          <thead>
            <tr className="border-b border-stone-100 text-stone-500 font-bold bg-stone-50/50">
              <th className="py-3 px-4">Item Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4 text-center">In Stock</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Price</th>
              <th className="py-3 px-4 text-center">Adjust Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-stone-50/30 transition-colors font-medium">
                <td className="py-3.5 px-4 font-bold text-stone-900">{p.name}</td>
                <td className="py-3.5 px-4">
                  <span className="text-stone-500 font-semibold">{p.category}</span>
                </td>
                <td className="py-3.5 px-4 text-center font-bold text-stone-900">
                  {p.stock} units
                </td>
                <td className="py-3.5 px-4">{getStockStatus(p.stock)}</td>
                <td className="py-3.5 px-4 text-right font-black text-[#1e4d2b]">{p.price}</td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {/* Decrease Stock button */}
                    <button
                      onClick={() => handleStockAdjust(p.id, -5)}
                      title="Reduce stock by 5"
                      className="w-7 h-7 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    {/* Increase Stock button */}
                    <button
                      onClick={() => handleStockAdjust(p.id, 5)}
                      title="Add stock by 5"
                      className="w-7 h-7 rounded-lg border border-stone-200 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
