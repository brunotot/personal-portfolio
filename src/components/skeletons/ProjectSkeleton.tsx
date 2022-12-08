import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProjectSkeleton() {
	return (
		<div>
			<Skeleton height="2.75rem" />
			<p className="mt-4 mb-8">
				<Skeleton height="1.5rem" count={2} />
			</p>
			<p className="mb-6">
				<Skeleton />
			</p>
			<Skeleton height="39rem" />
		</div>
	);
}
