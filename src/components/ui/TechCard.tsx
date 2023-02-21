export type TechCardProps = {
	logo: string;
	title: string;
	description: string;
	href: string;
};

export default function TechCard(props: TechCardProps) {
	const { logo, title, description, href } = props;
	return (
		<div className="transition-transform hover:scale-[1.025] duration-300 aspect-[1.25/1] px-8 py-6 w-80 rounded bg-gray-700 font-jost border border-gray-400 text-center flex flex-col">
			<div className="w-full flex justify-center mb-3">
				<img src={logo} className="object-contain aspect-square w-[64px]" />
			</div>
			<a href={href} className="text-gray-300 text-xl mb-1" target="_blank">
				{title}
			</a>
			<p className="text-gray-400 flex-1">{description}</p>
		</div>
	);
}
