export type ContactLink = {
  label: string;
  url: string;
};

export type Personal = {
  name: string;
  title: string;
  location: string;
  email: string;
  /** Placeholder — update with your real number. */
  phone: string;
  linkedin: ContactLink;
  github: ContactLink;
  summary: string;
  languages: string[];
};

export const personal: Personal = {
  name: "Bruno Tot",
  title: "Fullstack Developer",
  location: "Zagreb, Croatia",
  email: "brunotot10000@gmail.com",
  phone: "+385 00 000 0000",
  linkedin: {
    label: "linkedin.com/in/btot",
    url: "https://www.linkedin.com/in/btot/",
  },
  github: {
    label: "github.com/brunotot",
    url: "https://github.com/brunotot",
  },
  summary:
    "Fullstack developer focused on React, TypeScript and Java Spring Boot, with 4+ years of professional experience building production business applications, maintainable frontend systems and backend integrations.",
  languages: ["Croatian — native", "English — fluent"],
};
