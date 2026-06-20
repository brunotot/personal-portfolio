export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Strength = {
  title: string;
  description: string;
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "Material UI",
      "Angular",
      "jQuery",
    ],
  },
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "JSP", "Gradle"],
  },
  {
    name: "Delivery",
    skills: ["Git", "GitHub", "Jenkins", "SonarQube", "CI/CD", "Jira"],
  },
  {
    name: "Database / Infra",
    skills: ["MongoDB", "SQL", "Heroku", "Linux"],
  },
];

export const strengths: Strength[] = [
  {
    title: "Frontend architecture",
    description:
      "Reusable components, complex forms, stateful workflows and production UI consistency.",
  },
  {
    title: "Fullstack delivery",
    description:
      "React/TypeScript frontends integrated with Java Spring Boot APIs.",
  },
  {
    title: "Legacy and production systems",
    description:
      "Comfortable maintaining older systems while also building new apps from scratch.",
  },
];
