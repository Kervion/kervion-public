"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Slajdy({ image, alts, stopped }) {
  let pathImg;

  //only for build, irrelevant in real situation
  if (image !== undefined) {
    pathImg = image.src;
  } else {
    pathImg = "/imgs/portfel-art/muses/0.png";
  }

  return (
    <>
      {stopped ? (
        <div style={{ position: "relative", width: "800px", height: "600px" }}>
          <Image
            fill
            quality="100"
            alt={alts}
            src={pathImg}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      ) : (
        <motion.div
          style={{ position: "relative", width: "800px", height: "600px" }}
          animate={{ scale: [0.9, 1, 1, 1, 1, 1], opacity: [0, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.2, 0.4, 0.6, 0.94, 1] }}
        >
          <Image
            fill
            quality="100"
            alt={alts}
            src={pathImg}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </motion.div>
      )}
    </>
  );
}
export default Slajdy;
