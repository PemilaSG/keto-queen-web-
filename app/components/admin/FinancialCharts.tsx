'use client';

import React, { useState } from 'react';
import { AreaChart, TrendingUp, Info } from 'lucide-react';

export default function FinancialCharts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const revenues = [80000, 120000, 110000, 178000, 192000, 248000, 290000];

  // SVG dimensions
  const width = 500;
  const height = 180;
  const padding = 30;

  // Map values to coordinates
  const points = revenues.map((rev, idx) => {
    const x = padding + (idx * (width - padding * 2)) / (revenues.length - 1);
    const maxRev = Math.max(...revenues) * 1.1;
    const y = height - padding - (rev * (height - padding * 2)) / maxRev;
    return { x, y, value: rev, month: months[idx] };
  });

  // Build the line path
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  // Build the area path (extends line down to base line)
  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${height - padding}
    L ${points[0].x} ${height - padding}
    Z
  `;

  const categories = [
    { name: 'Keto Snacks & Bites', percentage: 42, count: 1612, color: 'bg-emerald-600' },
    { name: 'Keto Supplements', percentage: 28, count: 1075, color: 'bg-amber-500' },
    { name: 'Combo Packs & Bundles', percentage: 20, count: 768, color: 'bg-blue-600' },
    { name: 'Keto Beverages & MCT Oil', percentage: 10, count: 384, color: 'bg-purple-650' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
      
      {/* Chart 1: Revenue line chart (8 columns) */}
      <div className="lg:col-span-8 bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xs transition-shadow">
        <div>
          <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <AreaChart size={18} className="text-[#1e4d2b]" />
              <h3 className="font-extrabold text-stone-900 text-sm sm:text-base tracking-tight">
                Revenue Growth Performance
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-sm">
              <TrendingUp size={14} />
              <span>+24% vs Q1</span>
            </div>
          </div>

          {/* Interactive SVG Chart Container */}
          <div className="relative w-full h-[200px] mt-4 select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${width} ${height}`}
              preserveAspectRatio="none"
            >
              <defs>
                {/* Area Gradient fill */}
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e4d2b" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1e4d2b" stopOpacity="0.00" />
                </linearGradient>
              </defs>

              {/* Grid Horizontal Guide Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                const y = padding + ratio * (height - padding * 2);
                return (
                  <line
                    key={idx}
                    x1={padding}
                    y1={y}
                    x2={width - padding}
                    y2={y}
                    stroke="#f0efea"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Gradient Area fill */}
              <path d={areaPath} fill="url(#areaGrad)" />

              {/* Line path */}
              <path
                d={linePath}
                fill="none"
                stroke="#1e4d2b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Interactive nodes */}
              {points.map((p, idx) => {
                const isHovered = hoveredIndex === idx;
                return (
                  <g key={idx}>
                    {/* Invisible hover trigger */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="16"
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                    
                    {/* Visible bullet */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isHovered ? '6' : '4'}
                      fill={isHovered ? '#1e4d2b' : '#ffffff'}
                      stroke="#1e4d2b"
                      strokeWidth={isHovered ? '2.5' : '2'}
                      className="pointer-events-none transition-all duration-200"
                    />

                    {/* X Axis Labels */}
                    <text
                      x={p.x}
                      y={height - 8}
                      textAnchor="middle"
                      fill="#78716c"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {p.month}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Overlay card */}
            {hoveredIndex !== null && (
              <div
                className="absolute bg-white/95 border border-stone-200 rounded-lg p-2.5 shadow-md text-[10px] sm:text-xs z-10 pointer-events-none animate-fadeIn"
                style={{
                  left: `${(points[hoveredIndex].x / width) * 100}%`,
                  top: `${(points[hoveredIndex].y / height) * 75}%`,
                  transform: 'translate(-50%, -100%)',
                }}
              >
                <div className="font-bold text-stone-500">{points[hoveredIndex].month} Revenue</div>
                <div className="font-black text-[#1e4d2b] mt-0.5">
                  Rs. {points[hoveredIndex].value.toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chart 2: Category distribution progress bars (4 columns) */}
      <div className="lg:col-span-4 bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xs transition-shadow">
        <div>
          <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Info size={16} className="text-[#1e4d2b]" />
              <h3 className="font-extrabold text-stone-900 text-sm sm:text-base tracking-tight">
                Sales by Category
              </h3>
            </div>
          </div>

          {/* Progress lines list */}
          <div className="space-y-4.5 mt-2">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-stone-700">
                  <span className="line-clamp-1">{cat.name}</span>
                  <span>{cat.percentage}%</span>
                </div>
                
                {/* Progress bar container */}
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${cat.color} h-full rounded-full`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-[10px] text-stone-400 font-semibold">
                  <span>{cat.count} items sold</span>
                  <span>Rs. {(cat.count * 1450).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
