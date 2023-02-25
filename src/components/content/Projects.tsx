import ProjectFragment from "./../ui/ProjectFragment";
import Section from "./../ui/Section";

export default function Projects() {
	return (
		<Section
			id="projects"
			title="Projects"
			containerClassName="bg-secondary-dark text-secondary-light"
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
		</Section>
	);
}
