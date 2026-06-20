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
  statusLabel: string;
  companies: Company[];
  role: string;
  period?: string;
  summary: string;
  stack: string[];
  highlights: string[];
  visibility: ProjectVisibility;
  /** Content shown on the diagonal corner ribbon (e.g. an icon or short text). */
  ribbon?: ReactNode;
};

const RGO: Company = { name: "RGO", url: "https://rgo.hr/" };
const NOTCH: Company = { name: "Notch", url: "https://wearenotch.com/" };
const SRCE: Company = { name: "SRCE", url: "https://www.srce.unizg.hr/" };

export const projects: Project[] = [
  {
    id: "fred",
    name: "FRED",
    url: "https://fred.rgo.hr/",
    statusLabel: "Cross-border wildfire platform",
    visibility: "public",
    period: "Jan. 2025 – present (maintenance)",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    role: "Frontend lead, fullstack",
    summary:
      "A cross-border web platform supporting wildfire prevention and response, bringing operational data and coordination tools together for teams working across regional boundaries.",
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    highlights: [
      "Implemented the frontend from scratch.",
      "Set up and evolved frontend structure, reusable UI patterns and feature flows.",
      "Worked on backend functionality from the beginning of the project.",
      "Focused heavily on frontend quality, maintainability and user-facing application behavior.",
    ],
  },
  {
    id: "lms",
    name: "LMS",
    statusLabel: "On-site lock-control system",
    visibility: "private",
    period: "Jun. 2025 – present",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    role: "Frontend lead",
    summary:
      "A specialized lock-management application used to support monitoring, logging and optimization of ship passage through waterways and lock systems.",
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    highlights: [
      "Implemented the frontend application end-to-end.",
      "Worked on a complex domain with operational workflows and data-heavy screens.",
      "Built the application UI with maintainability, consistency and long-term development in mind.",
    ],
  },
  {
    id: "croris",
    name: "CroRIS",
    url: "https://croris.hr/",
    statusLabel: "National research information system",
    visibility: "public",
    period: "Jan. 2021 – Jul. 2023",

    companies: [NOTCH, SRCE],
    role: "Backend developer",
    summary:
      "A large public information system for the Croatian science and research ecosystem, with modules for researchers, institutions, projects, publications and related scientific data.",
    stack: ["Java", "Spring Boot", "JSP", "JavaScript", "jQuery", "CSS"],
    highlights: [
      "Worked on backend features and maintenance in a large production system.",
      "Implemented and adjusted server-rendered UI flows using JSP, JavaScript, jQuery and CSS.",
      "Collaborated with SRCE and Notch colleagues across a long-running outsourced engagement.",
      "Gained strong experience working inside a complex public-sector domain with many modules and business rules.",
    ],
  },
  {
    id: "fgks",
    name: "FGKS",
    url: "https://fgks.rpis.eu/",
    statusLabel: "European river-port platform",
    visibility: "public",
    period: "Jul. 2023 – present (maintenance)",
    companies: [RGO],
    role: "Frontend developer",
    summary:
      "A production web platform for European river-port operations, bringing domain workflows, data management and reporting together in a single application.",
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    highlights: [
      "Worked mostly on React + TypeScript frontend implementation.",
      "Contributed to backend functionality in Java Spring Boot when needed.",
      "Helped continue and stabilize an existing project instead of only working from a blank slate.",
      "Worked on production-oriented features, integration points and UI flows.",
    ],
  },
  {
    id: "ceeris",
    name: "CEERIS",
    url: "https://ceeris.eu/",
    statusLabel: "Cross-border reporting platform",
    visibility: "public",
    period: "Jul. 2023 – present (maintenance)",
    companies: [RGO],
    role: "Frontend maintenance",
    summary:
      "A cross-border reporting platform supporting structured data collection and reporting across participating organizations.",
    stack: ["Angular", "TypeScript"],
    highlights: [
      "Maintained and adjusted an older Angular codebase.",
      "Worked in an existing legacy frontend environment.",
      "Handled production maintenance instead of only greenfield feature work.",
    ],
  },
];
