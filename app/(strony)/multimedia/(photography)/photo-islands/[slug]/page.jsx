import Slides from "/app/components/slides";

import { requireImages } from "/app/data.js";

const series = {
  portrane: 14,
  mistyland: 9,
};

function Photo({ params }) {
  const path = "photo-islands/" + params.slug;
  const alts = "kervion photography " + params.slug;
  const SERIES = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts={alts} />
    </div>
  );
}
export default Photo;
