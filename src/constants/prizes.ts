interface IPrize {
  id: number;
  label: string;
  value: string;
  pic: string;
  isActive: boolean;
}

const PRIZES: IPrize[] = [
  { id: 1, label: "Скидка", value: "70%", pic: "1", isActive: false },
  {
    id: 2,
    label: "Бесплатные",
    value: "3 дня",
    pic: "1",
    isActive: false,
  },
  { id: 3, label: "Скидка", value: "50%", pic: "1", isActive: false },
  { id: 4, label: "Скидка", value: "30%", pic: "1", isActive: false },
  {
    id: 5,
    label: "Бесплатные",
    value: "6 часов",
    pic: "2",
    // isActive: true,
    isActive: false,
  },
  { id: 6, label: "Скидка", value: "20%", pic: "1", isActive: false },
  {
    id: 7,
    label: "Попробуйте",
    value: "завтра",
    pic: "3",
    isActive: false,
  },
  { id: 8, label: "Скидка", value: "10%", pic: "1", isActive: false },
  { id: 9, label: "Скидка", value: "5%", pic: "1", isActive: false },
];

const extendedPrizes = Array(10).fill(PRIZES).flat();

export default extendedPrizes;
