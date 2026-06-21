import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import cn from "../../utils/cn";
import DocsPreview from "./DocsPreview";

export type CaseStudyModalProps = {
  open: boolean;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function CaseStudyModal({
  open,
  onClose,
}: CaseStudyModalProps) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  const base = "projects.featured";
  const sections = `${base}.sections`;

  const overviewBody = t(`${sections}.overview.body`);
  const problemBody = t(`${sections}.problem.body`);
  const problemPoints = t(`${sections}.problem.points`, {
    returnObjects: true,
  }) as string[];
  const solutionBody = t(`${sections}.solution.body`);
  const solutionPoints = t(`${sections}.solution.points`, {
    returnObjects: true,
  }) as string[];
  const stackItems = t(`${sections}.stack.items`, {
    returnObjects: true,
  }) as string[];
  const responsibilityPoints = t(`${sections}.responsibilities.points`, {
    returnObjects: true,
  }) as string[];
  const impactPoints = t(`${sections}.impact.points`, {
    returnObjects: true,
  }) as string[];
  const stats = t(`${base}.stats`, { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  // Restore focus to the trigger and lock body scroll while open.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  // Escape to close, Tab to trap focus inside the dialog.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-secondary-darker/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-line bg-canvas shadow-2xl sm:rounded-3xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line bg-canvas-raised px-6 py-5 sm:px-8">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-base">
              <span
                aria-hidden
                className="h-px w-6 flex-none bg-primary-base/60"
              />
              {t(`${base}.label`)}
            </p>
            <h2
              id={titleId}
              className="mt-2 text-xl font-bold tracking-tight text-content sm:text-2xl"
            >
              {t(`${base}.title`)}
            </h2>
            <p
              id={descId}
              className="mt-1 text-sm leading-6 text-content-secondary"
            >
              {t(`${base}.subtitle`)}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t(`${base}.close`)}
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line bg-surface-subtle text-content-secondary transition hover:border-primary-base/60 hover:text-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-raised"
          >
            <span aria-hidden className="text-lg leading-none">
              ✕
            </span>
          </button>
        </header>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-surface-subtle p-3 text-center"
              >
                <p className="text-lg font-bold text-content sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.7rem] leading-4 text-content-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <DocsPreview />
          </div>

          <Section title={t(`${sections}.overview.title`)}>
            <p className="text-sm leading-7 text-content-secondary">
              {overviewBody}
            </p>
          </Section>

          <Section title={t(`${sections}.problem.title`)}>
            <p className="mb-3 text-sm leading-7 text-content-secondary">
              {problemBody}
            </p>
            <PointList points={problemPoints} />
          </Section>

          <Section title={t(`${sections}.solution.title`)}>
            <p className="mb-3 text-sm leading-7 text-content-secondary">
              {solutionBody}
            </p>
            <PointList points={solutionPoints} />
          </Section>

          <Section title={t(`${sections}.stack.title`)}>
            <PointList points={stackItems} />
          </Section>

          <Section title={t(`${sections}.responsibilities.title`)}>
            <PointList points={responsibilityPoints} />
          </Section>

          <Section title={t(`${sections}.impact.title`)}>
            <PointList points={impactPoints} />
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mt-7", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-content-muted">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm leading-6 text-content-secondary">
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-base"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
