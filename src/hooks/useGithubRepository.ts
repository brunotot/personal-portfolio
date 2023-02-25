import { useEffect, useState } from "react";
import { githubService, IGithubRepository } from "../services/GithubService";

export default function useGithubRepository(repoName: string) {
	const [repositoryData, setRepositoryData] = useState<IGithubRepository>();

	useEffect(() => {
		const handleGithubDetails = async () => {
			const repositoryData = await githubService.getRepository(repoName);
			setRepositoryData(repositoryData);
		};
		handleGithubDetails();
	}, []);

	return repositoryData;
}
