export type ContactLink = {
  label: string;
  url: string;
};

/**
 * Structural contact data. Translatable text (title, location, summary,
 * languages) lives in the i18n resources under `resume.personal`.
 */
export type Personal = {
  name: string;
  email: string;
  /** Placeholder — update with your real number. */
  phone: string;
  linkedin: ContactLink;
  github: ContactLink;
};

export const personal: Personal = {
  name: "Bruno Tot",
  email: "brunotot10000@gmail.com",
  phone: "+385 95 201 1696",
  linkedin: {
    label: "linkedin.com/in/btot",
    url: "https://www.linkedin.com/in/btot/",
  },
  github: {
    label: "github.com/brunotot",
    url: "https://github.com/brunotot",
  },
};
