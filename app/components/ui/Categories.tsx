const categories = [
  { name: 'Supplements', icon: '💊' },
  { name: 'Beverages', icon: '🥤' },
  { name: 'Snacks', icon: '🍪' },
  { name: 'Breakfast', icon: '🥣' },
  { name: 'Combo Packs', icon: '📦' },
  { name: 'Accessories', icon: '🧴' },
  { name: 'All Products', icon: '▦' },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 my-8">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-emerald-200 transition">
          <span className="text-4xl mb-2">{cat.icon}</span>
          <span className="text-sm font-medium text-stone-700">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}