import svgPaths from "../../imports/svg-16itobd6e1";
import { imgImage769, imgImage768 } from "../../imports/svg-sgxb4";
import heroImage from "../../assets/heroImage.jpeg";

// Use the hero image wherever the old figma placeholder (imgImage770) was used
const imgImage770 = heroImage;
import { OrangeCTAButton, WhatsAppButton } from "./CTAButtons";
import { texts } from "../../constants/texts";

function Frame4() {
  return (
    <div className="flex justify-center gap-2 items-center mt-8 mb-4">
      <div className="relative shrink-0 size-[20px]" data-name="Small - InboxFull">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 13.334">
            <path d={svgPaths.p374d6900} fill="var(--fill-0, black)" id="Icon" />
          </svg>
        </div>
      </div>
      <a
        href={`mailto:${texts.contact.email}`}
        className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic shrink-0 text-[16px] text-black tracking-[0.3px] whitespace-nowrap hover:text-[#f56932] transition-colors"
        dir="auto"
      >
        {texts.contact.email}
      </a>
    </div>
  );
}

export default function YanivEnhanced() {
  return (
    <div className="relative w-full min-h-0 overflow-x-hidden" data-name="Yaniv">
      {/* Hero at top: relative container, image first in DOM, content overlays via absolute */}
      <div id="hero-section" className="relative w-full max-w-[393px] h-[500px] mx-auto shrink-0">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" data-name="PHOTO-2026-03-06-09-36-20 1">
          <img
            alt={texts.accessibility.heroImageAlt}
            className="absolute h-[100.5%] left-[0.02%] max-w-none top-[0%] w-[99.94%] object-cover"
            src={heroImage}
          />
        </div>
        <div className="hero-content absolute left-0 top-[190px] z-10 w-[393px] h-[285px]">
          <div className="-translate-x-full absolute left-[361px] top-0 w-[329px] text-right text-white">
            <p className="font-['SF_Pro_Display:Heavy',sans-serif] leading-[32px] text-[32px] tracking-[0.3px] mb-0 text-[#f48447] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.15)]" dir="auto">
              {texts.content.heroHeadline}
            </p>
            <p className="font-['SF_Pro_Display:Thin',sans-serif] leading-[32px] text-[27px]" dir="auto">
              {texts.content.heroSubheadline}
            </p>
            <p className="mt-2 font-['SF_Pro_Display:Medium',sans-serif] leading-[24px] text-[16px] tracking-[0.3px]" dir="auto">
              {texts.content.heroDescription}
            </p>
          </div>
          <OrangeCTAButton className="top-[237px]" />
        </div>
      </div>
      {/* Single column: intro, gradients, and content aligned and centered */}
      <div className="flex flex-col w-full max-w-[393px] mx-auto box-border">
      {/* Distance + intro block: flow layout, same visual position via margin */}
      <div className="mt-[30px] flex flex-col w-full box-border px-[32px]">
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] not-italic text-[#333] text-[20px] text-right tracking-[0.3px] w-[323px]" dir="auto">
          {texts.content.distanceTitle}
        </p>
        <div className="font-['SeoulNamsan_CM:Regular',sans-serif] leading-[0] not-italic text-[16px] text-black text-right tracking-[0.3px] w-[328px] whitespace-pre-wrap mb-6">
          <p className="mb-0" dir="auto">
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.distanceIntro}
            </span>
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.distanceExample}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </p>
          <p className="mb-0" dir="auto">
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.introNiceToMeet}
            </span>
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
              {texts.content.introName}
            </span>
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.introBioLine1}
              <br />
              {texts.content.introBioLine2}          
              {texts.content.introBioLine3}
            </span>
          </p>
          <p className="leading-[24px] mb-0" dir="auto">
            &nbsp;
          </p>
          <p className="mb-4" dir="auto">
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
              {texts.content.afterYearsTitle}
            </span>            
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.afterYearsBodyLead}
            </span>
            <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
              {texts.content.afterYearsBodyBold}
            </span>
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">               
            </span>
          </p>
          <p className="mb-2" dir="auto">
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px] mb-2">
              {texts.content.afterYearsBody2Lead}
            </span>
            <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
              {texts.content.afterYearsBody2Bold}
            </span>
          </p>
          <p className="mb-2" dir="auto">
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.afterYearsBody3}
            </span>
          </p>
          <p className="mb-2" dir="auto">
            <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
              {texts.content.afterYearsBody4}
            </span>
          </p>
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]" dir="auto">
            {texts.content.whatMakesProfessionalQuestion}
          </p>
        </div>
        {/* Bullet row 1 (was Frame1): flow layout */}
        <div className="flex gap-[12px] items-start justify-end w-full">
          <div className="shrink-0 size-[20px] flex items-center justify-center" data-name="Small - Birth">
            <svg className="block size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
              <path d={svgPaths.p295eac00} fill="var(--fill-0, #F56932)" id="Icon" />
            </svg>
          </div>
          <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
            <span className="leading-[24px]">{texts.content.maxResultMinFrictionTitle}<span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold">{texts.content.maxResultMinFrictionTitleEmphasis}</span>{texts.content.maxResultMinFrictionTitleSuffix}</span>
          </p>
        </div>
        {/* Bullet row 2 (was Frame2): spacing so row 2 starts at 1278 (84px from row 1 top minus row 1 height) */}
        <div className="flex gap-[12px] items-start justify-end w-full mt-[20px]">
          <div className="shrink-0 size-[20px] flex items-center justify-center" data-name="Small - Birth">
            <svg className="block size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
              <path d={svgPaths.p295eac00} fill="var(--fill-0, #F56932)" id="Icon" />
            </svg>
          </div>
          <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
            </span>
            <span className="leading-[24px]">{texts.content.maxResultMinFrictionBody}<span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold">{texts.content.maxResultMinFrictionBodyEmphasis}</span></span>
          </p>
        </div>
      </div>
      {/* Gradient sections in document flow for natural scroll */}
      <div className="flex flex-col items-center justify-center h-[173px] w-full mt-10 px-4 min-w-0"
       style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 173\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 19.039 -43.25 0.090324 196.5 86.5)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <p className="font-['Corsiva_Hebrew:Regular',sans-serif] italic leading-[38px] text-[30px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.05)] text-white tracking-[0.3px] w-full max-w-[323px] [text-wrap:pretty]">{texts.content.influenceQuote}
        </p>
      </div>
      <div className="mt-8 w-full box-border px-[32px] min-w-0">
        <div className="font-['SF_Pro_Display:Regular',sans-serif] leading-[0] not-italic text-[16px] text-black text-right tracking-[0.3px] w-[329px] max-w-full ml-auto whitespace-pre-wrap">
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[26px] not-italic text-[18px]">
            {texts.content.whyImportantTitle}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
            <br aria-hidden="true" />
            {texts.content.whyImportantLead}
          </span>
          <span className="leading-[24px]">
            {texts.content.whyImportantKeyLead}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
            {texts.content.whyImportantKeyBold1}
          </span>
          <span className="leading-[24px]">
            {texts.content.whyImportantKeyMid}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
            {texts.content.whyImportantKeyBold2}
          </span>
          <span className="leading-[24px]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic font-bold text-[18px]">
            {texts.content.whoIsItForTitle}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[24px]">
            {texts.content.whoIsItForDescriptionLead}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
            {texts.content.whoIsItForDescriptionBold}
          </span>
          <span className="leading-[24px]">
            {texts.content.whoIsItForDescriptionSuffix}
          </span>
        </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 min-h-[240px] py-10 w-[calc(100%+4rem)] -mx-8 mt-6 min-w-0 px-4 box-border" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 314\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 34.556 -43.25 0.16394 196.5 157)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[32px] not-italic shrink-0 text-[28px] text-center text-white tracking-[0.3px] w-full max-w-[330px]">
            {texts.content.inviteLectureTitle}
          </p>
          <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[16px] text-center text-white tracking-[0.3px] w-full max-w-[330px]">
            {texts.content.inviteLectureBody}
          </p>
          <WhatsAppButton className="!w-max" />
        </div>

      </div>
      <Frame4 />
      </div>
    </div>
  );
}
