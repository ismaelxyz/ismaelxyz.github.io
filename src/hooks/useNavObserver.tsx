import { useEffect } from "react";

import { headerID } from "../components/Sections/Header";
import { SectionId } from "../data/data";

export const useNavObserver = (
  selectors: string,
  handler: (section: SectionId | null) => void,
) => {
  useEffect(() => {
    const headings = document.querySelectorAll(selectors);
    const headingsArray = Array.from(headings);
    const headerWrapper = document.getElementById(headerID);

    const computeActive = () => {
      if (!headerWrapper || headingsArray.length === 0) return;
      const headerRect = headerWrapper.getBoundingClientRect();
      const headerBottom = headerRect.bottom;
      const positions = headingsArray.map((el) => ({
        id: el.getAttribute("id"),
        top: el.getBoundingClientRect().top,
      }));

      const aboveOrAtHeader = positions
        .filter((p) => typeof p.id === "string")
        .filter((p) => p.top <= headerBottom + 1)
        .sort((a, b) => a.top - b.top);

      const doc = document.documentElement;
      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        (doc.scrollHeight || document.body.scrollHeight) - 2;

      const activeId = atBottom
        ? (positions[positions.length - 1]?.id ?? null)
        : ((aboveOrAtHeader.length
            ? aboveOrAtHeader[aboveOrAtHeader.length - 1].id
            : positions[0]?.id) ?? null);

      if (activeId) {
        handler(activeId as SectionId);
      }
    };

    const observer = new IntersectionObserver(
      () => {
        computeActive();
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px -50% 0px",
      },
    );
    // Observe all the Sections
    headings.forEach((section) => {
      observer.observe(section);
    });
    // Also compute on scroll and resize to handle smooth scroll and bottom edge cases
    const onScroll = () => computeActive();
    const onResize = () => computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Initial compute so the correct section is set on mount
    computeActive();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onResize as EventListener);
    };
  }, [handler, selectors]);
};
