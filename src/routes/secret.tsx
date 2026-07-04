import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data";

export const Route = createFileRoute("/secret")({
  head: () => ({
    meta: [
      { title: "Gizli Sayfa 💜" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SecretPage,
});

function SecretPage() {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === siteData.secret.password.toLowerCase()) {
      setUnlocked(true); setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <Link to="/" className="text-white/60 hover:text-white text-sm uppercase tracking-widest">← Geri</Link>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.form
              key="lock"
              onSubmit={submit}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="glass-strong rounded-3xl p-8 md:p-12 mt-6 text-center"
            >
              <div className="text-6xl mb-4">🔒</div>
              <h1 className="font-display text-3xl md:text-5xl text-gradient">Gizli Sayfa</h1>
              <p className="mt-3 text-white/70">{siteData.secret.hint}</p>
              <input
                type="password"
                value={value}
                onChange={(e) => { setValue(e.target.value); setError(false); }}
                placeholder="Şifre..."
                className="mt-8 w-full glass rounded-full px-6 py-4 text-center text-white outline-none focus:ring-2 focus:ring-pink-400/60 placeholder:text-white/40"
              />
              {error && <p className="mt-3 text-pink-300 text-sm">Şifre yanlış — tekrar dene 💜</p>}
              <button
                type="submit"
                className="mt-6 px-8 py-3 rounded-full text-white font-medium"
                style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)", boxShadow: "0 10px 30px rgba(168,85,247,0.4)" }}
              >
                Aç
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-8 md:p-12 mt-6 text-center"
            >
              <div className="text-6xl mb-4 animate-soft-pulse">💜</div>
              <h1 className="font-display text-3xl md:text-5xl text-gradient">{siteData.secret.title}</h1>
              <p className="mt-6 whitespace-pre-line leading-relaxed text-white/85 text-lg">
                {siteData.secret.body}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
