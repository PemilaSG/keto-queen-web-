export default function OurStory() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Story Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">OUR STORY</h2>
          <p className="text-gray-600 mb-4">
            Keto Queen was born from a simple belief – that the right nutrition can transform lives. 
            What started as a small passion project has grown into a brand trusted by thousands of happy customers.
          </p>
          <p className="text-gray-600">
            We handpick every ingredient, ensure top-notch quality, and create products that fit perfectly into your keto lifestyle.
          </p>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "100% Keto", sub: "Made for your low-carb lifestyle" },
            { label: "Premium Quality", sub: "Carefully sourced ingredients" },
            { label: "Trusted by Thousands", sub: "Join our growing Keto Queen family" },
            { label: "Satisfaction Guaranteed", sub: "We stand by the quality of our products" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 border-2 border-green-800 rounded-full mb-3 flex items-center justify-center text-green-800">
                {/* Add your SVG icons here */}
                ★
              </div>
              <h4 className="font-bold text-sm">{item.label}</h4>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}