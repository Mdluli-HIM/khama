"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useTheme } from "next-themes";

import type { BookPage } from "@/data/book-content";

gsap.registerPlugin(useGSAP);

const INTRO_STORAGE_KEY = "khama-intro-seen";

type BookReaderProps = {
  pages: BookPage[];
};

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);

      return () => {
        media.removeEventListener("change", onStoreChange);
      };
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function BookReader({ pages }: BookReaderProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasLoadedSavedPage = useRef(false);
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const [cursor, setCursor] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  const maxCursor = Math.max(0, pages.length - 1);
  const currentPage = useMemo(() => pages[cursor], [pages, cursor]);

  function toggleTheme() {
    const isDark =
      resolvedTheme === "dark" ||
      document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  }

  const completeIntro = useCallback(() => {
    window.localStorage.setItem(INTRO_STORAGE_KEY, "seen");
    setShowIntro(false);
  }, []);

  useEffect(() => {
    if (hasLoadedSavedPage.current) return;

    const frame = window.requestAnimationFrame(() => {
      const savedPage = Number(
        window.localStorage.getItem("khama-current-page"),
      );

      if (Number.isFinite(savedPage)) {
        const clamped = Math.min(Math.max(savedPage, 0), maxCursor);
        setCursor(clamped);
      }

      hasLoadedSavedPage.current = true;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [maxCursor]);

  useEffect(() => {
    if (!hasLoadedSavedPage.current) return;
    window.localStorage.setItem("khama-current-page", String(cursor));
  }, [cursor]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }

      if (event.key === "Escape") {
        setIsNavigatorOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hasSeenIntro =
        window.localStorage.getItem(INTRO_STORAGE_KEY) === "seen";

      if (!hasSeenIntro) {
        setShowIntro(true);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".page-animate",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.05,
          ease: "power2.out",
        },
      );
    },
    {
      scope: rootRef,
      dependencies: [cursor],
    },
  );

  function goNext() {
    if (cursor >= maxCursor) return;
    setDirection(1);
    setCursor((prev) => Math.min(prev + 1, maxCursor));
  }

  function goPrev() {
    if (cursor <= 0) return;
    setDirection(-1);
    setCursor((prev) => Math.max(prev - 1, 0));
  }

  function goToPageIndex(pageIndex: number) {
    const safePageIndex = Math.min(Math.max(pageIndex, 0), maxCursor);

    setDirection(safePageIndex > cursor ? 1 : -1);
    setCursor(safePageIndex);
    setIsNavigatorOpen(false);
  }

  function goToPage(slug: string) {
    const pageIndex = pages.findIndex((page) => page.slug === slug);

    if (pageIndex === -1) return;

    setDirection(pageIndex > cursor ? 1 : -1);
    setCursor(pageIndex);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (info.offset.x < -70) goNext();
    if (info.offset.x > 70) goPrev();
  }

  if (!currentPage) return null;

  return (
    <main ref={rootRef} className="reader-shell">
      <button
        className="tap-zone tap-zone-left"
        onClick={goPrev}
        aria-label="Previous page"
        type="button"
      />

      <button
        className="tap-zone tap-zone-right"
        onClick={goNext}
        aria-label="Next page"
        type="button"
      />

      <section className="reader-stage" aria-label="Khama website book">
        <AnimatePresence custom={direction} mode="wait">
          <motion.article
            key={currentPage.slug}
            className="editorial-page"
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -16 }}
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
          >
            <PageContent
              page={currentPage}
              isDesktop={isDesktop}
              onNavigate={goToPage}
            />
          </motion.article>
        </AnimatePresence>
      </section>

      <footer className="reader-footer">
        <div className="reader-footer-inner">
          <button
            className="nav-button"
            onClick={goPrev}
            disabled={cursor === 0}
            aria-label="Previous page"
            type="button"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            className="reader-meta"
            onClick={() => setIsNavigatorOpen(true)}
            aria-label="Open page navigator"
            type="button"
          >
            <span className="reader-page-count">
              {String(cursor + 1).padStart(2, "0")} /{" "}
              {String(pages.length).padStart(2, "0")}
            </span>
          </button>

          <button
            className="nav-button"
            onClick={goNext}
            disabled={cursor >= maxCursor}
            aria-label="Next page"
            type="button"
          >
            <ChevronRight size={16} />
          </button>

          <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            type="button"
          >
            <Moon size={13} className="theme-moon" />
            <Sun size={13} className="theme-sun" />
            <span className="theme-label theme-label-light">Dark</span>
            <span className="theme-label theme-label-dark">Light</span>
          </button>
        </div>
      </footer>

      <PageNavigator
        isOpen={isNavigatorOpen}
        pages={pages}
        currentIndex={cursor}
        onClose={() => setIsNavigatorOpen(false)}
        onGoToPage={goToPageIndex}
      />

      {showIntro && <CinematicIntro onComplete={completeIntro} />}
    </main>
  );
}

