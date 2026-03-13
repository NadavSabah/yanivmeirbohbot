import YanivEnhanced from "./components/YanivEnhanced";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyHeaderCTA } from "./components/StickyHeaderCTA";

export default function App() {
  return (
    <div className="h-screen overflow-y-auto flex items-start justify-center bg-main-gradient">
      <StickyHeaderCTA />
      {/* On desktop (md+), scale the 393px column up so it's clearly visible and not squeezed */}
      <div className="scrollbar-thin min-w-[393px] w-full max-w-[393px] md:max-w-[1024px] min-h-0 overflow-x-hidden overflow-y-auto shadow-xl">
        <div className="w-[393px] min-h-0 mx-auto md:scale-[2.605] md:origin-top overflow-visible">
          <YanivEnhanced />
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}