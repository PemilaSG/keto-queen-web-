export default function Newsletter() {
  return (
    <section className="bg-orange-500 py-10 px-6 my-12 rounded-xl container mx-auto text-white flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-bold">STAY UPDATED</h3>
        <p>Subscribe to get exclusive offers, health tips and the latest product updates.</p>
      </div>
      <div className="flex w-full md:w-auto gap-2">
        <input type="email" placeholder="Enter your email address" className="p-3 rounded-lg flex-1 text-black" />
        <button className="bg-green-900 px-6 py-3 rounded-lg font-bold">SUBSCRIBE</button>
      </div>
    </section>
  );
}