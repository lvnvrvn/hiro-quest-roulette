import "./Card.css";

interface ICardProps {
  label: string;
  value: string;
  pic: string;
  isActive: boolean;
}

export default function Card({ label, value, pic, isActive }: ICardProps) {
  return (
    <div className={`card${isActive ? " card__active" : ""}`}>
      <h3 className="card__label">{label}</h3>
      <img className="card__pic" src={`../../public/${pic}.png`} alt="Image" />
      <p className="card__value">{value}</p>
    </div>
  );
}
