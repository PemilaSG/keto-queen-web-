export default function PromoBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <div className="bg-emerald-800 text-white p-8 rounded-xl flex items-center">
        <div>
          <h3 className="text-2xl font-bold">HEALTHY TODAY<br/>STRONG TOMORROW</h3>
          <button className="mt-4 bg-white text-emerald-800 px-6 py-2 rounded-lg font-bold">SHOP NOW</button>
        </div>
      </div>
      <div className="bg-orange-500 text-white p-8 rounded-xl flex items-center">
        <div>
          <h3 className="text-2xl font-bold">KETO COMBO PACKS<br/>BEST VALUE!</h3>
          <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-lg font-bold">SAVE MORE</button>
        </div>
      </div>
    </div>
  );
}