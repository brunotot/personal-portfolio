import { useTranslation } from "react-i18next";

/**
 * A decorative, CSS-drawn mock of the documentation UI. It illustrates the
 * shape of the product (nav + component page + props table) without claiming to
 * be a real screenshot. Purely presentational, so it is hidden from assistive
 * technology.
 */
export default function DocsPreview() {
  const { t } = useTranslation();
  const base = "projects.featured.preview";
  const navItems = t(`${base}.navItems`, { returnObjects: true }) as string[];

  return (
    <figure className="m-0">
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-surface-subtle px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-content/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-content/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-content/20" />
          <span className="ml-3 h-4 flex-1 rounded-full bg-content/10" />
        </div>

        <div className="grid grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr]">
          {/* Sidebar nav */}
          <nav className="border-r border-line bg-surface-subtle p-3">
            <p className="px-2 text-[0.6rem] font-semibold uppercase tracking-wider text-content-faint">
              {t(`${base}.nav`)}
            </p>
            <ul className="mt-2 space-y-1">
              {navItems.map((item, index) => (
                <li
                  key={item}
                  className={
                    index === 0
                      ? "rounded-md bg-primary-base/15 px-2 py-1 text-xs font-medium text-primary-base"
                      : "rounded-md px-2 py-1 text-xs text-content-muted"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Component page */}
          <div className="p-4">
            <h4 className="text-sm font-bold text-content">
              {t(`${base}.page`)}
            </h4>
            <div className="mt-3 space-y-1">
              <span className="block h-2 w-12 rounded-full bg-content/15" />
              <div className="flex h-8 items-center rounded-md border border-line-strong bg-surface-subtle px-2.5">
                <span className="h-2 w-2/3 rounded-full bg-content/10" />
              </div>
            </div>

            <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-wider text-content-faint">
              {t(`${base}.usage`)}
            </p>
            <div className="mt-1.5 space-y-1.5">
              <span className="block h-2 w-full rounded-full bg-content/10" />
              <span className="block h-2 w-4/5 rounded-full bg-content/10" />
            </div>

            <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-wider text-content-faint">
              {t(`${base}.props`)}
            </p>
            <div className="mt-1.5 space-y-1.5">
              <div className="flex gap-2">
                <span className="h-2 w-16 rounded-full bg-primary-base/40" />
                <span className="h-2 flex-1 rounded-full bg-content/10" />
              </div>
              <div className="flex gap-2">
                <span className="h-2 w-12 rounded-full bg-primary-base/40" />
                <span className="h-2 flex-1 rounded-full bg-content/10" />
              </div>
              <div className="flex gap-2">
                <span className="h-2 w-20 rounded-full bg-primary-base/40" />
                <span className="h-2 flex-1 rounded-full bg-content/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-content-faint">
        {t(`${base}.label`)}
      </figcaption>
    </figure>
  );
}
