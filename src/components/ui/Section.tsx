import cn from "../../utils/cn";

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-20 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl" data-aos="fade-up">
            {eyebrow && (
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-base">
                <span
                  aria-hidden
                  className="h-px w-8 flex-none bg-primary-base/60"
                />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-slate-300">
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
