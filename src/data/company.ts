/**
 * Central place for all company branding & contact details.
 *
 * 👉 To rebrand the /company landing page, change the values below.
 *    `COMPANY.name` is injected into every translated string via i18n
 *    (the `{{company}}` placeholder), so changing it here updates the
 *    whole page copy in both languages.
 *
 * NOTE: `name`, `email`, `phone`, `location` and the social links are
 * placeholders — swap them for your real details before going public.
 */
export const COMPANY = {
  /** Brand name shown in the logo, page title and throughout the copy. */
  name: "Codara",
  /** Primary contact email (used for the "Email us" CTA and mailto link). */
  email: "hello@codara.dev",
  /** Optional phone number. Leave empty ("") to hide it. */
  phone: "",
  /** Where the team is based. */
  location: "Zagreb / Varaždin, Croatia",
  /** Social / professional links. Leave empty ("") to hide a link. */
  links: {
    linkedin: "https://www.linkedin.com/in/btot/",
    github: "https://github.com/brunotot",
  },
} as const;

export default COMPANY;
