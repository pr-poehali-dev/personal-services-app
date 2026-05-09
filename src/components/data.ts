export const HERO_IMG =
  "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/90abefef-e239-4686-a800-c9a470ae6702.jpg";

export const TOURS = [
  {
    id: 1,
    title: "Сочи Ривьера",
    subtitle: "Черноморское побережье",
    duration: "7 ночей",
    price: "48 900",
    category: "Пляж",
    rating: 4.9,
    reviews: 234,
    image:
      "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/d1cae288-3ca2-418e-811f-0967de6b2634.jpg",
    tags: ["Всё включено", "Перелёт"],
    available: true,
  },
  {
    id: 2,
    title: "Белые ночи",
    subtitle: "Санкт-Петербург",
    duration: "5 ночей",
    price: "32 500",
    category: "Культура",
    rating: 4.8,
    reviews: 187,
    image:
      "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/11274e71-1f2c-4be2-92fc-7d381ea13c9c.jpg",
    tags: ["Экскурсии", "Отель 5*"],
    available: true,
  },
  {
    id: 3,
    title: "Золотое кольцо",
    subtitle: "Центральная Россия",
    duration: "4 ночи",
    price: "21 200",
    category: "История",
    rating: 4.7,
    reviews: 156,
    image: HERO_IMG,
    tags: ["Автобус", "Гид"],
    available: false,
  },
  {
    id: 4,
    title: "Камчатка",
    subtitle: "Долина гейзеров",
    duration: "10 ночей",
    price: "89 000",
    category: "Природа",
    rating: 5.0,
    reviews: 92,
    image:
      "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/d1cae288-3ca2-418e-811f-0967de6b2634.jpg",
    tags: ["Экстрим", "Перелёт"],
    available: true,
  },
  {
    id: 5,
    title: "Байкал Зима",
    subtitle: "Озеро Байкал",
    duration: "6 ночей",
    price: "54 000",
    category: "Природа",
    rating: 4.9,
    reviews: 118,
    image: HERO_IMG,
    tags: ["Зимний тур", "Хаски"],
    available: true,
  },
  {
    id: 6,
    title: "Алтай Горный",
    subtitle: "Горный Алтай",
    duration: "8 ночей",
    price: "38 700",
    category: "Трекинг",
    rating: 4.8,
    reviews: 203,
    image:
      "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/11274e71-1f2c-4be2-92fc-7d381ea13c9c.jpg",
    tags: ["Горы", "Рафтинг"],
    available: true,
  },
];

export const CATEGORIES = ["Все", "Пляж", "Культура", "История", "Природа", "Трекинг"];

export const DAYS_IN_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const SCHEDULE_ITEMS = [
  { id: 1, date: "12 мая", time: "09:00", tour: "Сочи Ривьера", guests: 24, status: "confirmed" },
  { id: 2, date: "14 мая", time: "14:00", tour: "Байкал Зима", guests: 12, status: "pending" },
  { id: 3, date: "18 мая", time: "10:00", tour: "Алтай Горный", guests: 8, status: "confirmed" },
  { id: 4, date: "21 мая", time: "11:00", tour: "Камчатка", guests: 6, status: "confirmed" },
  { id: 5, date: "25 мая", time: "08:00", tour: "Белые ночи", guests: 30, status: "pending" },
];

export const STATS = [
  { label: "Активных туров", value: "12", icon: "MapPin" },
  { label: "Клиентов в мае", value: "248", icon: "Users" },
  { label: "Выручка, ₽", value: "1.2М", icon: "TrendingUp" },
  { label: "Рейтинг", value: "4.9", icon: "Star" },
];

export type CalStatus = "available" | "busy" | "today" | "empty";

export function generateCalendarDays(): { day: number; status: CalStatus }[] {
  const statuses: CalStatus[] = [
    "empty", "empty", "available", "available", "busy", "available", "available",
    "available", "busy", "available", "available", "available", "today", "available",
    "busy", "available", "available", "available", "available", "available", "busy",
    "available", "available", "available", "available", "busy", "available", "available",
    "available", "available", "available",
  ];
  return Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    status: statuses[i] ?? "available",
  }));
}