function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const introRef = useRef<HTMLDivElement | null>(null);
  const hasCompletedRef = useRef(false);

  const finishIntro = useCallback(() => {
    if (hasCompletedRef.current) return;

    hasCompletedRef.current = true;
    onComplete();
  }, [onComplete]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        const delayedCall = gsap.delayedCall(1.2, finishIntro);

        return () => {
          delayedCall.kill();
        };
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: finishIntro,
      });

      timeline
        .set(".cinema-intro", {
          autoAlpha: 1,
        })
        .fromTo(
          ".cinema-rule",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.95,
          },
          0.18,
        )
        .fromTo(
          ".cinema-kicker",
          {
            autoAlpha: 0,
            y: 8,
            letterSpacing: "0.42em",
          },
          {
            autoAlpha: 1,
            y: 0,
            letterSpacing: "0.3em",
            duration: 0.9,
          },
          0.42,
        )
        .fromTo(
          ".cinema-title",
          {
            autoAlpha: 0,
            y: 14,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
          },
          0.9,
        )
        .fromTo(
          ".cinema-subtitle",
          {
            autoAlpha: 0,
            y: 8,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
          },
          1.38,
        )
        .fromTo(
          ".cinema-loading-line span",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          1.55,
        )
        .to(
          ".cinema-intro-content",
          {
            autoAlpha: 0,
            y: -8,
            duration: 0.72,
            ease: "power2.inOut",
          },
          3.25,
        )
        .to(
          ".cinema-intro",
          {
            autoAlpha: 0,
            duration: 0.68,
            ease: "power2.inOut",
          },
          3.55,
        );

      return () => {
        timeline.kill();
      };
    },
    {
      scope: introRef,
      dependencies: [finishIntro],
    },
  );

  return (
    <div ref={introRef} className="cinema-intro" role="status">
      <div className="cinema-grain" aria-hidden="true" />

      <div className="cinema-intro-content">
        <span className="cinema-rule" aria-hidden="true" />

        <p className="cinema-kicker">MMM PRESENTS</p>

        <h1 className="cinema-title">KHAMA</h1>

        <p className="cinema-subtitle">A WEBSITE BOOK</p>

        <div className="cinema-loading-line" aria-hidden="true">
          <span />
        </div>
      </div>

      <button
        className="cinema-skip"
        onClick={finishIntro}
        type="button"
        aria-label="Skip intro"
      >
        Skip
      </button>
    </div>
  );
}

