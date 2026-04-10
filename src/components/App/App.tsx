import "./App.css";
import extendedPrizes from "../../constants/prizes";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "../Card/Card";

export default function App() {
  const [prizeIndex, setPrizeIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [currentDay, setCurrentDay] = useState<number>(1);
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

    if (currentDay < 7) {
      setCurrentDay((prev) => prev + 1);
    }
  };

  return (
    <div className="roulette" ref={containerRef}>
      <h3 className="roulette__title">Колесо Фортуны </h3>
      <p className="roulette__text">
        Испытайте удачу раз в день
        <br />и выигрывайте бонусы для VPN!
      </p>
      <div className="fortune__wheel__pic"></div>

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

      <p className="roulette__promotion__text">
        Крути колесо 7 дней подряд без пропусков и получи на 7-й день
        гарантированный 1 день подписки!
      </p>
      <div className="roulette__promotion__progress">
        <motion.div
          className="roulette__promotion__progress__fill"
          initial={{ width: "14.28%" }}
          animate={{ width: `${(currentDay / 7) * 100}%` }}
          transition={{ duration: 0.8, ease: "circOut" }}
        />
        <div className="roulette__promotion__progress__dig">1</div>
        <div className="roulette__promotion__progress__dig">2</div>
        <div className="roulette__promotion__progress__dig">3</div>
        <div className="roulette__promotion__progress__dig">4</div>
        <div className="roulette__promotion__progress__dig">5</div>
        <div className="roulette__promotion__progress__dig">6</div>
        <div className="roulette__promotion__progress__dig week__prize">7</div>
      </div>
    </div>
  );
}
