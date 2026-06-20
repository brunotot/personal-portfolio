export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period?: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  id: string;
  title: string;
  school: string;
  period?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "rgo",
    title: "Software Developer",
    company: "RGO Communications",
    period: "Jul. 2023 – present",
    summary:
      "Working on active production web applications with a focus on React + TypeScript frontend development and Java Spring Boot backend work.",
    highlights: [
      "Built FRED frontend from scratch.",
      "Implemented LMS frontend end-to-end.",
      "Joined and contributed to FGKS mid-project.",
      "Maintained CEERIS legacy Angular project.",
      "Worked across frontend architecture, UI flows, API integration and backend features.",
    ],
  },
  {
    id: "notch-srce",
    title: "Software Developer",
    company: "Notch / former Agency04 — outsourced for SRCE",
    period: "Jan. 2021 – Jul. 2023",
    summary:
      "Worked for 3.5 years on CroRIS, a large public information system for the Croatian science and research ecosystem.",
    highlights: [
      "Worked with Java Spring Boot backend.",
      "Implemented server-rendered frontend features with JSP, JavaScript, jQuery and CSS.",
      "Collaborated in a long-running production system with complex domain requirements.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "tvz",
    title: "Bachelor's Degree, Computer Engineering",
    school: "Zagreb University of Applied Sciences",
    period: "2018 – 2021",
  },
  {
    id: "tsrb",
    title: "High School Diploma",
    school: "Technical School Ruđer Bošković",
    period: "2013 – 2017",
  },
];
