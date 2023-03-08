import Slides from "/app/components/slides";

import { requireImages } from "/app/data.js";

const series = {
  portrait: 13,
  thais: 13,
  guitars: 16,
  shadows: 8,
  graffiti: 10,
  selfies: 6,
  demi: 19,
};

function Photo({ params }) {
  const path = "photo-various/" + params.slug;
  const alts = "kervion photography various" + params.slug;
  const SERIES = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts={alts} />
    </div>
  );
}
export default Photo;
