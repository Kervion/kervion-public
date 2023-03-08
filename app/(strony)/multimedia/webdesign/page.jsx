import { requireImages } from "/app/data.js";
import Slides from "/app/components/slides";

function Design() {
  const SERIES = requireImages("portfel-web", 14);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts="kervion webdesign" />
    </div>
  );
}
export default Design;
