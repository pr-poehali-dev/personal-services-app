import Icon from "@/components/ui/icon";
import {
  STATS,
  DAYS_IN_WEEK,
  SCHEDULE_ITEMS,
  generateCalendarDays,
} from "@/components/data";

export default function ProviderView() {
  const calDays = generateCalendarDays();

  return (
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
  );
}
