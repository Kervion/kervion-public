import Image from "next/image";
import Link from "next/link";

function Card({ card }) {
  return (
    <Link href={card.link} key={card.link}>
      <div className="card">
        <Image src={card.icon} className="icon" alt={card.link + " kervion portfolio icon"} width="60" />
        <h2>{card.title}</h2>
        <h5>{card.subtitle}</h5>

        <div className="imgWrapper">
          <Image src={card.photo} className="photo" alt={card.link + " kervion portfolio thumb"} />
        </div>
        <ul className="points">
          {card.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
export default Card;
