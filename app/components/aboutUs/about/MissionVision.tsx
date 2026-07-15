export default function MissionVision() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Mission */}
      <div className="flex-1 bg-orange-50 p-8 rounded-2xl border border-orange-100">
        <h3 className="text-2xl font-bold text-orange-600 mb-4">OUR MISSION</h3>
        <p className="text-gray-700">To empower people to live healthier, happier lives through clean, delicious, and effective keto-friendly products.</p>
      </div>

      {/* Center Icon (Placeholder for the circular target/goal icon) */}
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          🎯
        </div>
      </div>

      {/* Vision */}
      <div className="flex-1 bg-orange-50 p-8 rounded-2xl border border-orange-100">
        <h3 className="text-2xl font-bold text-orange-600 mb-4">OUR VISION</h3>
        <p className="text-gray-700">To become a global leader in the keto wellness space and inspire a world that chooses health with confidence.</p>
      </div>
    </section>
  );
}