# Horizontal overflow (overflow-x) audit

## Elements identified as potential causes

### 1. **YanivEnhanced.tsx – Black “invite” section (~line 203)**
- **What:** `w-[calc(100%+4rem)] -mx-8` on the dark CTA block.
- **Why it can overflow:** The block is deliberately wider than its parent (100% + 4rem) and uses negative margins to break out of the padded column. If no ancestor has `overflow-x: hidden`, this can cause horizontal scroll.
- **Status:** Kept as-is for layout; overflow contained by adding `overflow-x-hidden` on ancestors.

### 2. **App.tsx – Main page wrapper (line 7)**
- **What:** Outer div had `overflow-y-auto` only (no `overflow-x-hidden`).
- **Why it overflows:** Any child that extends past the viewport width (e.g. the breakout div above or scaled content) was not clipped, so the page could scroll horizontally.
- **Fix:** Add `overflow-x-hidden` to this wrapper.

### 3. **App.tsx – Scaled inner div (line 11)**
- **What:** `overflow-visible` on the `md:scale-[2.605]` wrapper.
- **Why it can overflow:** Scaled content can paint outside its layout box; with no horizontal clipping on the outer wrapper, this could contribute to horizontal scroll.
- **Fix:** Left as `overflow-visible` so the scaled card is not clipped; horizontal scroll is prevented by `overflow-x-hidden` on the main App wrapper and on the scroll container (line 10).

### 4. **YanivEnhanced.tsx – Hero image (line 39)**
- **What:** `max-w-none` and `w-[99.94%]` on the hero `<img>`.
- **Why it’s OK:** The image sits inside a div with `overflow-hidden`, so it is clipped and does not cause page-level overflow.

### 5. **Global CSS (custom.css)**
- **What:** No `overflow-x: hidden` or explicit `box-sizing` on `html`/`body`.
- **Why it matters:** Without `overflow-x: hidden` on the document, any horizontal bleed can show a horizontal scrollbar. Without `box-sizing: border-box`, padding can add to width and cause overflow.
- **Fix:** Add `overflow-x: hidden` and `box-sizing: border-box` to `html` and `body`.

### 6. **StickyHeaderCTA**
- **What:** `fixed top-0 left-0 w-full`.
- **Why it’s OK:** `w-full` is 100% of the viewport; no negative margins or fixed pixel widths that would extend past the viewport.

---

## Summary

- **Primary cause:** Main App wrapper and document (html/body) did not clip horizontal overflow, so the intentional breakout in YanivEnhanced (`w-[calc(100%+4rem)] -mx-8`) and/or scaled content could produce horizontal scroll.
- **Secondary:** No explicit global `box-sizing: border-box` or `overflow-x: hidden` on `html`/`body`.
