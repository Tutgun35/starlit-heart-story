import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data";

export function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center min-h-[520px]">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="envelope"
            type="button"
            onClick={() => setOpen(true)}
            className="relative aspect-[3/2] w-full max-w-md cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.6 }}
          >
            {/* Envelope body */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(160deg, #fdf2f8 0%, #fce7f3 50%, #f5d0fe 100%)" }}>
              {/* Flap */}
              <div className="absolute inset-x-0 top-0 h-1/2"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "linear-gradient(160deg, #f9a8d4, #e9d5ff)" }} />
              {/* Wax seal */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                style={{ background: "radial-gradient(circle at 30% 30%, #db2777, #9d174d)" }}>
                <span className="text-white">💜</span>
              </div>
            </div>
            <p className="absolute -bottom-10 inset-x-0 text-center text-white/70 tracking-widest text-sm uppercase">
              {siteData.letter.envelopeLabel} — dokun
            </p>
          </motion.button>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full text-left"
            style={{ background: "linear-gradient(160deg, rgba(253,242,248,0.95), rgba(245,208,254,0.9))" }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-purple-900">{siteData.letter.title}</h3>
            <p className="mt-6 whitespace-pre-line leading-relaxed text-purple-950/90 font-body">
              {siteData.letter.body}
            </p>
            <p className="mt-8 font-display italic text-xl text-pink-800 text-right">
              {siteData.letter.signature}
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(false); }}
              className="mt-6 text-xs uppercase tracking-widest text-purple-800/70 hover:text-purple-900"
            >
              ← Zarfı kapat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
