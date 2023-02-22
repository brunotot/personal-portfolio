import WavyText from "./../ui/WavyText";

export default function Slogan() {
	return (
		<div className="italic font-bold text-xl md:text-[2rem] flex flex-wrap justify-center align-center p-8 bg-slate-700 text-slate-200 text-center">
			Eat, sleep, build{" "}
			<WavyText colors="rainbow" text="incredible" useShadow={false} /> web
			apps, repeat.
		</div>
	);
}
