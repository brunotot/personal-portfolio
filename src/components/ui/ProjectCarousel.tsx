import { useCallback, useEffect, useRef, useState } from "react";
import { Project } from "../../data/projects";
import cn from "../../utils/cn";
import ProjectCard from "./ProjectCard";

export type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // While a programmatic (button/dot/key) scroll animates, suppress the
  // scroll-based detection so the optimistic index isn't briefly overridden by
  // slides passing through the centre.
  const programmaticUntilRef = useRef(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, projects.length - 1));
      const slide = track.children[clamped] as HTMLElement | undefined;
      if (slide) {
        // Center the slide so it matches the center-based active detection.
        const target =
          slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
        track.scrollTo({ left: target, behavior: "smooth" });
      }
      // Optimistically mark the target as active. Edge slides (especially the
      // first) cannot be perfectly centered, so the scroll-based detection can
      // otherwise settle on a neighbouring slide.
      programmaticUntilRef.current = Date.now() + 600;
      setActiveIndex(clamped);
    },
    [projects.length],
  );

  // Track which slide is centered while the user scrolls/swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Ignore intermediate positions while a programmatic scroll animates;
        // the optimistic index already reflects the destination.
        if (Date.now() < programmaticUntilRef.current) return;

        const slides = Array.from(track.children) as HTMLElement[];
        if (slides.length === 0) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        // Edge slides can never be centered, so honour the scroll extremes
        // directly instead of relying on nearest-to-center detection.
        if (track.scrollLeft <= 1) {
          setActiveIndex(0);
          return;
        }
        if (track.scrollLeft >= maxScroll - 1) {
          setActiveIndex(slides.length - 1);
          return;
        }

        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let nearestDistance = Infinity;
        slides.forEach((slide, index) => {
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(slideCenter - center);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = index;
          }
        });
        setActiveIndex(nearest);
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === projects.length - 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected work"
      onKeyDown={handleKeyDown}
      className="relative flex flex-col"
    >
      <ul
        ref={trackRef}
        className="-mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <li
            key={project.id}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}`}
            className="w-[88%] flex-none snap-center sm:w-[70%] lg:w-[calc(50%-0.75rem)]"
          >
            <ProjectCard project={project} className="h-full" />
          </li>
        ))}
      </ul>

      <div className="order-first mb-6 flex items-center justify-between gap-4 lg:order-last lg:mb-0 lg:mt-6">
        <div
          className="flex items-center gap-3"
          role="tablist"
          aria-label="Choose project"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to ${project.name}`}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-darker",
                index === activeIndex
                  ? "w-8 bg-primary-base"
                  : "w-2 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous project"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-primary-base/60 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-darker"
          >
            <span aria-hidden className="text-lg">
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next project"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-primary-base/60 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-darker"
          >
            <span aria-hidden className="text-lg">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
