import { useState, useEffect } from "react";

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const checkScrollTop = () => {
		if (!isVisible && window.pageYOffset > 300) {
			setIsVisible(true);
		} else if (isVisible && window.pageYOffset <= 300) {
			setIsVisible(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<div
			className='scroll-to-top'
			style={{ display: isVisible ? "flex" : "none" }}
		>
			<span className='scrollTop' onClick={scrollTop}>
				Back To Top <ion-icon name='arrow-up-outline'></ion-icon>
			</span>
		</div>
	);
};
