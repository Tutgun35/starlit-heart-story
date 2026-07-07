import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { siteData } from "@/data";
import { LoveCounter } from "@/components/love-counter";
import { Gallery } from "@/components/gallery";
import { Letter } from "@/components/letter";
import { MusicPlayer } from "@/components/music-player";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seni seviyorum 💜" },
      { name: "description", content: "11 Ocak 2026" },
      { property: "og:title", content: "Bizim Hikâyemiz 💜" },
      { property: "og:description", content: "Her satırı bize, her anısı sana ait bir hikâye." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
} as const;

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative z-10 py-24 md:py-36 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-14 md:mb-20"
    >
      {eyebrow && <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-pink-300/80 mb-4">{eyebrow}</div>}
      <h2 className="font-display text-4xl md:text-6xl text-gradient">{title}</h2>
    </motion.div>
  );
}

function HomePage() {
  const scrollDown = () => {
    document.getElementById("counter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-10"
          >
            <div className="animate-soft-pulse heart-glow text-[8rem] md:text-[12rem] leading-none">💜</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-display text-3xl md:text-5xl leading-tight text-gradient"
          >
            {siteData.hero.line1}
            <br />
            <span className="italic">{siteData.hero.line2}</span>
          </motion.h1>

          <motion.button
            type="button"
            onClick={scrollDown}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 px-8 py-4 rounded-full font-medium text-white text-lg tracking-wide shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
              boxShadow: "0 20px 60px rgba(168,85,247,0.5)",
            }}
          >
            ❤️ {siteData.hero.button}
          </motion.button>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* ---------------- COUNTER ---------------- */}
      <Section id="counter">
        <SectionTitle eyebrow="Birlikte" title="Geçirdiğimiz Süre" />
        <div className="flex justify-center">
          <LoveCounter />
        </div>
      </Section>

      {/* ---------------- GALLERY ---------------- */}
      <Section id="gallery">
        <SectionTitle eyebrow="Anılar" title="Fotoğraf Galerisi" />
        <Gallery />
      </Section>

      {/* ---------------- TIMELINE ---------------- */}
      <Section id="timeline">
        <SectionTitle eyebrow="Zaman Tüneli" title="Anılarımız" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/40 to-transparent" />
          <div className="space-y-16">
            {siteData.timeline.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: left ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative md:w-1/2 pl-12 md:pl-0 ${left ? "md:pr-12 md:mr-auto md:text-right" : "md:pl-12 md:ml-auto"}`}
                >
                  <div className={`absolute top-4 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg shadow-pink-500/50 ${left ? "left-2 md:-right-2 md:left-auto" : "left-2 md:-left-2"}`} />
                  <div className="glass rounded-2xl p-6 md:p-8">
                    <div className="text-xs uppercase tracking-widest text-pink-300 mb-2">{t.date}</div>
                    <h3 className="font-display text-2xl md:text-3xl text-gradient">{t.title}</h3>
                    <p className="mt-3 text-white/75 leading-relaxed">{t.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ---------------- LETTER ---------------- */}
      <Section id="letter">
        <SectionTitle eyebrow="Sadece Sana" title="Sana Mektubum" />
        <Letter />
      </Section>

      {/* ---------------- REASONS ---------------- */}
      <Section id="reasons">
        <SectionTitle eyebrow="Kalbimin Sözleri" title="Seni Neden Seviyorum" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{r.emoji}</div>
              <h3 className="font-display text-2xl text-gradient">{r.title}</h3>
              <p className="mt-2 text-white/70">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------------- SONG ---------------- */}
      <Section id="song">
        <SectionTitle eyebrow="Bize Ait" title="Şarkımız" />
        <MusicPlayer />
      </Section>

      {/* ---------------- DREAMS ---------------- */}
      <Section id="dreams">
        <SectionTitle eyebrow="Yarınlar" title="Gelecek Hayallerimiz" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.dreams.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 text-7xl opacity-20">{d.emoji}</div>
              <div className="text-4xl">{d.emoji}</div>
              <h3 className="mt-4 font-display text-2xl text-gradient">{d.title}</h3>
              <p className="mt-2 text-white/70">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------------- SECRET LINK ---------------- */}
      <Section id="secret-link" className="text-center">
        <Link
          to="/secret"
          className="inline-block glass rounded-full px-8 py-4 font-display text-lg tracking-wide text-white/90 hover:text-white transition"
        >
          🔒 Gizli Sayfa
        </Link>
      </Section>

      {/* ---------------- FINAL ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-3xl"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            className="mx-auto mb-10 heart-glow text-[9rem] md:text-[14rem] leading-none animate-soft-pulse cursor-pointer"
            aria-label="Kalbe dokun"
          >
            💜
          </motion.button>
          <h2 className="font-display text-4xl md:text-6xl text-gradient leading-tight">
            {siteData.final.line1}
            <br />
            {siteData.final.line2}
            <br />
            <span className="italic">{siteData.final.line3}</span>
          </h2>
          <p className="mt-8 text-white/50 text-sm uppercase tracking-[0.4em]">{siteData.final.hint}</p>
        </motion.div>
      </section>
    </main>
  );
}
