import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isLangSwitched, setIsLangSwitched] = useState<boolean>(false);

  return (
    <header className="header">
      <a href="" className="header__logo">
        Hiro
      </a>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">FAQ</li>
          <li className="header__nav__list__item">Тарифы</li>
          <li className="header__nav__list__item download">Скачать</li>
          <li className="header__nav__list__item">Блог</li>
          <li className="header__nav__list__item account">Аккаунт</li>
        </ul>
      </nav>
      <div
        className={`header__lang__change ${isLangSwitched ? "dropped" : ""}`}
        onClick={() => {
          setIsLangSwitched(!isLangSwitched);
        }}
      >
        РУ
        {isLangSwitched && (
          <div className="header__lang__change__dropdown">ENG</div>
        )}
      </div>
    </header>
  );
}
