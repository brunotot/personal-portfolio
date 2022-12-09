import { useId, useMemo } from "react";
import styles from "./../../assets/scss/WavyText.module.scss";

export type ColorsTheme = "rainbow" | string[];

export type ColorsType = string[];

export type WavyTextProps = {
	text: string;
	colors?: ColorsTheme;
	useShadow?: boolean;
};

function getColors(theme?: ColorsTheme): ColorsType {
	if (theme === undefined) {
		return ["inherit"];
	}

	if (Array.isArray(theme)) {
		return theme.length === 0 ? ["inherit"] : theme;
	}

	switch (theme) {
		case "rainbow":
			return ["red", "orange", "yellow", "green", "blue", "purple", "violet"];
		default:
			return ["inherit"];
	}
}

export default function WavyText(props: WavyTextProps) {
	const useShadow = props.useShadow ?? true;
	const colors = getColors(props.colors);
	const id = useId();
	const { text } = props;
	const words = text.split(" ");
	const textLength = text.split("").length;
	const animationNames = useMemo(() => getAnimationNames(), []);
	const animationsLength = animationNames.length;

	function getAnimationNames(): string[] {
		const styleSheet = document.styleSheets[0];
		const percentageBeforeFinish = (1 / textLength) * 100;
		const percentageAfterFinish = percentageBeforeFinish * 2;
		const animationNames: string[] = [];
		const animationNamePrefix = `wavy-text-${id.replaceAll(":", "")}-`;

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

			styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
		});

		return animationNames;
	}

	let index = 0;
	return (
		<div className={styles["wavy-text"]} data-use-shadow={useShadow}>
			&nbsp;
			{words.map((word, wordIndex) => (
				<span className="flex flex-nowrap whitespace-nowrap" key={wordIndex}>
					{word.split("").map((letter, letterIndex) => {
						index++;
						return (
							<span
								key={letterIndex}
								style={
									{
										"--i": `${index}`,
										animationName: animationNames[index % animationsLength],
										animationDuration: `calc(var(--translate-letter-speed) * ${textLength})`,
									} as React.CSSProperties
								}
							>
								{letter === " " ? <>&nbsp;</> : letter}
							</span>
						);
					})}
				</span>
			))}
			&nbsp;
		</div>
	);
}
