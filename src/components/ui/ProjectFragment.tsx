import ProjectFrame from "../ui/ProjectFrame";
import ProjectSkeleton from "../skeletons/ProjectSkeleton";
import AddressBar from "../ui/AddressBar";
import useGithubRepository from "../../hooks/useGithubRepository";

export type ProjectProps = {
	shadowRgb?: string;
	additionalBadges?: string[];
	repoName: string;
	title: string;
};

export default function ProjectFragment(props: ProjectProps) {
	const {
		repoName,
		title,
		additionalBadges = [],
		shadowRgb = "192, 192, 192",
	} = props;
	const repositoryData = useGithubRepository(repoName);

	if (!repositoryData) {
		return <ProjectSkeleton />;
	}

	return (
		<div
			data-aos="zoom-in"
			style={{ "--clr-shadow": shadowRgb } as React.CSSProperties}
			className="w-full max-w-md flex flex-col p-4 rounded border project bg-tertiary-darker"
		>
			<p className="font-bold text-3xl mb-2 break-all">{title}</p>
			<p className="text-md text-tertiary-light mt-auto mb-6">
				{repositoryData.description}
			</p>
			{/*<BadgeList
				className="mt-auto mb-4"
				data={[...repositoryData.languages, ...additionalBadges]}
			/>*/}

			{repositoryData.homepage && (
				<div className="relative h-[45vh] min-h-[40rem] rounded-tl-lg rounded-tr-lg outline outline-2 outline-secondary-base">
					<AddressBar url={repositoryData.url} />
					<ProjectFrame
						forceInitialLoad={true}
						title={title}
						src={repositoryData.homepage}
					/>
				</div>
			)}
		</div>
	);
}
