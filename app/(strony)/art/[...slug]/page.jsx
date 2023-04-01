"use client";

import { useEffect, useState } from "react";
import { requireImages } from "/app/data.js";
import Slajdy from "app/components/slajdyx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { notFound } from "next/navigation";
import zustand from "app/zustand";
import Miniatury from "./miniaturyx";

const series = {
  muses: 11,
  not: 3,
  shadows: 8,
  selfies: 11,
  various: 9,
  rage: 12,
  sketches: 11,
};

function Art({ params }) {
  const kategoria = params.slug[0];
  const path = "portfel-art/" + kategoria;

  const arrThumbs = requireImages(path, series[kategoria]);

  const [vis, setVis] = useState(true);
  const [numer, setNumer] = useState(params.slug[1]);
  const [image, setImage] = useState(requireImages(path, series[kategoria])[0]);
  const [nextNumber, setNextNumber] = useState((Number(numer) + 1) % series[kategoria]);
  const [prevNumber, setPrevNumber] = useState((Number(numer) + series[kategoria] - 1) % series[kategoria]);

  if (Number(numer) >= series[kategoria]) {
    notFound();
  }

  const [run, setRun] = useState(true);
  const runExt = zustand((state) => state.runExt);
  const setRunExt = zustand((state) => state.setRunExt);

  useEffect(() => {
    if (run === true) {
      setVis(false);
      setImage(requireImages(path, series[kategoria])[numer]);
      setNextNumber((Number(numer) + 1) % series[kategoria]);
      setPrevNumber((Number(numer) + series[kategoria] - 1) % series[kategoria]);
      if (runExt === false) setRun(false);
    }
  }, [numer, run]);

  function nextSlide() {
    setNumer(nextNumber);
  }

  useEffect(() => {
    setVis(true);
    setTimeout(nextSlide, 5000);
  }, [nextNumber]);

  const [stopped, setStopped] = useState(false);

  const toggleSlides = () => {
    setStopped((prev) => !prev);
    setRunExt(!runExt);
  };

  useEffect(() => {
    setRun(runExt);
    setStopped(!runExt);
  }, [runExt]);

  return (
    <div className="withThumbs">
      <div className="mainSlajdy">
        <div onClick={toggleSlides} className="pauseplay">
          {run ? <FontAwesomeIcon icon={faPause} size="2xl" /> : <FontAwesomeIcon icon={faPlay} size="2xl" />}
        </div>
        <Link className="nextSlajd" href={"art/" + kategoria + "/" + prevNumber}>
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </Link>
        {vis ? (
          <Slajdy stopped={stopped} image={image} alts={"kervion portfolio art painting " + kategoria + " " + numer} />
        ) : (
          <div style={{ position: "relative", width: "800px", height: "600px" }}>.</div>
        )}
        <Link className="nextSlajd" href={"art/" + kategoria + "/" + nextNumber}>
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </Link>
      </div>
      <Miniatury arrThumbs={arrThumbs} catg={kategoria} />
    </div>
  );
}
export default Art;
