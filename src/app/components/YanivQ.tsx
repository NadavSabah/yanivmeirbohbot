import React from "react";
import { texts } from "../../constants/texts";

function QuoteMarkGraphic({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

export default function YanivQ() {
  return (
    /* 1. OUTER WRAPPER */
    <section className="relative w-full bg-transparent lg:py-32">
      
      {/* 2. GENTLE GLOW: Reduced opacity to 20% and tightened the blur */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-[140px] w-[280px] rounded-full bg-[#0086E3]/14 blur-[60px] md:h-[180px] md:w-[450px] md:blur-[90px]" 
        />
      </div>

      {/* 3. THE WHITE STRIP */}
      <div className="relative z-10 w-full bg-white">
        
        {/* 4. CONTENT CONTAINER */}
        <div className="relative mx-auto max-w-4xl px-8 py-9 md:py-24">
          
          {/* THE QUOTE ICON: Positioned specifically for the Hebrew start-point */}
          <div className="absolute right-0 top-3 rotate-180 text-[#0086E3] opacity-20 md:right-10 md:top-10">
            <QuoteMarkGraphic className="size-16 lg:size-24 rotate-180" />
          </div>

          {/* THE QUOTE TEXT */}
          <p
            className="relative z-10 text-right font-['Karantina',sans-serif] font-normal text-[40px] leading-[36px] text-[#353E43]"
            dir="auto"
          >
            {texts.content.influenceQuote}
          </p>
        </div>
      </div>
    </section>
  );
}