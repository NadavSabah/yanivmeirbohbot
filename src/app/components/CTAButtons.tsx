interface CTAButtonProps {
  className?: string;
  onClick?: () => void;
}

export function OrangeCTAButton({ className = "", onClick }: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default WhatsApp action
      const message = encodeURIComponent("שלום, אני מעוניין/ת לשמוע פרטים נוספים על ההרצאה");
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }
  };

  return (
    <button
      id="hero-cta"
      onClick={handleClick}
      className={`-translate-x-1/2 absolute bg-[#f56932] content-stretch flex h-[44px] items-center justify-center left-1/2 px-[16px] py-[4px] rounded-[4px] hover:bg-[#e55822] transition-all ${className}`}
      data-name="_elements / Button"
    >
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[0.9px] uppercase whitespace-nowrap" dir="auto">
        שריינו מקום בהרצאה הקרובה
      </p>
    </button>
  );
}

export function WhatsAppButton({ className = "", onClick }: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default WhatsApp action
      const message = encodeURIComponent("שלום, אני מעוניין/ת להזמין הרצאה לארגון");
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      id="footer-cta"
      className={`bg-white h-[44px] relative rounded-[4px] shrink-0 w-full hover:bg-gray-50 transition-all ${className}`}
      data-name="_elements / Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[4px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[20px]" data-name="Small - SocialWhatsappCircle">
              <div className="absolute inset-[8.33%]" data-name="Circle">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <circle cx="8.33333" cy="8.33333" fill="var(--fill-0, #49CF77)" id="Circle" r="8.33333" />
                </svg>
              </div>
              <div className="absolute inset-1/4" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path clipRule="evenodd" d="M0 10L0.706271 7.43208C0.270451 6.68042 0.0414469 5.82833 0.0418655 4.95458C0.0431215 2.22292 2.27665 0 5.02093 0C6.35268 0.000416667 7.60278 0.516667 8.54308 1.45333C9.48296 2.39 10.0004 3.635 10 4.95917C9.99874 7.69125 7.76522 9.91417 5.02093 9.91417C4.18781 9.91375 3.36683 9.70583 2.63962 9.31083L0 10ZM2.72551 8.49585C3.43197 8.91511 4.10639 9.16625 4.99831 9.16667C7.29472 9.16667 9.1654 7.29833 9.16667 5.00147C9.16751 2.69998 7.30568 0.834176 5.00169 0.833333C2.70359 0.833333 0.834177 2.70167 0.833334 4.9981C0.832912 5.93564 1.10774 6.63763 1.5693 7.37207L1.1482 8.90921L2.72551 8.49585ZM7.06823 6.01176C7.0427 5.96568 6.97439 5.93819 6.87159 5.88282C6.76913 5.82745 6.2651 5.56026 6.17092 5.52347C6.07708 5.48669 6.00878 5.4681 5.94013 5.57884C5.87182 5.68921 5.67518 5.93819 5.61549 6.01176C5.55581 6.08534 5.49578 6.09463 5.39332 6.03926C5.29086 5.98389 4.96036 5.86758 4.56881 5.49114C4.26418 5.19832 4.05823 4.83675 3.99854 4.72601C3.93886 4.61564 3.99233 4.55582 4.04339 4.50082C4.08962 4.45139 4.14585 4.37187 4.19726 4.30721C4.24935 4.2433 4.26625 4.19722 4.30075 4.12327C4.3349 4.04969 4.318 3.98503 4.29213 3.92966C4.26625 3.87466 4.06133 3.33101 3.97612 3.1099C3.89263 2.89474 3.80811 2.92373 3.74532 2.92038L3.54868 2.91667C3.48037 2.91667 3.36929 2.94417 3.27545 3.0549C3.18162 3.16564 2.91667 3.43245 2.91667 3.97611C2.91667 4.51977 3.28408 5.04485 3.33513 5.11842C3.38654 5.192 4.05788 6.30756 5.08628 6.78582C5.33088 6.89953 5.522 6.96753 5.67069 7.01844C5.91632 7.10242 6.13987 7.09053 6.31651 7.06229C6.51349 7.0307 6.92299 6.79511 7.00855 6.53721C7.0941 6.27895 7.0941 6.05784 7.06823 6.01176V6.01176Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[15px] text-center tracking-[0.9px] uppercase whitespace-nowrap" dir="auto">
              שריינו מקום בהרצאה הקרובה
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
