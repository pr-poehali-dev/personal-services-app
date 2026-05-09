import { useState } from "react";
import Icon from "@/components/ui/icon";
import { HERO_IMG, TOURS, CATEGORIES } from "@/components/data";

export default function CatalogView() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? TOURS
      : TOURS.filter((t) => t.category === activeCategory);

  return (
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
  );
}