function PageContent({
  page,
  isDesktop,
  onNavigate,
}: {
  page: BookPage;
  isDesktop: boolean;
  onNavigate: (slug: string) => void;
}) {
  if (page.layout === "author") {
    return (
      <div className="page-author">
        {page.title && (
          <p className="author-title page-animate">{page.title}</p>
        )}
      </div>
    );
  }

  if (page.layout === "book-title") {
    return (
      <div className="page-book-title">
        {page.title && (
          <p className="book-intro-title page-animate">{page.title}</p>
        )}

        {page.subtitle && (
          <p className="book-intro-subtitle page-animate">{page.subtitle}</p>
        )}
      </div>
    );
  }

  if (page.layout === "contents") {
    return (
      <div className="page-contents">
        <div className="contents-shell">
          <aside className="contents-side-note page-animate"></aside>

          <div className="contents-line" />

          <section className="contents-main">
            {page.title && (
              <header className="contents-header page-animate">
                <span className="contents-header-rule" />
                <h1>{page.title}</h1>
              </header>
            )}

            <div className="contents-list">
              {page.contents?.map((item) => {
                const isReleased =
                  item.status === "released" && item.targetSlug;

                return (
                  <button
                    key={`${item.page}-${item.title}`}
                    className={`contents-item page-animate ${
                      isReleased ? "is-released" : "is-coming-soon"
                    }`}
                    type="button"
                    disabled={!isReleased}
                    onClick={() => {
                      if (item.targetSlug) onNavigate(item.targetSlug);
                    }}
                  >
                    <span className="contents-page">{item.page}</span>

                    <span className="contents-copy">
                      <span className="contents-title">{item.title}</span>

                      {item.subtitle && (
                        <span className="contents-subtitle">
                          {item.subtitle}
                        </span>
                      )}
                    </span>

                    <span className="contents-status">
                      {isReleased ? "Open" : "Soon"}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <p className="contents-pagination page-animate">MMM</p>
        </div>
      </div>
    );
  }

  if (page.layout === "collage") {
    return (
      <div className="page-collage">
        <div className="collage-block">
          <header className="collage-header">
            {page.kicker && (
              <p className="page-kicker page-animate">{page.kicker}</p>
            )}
            {page.title && (
              <h1 className="collage-title page-animate">{page.title}</h1>
            )}
            {page.subtitle && (
              <p className="collage-subtitle page-animate">{page.subtitle}</p>
            )}
          </header>

          <div className="section-divider page-animate" />

          <div className="collage-grid">
            <div className="collage-text page-animate">
              {page.body?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {page.image && (
              <div className="collage-image page-animate">
                <Image
                  src={page.image}
                  alt={page.caption ?? ""}
                  fill
                  priority={page.slug === "chapter-one-intro"}
                  sizes={isDesktop ? "220px" : "34vw"}
                  className="collage-image-media"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (page.layout === "cover") {
    return (
      <div className="page-cover">
        {page.kicker && (
          <p className="page-kicker page-animate">{page.kicker}</p>
        )}
        {page.title && <p className="cover-title page-animate">{page.title}</p>}
        {page.subtitle && (
          <p className="cover-subcopy page-animate">{page.subtitle}</p>
        )}
      </div>
    );
  }

  if (page.layout === "chapter-image") {
    return (
      <div className="page-chapter-image">
        {page.image && (
          <figure className="chapter-image-frame page-animate">
            <Image
              src={page.image}
              alt={page.caption ?? ""}
              fill
              sizes="(max-width: 640px) 74vw, 420px"
              className="chapter-image-media"
            />
          </figure>
        )}

        <div className="chapter-image-meta page-animate">
          {page.caption && (
            <p className="chapter-image-caption">{page.caption}</p>
          )}

          <div className="chapter-image-details">
            {page.dateTaken && (
              <p>
                <span>Date taken</span>
                {page.dateTaken}
              </p>
            )}

            {page.location && (
              <p>
                <span>Location</span>
                {page.location}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-text">
      {(page.kicker || page.title || page.subtitle) && (
        <>
          <div className="text-page-head">
            {page.kicker && (
              <p className="page-kicker page-animate">{page.kicker}</p>
            )}
            {page.title && (
              <h2 className="text-page-title page-animate">{page.title}</h2>
            )}
            {page.subtitle && (
              <p className="text-page-subtitle page-animate">{page.subtitle}</p>
            )}
          </div>

          <div className="section-divider page-animate" />
        </>
      )}

      <div className="text-page-copy">
        {page.body?.map((paragraph, index) => (
          <p className="page-animate" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function PageNavigator({
  isOpen,
  pages,
  currentIndex,
  onClose,
  onGoToPage,
}: {
  isOpen: boolean;
  pages: BookPage[];
  currentIndex: number;
  onClose: () => void;
  onGoToPage: (pageIndex: number) => void;
}) {
  const chapterPages = pages
    .map((page, index) => ({ page, index }))
    .filter(({ page }) => {
      return (
        page.layout === "author" ||
        page.layout === "book-title" ||
        page.layout === "contents" ||
        page.kicker ||
        page.title
      );
    });

  if (!isOpen) return null;

  return (
    <div className="page-navigator" role="dialog" aria-modal="true">
      <button
        className="page-navigator-backdrop"
        onClick={onClose}
        aria-label="Close page navigator"
        type="button"
      />

      <section className="page-navigator-panel">
        <header className="page-navigator-header">
          <div>
            <p className="page-navigator-kicker">Navigate</p>
            <h2>Pages</h2>
          </div>

          <button
            className="page-navigator-close"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </header>

        <div className="page-navigator-progress">
          <input
            type="range"
            min={0}
            max={pages.length - 1}
            value={currentIndex}
            onChange={(event) => onGoToPage(Number(event.target.value))}
            aria-label="Jump to page"
          />

          <p>
            Page {String(currentIndex + 1).padStart(2, "0")} of{" "}
            {String(pages.length).padStart(2, "0")}
          </p>
        </div>

        <div className="page-navigator-featured">
          {chapterPages.map(({ page, index }) => (
            <button
              key={page.slug}
              className={`navigator-featured-item ${
                currentIndex === index ? "is-active" : ""
              }`}
              onClick={() => onGoToPage(index)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>
                {page.layout === "author"
                  ? page.title
                  : page.layout === "book-title"
                    ? page.title
                    : page.layout === "contents"
                      ? "Content"
                      : page.title || page.kicker || `Page ${index + 1}`}
              </strong>

              {page.subtitle && <small>{page.subtitle}</small>}
            </button>
          ))}
        </div>

        <div className="page-number-grid">
          {pages.map((page, index) => (
            <button
              key={page.slug}
              className={`page-number-dot ${
                currentIndex === index ? "is-active" : ""
              }`}
              onClick={() => onGoToPage(index)}
              type="button"
              aria-label={`Go to page ${index + 1}`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
