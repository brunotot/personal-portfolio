const GITHUB_PROFILE_BASE_URL = import.meta.env.VITE_GITHUB_PROFILE_BASE_URL;
const API_BASE_URI = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_GH_TOKEN;
const DEFAULT_HEADERS: HeadersInit = {
	Authorization: `Bearer ${TOKEN}`,
};

export type IGithubRepository = {
	homepage: string;
	description: string;
	name: string;
	languages: IGithubLanguages;
	url: string;
};

export type IGithubLanguages = string[];

class GithubService {
	private options: RequestInit;

	constructor(headers: HeadersInit = {}) {
		const _headers = {
			...headers,
			...DEFAULT_HEADERS,
		};
		this.options = {
			headers: _headers,
		};
	}

	async getRepository(repositoryName: string): Promise<IGithubRepository> {
		const repositoryData = await this.get<IGithubRepository>(
			`/${repositoryName}`
		);
		const languagesData = await this.get<object>(
			`/${repositoryName}/languages`
		);
		const languages: IGithubLanguages = Object.keys(languagesData);
		const descriptionSanitized = repositoryData.description
			.replaceAll(/:([^:]*):/g, "")
			.trim();

		return {
			description: descriptionSanitized,
			homepage: `${repositoryData.homepage}?fullscreen=true`,
			languages: languages,
			name: repositoryData.name,
			url: `${GITHUB_PROFILE_BASE_URL}/${repositoryData.name}`,
		};
	}

	private async get<T>(uri: string): Promise<Awaited<T>> {
		return await (await fetch(`${API_BASE_URI}${uri}`, this.options)).json();
	}
}

const githubService = new GithubService();

export { githubService };
