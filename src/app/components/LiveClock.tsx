import { useState, useEffect } from "react";

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return (
    <div className="absolute contents left-[23px] top-[9px]">
      <div className="absolute bg-[#fffeff] h-[24px] left-[23px] top-[9px] w-[63px]" />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Medium',sans-serif] leading-[14px] left-[54.5px] not-italic text-[#010002] text-[14px] text-center top-[14px] tracking-[0.3px] whitespace-nowrap">
        {hours}:{minutes}
      </p>
    </div>
  );
}
