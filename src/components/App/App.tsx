import "./App.css";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { type IPrize } from "../../constants/prizes";
import Roulette from "../Roulette/Roulette";
import Modal from "../Modal/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [winnerPrize, setWinnerPrize] = useState<IPrize | null>(null);
  const [hasSpunToday, setHasSpunToday] = useState<boolean>(false);

  const handleWin = (prize: IPrize) => {
    setWinnerPrize(prize);
    setIsModalOpen(true);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 0.6 },
      colors: ["#E30613", "#ffffff", "#FFD700"],
      zIndex: 1010,
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      fireConfetti();
    }
  }, [isModalOpen]);

  return (
    <>
      <Roulette onWin={handleWin} hasTimerStarted={hasSpunToday} />
      <Modal
        isOpen={isModalOpen}
        prize={winnerPrize}
        onClose={() => {
          setIsModalOpen(false);
          setHasSpunToday(true);
        }}
      />
    </>
  );
}
