import { requireImages } from "/app/data.js";
import Slides from "/app/components/slides";

const series = {
  pullman: 26,
  pullmanart: 33,
  asado: 10,
  asadoart: 13,
  erotic: 22,
};

function Exposition({ params }) {
  const path = "portfel-events/" + params.slug;
  const alts = "kervion exhibition " + params.slug;
  const EXPO = requireImages(path, series[params.slug]);
  return (
    <div className="mainSlides">
      <Slides tablica={EXPO} alts={alts} />
    </div>
  );
}
export default Exposition;
