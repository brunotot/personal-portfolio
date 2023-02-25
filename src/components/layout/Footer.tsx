export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex justify-center items-center p-6 bg-secondary-darker text-primary-light font-jost">
			© {currentYear} by Bruno Tot
		</footer>
	);
}
