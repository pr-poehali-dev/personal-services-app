import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/90abefef-e239-4686-a800-c9a470ae6702.jpg";

const TOURS = [
  {
    id: 1,
    title: "Сочи Ривьера",
    subtitle: "Черноморское побережье",
    duration: "7 ночей",
    price: "48 900",
    category: "Пляж",
    rating: 4.9,
    reviews: 234,
    image: "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/d1cae288-3ca2-418e-811f-0967de6b2634.jpg",
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
    image: "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/11274e71-1f2c-4be2-92fc-7d381ea13c9c.jpg",
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
    image: "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/d1cae288-3ca2-418e-811f-0967de6b2634.jpg",
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
    image: "https://cdn.poehali.dev/projects/6c3157a9-5ee8-4752-a3f5-fd46c33f3226/files/11274e71-1f2c-4be2-92fc-7d381ea13c9c.jpg",
    tags: ["Горы", "Рафтинг"],
    available: true,
  },
];

const CATEGORIES = ["Все", "Пляж", "Культура", "История", "Природа", "Трекинг"];

const DAYS_IN_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const SCHEDULE_ITEMS = [
  { id: 1, date: "12 мая", time: "09:00", tour: "Сочи Ривьера", guests: 24, status: "confirmed" },
  { id: 2, date: "14 мая", time: "14:00", tour: "Байкал Зима", guests: 12, status: "pending" },
  { id: 3, date: "18 мая", time: "10:00", tour: "Алтай Горный", guests: 8, status: "confirmed" },
  { id: 4, date: "21 мая", time: "11:00", tour: "Камчатка", guests: 6, status: "confirmed" },
  { id: 5, date: "25 мая", time: "08:00", tour: "Белые ночи", guests: 30, status: "pending" },
];

const STATS = [
  { label: "Активных туров", value: "12", icon: "MapPin" },
  { label: "Клиентов в мае", value: "248", icon: "Users" },
  { label: "Выручка, ₽", value: "1.2М", icon: "TrendingUp" },
  { label: "Рейтинг", value: "4.9", icon: "Star" },
];

type CalStatus = "available" | "busy" | "today" | "empty";

