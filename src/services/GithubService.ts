const GITHUB_PROFILE_BASE_URL = "https://github.com/brunotot";
const API_BASE_URI = "https://api.github.com/repos/brunotot";
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

const GITHUB_REPOSITORIES_LOCAL: {
	[key: string]: IGithubRepository;
} = {
	"react-connect-dots": {
		description: "Connect Dots game made in React",
		homepage: "https://brunotot.github.io/react-connect-dots/?fullscreen=true",
		languages: ["TypeScript", "Python", "SCSS", "CSS", "JavaScript", "HTML"],
		name: "react-connect-dots",
		url: "https://github.com/brunotot/react-connect-dots",
	},
	"react-sorting-algorithm-visualizator": {
		description:
			"React app to visualize how different sorting algorithms work under the hood!",
		homepage:
			"https://brunotot.github.io/react-sorting-algorithm-visualizator/?fullscreen=true",
		languages: ["TypeScript", "SCSS", "HTML"],
		name: "react-sorting-algorithm-visualizator",
		url: "https://github.com/brunotot/react-sorting-algorithm-visualizator",
	},
	"username-avatar-generator": {
		description:
			"Generates an HTML avatar element associated with a given string (ie. username). Uses VanillaJS only!",
		homepage:
			"https://brunotot.github.io/username-avatar-generator/?fullscreen=true",
		languages: ["JavaScript", "HTML", "CSS"],
		name: "username-avatar-generator",
		url: "https://github.com/brunotot/username-avatar-generator",
	},
	"react-rock-paper-scissors-randomizer": {
		description:
			"React application which randomizes a board with bunch of Rock, Papers and Scissors and displays their fight.",
		homepage:
			"https://brunotot.github.io/react-rock-paper-scissors-randomizer/?fullscreen=true",
		languages: ["TypeScript", "SCSS", "HTML"],
		name: "react-rock-paper-scissors-randomizer",
		url: "https://github.com/brunotot/react-rock-paper-scissors-randomizer",
	},
};

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
		if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
			return new Promise((resolve) =>
				resolve(GITHUB_REPOSITORIES_LOCAL[repositoryName])
			);
		}

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
