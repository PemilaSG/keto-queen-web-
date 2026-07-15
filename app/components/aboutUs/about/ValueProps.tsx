const features = [
  { label: "Clean Ingredients", sub: "No artificial additives or preservatives" },
  { label: "Keto Certified", sub: "100% keto-friendly and trusted" },
  { label: "Nutrition Focused", sub: "Products designed to fuel your goals" },
  { label: "Fast & Reliable Delivery", sub: "Delivered fresh at your doorstep" },
  { label: "Affordable Wellness", sub: "Premium quality at fair prices" },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-10 text-black">WHY CHOOSE KETO QUEEN?</h2>
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Placeholder for Icons */}
            <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 flex items-center justify-center">🌱</div>
            <h4 className="font-bold text-sm mb-1 text-black">{item.label}</h4>
            <p className="text-xs text-black">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}