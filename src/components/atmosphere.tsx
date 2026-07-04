import { useEffect, useState } from "react";

export function StarField({ count = 120 }: { count?: number }) {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; dur: number; delay: number }[]>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        dur: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    );
  }, [count]);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-cosmic">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ["--dur" as string]: `${s.dur}s`,
            ["--delay" as string]: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Petals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<{ left: number; dur: number; delay: number; drift: number }[]>([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        dur: Math.random() * 12 + 12,
        delay: Math.random() * 15,
        drift: (Math.random() - 0.5) * 300,
      })),
    );
  }, [count]);
  return (
    <>
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${p.left}vw`,
            ["--dur" as string]: `${p.dur}s`,
            ["--delay" as string]: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-glow hidden md:block" style={{ left: pos.x, top: pos.y }} />;
}

export function HeartBurstLayer() {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; hearts: { tx: number; ty: number; rot: number; size: number; delay: number }[] }[]>([]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      const hearts = Array.from({ length: 14 }, () => ({
        tx: (Math.random() - 0.5) * 240,
        ty: (Math.random() - 0.5) * 240 - 40,
        rot: (Math.random() - 0.5) * 720,
        size: Math.random() * 18 + 14,
        delay: Math.random() * 0.15,
      }));
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY, hearts }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1800);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
  return (
    <>
      {bursts.map((b) =>
        b.hearts.map((h, i) => (
          <span
            key={`${b.id}-${i}`}
            className="burst-heart"
            style={{
              ["--x" as string]: `${b.x}px`,
              ["--y" as string]: `${b.y}px`,
              ["--tx" as string]: `${h.tx}px`,
              ["--ty" as string]: `${h.ty}px`,
              ["--rot" as string]: `${h.rot}deg`,
              ["--size" as string]: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              color: ["#f9a8d4", "#e9d5ff", "#f5d0fe", "#fff"][i % 4],
            }}
          >
            ❤
          </span>
        )),
      )}
    </>
  );
}
