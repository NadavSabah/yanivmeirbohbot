import svgPaths from "./svg-16itobd6e1";
import { imgImage769, imgImage768 } from "./svg-sgxb4";
import { InfoSection } from "../app/components/InfoSection";
import { texts } from "../constants/texts";

/** Figma export only — not mounted in App; copy kept local so `texts` stays minimal. */
const FIGMA_TRANSITION_TITLE = "המעבר מאינטואיציה לשיטה:";
const FIGMA_TRANSITION_BODY =
  " להפסיק לנחש ולהתחיל להשתמש בכלים פסיכולוגיים ומנטליים מוכחים.";
const FIGMA_VERSATILE_LEADERSHIP_TITLE = "מנהיגות רב־תכליתית:";
const FIGMA_VERSATILE_LEADERSHIP_BODY =
  "שילוב גישות מנהיגות מותאם למצב ולצרכי הצוות.";

// Placeholder for local run (figma:asset only works in Figma)
const imgImage770 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const imgPhoto202603060936201 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[851.015px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[393px_98.007px] top-0 w-[393px]" data-name="image 769" style={{ maskImage: `url('${imgImage769}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage770} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[23px] top-[9px]">
      <div className="absolute bg-[#fffeff] h-[24px] left-[23px] top-[9px] w-[63px]" />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Medium',sans-serif] leading-[14px] left-[54.5px] not-italic text-[#010002] text-[14px] text-center top-[14px] tracking-[0.3px] whitespace-nowrap">13:26</p>
    </div>
  );
}

