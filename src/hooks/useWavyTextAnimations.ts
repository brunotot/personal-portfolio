import { useId, useMemo } from "react";

export type ColorsTheme = "rainbow" | string[];

export default function useWavyTextAnimations(
	text: string,
	theme?: ColorsTheme
) {
	const id = useId();
	const animationNames = useMemo(() => getAnimationNames(), []);

	function getAnimationNames(): string[] {
		function getColors(theme?: ColorsTheme): string[] {
			if (theme === undefined) {
				return ["inherit"];
			}

			if (Array.isArray(theme)) {
				return theme.length === 0 ? ["inherit"] : theme;
			}

			switch (theme) {
				case "rainbow":
					return [
						"red",
						"orange",
						"yellow",
						"green",
						"blue",
						"purple",
						"violet",
					];
				default:
					return ["inherit"];
			}
		}

		const colors = getColors(theme);
		const styleElem = document.createElement("style");
		const percentageBeforeFinish = (1 / text.length) * 100;
		const percentageAfterFinish = percentageBeforeFinish * 2;
		const animationNames: string[] = [];
		const animationNamePrefix = `wavy-text-${id.replaceAll(":", "")}-`;
		let css = "";

		colors.forEach((color) => {
			const animationName = `${animationNamePrefix}${color}`;
			animationNames.push(animationName);
			let keyframes = `@-webkit-keyframes ${animationName} {
				0%,
				100% {
					transform: translateY(0);
				}
				${percentageAfterFinish}% {
					transform: translateY(0);
				}
				${percentageBeforeFinish}% {
					color: ${color};
					transform: translateY(calc(-1 * var(--translate-letter-width)));
				}
			}`;
			css += keyframes;
		});

		styleElem.innerHTML = css;
		document.head.append(styleElem);

		return animationNames;
	}

	return animationNames;
}
