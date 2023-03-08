import Slides from "/app/components/slides";

import { requireImages } from "/app/data.js";

const series = {
  anaga: 12,
  plants: 12,
  rocks: 12,
  roots: 12,
  views: 12,
};

function Photo({ params }) {
  const path = "photo-nature/" + params.slug;
  const alts = "kervion photography nature" + params.slug;
  const SERIES = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts={alts} />
    </div>
  );
}
export default Photo;
