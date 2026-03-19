import YanivEnhanced from "./components/YanivEnhanced";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyHeaderCTA } from "./components/StickyHeaderCTA";

export default function App() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto flex items-start justify-center bg-main-gradient">
      <StickyHeaderCTA />
      <div className="scrollbar-thin w-full min-h-0 overflow-x-hidden overflow-y-auto">
        <YanivEnhanced />
        <ScrollToTop />
      </div>
    </div>
  );
}