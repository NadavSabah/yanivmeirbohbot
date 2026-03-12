import React, { useEffect, useRef, useState } from "react";
import { texts } from "../../constants/texts";
import { openWhatsApp } from "./CTAButtons";

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
      <div className="bg-black/30 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-6 flex items-center justify-center md:justify-between gap-3">
          <p className="hidden md:block text-sm text-white/80">
            {texts.cta.stickyHeaderLabel}
          </p>
          <button
            type="button"
            onClick={onClick ?? (() => openWhatsApp(texts.cta.heroWhatsAppMessage))}
            className="content-stretch flex h-[44px] items-center justify-center px-[16px] py-[4px] rounded-[4px] bg-[#f56932] hover:bg-[#e55822] transition-all"
          >
            <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[0.9px] uppercase whitespace-nowrap" dir="auto">
              {texts.cta.heroPrimary}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

