export type HrProps = {
	text?: string;
};

export default function Hr({ text }: HrProps) {
	return (
		<div className="inline-flex items-center justify-center w-full">
			<hr className="w-full h-px my-8 bg-gray-400 border-0" />
			<span className="absolute px-3 font-bold text-3xl text-slate-200 bg-slate-500 -translate-x-1/2 left-1/2">
				{text}
			</span>
		</div>
	);
}
