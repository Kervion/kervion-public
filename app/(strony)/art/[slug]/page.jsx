"use client"

import { useEffect, useState } from "react"
import { requireImages } from "/app/data.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { notFound } from "next/navigation"
import zustand from "app/zustand"
import Miniatury from "./miniaturyx"
import { motion } from "framer-motion"
import Imagex from "./imagex"

const series = {
  muses: 11,
  not: 3,
  shadows: 8,
  selfies: 11,
  various: 9,
  rage: 12,
  sketches: 11,
}

function Mayslides({ params }) {
  const kategoria = params.slug
  const [activeIndex, setActiveIndex] = useState(0)
  const [pathsImages, setPathImages] = useState([])
  const [pathsReady, setPathsReady] = useState(false)
  const [alts, setAlts] = useState("kervion portfolio art painting")
  const [imgLoaded, setImageLoaded] = useState(false)

  const runExt = zustand((state) => state.runExt)
  const setRunExt = zustand((state) => state.setRunExt)
  const timeoutID = zustand((state) => state.timeoutID)
  const setTimeoutID = zustand((state) => state.setTimeoutID)

  useEffect(() => {
    let arr = []
    for (let i = 0; i < series[kategoria]; i++) {
      let tmpPath = `/imgs/portfel-art/${kategoria}/${i}.png`
      arr.push(tmpPath)
    }
    setPathImages(arr)
    setPathsReady(true)
  }, [kategoria])

  //thumbs
  const pathThumbs = "portfel-art/" + kategoria
  const arrThumbs = requireImages(pathThumbs, series[kategoria])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % arrThumbs.length)
  }

  const previousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + arrThumbs.length) % arrThumbs.length)
  }

  if (!(kategoria in series)) {
    notFound()
  }

  const variants = {
    open: {
      opacity: [0, 1],
      scale: [0.7, 1],
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    closed: { opacity: 0 },
  }

  useEffect(() => {
    setImageLoaded(false)
    setAlts("kervion portfolio art painting " + kategoria + " " + activeIndex)
    if (runExt) {
      if (timeoutID !== null) {
        clearTimeout(timeoutID)
        setTimeoutID(null)
      }
      setTimeoutID(
        setTimeout(() => {
          nextSlide()
        }, 5000)
      )
    } else {
      if (timeoutID !== null) {
        clearTimeout(timeoutID)
        setTimeoutID(null)
      }
    }
  }, [activeIndex])

  const toggleSlides = () => {
    if (!runExt) {
      nextSlide()
      setRunExt(!runExt)
    } else {
      setRunExt(!runExt)
    }
  }

  useEffect(() => {
    if (!runExt) {
      clearTimeout(timeoutID)
      setTimeoutID(null)
    }
  }, [runExt])

  return (
    <div className="withThumbs">
      <div className="mainSlajdy">
        <div onClick={toggleSlides} className="pauseplay">
          {runExt ? <FontAwesomeIcon icon={faPause} size="2xl" /> : <FontAwesomeIcon icon={faPlay} size="2xl" />}
        </div>
        <div className="nextSlajd" type="button" onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </div>
        <div style={{ position: "relative", width: "800px", height: "600px", overflow: "hidden" }}>
          {pathsReady && (
            <motion.div
              key={pathsImages[activeIndex]}
              style={{ position: "relative", width: "800px", height: "600px" }}
              animate={imgLoaded ? "open" : "closed"}
              variants={variants}
            >
              <Imagex path={pathsImages[activeIndex]} alts={alts} setImageLoaded={setImageLoaded} />
            </motion.div>
          )}
        </div>
        <div className="nextSlajd" type="button" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </div>
      </div>
      <Miniatury arrThumbs={arrThumbs} catg={kategoria} setActiveIndex={setActiveIndex} />
    </div>
  )
}

export default Mayslides
