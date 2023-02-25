export type SectionProps = {
	id: string;
	title: string;
	children: React.ReactNode;
	containerClassName?: string;
};

export default function Section({
	id,
	children,
	title,
	containerClassName,
}: SectionProps) {
	return (
		<div id={id} className={containerClassName}>
			<div className="container mx-auto px-8 py-16 text-tertiary-light">
				<h1 className="uppercase font-bold text-[2rem] mb-4">{title}</h1>
				<div className="flex justify-center gap-8 flex-wrap">{children}</div>
			</div>
		</div>
	);
}
