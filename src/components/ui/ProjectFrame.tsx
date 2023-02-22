import { useState } from "react";

export type ProjectFrameProps = {
	forceInitialLoad?: boolean;
	title: string;
	src: string;
};

export default function ProjectFrame(props: ProjectFrameProps) {
	const { src, title, forceInitialLoad } = props;
	const [isShowing, setIsShowing] = useState(!!forceInitialLoad);

	return isShowing ? (
		<iframe
			className="w-full h-full rounded-tl-lg rounded-tr-lg pt-[3.625rem]"
			src={src}
			title={title}
		></iframe>
	) : (
		<div className="flex justify-center items-center w-full h-full">
			<button
				onClick={() => setIsShowing(true)}
				className="rounded bg-green-400 hover:bg-green-600 p-4"
			>
				Load Demo
			</button>
		</div>
	);
}
