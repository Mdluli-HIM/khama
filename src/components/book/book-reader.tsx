"use client";

import {
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

  const { resolvedTheme, setTheme } = useTheme();

  const maxCursor = Math.max(0, pages.length - 1);
  const currentPage = useMemo(() => pages[cursor], [pages, cursor]);

  function toggleTheme() {
    const isDark =
      resolvedTheme === "dark" ||
      document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  }

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
            <PageContent page={currentPage} isDesktop={isDesktop} />
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

          <div className="reader-meta">
            <span className="reader-page-count">
              {String(cursor + 1).padStart(2, "0")} /{" "}
              {String(pages.length).padStart(2, "0")}
            </span>
          </div>

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
    </main>
  );
}

function PageContent({
  page,
  isDesktop,
}: {
  page: BookPage;
  isDesktop: boolean;
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
