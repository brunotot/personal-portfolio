export type HrProps = {
	text?: string;
};

export default function HorizontalLine({ text }: HrProps) {
	return (
		<div className="inline-flex items-center justify-center w-full">
			<hr className="w-full h-px my-8 bg-primary-base border-0" />
			{text && (
				<span className="absolute px-3 font-bold text-3xl text-primary-light bg-secondary-darker -translate-x-1/2 left-1/2">
					{text}
				</span>
			)}
		</div>
	);
}
