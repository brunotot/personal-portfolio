/**
 * Structural skills registry. Group display names and strength text live in
 * the i18n resources (`skills.groups.<id>`, `skills.strengths.<id>`); the tech
 * names themselves are not translated.
 */
export type SkillGroup = {
  id: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
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
    id: "backend",
    skills: ["Java", "Spring Boot", "REST APIs", "JSP", "Gradle"],
  },
  {
    id: "delivery",
    skills: ["Git", "GitHub", "Jenkins", "SonarQube", "CI/CD", "Jira"],
  },
  {
    id: "infra",
    skills: ["MongoDB", "SQL", "Heroku", "Linux"],
  },
];

export const strengthIds = ["frontendArch", "fullstack", "legacy"] as const;
