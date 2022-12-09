import WavyText from "./ui/WavyText";

export default function Slogan() {
	return (
		<div className="italic font-bold text-xl md:text-[2rem] flex flex-wrap justify-center align-center p-8 bg-[var(--clr-blue-700)] text-center text-white">
			Eat, sleep, build <WavyText colors="rainbow" text="incredible" /> web
			apps, repeat.
		</div>
	);
}
