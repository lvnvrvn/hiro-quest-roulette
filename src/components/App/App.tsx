import "./App.css";
import extendedPrizes from "../../constants/prizes";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "../Card/Card";

export default function App() {
  const [prizeIndex, setPrizeIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  const handleStart = async () => {
    if (isSpinning) return;
    if (!containerRef.current) return;

    setIsSpinning(true);
    setPrizeIndex(null);

    await controls.set({ x: 0 });

    const randomIndex = Math.floor(Math.random() * 10) + 70;

    const cardWidth = 120;
    const gap = 4;
    const totalStep = cardWidth + gap;
    const containerWidth = containerRef.current.offsetWidth;
    const centerOfWindow = containerWidth / 2;
    const centerOfCard = randomIndex * totalStep + cardWidth / 2;

    const offsetX = centerOfWindow - centerOfCard;

    await controls.start({
      x: offsetX,
      transition: {
        duration: 7,
        ease: [0.12, 0.8, 0.35, 1],
      },
    });

    setIsSpinning(false);
    setPrizeIndex(randomIndex);
  };

  return (
    <div className="circle" ref={containerRef}>
      <h1>Колесо фортуны</h1>

      <motion.div className="cards__container" animate={controls}>
        {extendedPrizes.map((prize, index) => (
          <Card
            key={index}
            label={prize.label}
            value={prize.value}
            pic={prize.pic}
            isActive={index === prizeIndex}
          />
        ))}
      </motion.div>

      <button
        onClick={handleStart}
        disabled={isSpinning}
        className={`spin-btn ${isSpinning ? "disabled" : ""}`}
      >
        <span>{isSpinning ? "Крутим" : "Испытать удачу"}</span>
        <img src="../../public/btn-icon.png" alt="" />
      </button>
    </div>
  );
}
