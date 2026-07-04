import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data";

export function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const a = ref.current; if (!a) return;
    const onTime = () => setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => { a.removeEventListener("timeupdate", onTime); a.removeEventListener("ended", onEnd); };
  }, []);

  const toggle = () => {
    const a = ref.current; if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <div className="glass-strong rounded-3xl p-6 md:p-8 max-w-xl mx-auto flex items-center gap-5">
      <div className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ${playing ? "animate-soft-pulse" : ""}`}>
        <img src={siteData.song.cover} alt={siteData.song.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-xl md:text-2xl text-gradient truncate">{siteData.song.title}</div>
        <div className="text-sm text-white/60 truncate">{siteData.song.artist}</div>
        <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Duraklat" : "Oynat"}
        className="shrink-0 w-14 h-14 rounded-full grid place-items-center text-2xl transition-transform hover:scale-110"
        style={{ background: "linear-gradient(135deg, #f9a8d4, #a855f7)", boxShadow: "0 10px 30px rgba(168,85,247,0.5)" }}
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <audio ref={ref} src={siteData.song.src} preload="metadata" />
    </div>
  );
}
