import {
	faArrowLeft,
	faArrowRight,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type AddressBarProps = {
	url: string;
};

export default function AddressBar(props: AddressBarProps) {
	const { url } = props;

	return (
		<div className="outline outline-2 outline-secondary-base flex absolute w-full items-center rounded-tl-lg rounded-tr-lg bg-secondary-light p-3 gap-2">
			<div className="w-4 h-4 rounded-full bg-red-400"></div>
			<div className="w-4 h-4 rounded-full bg-yellow-400"></div>
			<div className="w-4 h-4 rounded-full bg-green-400"></div>
			<FontAwesomeIcon className="ml-2" icon={faArrowLeft} color="#beb3b3" />
			<FontAwesomeIcon className="mr-2" icon={faArrowRight} color="#beb3b3" />
			<div className="min-w-0 flex flex-1 rounded items-center gap-2 px-2 py-1 shadow bg-white">
				<FontAwesomeIcon icon={faGlobe} color="lightgrey" />
				<a
					href={url}
					target="_blank"
					className="truncate no-underline hover:underline text-blue-500"
				>
					{url}
				</a>
			</div>
		</div>
	);
}
