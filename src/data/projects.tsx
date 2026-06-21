import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { ReactNode } from "react";

export type ProjectVisibility = "public" | "private" | "internal";

export type Company = {
  name: string;
  url?: string;
};

export type Project = {
  id: string;
  name: string;
  url?: string;
  companies: Company[];
  stack: string[];
  visibility: ProjectVisibility;
  /** Content shown on the diagonal corner ribbon (e.g. an icon or short text). */
  ribbon?: ReactNode;
};

/**
 * A flagship case study presented above the regular project grid. Carries
 * richer structured content than a standard {@link Project} card; the textual
 * content (sections, impact, etc.) lives in the i18n `projects.featured`
 * namespace and is keyed off this {@link FeaturedProject.id}.
 */
export type FeaturedProject = {
  id: string;
  url?: string;
  companies: Company[];
  /** Short chips shown in the flagship header. */
  stack: string[];
  visibility: ProjectVisibility;
};

const RGO: Company = { name: "RGO", url: "https://rgo.hr/" };
const NOTCH: Company = { name: "Notch", url: "https://wearenotch.com/" };
const SRCE: Company = { name: "SRCE", url: "https://www.srce.unizg.hr/" };

/**
 * Flagship project surfaced as a hero case study above the standard grid.
 * Internal component-library documentation platform.
 */
export const featuredProject: FeaturedProject = {
  id: "ui-library",
  visibility: "internal",
  companies: [RGO],
  stack: [
    "TypeScript",
    "React",
    "Material-UI",
    "Storybook",
    "react-hook-form",
    "Zod",
    "i18next",
  ],
};

export const projects: Project[] = [
  {
    id: "fred",
    name: "FRED",
    url: "https://fred.rgo.hr/",
    visibility: "public",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    stack: ["TypeScript", "React", "Java", "Spring Boot"],
  },
  {
    id: "lms",
    name: "LMS",
    visibility: "private",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    stack: ["TypeScript", "React", "Java", "Spring Boot"],
  },
  {
    id: "croris",
    name: "CroRIS",
    url: "https://croris.hr/",
    visibility: "public",
    companies: [NOTCH, SRCE],
    stack: ["Java", "Spring Boot", "JSP", "JavaScript", "jQuery", "CSS"],
  },
  {
    id: "fgks",
    name: "FGKS",
    visibility: "private",
    companies: [RGO],
    stack: ["TypeScript", "React", "Java", "Spring Boot"],
  },
  {
    id: "ceeris",
    name: "CEERIS",
    url: "https://ceeris.eu/",
    visibility: "public",
    companies: [RGO],
    stack: ["TypeScript", "Angular"],
  },
];
