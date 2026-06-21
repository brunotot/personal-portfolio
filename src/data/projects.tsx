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

const RGO: Company = { name: "RGO", url: "https://rgo.hr/" };
const NOTCH: Company = { name: "Notch", url: "https://wearenotch.com/" };
const SRCE: Company = { name: "SRCE", url: "https://www.srce.unizg.hr/" };

export const projects: Project[] = [
  {
    id: "fred",
    name: "FRED",
    url: "https://fred.rgo.hr/",
    visibility: "public",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
  },
  {
    id: "lms",
    name: "LMS",
    visibility: "private",
    ribbon: <WorkspacePremiumIcon />,
    companies: [RGO],
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
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
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
  },
  {
    id: "ceeris",
    name: "CEERIS",
    url: "https://ceeris.eu/",
    visibility: "public",
    companies: [RGO],
    stack: ["Angular", "TypeScript"],
  },
];
