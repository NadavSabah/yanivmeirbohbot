import React, { useEffect, useRef, useState } from "react";
import { texts } from "../../constants/texts";
import { CTA_BASE_CLASSES, openWhatsApp } from "./CTAButtons";

type StickyHeaderCTAProps = {
  onClick?: () => void;
};

export const StickyHeaderCTA: React.FC<StickyHeaderCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroInViewRef = useRef(false);
  const footerInViewRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const heroEl = document.getElementById("hero-cta");
    const footerEl = document.getElementById("footer-cta");

    if (!heroEl && !footerEl) return;

    const updateVisibility = () => {
      const heroInView = heroInViewRef.current;
      const footerInView = footerInViewRef.current;
      setIsVisible(!heroInView && !footerInView);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero-cta") {
            heroInViewRef.current = entry.isIntersecting;
          }
          if (entry.target.id === "footer-cta") {
            footerInViewRef.current = entry.isIntersecting;
          }
        }
        updateVisibility();
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroEl) observer.observe(heroEl);
    if (footerEl) observer.observe(footerEl);

    updateVisibility();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
      aria-hidden={!isVisible}
    >
      <div className="bg-black/05 backdrop-blur-md">
        <div className="relative mx-auto max-w-5xl px-4 py-3 flex items-center justify-center gap-3">
          <p className="hidden md:block absolute left-4 text-sm text-white/80">
            {texts.cta.stickyHeaderLabel}
          </p>
          <button
            type="button"
            onClick={onClick ?? (() => openWhatsApp(texts.cta.heroWhatsAppMessage))}
            className={`${CTA_BASE_CLASSES} bg-[#0086E3] text-white hover:bg-[#0075C7]`}
          >
            <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-wider whitespace-nowrap" dir="auto">
              {texts.cta.heroPrimary}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

