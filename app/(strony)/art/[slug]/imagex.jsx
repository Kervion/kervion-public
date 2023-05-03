"use client"

import Image from "next/image"

// import { motion } from "framer-motion"

function Imagex({ path, alts, setImageLoaded }) {
  const handleLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <Image
      fill
      onLoad={handleLoaded}
      quality="100"
      alt={alts}
      src={path}
      priority
      sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
    />
  )
}

export default Imagex
