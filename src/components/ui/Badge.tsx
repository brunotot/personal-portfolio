export type BadgeProps = {
	text: string;
};

export default function Badge(props: BadgeProps) {
	const text = props.text;

	return (
		<span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full">
			{text}
		</span>
	);
}
