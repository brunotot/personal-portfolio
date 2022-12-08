import { useEffect, useState } from "react";
import { githubService, IGithubRepository } from "../../services/GithubService";
import ProjectFrame from "../ProjectFrame";
import ProjectSkeleton from "../skeletons/ProjectSkeleton";
import AddressBar from "../ui/AddressBar";
import BadgeList from "../ui/BadgeList";
import styles from "./../../assets/scss/ProjectFragment.module.scss";

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
	const [repositoryData, setRepositoryData] = useState<IGithubRepository>();

	useEffect(() => {
		const handleGithubDetails = async () => {
			const repositoryData = await githubService.getRepository(repoName);
			setRepositoryData(repositoryData);
		};
		handleGithubDetails();
	}, []);

	if (!repositoryData) {
		return <ProjectSkeleton />;
	}

	return (
		<div
			style={{ "--clr-shadow": shadowRgb } as React.CSSProperties}
			className={`flex basis-full md:basis-[calc(50%-2rem)] xl:basis-[calc(33%-4rem)] flex-col p-4 rounded border ${styles["project"]}`}
		>
			<p className="font-bold text-3xl mb-2">{title}</p>
			<p className="text-md text-slate-500 mt-auto mb-6">
				{repositoryData.description}
			</p>
			<BadgeList
				className="mt-auto mb-4"
				data={[...repositoryData.languages, ...additionalBadges]}
			/>

			{repositoryData.homepage && (
				<div className="relative h-[45vh] min-h-[40rem] rounded-tl-lg rounded-tr-lg outline outline-2 outline-slate-400">
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
