import { requireImages } from "/app/data.js";
import Slides from "/app/components/slides";

const series = {
  batmap: 15,
  lucernae: 22,
  neural: 20,
  thai: 10,
  various: 15,
};

function Design({ params }) {
  const path = "portfel-design/" + params.slug;
  const alts = "kervion design " + params.slug;
  const SERIES = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={SERIES} alts={alts} />
    </div>
  );
}
export default Design;
