import { useRef, useEffect, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement>, margin = "0px") {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => setInView(entry.isIntersecting),
			{ root: null, rootMargin: margin, threshold: 0.1 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref, margin]);

	return inView;
}

const partners = [
	{ name: "Bajaj", logo: "/partners/bajaj.png" },
	{ name: "Hero", logo: "/partners/hero.png" },
	{ name: "Yamaha", logo: "/partners/yamaha.png" },
	{ name: "Bosch", logo: "/partners/bosch.png" },
	{ name: "Usha", logo: "/partners/usha.png" },
	{ name: "Amaron", logo: "/partners/amaron.png" },
	{ name: "Tata", logo: "/partners/tata.png" },
	{ name: "Castrol", logo: "/partners/castrol.png" },
	{ name: "Vidol", logo: "/partners/veedol.png" },
	// Add more as needed
];

const Partners = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const carouselRef = useRef<HTMLDivElement>(null);
	const inView = useInView(sectionRef);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel || !inView) return;
		let scrollAmount = carousel.scrollLeft;
		let req: number;

		const scroll = () => {
			scrollAmount += 12; // High speed
			if (scrollAmount >= carousel.scrollWidth / 2) {
				scrollAmount = 0;
			}
			carousel.scrollLeft = scrollAmount;
			req = requestAnimationFrame(scroll);
		};
		req = requestAnimationFrame(scroll);

		return () => cancelAnimationFrame(req);
	}, [inView]);

	// Duplicate logos for infinite effect
	const logos = [...partners, ...partners];

	return (
		<section
			ref={sectionRef}
			className="py-20 bg-gradient-to-b from-black via-black to-black"
			id="partners"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-10">
					<h2 className="text-4xl md:text-5xl font-black mb-4">
						Our{" "}
						<span className="text-gradient-primary">Trusted Partners</span>
					</h2>
					<p className="text-muted-foreground text-lg">
						We proudly collaborate with industry-leading brands.
					</p>
				</div>
				<div className="relative">
					<div
						ref={carouselRef}
						className="flex gap-10 md:gap-16 items-center overflow-x-scroll no-scrollbar carousel-3d"
						style={{
							scrollBehavior: "smooth",
							WebkitOverflowScrolling: "touch",
							paddingBottom: "2rem",
						}}
					>
						{logos.map((partner, idx) => (
							<div
								key={idx}
								className="flex-shrink-0 flex flex-col items-center justify-center"
								style={{ perspective: 800 }}
							>
								<div
									className="transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_24px_0_rgba(0,180,255,0.25)] rounded-xl bg-white/80 p-4"
									style={{
										boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
										borderRadius: "1rem",
									}}
								>
									<img
										src={partner.logo}
										alt={partner.name}
										className="h-14 md:h-20 w-auto object-contain mx-auto"
										style={{
											filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
											transition: "transform 0.3s, box-shadow 0.3s",
										}}
									/>
								</div>
								<span className="mt-3 text-xs md:text-sm text-muted-foreground font-medium">
									{partner.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Hide scrollbar */}
			<style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .carousel-3d > div { transform: translateZ(0); }
      `}</style>
		</section>
	);
};

export default Partners;