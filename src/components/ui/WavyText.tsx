import styles from "./../../assets/scss/WavyText.module.scss";
import useWavyTextAnimations, {
	ColorsTheme,
} from "../../hooks/useWavyTextAnimations";

export type WavyTextProps = {
	text: string;
	colors?: ColorsTheme;
	useShadow?: boolean;
};

export default function WavyText({
	text,
	useShadow = true,
	colors: theme,
}: WavyTextProps) {
	const words = text.split(" ");
	const textLength = text.length;
	const animationNames = useWavyTextAnimations(text, theme);

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
										animationName:
											animationNames[index % animationNames.length],
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
