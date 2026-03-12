import YanivEnhanced from "./components/YanivEnhanced";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyHeaderCTA } from "./components/StickyHeaderCTA";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StickyHeaderCTA />
      {/* On desktop (md+), scale the 393px column up so it's clearly visible and not squeezed */}
      <div className="scrollbar-thin min-w-[393px] w-full max-w-[393px] md:max-w-[1024px] h-screen overflow-y-auto bg-white shadow-xl">
        <div className="w-[393px] min-h-full mx-auto md:scale-[2.605] md:origin-top">
          <YanivEnhanced />
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}