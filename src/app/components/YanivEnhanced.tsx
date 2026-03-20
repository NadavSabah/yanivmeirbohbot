import type { ReactNode } from "react";
import svgPaths from "../../imports/svg-16itobd6e1";
import heroImage from "../../assets/heroImage.jpeg";
import footer_background_image from "../../assets/footer_background.jpeg";

// Use the hero image wherever the old figma placeholder (imgImage770) was used
const imgImage770 = heroImage;
import { PrimaryCTAButton, WhatsAppButton } from "./CTAButtons";
import { InfoSection } from "./InfoSection";
import { texts } from "../../constants/texts";

function Frame4() {
  return (
    <div className="group flex justify-center gap-2 items-center mt-8 mb-4">
      <a
        href={`mailto:${texts.contact.email}`}
        className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px] not-italic shrink-0 text-[16px] text-black tracking-[0.3px] whitespace-nowrap hover:text-[#f56932] transition-colors"
        dir="auto"
      >
        {texts.contact.email}
      </a>
      <div className="relative shrink-0 size-[20px]" data-name="Small - InboxFull">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 13.334">
            <path d={svgPaths.p374d6900} fill="#0086E3" className="transition-colors duration-300 group-hover:fill-[#0075C7]" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BulletIcon() {
  return (
    <div className="shrink-0 size-[20px] flex items-center justify-center">
      <svg className="block size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
        <path d={svgPaths.p295eac00} fill="#0086E3" />
      </svg>
    </div>
  );
}

function BulletTextRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex flex-row items-start gap-3 w-full min-w-0${className ? ` ${className}` : ""}`}
      dir="rtl"
    >
      <div className="shrink-0 pt-0.5">
        <BulletIcon />
      </div>
      <p className="min-w-0 flex-1 font-['SF_Pro_Display:Regular',sans-serif] text-[16px] lg:text-[18px] leading-[26px] text-black text-right tracking-[0.3px]">
        {children}
      </p>
    </div>
  );
}

export default function YanivEnhanced() {
  return (
    <div className="relative w-full min-h-0 overflow-x-hidden text-center lg:text-right" data-name="Yaniv">
      <div className="flex flex-col w-full box-border">
      {/* Hero at top: relative container, image first in DOM, content overlays via absolute */}
      <div id="hero-section" className="relative w-full h-[500px] lg:h-[850px] shrink-0 overflow-hidden bg-[#121d2a]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" data-name="PHOTO-2026-03-06-09-36-20 1">
          <div className="absolute inset-0 max-w-screen-2xl mx-auto relative h-full">
            <img
              alt={texts.accessibility.heroImageAlt}
              className="absolute inset-0 w-full h-full object-cover object-[50%_30%] lg:object-contain lg:object-left lg:scale-105 transition-transform duration-1000"
              src={heroImage}
            />
          </div>
          <div className="absolute top-0 right-0 h-full w-[40%] bg-[#121d2a] blur-[120px] lg:block hidden translate-x-[20%]" />
          <div className="hidden lg:block absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_25%_40%,_transparent_10%,_#121d2a_75%,_#121d2a_100%)]" />
        </div>
        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20 relative h-full z-10 box-border">
          <div className="pt-[220px] lg:pt-[130px] flex flex-col items-center lg:items-end">
            <div className="w-full max-w-full lg:max-w-[700px] text-center lg:text-right text-white lg:ml-auto lg:mr-0 2xl:mr-[5%] lg:-mt-[10px] lg:bg-black/20 lg:backdrop-blur-lg lg:p-12 lg:rounded-3xl lg:border lg:border-white/10">
              <p className="font-['SF_Pro_Display:Heavy',sans-serif] font-bold leading-[32px] text-[30px] lg:text-8xl lg:leading-[1.1] tracking-[0.3px] lg:tracking-tighter mb-0 [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.15)] text-center lg:text-right" dir="auto">
                {texts.content.heroHeadline}
              </p>
              <p className="font-['SF_Pro_Display:Thin',sans-serif] leading-[32px] text-[30px] lg:text-5xl lg:leading-[56px] text-center lg:text-right" dir="auto">
                {texts.content.heroSubheadline}
              </p>
              <p className="mt-2 font-['SF_Pro_Display:Medium',sans-serif] leading-[24px] text-[16px] lg:leading-[28px] lg:text-[18px] tracking-[0.3px] text-center lg:text-right" dir="auto">
                {texts.content.heroDescription}
              </p>
              <div className="mt-6 w-full flex justify-center lg:justify-start lg:w-fit lg:ml-0">
                <PrimaryCTAButton position="static" className="lg:hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Distance + intro block: RTL stacked flow */}
      <div className="mt-[30px] flex flex-col w-full box-border lg:max-w-screen-xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-start lg:items-start lg:py-24" dir="rtl">
          <p
            className="whitespace-pre-line font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[28px] mb-4 not-italic text-[#333] text-[20px] lg:text-[32px] text-right tracking-[0.3px] w-full max-w-full lg:max-w-[850px]"
            dir="rtl"
          >
            {texts.content.distanceTitle}
          </p>

          <div
            className="font-['SeoulNamsan_CM:Regular',sans-serif] leading-[0] not-italic text-[16px] lg:text-[18px] text-black text-right tracking-[0.3px] w-full max-w-full lg:max-w-[850px] whitespace-pre-wrap mb-6 overflow-x-hidden"
            dir="rtl"
          >
            <p className="mb-0">
              <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
                {texts.content.introParagraph}
              </span>
            </p>

            <p className="leading-[24px] mb-0">&nbsp;</p>

            <p className="mb-4">
              <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
                {texts.content.afterYearsTitle}
              </span>
              <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
                {texts.content.afterYearsBodyLead}
              </span>
              <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
                {texts.content.afterYearsBodyBold}
              </span>
            </p>

            <p className="mb-2">
              <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px] mb-2">
                {texts.content.afterYearsBody2Lead}
              </span>
              <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
                {texts.content.afterYearsBody2Bold}
              </span>
            </p>

            <p className="mb-2">
              <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
                {texts.content.afterYearsBody3}
              </span>
            </p>

            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
              {texts.content.whatMakesProfessionalQuestion}
            </p>
          </div>
        </div>

   
      </div>
      {/* Gradient sections in document flow for natural scroll */}
      <div className="relative flex flex-col items-center justify-center w-full mb-10 lg:mt-24 min-w-0 py-16 px-6 lg:px-20 lg:py-60 lg:items-center lg:text-center lg:bg-fixed lg:[--quote-bg-attachment:fixed]"
       style={{
         backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 173\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 19.039 -43.25 0.090324 196.5 86.5)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
         backgroundSize: "cover",
         backgroundAttachment: "var(--quote-bg-attachment, scroll)",
       }}>
        <div className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-l from-black/50 to-transparent" />
        <div className="w-full max-w-screen-xl mx-auto box-border lg:flex lg:justify-center">
          <p className="font-['Corsiva_Hebrew:Regular',sans-serif] italic leading-[38px] text-[30px] lg:text-[48px] lg:leading-[1.3] text-center lg:text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.05)] text-white tracking-[0.3px] w-full max-w-full lg:max-w-[700px] lg:mx-auto [text-wrap:pretty]">{texts.content.influenceQuote}
          </p>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20 box-border lg:mt-20">
        <div
          className="flex flex-col items-start gap-4 lg:gap-6 w-full max-w-full lg:max-w-[850px] text-right"
          dir="rtl"
        >
          <BulletTextRow>{texts.content.maxResultMinFrictionTitle}</BulletTextRow>
          <BulletTextRow>{texts.content.maxResultMinFrictionBody}</BulletTextRow>
          <BulletTextRow>{texts.content.maxResultMinFrictionBullet3}</BulletTextRow>
          <BulletTextRow>{texts.content.maxResultMinFrictionBullet4}</BulletTextRow>
        </div>
      </div>
      <div className="mt-8 mb-4 lg:mt-24 w-full box-border min-w-0">
        <div className="w-full lg:max-w-screen-xl mx-auto px-6 lg:px-20 box-border">
        <div
          className="font-['SF_Pro_Display:Regular',sans-serif] leading-[0] not-italic text-[16px] lg:text-[18px] text-black text-center lg:text-right tracking-[0.3px] w-full max-w-full lg:max-w-[720px] whitespace-pre-wrap overflow-x-hidden"
          dir="rtl"
        >
          <InfoSection title={texts.content.whyImportantTitle} body={texts.content.whyImportantBody} />
          <InfoSection title={texts.content.whoIsItForTitle} body={texts.content.whoIsItForBody} />
          <InfoSection title={texts.content.whatIsDifferentTitle} body={texts.content.whatIsDifferentBody} />
          <InfoSection title={texts.content.howDeliveredTitle} body={texts.content.howDeliveredBody} />
          <InfoSection title={texts.content.notAManagerTitle} body={texts.content.notAManagerBody} />
          <InfoSection title={texts.content.lectureDurationTitle} body={texts.content.lectureDurationBody} />
          <InfoSection title={texts.content.customizationTitle} body={texts.content.customizationBody} />
          <InfoSection title={texts.content.howToBookTitle} body={texts.content.howToBookBody} />
        </div>
        </div>
      </div>
      <div className="relative overflow-hidden flex flex-col items-center justify-center gap-5 min-h-[240px] py-16 px-6 lg:px-20 lg:py-40 w-full mt-[-1px] lg:mt-[71px] min-w-0 box-border bg-black/40 bg-blend-overlay lg:items-center lg:text-center lg:bg-fixed lg:[--footer-bg-pos:center_20%] lg:[--footer-bg-attachment:fixed]" style={{ backgroundImage: `url(${footer_background_image})`, backgroundRepeat: "no-repeat", backgroundPosition: "var(--footer-bg-pos, center)", backgroundSize: "cover", backgroundAttachment: "var(--footer-bg-attachment, scroll)" }}>
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block lg:animate-kenburns opacity-70"
          style={{
            backgroundImage: `url(${footer_background_image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 20%",
            backgroundSize: "cover",
            willChange: "transform",
          }}
        />
        <div className="relative z-10 w-full max-w-screen-xl mx-auto box-border flex flex-col items-center justify-center gap-6 lg:justify-between" dir="rtl">
          <div className="flex-1 flex flex-col items-center lg:items-center gap-4">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[32px] not-italic shrink-0 text-[28px] lg:text-[32px] text-center text-white tracking-[0.3px] w-full max-w-full lg:max-w-[560px]">
              {texts.content.inviteLectureTitle}
            </p>
            <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[16px] lg:text-[20px] text-center text-white tracking-[0.3px] w-full max-w-full lg:max-w-[560px]">
              {texts.content.inviteLectureBody}
            </p>
          </div>
          <WhatsAppButton className="lg:hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20 box-border">
        <Frame4 />
      </div>
      </div>
    </div>
  );
}