function ElementsButton() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f56932] content-stretch flex h-[44px] items-center justify-center left-1/2 px-[16px] py-[4px] rounded-[4px] top-[467px] w-[329px]" data-name="_elements / Button">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[0.9px] uppercase whitespace-nowrap" dir="auto">
        {texts.cta.heroPrimary}
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-end left-[32px] top-[1110px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
        <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">{FIGMA_TRANSITION_TITLE}</span>
        <span className="leading-[24px]">{FIGMA_TRANSITION_BODY}</span>
      </p>
      <div className="relative shrink-0 size-[20px]" data-name="Small - Birth">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Normal - Birth">
          <div className="absolute inset-[16.67%_21.64%_16.67%_19.56%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
              <path d={svgPaths.p295eac00} fill="var(--fill-0, #F56932)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-end left-[32px] top-[1194px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
        <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">{FIGMA_VERSATILE_LEADERSHIP_TITLE}</span>
        <span className="leading-[24px]">{FIGMA_VERSATILE_LEADERSHIP_BODY}</span>
      </p>
      <div className="relative shrink-0 size-[20px]" data-name="Small - Birth">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Normal - Birth">
          <div className="absolute inset-[16.67%_21.64%_16.67%_19.56%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
              <path d={svgPaths.p295eac00} fill="var(--fill-0, #F56932)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-end left-[32px] top-[1278px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
        <span className="leading-[24px]">{texts.content.maxResultMinFrictionTitle}</span>
        <span className="leading-[24px]">{texts.content.maxResultMinFrictionBody}</span>
      </p>
      <div className="relative shrink-0 size-[20px]" data-name="Small - Birth">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Normal - Birth">
          <div className="absolute inset-[16.67%_21.64%_16.67%_19.56%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.758 13.334">
              <path d={svgPaths.p295eac00} fill="var(--fill-0, #F56932)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Small - SocialWhatsappCircle">
        <div className="absolute inset-[8.33%]" data-name="Circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <circle cx="8.33333" cy="8.33333" fill="var(--fill-0, #49CF77)" id="Circle" r="8.33333" />
          </svg>
        </div>
        <div className="absolute inset-1/4" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d={svgPaths.p38b74e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[15px] text-center tracking-[0.9px] uppercase whitespace-nowrap" dir="auto">
        {texts.cta.heroPrimary}
      </p>
    </div>
  );
}

function ElementsButton1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="_elements / Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[4px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start left-[calc(50%+0.5px)] top-[2250px] w-[330px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] text-center text-white tracking-[0.3px] w-full" dir="auto">
        {texts.content.inviteLectureTitle}
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.3px] w-full" dir="auto">
        {texts.content.inviteLectureBody}
      </p>
      <ElementsButton1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-end left-1/2 top-[2560px]">
      <div className="relative shrink-0 size-[20px]" data-name="Small - InboxFull">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 13.334">
            <path d={svgPaths.p374d6900} fill="var(--fill-0, black)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] whitespace-nowrap" dir="auto">
        {` ${texts.contact.email}`}
      </p>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[2622px]" data-name="Mask group">
      <div className="absolute h-[851.015px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_771.444px] mask-size-[393px_79.57px] top-[1850.56px] w-[393px]" data-name="image 768" style={{ maskImage: `url('${imgImage768}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage770} />
      </div>
    </div>
  );
}

export default function Yaniv() {
  return (
    <div className="bg-white relative size-full" data-name="Yaniv">
      <MaskGroup />
      <Group />
      <div className="absolute h-[444px] left-0 top-[98px] w-[393px]" data-name="PHOTO-2026-03-06-09-36-20 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt={texts.accessibility.heroImageAlt}
            className="absolute h-[123.5%] left-[0.02%] max-w-none top-[-23.52%] w-[99.94%]"
            src={imgPhoto202603060936201}
          />
        </div>
      </div>
      <ElסementsButton />
      <div className="-translate-x-full absolute left-[361px] top-[230px] w-[329px] text-right text-white">
        <p className="font-['SF_Pro_Display:Heavy',sans-serif] leading-[32px] text-[32px] tracking-[0.3px] mb-0 text-[#fab997]" dir="auto">
          {texts.content.heroHeadline}
        </p>
        <p className="font-['SF_Pro_Display:Thin',sans-serif] leading-[32px] text-[32px]" dir="auto">
          {texts.content.heroSubheadline}
        </p>
        <p className="mt-2 font-['SF_Pro_Display:Medium',sans-serif] leading-[24px] text-[16px] tracking-[0.3px]" dir="auto">
          {texts.content.heroDescription}
        </p>
      </div>
      <p className="whitespace-pre-line -translate-x-full absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] left-[361px] not-italic text-[#333] text-[20px] text-right top-[571px] tracking-[0.3px] w-[323px]" dir="auto">
        {texts.content.distanceTitle}
      </p>
      <div className="-translate-x-full absolute font-['SeoulNamsan_CM:Regular',sans-serif] leading-[0] left-[360px] not-italic text-[16px] text-black text-right top-[644px] tracking-[0.3px] w-[328px] whitespace-pre-wrap">
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
            {texts.content.introParagraph}
          </span>
        </p>
        <p className="leading-[24px] mb-0" dir="auto">
          &nbsp;
        </p>
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
            {texts.content.afterYearsTitle}
          </span>
          <br />
          <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
            {texts.content.afterYearsBodyLead}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold leading-[24px]">
            {texts.content.afterYearsBodyBold}
          </span>
          <span className="font-['SF_Pro_Display:Medium',sans-serif] leading-[24px]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]" dir="auto">
          {texts.content.whatMakesProfessionalQuestion}
        </p>
      </div>
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="absolute h-[173px] left-0 top-[1384px] w-[393px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 173\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 19.039 -43.25 0.090324 196.5 86.5)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[314px] left-0 top-[2206px] w-[393px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 314\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 34.556 -43.25 0.16394 196.5 157)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <p className="-translate-x-1/2 absolute font-['Corsiva_Hebrew:Regular',sans-serif] italic leading-[34px] left-1/2 text-[36px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.05)] text-white top-[1424px] tracking-[0.3px] w-[323px]" dir="auto">
        {texts.content.influenceQuote}
      </p>
      <div
        className="-translate-x-full absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[0] left-[361px] not-italic text-[16px] text-black text-right top-[1623px] tracking-[0.3px] w-[329px] whitespace-pre-wrap"
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
      <Frame5 />
      <Frame4 />
      <MaskGroup1 />
    </div>
  );
}