export default function FeatureGrid() {
	return (
		<section className="max-w-7xl mx-auto py-12 px-4">
			<h2 className="text-2xl font-bold mb-6 text-black">Our Features</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div
							className="p-6 rounded text-black font-bold"
							style={{
								backgroundImage: `linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,197,94,0.18)), linear-gradient(90deg, rgba(16,185,129,0.12), rgba(16,185,129,0.12)), linear-gradient(180deg, rgba(5,150,105,0.08), rgba(5,150,105,0.08))`,
								backgroundBlendMode: 'normal',
							}}
						>
							High Quality Keto Products
						</div>
						<div
							className="p-6 rounded text-black font-bold"
							style={{
								backgroundImage: `linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,197,94,0.18)), linear-gradient(90deg, rgba(16,185,129,0.12), rgba(16,185,129,0.12)), linear-gradient(180deg, rgba(5,150,105,0.08), rgba(5,150,105,0.08))`,
								backgroundBlendMode: 'normal',
							}}
						>
							Expert-backed Nutrition Guides
						</div>
						<div
							className="p-6 rounded text-black font-bold"
							style={{
								backgroundImage: `linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,197,94,0.18)), linear-gradient(90deg, rgba(16,185,129,0.12), rgba(16,185,129,0.12)), linear-gradient(180deg, rgba(5,150,105,0.08), rgba(5,150,105,0.08))`,
								backgroundBlendMode: 'normal',
							}}
						>
							Fast Shipping & Support
						</div>
			</div>
		</section>
	);
}
