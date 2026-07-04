import { useEffect, useState } from "react";
import { siteData } from "@/data";

function diff(target: Date) {
  const now = new Date();
  let s = Math.max(0, Math.floor((now.getTime() - target.getTime()) / 1000));
  const y = Math.floor(s / (365.25 * 24 * 3600)); s -= Math.floor(y * 365.25 * 24 * 3600);
  const mo = Math.floor(s / (30.44 * 24 * 3600)); s -= Math.floor(mo * 30.44 * 24 * 3600);
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const mi = Math.floor(s / 60); s -= mi * 60;
  return { y, mo, d, h, mi, s };
}

export function LoveCounter() {
  const target = new Date(siteData.startDate);
  const [t, setT] = useState({ y: 0, mo: 0, d: 0, h: 0, mi: 0, s: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items = [
    { v: t.y, l: "Yıl" },
    { v: t.mo, l: "Ay" },
    { v: t.d, l: "Gün" },
    { v: t.h, l: "Saat" },
    { v: t.mi, l: "Dakika" },
    { v: t.s, l: "Saniye" },
  ];
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5 w-full max-w-5xl">
      {items.map((i) => (
        <div key={i.l} className="glass rounded-2xl p-4 md:p-6 text-center">
          <div className="text-3xl md:text-5xl font-display text-gradient tabular-nums">
            {String(i.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-white/70">{i.l}</div>
        </div>
      ))}
    </div>
  );
}