function generateCalendarDays(): { day: number; status: CalStatus }[] {
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

export default function Index() {
  const [view, setView] = useState<"catalog" | "provider">("catalog");
  const [activeCategory, setActiveCategory] = useState("Все");
  const calDays = generateCalendarDays();

  const filtered =
    activeCategory === "Все"
      ? TOURS
      : TOURS.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-navy)" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center gold-shimmer"
            >
              <Icon name="Plane" size={16} className="text-[var(--brand-navy)]" />
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-gold">
              ТРАНСАЭРО
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("catalog")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                view === "catalog"
                  ? "bg-gold text-[var(--brand-navy)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setView("provider")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                view === "provider"
                  ? "bg-gold text-[var(--brand-navy)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Кабинет
            </button>
          </div>

          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
            <Icon name="User" size={16} />
            <span className="hidden sm:inline">Войти</span>
          </button>
        </div>
      </nav>

      {/* ─── CATALOG VIEW ─────────────────────────────────────────── */}
      {view === "catalog" && (
        <div className="pt-16">
          {/* HERO */}
          <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Трансаэро"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(10,15,30,0.92) 40%, rgba(10,15,30,0.4) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl opacity-0 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-gold" />
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
                      Туристические услуги
                    </span>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl leading-tight mb-4">
                    Открывайте Россию
                    <br />
                    <span className="text-gold italic">с нами</span>
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Эксклюзивные туры по уникальным направлениям. Профессиональные
                    гиды, комфортные перелёты, незабываемые впечатления.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-gold text-[var(--brand-navy)] px-6 py-3 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 flex items-center gap-2">
                      <Icon name="Search" size={16} />
                      Найти тур
                    </button>
                    <button className="border border-gold/40 text-gold px-6 py-3 rounded-full font-medium text-sm hover:border-gold/70 hover:bg-gold/5 transition-all duration-300">
                      Спецпредложения
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="max-w-7xl mx-auto px-6">
                <div className="glass-card rounded-t-2xl px-8 py-4 flex items-center gap-8 opacity-0 animate-fade-in delay-300">
                  {[
                    { icon: "MapPin", text: "48 направлений" },
                    { icon: "Users", text: "12 000+ клиентов" },
                    { icon: "Shield", text: "Гарантия качества" },
                    { icon: "Award", text: "Лицензия Ростуризма" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Icon name={item.icon} size={14} className="text-gold" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CATALOG */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="font-display text-3xl mb-1">Популярные туры</h2>
                <p className="text-muted-foreground text-sm">
                  {filtered.length} предложений
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-gold text-[var(--brand-navy)]"
                        : "border border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tour, i) => (
                <div
                  key={tour.id}
                  className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer opacity-0 animate-scale-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {!tour.available && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-xs font-medium tracking-widest uppercase text-white/70 border border-white/30 px-3 py-1 rounded-full">
                          Нет мест
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[var(--brand-navy)]/80 border border-gold/20 text-gold text-xs px-2 py-0.5 rounded-full">
                        {tour.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 rounded-full px-2 py-0.5">
                      <Icon name="Star" size={12} className="text-gold" />
                      <span className="text-xs font-semibold text-white">
                        {tour.rating}
                      </span>
                      <span className="text-xs text-white/60">({tour.reviews})</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-semibold text-base">{tour.title}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-0.5">
                          <Icon name="MapPin" size={12} />
                          {tour.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-gold font-bold text-lg">
                          {tour.price}{" "}
                          <span className="text-sm font-normal">₽</span>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {tour.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1.5 mt-3 flex-wrap">
                      {tour.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-border text-muted-foreground px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      disabled={!tour.available}
                      className={`w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        tour.available
                          ? "bg-gold text-[var(--brand-navy)] hover:brightness-110"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      {tour.available ? "Забронировать" : "Нет мест"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ─── PROVIDER VIEW ────────────────────────────────────────── */}
      {view === "provider" && (
        <div className="pt-16 max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 opacity-0 animate-fade-in">
            <div>
              <h1 className="font-display text-3xl mb-1">Личный кабинет</h1>
              <p className="text-muted-foreground text-sm">
                ООО «Трансаэро Тур» · Поставщик услуг
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="border border-gold/30 text-gold px-4 py-2 rounded-xl text-sm hover:bg-gold/10 transition-colors flex items-center gap-2">
                <Icon name="Plus" size={14} />
                Добавить тур
              </button>
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                <Icon name="User" size={16} className="text-gold" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={14} className="text-gold" />
                  </div>
                </div>
                <div className="font-display text-3xl font-semibold text-gold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CALENDAR */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6 opacity-0 animate-fade-in delay-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-semibold text-base">Календарь доступности</h2>
                  <p className="text-muted-foreground text-xs mt-0.5">Май 2026</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:border-gold/40 transition-colors">
                    <Icon name="ChevronLeft" size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:border-gold/40 transition-colors">
                    <Icon name="ChevronRight" size={14} />
                  </button>
                </div>
              </div>

              {/* Legend */}
              <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-green-500/20 border border-green-500/30" />
                  <span>Доступно</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-red-500/10 border border-red-500/20" />
                  <span>Занято</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm border-2 border-gold/60" />
                  <span>Сегодня</span>
                </div>
              </div>

              {/* Days header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS_IN_WEEK.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs text-muted-foreground font-medium py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {[...Array(2)].map((_, i) => (
                  <div key={`e${i}`} />
                ))}
                {calDays.slice(0, 29).map(({ day, status }) => (
                  <div
                    key={day}
                    className={`cal-day h-9 flex items-center justify-center text-sm ${
                      status === "today"
                        ? "cal-day today"
                        : status === "available"
                        ? "cal-day available"
                        : status === "busy"
                        ? "cal-day busy"
                        : "text-muted-foreground/30"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5 pt-5 border-t border-border flex gap-3">
                <button className="flex-1 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2">
                  <Icon name="CheckCircle" size={14} />
                  Открыть даты
                </button>
                <button className="flex-1 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2">
                  <Icon name="XCircle" size={14} />
                  Закрыть даты
                </button>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in delay-300">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-base">Расписание</h2>
                <span className="text-xs text-muted-foreground">Май 2026</span>
              </div>

              <div className="space-y-3">
                {SCHEDULE_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl bg-muted/30 p-3 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-1.5">
                      <div>
                        <p className="text-sm font-medium">{item.tour}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <Icon name="Calendar" size={10} />
                          <span>{item.date}</span>
                          <Icon name="Clock" size={10} />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          item.status === "confirmed"
                            ? "bg-green-500/15 text-green-400"
                            : "bg-yellow-500/15 text-yellow-400"
                        }`}
                      >
                        {item.status === "confirmed" ? "Подтверждён" : "Ожидание"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="Users" size={10} />
                      <span>{item.guests} гостей</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2.5 rounded-xl border border-gold/20 text-gold text-sm font-medium hover:bg-gold/5 transition-colors flex items-center justify-center gap-2">
                <Icon name="Plus" size={14} />
                Добавить запись
              </button>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 opacity-0 animate-fade-in delay-400">
            {[
              { icon: "BarChart2", title: "Аналитика продаж", desc: "Детальные отчёты по доходам" },
              { icon: "MessageSquare", title: "Отзывы клиентов", desc: "12 новых отзывов" },
              { icon: "Settings", title: "Настройки профиля", desc: "Реквизиты и документы" },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-5 hover-lift cursor-pointer flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                </div>
                <Icon name="ChevronRight" size={14} className="text-muted-foreground ml-auto" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={14} className="text-gold" />
            <span className="font-display text-sm text-gold">ТРАНСАЭРО</span>
            <span className="text-muted-foreground text-xs">· Туристические услуги</span>
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">О компании</a>
            <a href="#" className="hover:text-gold transition-colors">Лицензии</a>
            <a href="#" className="hover:text-gold transition-colors">Контакты</a>
          </div>
          <p className="text-muted-foreground text-xs">© 2026 Трансаэро</p>
        </div>
      </footer>
    </div>
  );
}