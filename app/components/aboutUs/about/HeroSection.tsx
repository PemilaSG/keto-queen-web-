export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
      {/* Background layer: image + color overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-50/60" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/biglogo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      <div className="relative z-10 flex-1">
        <h1 className="text-5xl font-bold text-green-900 mb-6">ABOUT US</h1>
        <p className="text-xl font-semibold mb-4 text-black">Fueling Better Lives with the Power of Keto.</p>
        <p className="leading-relaxed">
          At Keto Queen, we believe that healthy living should be simple, enjoyable, and accessible to everyone...
        </p>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <img src="/biglogo.jpg" alt="Keto Queen Logo" className="w-64 h-auto" />
      </div>
    </section>
  );
}