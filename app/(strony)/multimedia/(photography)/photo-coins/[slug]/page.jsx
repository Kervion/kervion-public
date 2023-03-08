import Slides from "/app/components/slides";

import { requireImages } from "/app/data.js";

const series = {
  rare: 20,
  old: 15,
  color: 12,
};

function Photo({ params }) {
  const path = "photo-coins/" + params.slug;
  const alts = "kervion photography coins" + params.slug;
  const SERIES = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts={alts} />
    </div>
  );
}
export default Photo;
