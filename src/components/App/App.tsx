import "./App.css";
import { useState } from "react";
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
