export interface IQuest {
  id: number;
  title: string;
  text: string;
  btnText: string;
  btnIcon: string | null;
  isAvailable: boolean;
}

const QUESTES: IQuest[] = [
  {
    id: 1,
    title: "оставь отзыв",
    text: "Поделитесь своим мнением о HiroVPNи получите 3 дня VPN бесплатно!",
    btnText: "Оставить отзыв",
    btnIcon: null,
    isAvailable: true,
  },
  {
    id: 2,
    title: "Поделиться с Друзьями",
    text: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!",
    btnText: "поделиться",
    btnIcon: "share",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Поддержите нас лайками",
    text: "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!",
    btnText: "поддержать",
    btnIcon: "support",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Оцени нас в Google Картах",
    text: "Поделись впечатлением и получи 1 день VPNв подарок!",
    btnText: "оценить",
    btnIcon: null,
    isAvailable: true,
  },
  {
    id: 5,
    title: "Оцени нас в ЯНДЕКС Картах",
    text: "Поделись впечатлением и получи 1 день VPNв подарок!",
    btnText: "оценить",
    btnIcon: null,
    isAvailable: true,
  },
  {
    id: 6,
    title: "Подписаться на TG-канал ",
    text: "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!",
    btnText: "подписаться",
    btnIcon: "subscribe",
    isAvailable: true,
  },
];

export default QUESTES;
