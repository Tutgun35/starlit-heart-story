import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {siteData.gallery.map((g, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="glass rounded-3xl overflow-hidden group aspect-[4/5] relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <img
              src={g.src}
              alt={g.caption}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left text-white/90 font-display text-lg">
              {g.caption}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={siteData.gallery[active].src}
              alt={siteData.gallery[active].caption}
              className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
