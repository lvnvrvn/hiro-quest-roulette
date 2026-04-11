import "./FeaturedQuestCard.css";

export default function FeaturedQuestCard() {
  return (
    <div className="featured__quest__card">
      <div className="featured__quest__card__status">Доступен</div>
      <h5 className="featured__quest__card__title">Расскажи о Hiro</h5>
      <div className="featured__quest__card__text">
        <p>
          Просто напиши пост/статью о нас в крупном канале или на своей странице
          в соцсетях со ссылкой на нас.
        </p>
        <p>
          Пришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN
          бесплатно!
        </p>
        <p>Чем больше охват, тем длиннее подарок!</p>
      </div>
      <button className="featured__quest__card__btn">Отправить ссылки</button>
    </div>
  );
}
