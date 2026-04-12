import "./MobileMenu.css";

interface IMobileMenuProps {
  isActive: boolean;
}

export default function MobileMenu({ isActive }: IMobileMenuProps) {
  return (
    <nav className={`mobile__menu ${isActive ? "active" : ""}`}>
      <ul className="mobile__menu__list">
        <li className="mobile__menu__list__item">FAQ</li>
        <li className="mobile__menu__list__item">Тарифы</li>
        <li className="mobile__menu__list__item">Скачать</li>
        <li className="mobile__menu__list__item">Блог</li>
        <li className="mobile__menu__list__item">Аккаунт</li>
      </ul>
    </nav>
  );
}
