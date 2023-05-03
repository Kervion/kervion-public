import Image from "next/image"
// import Link from "next/link";

function Miniatury({ arrThumbs, catg, setActiveIndex }) {
  return (
    <div className="thumbnails">
      {arrThumbs.map((thumb, index) => (
        <div key={index} onClick={() => setActiveIndex(index)}>
          <Image className="thumb" quality="60" alt="thumb art kervion" src={thumb.src} width={80} height={60} blurDataURL={thumb.blurDataURL} placeholder="blur" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default Miniatury
