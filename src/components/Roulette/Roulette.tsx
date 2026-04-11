import "./Roulette.css";
import extendedPrizes, { type IPrize } from "../../constants/prizes";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "../Card/Card";

interface IRouletteProps {
  onWin: (prize: IPrize) => void;
  hasTimerStarted: boolean;
}

export default function Roulette({ onWin, hasTimerStarted }: IRouletteProps) {
  const [prizeIndex, setPrizeIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [currentDay, setCurrentDay] = useState<number>(1);

  const [secondsLeft, setSecondsLeft] = useState<number>(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function formatTime(totalSeconds: number) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return {
      hours: String(hrs).padStart(2, "0"),
      minutes: String(mins).padStart(2, "0"),
      seconds: String(secs).padStart(2, "0"),
    };
  }

  const { hours, minutes, seconds } = formatTime(secondsLeft);

  const containerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  async function handleStart() {
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

    setPrizeIndex(randomIndex);

    const winningPrize = extendedPrizes[randomIndex];
    setTimeout(() => {
      onWin(winningPrize);
    }, 600);

    setIsSpinning(false);

    if (currentDay < 7) {
      setCurrentDay((prev) => prev + 1);
    }
  }

  return (
    <div className="roulette" ref={containerRef}>
      <h3 className="roulette__title">Колесо Фортуны </h3>
      <p className="roulette__text">
        Испытайте удачу раз в день
        <br />и выигрывайте бонусы для VPN!
      </p>
      <div className="fortune__wheel__pic"></div>

      {/* {!hasSpunToday ? <Roulette onWin={handleWin} /> : <Timer />} */}

      {!hasTimerStarted ? (
        <div className="roulette__cards__wrapper">
          <motion.div className="roulette__cards__container" animate={controls}>
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
          <div
            className={`roulette__cards__focus__frame ${isSpinning || prizeIndex ? "active" : ""}`}
          ></div>
        </div>
      ) : (
        <div className="roulette__timer">
          <div className="roulette__timer__div">
            <div className="roulette__timer__div__digs">
              <div className="roulette__timer__div__dig">{hours[0]}</div>
              <div className="roulette__timer__div__dig colon">{hours[1]}</div>
            </div>
            <div className="roulette__timer__div__text">Часы</div>
          </div>
          <div className="roulette__timer__div">
            <div className="roulette__timer__div__digs">
              <div className="roulette__timer__div__dig">{minutes[0]}</div>
              <div className="roulette__timer__div__dig colon">
                {minutes[1]}
              </div>
            </div>
            <div className="roulette__timer__div__text">Минуты</div>
          </div>
          <div className="roulette__timer__div">
            <div className="roulette__timer__div__digs">
              <div className="roulette__timer__div__dig">{seconds[0]}</div>
              <div className="roulette__timer__div__dig">{seconds[1]}</div>
            </div>
            <div className="roulette__timer__div__text">Секунды</div>
          </div>
        </div>
      )}

      <button
        onClick={handleStart}
        disabled={isSpinning}
        className={`roulette__spin__btn ${isSpinning ? "disabled" : ""}${hasTimerStarted ? "winned" : ""}`}
      >
        <span>
          {!hasTimerStarted
            ? isSpinning
              ? "Крутим"
              : "Испытать удачу"
            : "Забрать награду"}
        </span>
        <img
          className="roulette__spin__btn__icon"
          src={`../../public/btn-icon${hasTimerStarted ? "-pink" : ""}.png`}
          alt=""
        />
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
