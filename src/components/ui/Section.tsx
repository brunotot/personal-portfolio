import cn from "../../utils/cn";

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Use the larger, agency-style spacing and typography (bigger padding,
   * larger headings, wider header column). Used by the company landing page.
   */
  spacious?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  spacious = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacious
          ? "px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
          : "px-6 py-12 sm:px-8 sm:py-20 lg:px-12",
        className,
      )}
    >
      <div className={cn("mx-auto", spacious ? "max-w-[88rem]" : "max-w-7xl")}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              spacious ? "mb-14 max-w-4xl lg:mb-20" : "mb-10 max-w-3xl",
            )}
            data-aos="fade-up"
          >
            {eyebrow && (
              <p
                className={cn(
                  "font-semibold uppercase tracking-[0.2em] text-primary-base",
                  spacious ? "text-sm sm:text-base" : "text-sm",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "font-bold tracking-tight text-content",
                  spacious
                    ? "mt-5 text-4xl sm:text-5xl lg:text-6xl"
                    : "mt-3 text-3xl sm:text-4xl",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "leading-relaxed text-content-secondary",
                  spacious
                    ? "mt-6 text-lg sm:text-xl"
                    : "mt-4 text-base leading-7",
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
