/**
 * Structural experience/education registry. The order here drives rendering;
 * all user-facing text lives in the i18n resources under
 * `experience.items.<id>` and `experience.education.<id>`.
 */
export const experienceIds = ["rgo", "notch-srce"] as const;

export const educationIds = ["tvz", "tsrb"] as const;

/**
 * External company homepages, keyed by experience id. Used to turn the company
 * label on each experience card into a link.
 */
export const experienceUrls: Record<(typeof experienceIds)[number], string> = {
  rgo: "https://rgo.hr/",
  "notch-srce": "https://wearenotch.com/",
};
