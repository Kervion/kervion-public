import Image from "next/image";
import Link from "next/link";

function Miniatury({ arrThumbs, catg }) {
  return (
    <div className="thumbnails">
      {arrThumbs.map((thumb, index) => (
        <Link key={index} href={"art/" + catg + "/" + index}>
          <Image className="thumb" quality="60" alt="thumb art kervion" src={thumb.src} width={80} height={60} blurDataURL={thumb.blurDataURL} placeholder="blur" loading="lazy" />
        </Link>
      ))}
    </div>
  );
}

export default Miniatury;
