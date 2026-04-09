import "./App.css";
import extendedPrizes from "../../constants/prizes";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "../Card/Card";
import Arrow from "../Arrow";

export default function App() {
  const [prizeIndex, setPrizeIndex] = useState<number | null>(null);
  const controls = useAnimation();

  const handleStart = async () => {
    setPrizeIndex(null);
    await controls.set({ x: 0 });

    const randomIndex = Math.floor(Math.random() * 10) + 70;
    const offsetX = randomIndex * 120 + 60;

    console.log("prizeIndex", prizeIndex);

    await controls.start({
      x: -offsetX,
      transition: {
        duration: 7, // Увеличь до 7-8 секунд для эпичности
        ease: [0.12, 0.8, 0.35, 1], // Магия здесь: резкий старт и очень долгое докатывание
      },
    });

    setPrizeIndex(randomIndex);
  };

  return (
    <div className="circle">
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

      <button onClick={handleStart} className="spin-btn">
        <span>Испытать удачу</span>
        <img src="../../public/btn-icon.png" alt="" />
      </button>

      {/* <Arrow /> */}
    </div>
  );
}
