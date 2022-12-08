export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex justify-center items-center p-6">
			© {currentYear} by Bruno Tot
		</footer>
	);
}
