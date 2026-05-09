import Icon from "@/components/ui/icon";

interface NavbarProps {
  view: "catalog" | "provider";
  setView: (view: "catalog" | "provider") => void;
}

export default function Navbar({ view, setView }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center gold-shimmer">
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
  );
}
