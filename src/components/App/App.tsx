import "./App.css";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { type IPrize } from "../../constants/prizes";
import QUESTES from "../../constants/quests";
import Header from "../Layout/Header/Header";
import Roulette from "../Roulette/Roulette";
import FeaturedQuestCard from "../FeaturedQuestCard/FeaturedQuestCard";
import QuestCard from "../QuestCard/QuestCard";
import Modal from "../Modal/Modal";
import Footer from "../Layout/Footer/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [winnerPrize, setWinnerPrize] = useState<IPrize | null>(null);
  const [hasSpunToday, setHasSpunToday] = useState<boolean>(false);

  const handleWin = (prize: IPrize) => {
    setWinnerPrize(prize);
    setIsModalOpen(true);
  };

  const fireConfetti = () => {
    const isMobile = window.innerWidth < 375;

    confetti({
      particleCount: isMobile ? 100 : 150,
      spread: isMobile ? 45 : 200,
      origin: { y: 0.6 },
      scalar: isMobile ? 0.8 : 1.2,
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
      <div className="page__container">
        <Header />

        <main className="page__content">
          <h1 className="page__title">Аккаунт</h1>
          <h2 className="page__subtitle">
            Квесты <img src="/close-icon.png" alt="X" />
          </h2>
          <section className="section__roulette">
            <Roulette onWin={handleWin} hasTimerStarted={hasSpunToday} />
            <FeaturedQuestCard />
          </section>
          <section className="section__quests">
            {QUESTES.map((quest) => (
              <QuestCard key={quest.id} {...quest} />
            ))}
          </section>
        </main>

        <Footer />

        <Modal
          isOpen={isModalOpen}
          prize={winnerPrize}
          onClose={() => {
            setIsModalOpen(false);
            setHasSpunToday(true);
          }}
        />
      </div>
    </>
  );
}
