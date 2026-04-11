import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__content">
        <section className="footer__column">
          <ul className="footer__column__list">
            <li className="footer__column__item">
              <h5 className="footer__column__title logo">Hiro</h5>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                FAQ
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Тарифы
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Блог
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Роутеры
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Партнёрам
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Аккаунт
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__column">
          <ul className="footer__column__list">
            <li className="footer__column__item">
              <h5 className="footer__column__title">Скачать</h5>
            </li>
            <li className="footer__column__item">
              <img
                className="footer__column__icon"
                src="../../../public/download/appstore.png"
                alt=""
              />
              <a href="#" className="footer__column__link">
                IOS
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/download/googleplay.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Android
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/download/android.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Android TV
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/download/windows.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Windows
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/download/macos.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Mac Os
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/download/linux.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Linux
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__column">
          <ul className="footer__column__list">
            <li className="footer__column__item">
              <h5 className="footer__column__title">Способы оплаты</h5>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/pay/sbp.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                СБП
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/pay/sberpay.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Sberpay
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/pay/tinkoffpay.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Tinkoff Pay
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/pay/card.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Банковская карта
              </a>
            </li>
            <li className="footer__column__item">
              <img
                src="../../../public/pay/crypt.png"
                alt=""
                className="footer__column__icon"
              />
              <a href="#" className="footer__column__link">
                Криптовалюта
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__column">
          <ul className="footer__column__list">
            <li className="footer__column__item">
              <h5 className="footer__column__title">поддержка 24/7</h5>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link telegram">
                Telegram
                <img
                  src="../../../public/tg-icon.png"
                  alt=""
                  className="footer__column__item__icon"
                />
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Публичная оферта
              </a>
            </li>
            <li className="footer__column__item">
              <a href="#" className="footer__column__link">
                Пользовательское соглашение
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <div className="footer__copyright">
        &copy; 2025 Wolle Development Limited. Все права защищены.
      </div>
    </footer>
  );
}
