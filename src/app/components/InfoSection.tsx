type InfoSectionProps = {
  title: string;
  body: string;
};

export function InfoSection({ title, body }: InfoSectionProps) {
  return (
    <div dir="rtl" className="text-right">
      <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold text-[18px] lg:text-[32px] text-black block mb-4 leading-[1.3]">
        {title}
      </span>
      <span className="font-['SF_Pro_Display:Regular',sans-serif] text-[16px] lg:text-[18px] leading-[26px] text-black block mb-8">
        {body}
      </span>
    </div>
  );
}
