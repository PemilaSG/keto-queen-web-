'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
	const slides = [
		{
			kicker: 'Keto essentials',
			title: 'Clean fuel for everyday routines.',
			description:
				'Discover snacks, drinks, and pantry staples built for low-carb living without sacrificing taste.',
			button: 'Shop Categories',
			link: '#categories',
		},
		{
			kicker: 'Fresh arrivals',
			title: 'Products that keep your day light and satisfying.',
			description:
				'Explore carefully selected keto-friendly picks designed for simple meals, quick snacks, and daily balance.',
			button: 'Browse Products',
			link: '#featured',
		},
		{
			kicker: 'Best value',
			title: 'Quality ingredients with a premium feel.',
			description:
				'From pantry staples to ready-to-eat bites, every item is chosen to support a better low-carb lifestyle.',
			button: 'See Offers',
			link: '#categories',
		},
	];

	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
		}, 4000);

		return () => window.clearInterval(interval);
	}, [slides.length]);

	return (
		<section className="my-8 overflow-hidden rounded-3xl bg-emerald-200 text-emerald-950 shadow-lg">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${activeSlide * 100}%)` }}
			>
				{slides.map((slide) => (
					<div key={slide.title} className="w-full flex-shrink-0 px-8 py-12 md:px-12">
						<div className="max-w-2xl space-y-4">
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
								{slide.kicker}
							</p>
							<h1 className="text-4xl font-bold leading-tight text-emerald-950 md:text-6xl">
								{slide.title}
							</h1>
							<p className="max-w-xl text-base text-emerald-900/80 md:text-lg">
								{slide.description}
							</p>
							<div className="flex flex-wrap gap-3 pt-2">
								<a className="rounded-full bg-emerald-900 px-6 py-3 font-semibold text-white" href={slide.link}>
									{slide.button}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center gap-2 pb-4">
				{slides.map((slide, slideIndex) => (
					<button
						key={slide.title}
						type="button"
						aria-label={`Show hero banner ${slideIndex + 1}`}
						onClick={() => setActiveSlide(slideIndex)}
						className={`h-2.5 rounded-full transition-all ${
							activeSlide === slideIndex ? 'w-8 bg-emerald-700' : 'w-2.5 bg-emerald-300'
						}`}
					/>
				))}
			</div>
		</section>
	);
}
