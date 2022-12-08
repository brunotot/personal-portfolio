const SLOGAN = import.meta.env.VITE_SLOGAN;

export default function Slogan() {
	return (
		<div className="italic font-bold text-xl md:text-[2rem] flex justify-center align-center p-8 bg-[var(--clr-blue-700)] text-white">
			{SLOGAN}
		</div>
	);
}
