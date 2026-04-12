import "./QuestCard.css";
import { useState } from "react";
import { type IQuest } from "../../constants/quests";

export default function QuestCard(quest: IQuest) {
  const [isСompleted, setIsСompleted] = useState<boolean>(!quest.isAvailable);
  return (
    <div className="quest__card">
      <div className={`quest__card__status ${isСompleted ? "completed" : ""}`}>
        {isСompleted ? "Выполнен" : "Доступен"}
      </div>
      <h5 className="quest__card__title">{quest.title}</h5>
      <p className="quest__card__text">{quest.text}</p>
      {!isСompleted && (
        <button
          onClick={() => {
            setIsСompleted(true);
          }}
          className="quest__card__btn"
        >
          {quest.btnText}
          {quest.btnIcon && (
            <img src={`../../../public/${quest.btnIcon}.png`} />
          )}
        </button>
      )}
    </div>
  );
}
