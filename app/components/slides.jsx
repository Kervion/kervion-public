"use client";
import * as React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const NextJsImage = (image, offset, rect) => {
  const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
  const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));
  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        quality="100"
        alt="kervion portfolio"
        src={image}
        loading="lazy"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
};

function Slides({ tablica }) {
  return (
    <Lightbox
      styles={{ container: { backgroundColor: "rgba(238, 238, 238, 1)" } }}
      inline={{ style: { width: "100%", height: "auto" } }}
      plugins={[Inline, Slideshow, Thumbnails]}
      open={true}
      slides={tablica}
      carousel={{ preload: 6 }}
      render={{ slide: NextJsImage }}
      slideshow={{ autoplay: true, delay: 3000 }}
      thumbnails={{
        position: "bottom",
        width: 50,
        height: 50,
        border: 0,
        borderRadius: 0,
        padding: 0,
        gap: 10,
        imageFit: "cover",
        vignette: false,
      }}
    />
  );
}
export default Slides;
