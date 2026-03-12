import svgPaths from "../../imports/svg-16itobd6e1";
import { imgImage769, imgImage768 } from "../../imports/svg-sgxb4";
// Placeholder for local run (figma:asset only works in Figma)
const imgImage770 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const imgPhoto202603060936201 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
import { LiveClock } from "./LiveClock";
import { OrangeCTAButton, WhatsAppButton } from "./CTAButtons";
import { texts } from "../../constants/texts";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[851.015px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[393px_98.007px] top-0 w-[393px]" data-name="image 769" style={{ maskImage: `url('${imgImage769}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage770} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-end left-[32px] top-[1194px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] w-[296px]" dir="auto">
        <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">{texts.content.maxResultMinFrictionTitle}</span>
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
        <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]">
        </span>
        <span className="leading-[24px]">{texts.content.maxResultMinFrictionBody}<span className="font-['SF_Pro_Display:Bold',sans-serif] font-bold">{texts.content.maxResultMinFrictionBodyEmphasis}</span></span>
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

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start left-[calc(50%+0.5px)] top-[2250px] w-[330px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] text-center text-white tracking-[0.3px] w-full" dir="auto">
        {texts.content.inviteLectureTitle}
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.3px] w-full" dir="auto">
        {texts.content.inviteLectureBody}
      </p>
      <WhatsAppButton />
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
        <a
          href={`mailto:${texts.contact.email}`}
          className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[0.3px] whitespace-nowrap hover:text-[#f56932] transition-colors"
          dir="auto"
        >
          {texts.contact.email}
        </a>
      </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-0 top-[2622px]" data-name="Mask group">
      <div className="absolute h-[851.015px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_771.444px] mask-size-[393px_79.57px] top-[1850.56px] w-[393px] pointer-events-none" data-name="image 768" style={{ maskImage: `url('${imgImage768}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage770} />
      </div>
    </div>
  );
}

export default function YanivEnhanced() {
  return (
    <div className="bg-white relative size-full" data-name="Yaniv">
      <MaskGroup />
      <LiveClock />
      <div className="absolute h-[444px] left-0 top-[98px] w-[393px]" data-name="PHOTO-2026-03-06-09-36-20 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt={texts.accessibility.heroImageAlt}
            className="absolute h-[123.5%] left-[0.02%] max-w-none top-[-23.52%] w-[99.94%]"
            src={imgPhoto202603060936201}
          />
        </div>
      </div>
      <OrangeCTAButton className="top-[467px]" />
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
      <p className="-translate-x-full absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] left-[361px] not-italic text-[#333] text-[20px] text-right top-[571px] tracking-[0.3px] w-[323px]" dir="auto">
        {texts.content.distanceTitle}
      </p>
      <div className="-translate-x-full absolute font-['SeoulNamsan_CM:Regular',sans-serif] leading-[0] left-[360px] not-italic text-[16px] text-black text-right top-[644px] tracking-[0.3px] w-[328px] whitespace-pre-wrap">
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
            <br />
            {texts.content.introBioLine3}
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
            {texts.content.afterYearsBody}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px]" dir="auto">
          {texts.content.whatMakesProfessionalQuestion}
        </p>
      </div>
      <Frame1 />
      <Frame2 />
      <div className="absolute h-[173px] left-0 top-[1384px] w-[393px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 173\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 19.039 -43.25 0.090324 196.5 86.5)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[314px] left-0 top-[2206px] w-[393px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 393 314\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.05 34.556 -43.25 0.16394 196.5 157)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(10,10,10,1)\\' offset=\\'0.0625\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(57,57,57,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(77,77,77,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(153,153,153,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <p className="-translate-x-1/2 absolute font-['Corsiva_Hebrew:Regular',sans-serif] italic leading-[34px] left-1/2 text-[36px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.05)] text-white top-[1424px] tracking-[0.3px] w-[323px]" dir="auto">
        {texts.content.influenceQuote}
      </p>
      <div className="-translate-x-full absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[0] left-[361px] not-italic text-[16px] text-black text-right top-[1623px] tracking-[0.3px] w-[329px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0" dir="auto">
          {texts.content.lectureDeepDive}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] mb-0" dir="auto">
          {texts.content.whatWeLearnTitle}
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[24px]">
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
              {texts.content.bulletMotivesTitle}
            </span>
            <span className="leading-[24px]">
              {texts.content.bulletMotivesBody}
            </span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
              {texts.content.bulletCuriosityTitle}
            </span>
            <span className="leading-[24px]">
              {texts.content.bulletCuriosityBody}
            </span>
          </li>
          <li className="ms-[24px]">
            <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
              {texts.content.bulletObjectionsTitle}
            </span>
            <span className="leading-[24px]">
              {texts.content.bulletObjectionsBody}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
            {texts.content.whyImportantTitle}
          </span>
          <span className="leading-[24px]">
            <br aria-hidden="true" />
            {texts.content.whyImportantLead}
          </span>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
            {texts.content.whyImportantKey}
          </span>
          <span className="leading-[24px]">
            {texts.content.whyImportantSuffix}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0" dir="auto">
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic">
            {texts.content.whoIsItForTitle}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[24px]">
            {texts.content.whoIsItForDescription}
          </span>
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">
              {texts.content.audienceManagers}
            </span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">
              {texts.content.audienceBusinessOwners}
            </span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">
              {texts.content.audienceParents}
            </span>
          </li>
        </ul>
      </div>
      <p className="-translate-x-full absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] left-[362px] not-italic text-[#333] text-[20px] text-right top-[1589px] tracking-[0.3px] whitespace-nowrap" dir="auto">
        {texts.content.lectureContentTitle}
      </p>
      <Frame5 />
      <Frame4 />
      <MaskGroup1 />
    </div>
  );
}
