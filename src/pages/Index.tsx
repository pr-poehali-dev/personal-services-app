import { useState } from "react";
import Navbar from "@/components/Navbar";
import CatalogView from "@/components/CatalogView";
import ProviderView from "@/components/ProviderView";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [view, setView] = useState<"catalog" | "provider">("catalog");

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-navy)" }}>
      <Navbar view={view} setView={setView} />

      {view === "catalog" && <CatalogView />}
      {view === "provider" && <ProviderView />}

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
