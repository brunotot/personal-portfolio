import ProjectFragment from "./fragments/ProjectFragment";
import Gallery from "./ui/Gallery";

export default function Projects() {
	return (
		<Gallery
			id="projects"
			gapX={16}
			gapY={16}
			title="Projects"
			titleDirection="left"
			useChildWrapper={false}
		>
			<ProjectFragment
				shadowRgb="206, 114, 254"
				additionalBadges={["ReactJS"]}
				repoName="react-connect-dots"
				title="React Connect Dots"
			/>
			<ProjectFragment
				shadowRgb="82, 88, 202"
				additionalBadges={["Material UI", "ReactJS"]}
				repoName="react-sorting-algorithm-visualizator"
				title="React Sorting Algorithm Visualizator"
			/>
			<ProjectFragment
				shadowRgb="238, 188, 198"
				additionalBadges={["Bootstrap 5"]}
				repoName="username-avatar-generator"
				title="VanillaJS Username Avatar Generator"
			/>
			<ProjectFragment
				shadowRgb="125, 223, 217"
				repoName="react-rock-paper-scissors-randomizer"
				title="React Rock|Paper|Scissors Randomizer"
			/>
		</Gallery>
	);
}
