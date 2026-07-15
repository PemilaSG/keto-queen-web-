import { BadgeCheck, ShieldCheck, Truck, RefreshCcw, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { label: '100% Keto', sublabel: 'Healthy & Delicious', icon: BadgeCheck },
    { label: 'Premium Quality', sublabel: 'Carefully sourced', icon: Sparkles },
    { label: 'Fast Delivery', sublabel: 'At your doorstep', icon: Truck },
    { label: 'Secure Payment', sublabel: '100% safe & secure', icon: ShieldCheck },
    { label: 'Easy Returns', sublabel: 'Hassle free returns', icon: RefreshCcw },
  ];

  return (
    <div className="my-6 flex justify-between gap-4 rounded-xl border bg-stone-50 p-6 text-black shadow-sm">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-black">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-700">
              <Icon size={20} strokeWidth={2.25} />
            </div>
            <div className="leading-tight">
              <div className="font-bold">{item.label}</div>
              <div className="text-xs font-bold text-stone-600">{item.sublabel}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}