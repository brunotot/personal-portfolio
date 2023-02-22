export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex justify-center items-center p-6 bg-slate-500 text-slate-200 font-jost">
			© {currentYear} by Bruno Tot
		</footer>
	);
}
