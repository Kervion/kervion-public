import { requireImages } from "/app/data.js";
import Slides from "/app/components/slides";

const series = {
  not: 3,
  muses: 11,
  shadows: 8,
  selfies: 11,
  various: 9,
  rage: 12,
  sketches: 11,
};

function Art({ params }) {
  const path = "portfel-art/" + params.slug;
  const alts = "kervion art painting " + params.slug;
  const ART = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={ART} alts={alts} />
    </div>
  );
}
export default Art;
