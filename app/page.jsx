import Card from "./components/card";
import { CARDS } from "./data.js";

export default function Home() {
  return (
    <div className="main">
      {CARDS.map((card) => (
        <Card card={card} key={card} />
      ))}
    </div>
  );
}
