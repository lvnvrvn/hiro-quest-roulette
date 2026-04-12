import "./Modal.css";
import { AnimatePresence, motion } from "framer-motion";
import { type IPrize } from "../../constants/prizes";

interface IModalProps {
  isOpen: boolean;
  prize: IPrize | null;
  onClose: () => void;
}

export default function Modal({ isOpen, prize, onClose }: IModalProps) {
  if (!prize) return null;

  const isWinner = prize.postscript !== null;
  const modalTitle = isWinner ? (
    <>
      Поздравляем!
      <br />
      Вы выиграли
    </>
  ) : (
    <>
      В другой раз
      <br />
      повезёт!
    </>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal__overlay"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="roulette__modal"
          >
            {prize && (
              <>
                <h4 className="roulette__modal__title">{modalTitle}</h4>
                <div className="roulette__modal__content">
                  <span className="roulette__modal__content-left">
                    {prize.label}
                  </span>
                  <img
                    className="roulette__modal__content-pic"
                    src={`/win${prize.pic}.png`}
                    alt="Image"
                  />
                  <span className="roulette__modal__content-right">
                    {prize.value}
                  </span>
                </div>
                {prize.postscript && (
                  <p className="roulette__modal__postscript">
                    {prize.postscript}
                  </p>
                )}
                <button onClick={onClose} className="roulette__modal__btn">
                  Продолжить
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
