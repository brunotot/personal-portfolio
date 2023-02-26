import useLocalStorage from "../../hooks/useLocalStorage";
import "./../../assets/scss/themepicker.scss";

export type Theme = "cyan" | "green" | "red" | "brown";
export type ThemeOptionProps = { theme: Theme };

const DEFAULT_THEME: Theme = "cyan";
const THEME_KEY = "theme";
const THEMES: Theme[] = ["cyan", "green", "red", "brown"];

function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ThemePicker() {
	const [currentTheme, setCurrentTheme] = useLocalStorage<string>(
		THEME_KEY,
		DEFAULT_THEME
	);

	const ThemeOption = ({ theme }: ThemeOptionProps) => (
		<>
			<label htmlFor={theme} className="visually-hidden">
				{`${capitalize(theme)} theme`}
			</label>
			<input
				onChange={() => setCurrentTheme(theme)}
				type="radio"
				name={THEME_KEY}
				id={theme}
				checked={theme === currentTheme}
			/>
		</>
	);

	return (
		<form className="color-picker bg-secondary-dark" action="">
			<fieldset>
				<legend className="visually-hidden">Pick a color scheme</legend>
				{THEMES.map((theme) => (
					<ThemeOption key={theme} theme={theme} />
				))}
			</fieldset>
		</form>
	);
}
