import { useEffect, useState } from "react";

const HEADER_CLIENT_Y = 64;

function getSection(anchor: HTMLAnchorElement) {
	return anchor.hash.slice(1);
}

export default function useNavActive(
	navLinks: React.MutableRefObject<HTMLAnchorElement[]>
) {
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const anchors = navLinks.current;
			let currentValue = "";

			for (const anchor of anchors) {
				if (!anchor) continue;

				const lastAnchor = anchors[anchors.length - 1];
				const secondToLastAnchor = anchors[anchors.length - 2];
				const lastAnchorId = getSection(lastAnchor);
				const secondToLastAnchorId = getSection(secondToLastAnchor);
				const sectionId = getSection(anchor);
				const section = document.getElementById(sectionId);
				if (!section) continue;

				const { top, bottom } = section.getBoundingClientRect();
				if (top <= HEADER_CLIENT_Y && bottom > 0) {
					currentValue = sectionId;
					if (
						currentValue === secondToLastAnchorId &&
						bottom <= windowHeight / 2
					) {
						currentValue = lastAnchorId;
					}
				}
			}

			setActiveLink(currentValue);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return activeLink;
}
