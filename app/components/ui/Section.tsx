type SectionProps = {
	title: string;
	children?: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="my-12" id="featured">
			<div className="mb-6 flex items-center justify-between gap-4">
				<h2 className="text-2xl font-bold tracking-tight text-stone-900">{title}</h2>
				<span className="h-px flex-1 bg-stone-200" />
			</div>
			{children ?? (
				<div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-6 py-10 text-sm text-stone-500">
					Add featured products here.
				</div>
			)}
		</section>
	);
}
