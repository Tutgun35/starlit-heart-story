// ============================================================
//  💜  TÜM İÇERİK BU DOSYADAN YÖNETİLİR  💜
//  İsimler, tarihler, fotoğraflar, mektup, müzik, şifre...
//  Sadece burayı düzenle, site otomatik güncellenecek.
// ============================================================

export const siteData = {
  // ---------- İSİMLER ----------
  names: {
    her: "Tuğba",        // Kız arkadaşının adı
    me: "Tutkun",           // Senin adın
    couple: "Tuğba 💜 Tutkun",       // Site başlığında
  },

  // ---------- BAŞLANGIÇ TARİHİ ----------
  // Birlikte olduğunuz tarih (YYYY-MM-DDTHH:mm:ss)
  startDate: "2025-12-01T00:00:00",

  // ---------- ANA SAYFA ----------
  hero: {
    line1: "Hoşgeldin bebeğim.",
    line2: "Bugün, birlikte bir kez daha en güzel anılarımıza döneceğiz.",
    button: "Başlayalım",
  },

  // ---------- FOTOĞRAF GALERİSİ ----------
  // Yeni fotoğraf eklemek için sadece bu diziye yeni bir { src, caption } ekle.
  gallery: [
    { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200", caption: "Seni çocukluğumdan beri tanıyorum." },
    { src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200", caption: "İlk fotoğrafımız" },
    { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200", caption: "Gotham city" },
    { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200", caption: "Ekitike" },
    { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=1200", caption: "Oyunları unutmak olmaz" },
    { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200", caption: "Birlikte" },
  ],

  // ---------- ANILARIMIZ (ZAMAN TÜNELİ) ----------
  timeline: [
    { date: "14 Şubat 2023", title: "Yıl Dönümümüz",  text: "Yeniden doğduğum gün." },
    { date: "15 Şubat 2023", title: "İlk Mesaj",    text: "O minik parmaklarınla yazdığın ilk mesaj." },
    { date: "20 Şubat 2023", title: "İlk Buluşma",  text: "Güzel gözlerine canlı,canlı baktığım ilk gün." },
    { date: "01 Mart 2023",  title: "İlk Fotoğraf", text: "İlk kez birlikte kadraja girdik." },
    { date: "10 Temmuz 2023",title: "İlk Hediye",    text: "Bizim için her zaman anlamlı olacak." },
    { date: "Bugün",         title: "Bugün",        text: "Ve her gün seni biraz daha çok seviyorum." },
  ],

  // ---------- MEKTUP ----------
  letter: {
    envelopeLabel: "Sana bir mektup...",
    title: "Sevgili Aşkım,",
    body: `Seninle geçirdiğim her an, hayatımın en güzel sahnesi.
Gülüşün en sevdiğim melodi, gözlerin en huzurlu limanım.
Seni tanımadan önceki hayatımı hatırlamıyorum bile.
Sen, benim en güzel tesadüfüm, en anlamlı seçimimsin.

Bu site, sana olan sevgimin küçücük bir yansıması.
Sonsuza dek seninim.`,
    signature: "— Sonsuza dek seninim",
  },

  // ---------- SENİ NEDEN SEVİYORUM ----------
  reasons: [
    { emoji: "💜", title: "Gülüşün",       text: "Dünyayı aydınlatıyor." },
    { emoji: "✨", title: "Kalbin",         text: "Bildiğim en güzel yer." },
    { emoji: "🌙", title: "Sesin",          text: "En huzurlu ninnim." },
    { emoji: "🌸", title: "Kokun",          text: "Evim gibi hissettiriyor." },
    { emoji: "☀️", title: "Enerjin",        text: "Her sabah beni uyandıran güneş." },
    { emoji: "💫", title: "Ruhun",          text: "Benim ruh eşim." },
  ],

  // ---------- ŞARKIMIZ ----------
  song: {
    title: "Drugs N Hella Melodies",
    artist: "Don Toliver ft. Kali Uchis",
    // MP3 dosyanı public/ klasörüne koy ve buraya yolunu yaz. Örn: "/our-song.mp3"
    src: "https://cdn.pixabay.com/audio/2022/10/25/audio_2c9b1c6a1f.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
  },

  // ---------- GELECEK HAYALLERİMİZ ----------
  dreams: [
    { emoji: "🏡", title: "Aynı Ev",              text: "Sabah kahvelerimizi paylaşacağımız." },
    { emoji: "✈️", title: "Birlikte Gezmek",      text: "Dünyanın her köşesinde el ele." },
    { emoji: "🐶", title: "Evcil Hayvanımız",     text: "Küçük ailemizin üçüncü üyesi." },
    { emoji: "💍", title: "Evlilik",               text: "Sonsuza dek 'evet' demek." },
    { emoji: "❤️", title: "Birlikte Yaşlanmak",   text: "Aynı balkonda, aynı ellerle." },
  ],

  // ---------- GİZLİ SAYFA ----------
  secret: {
    // ÖNEMLİ: Buradaki şifreyi istediğin zaman değiştir.
    password: "seviyorum",
    hint: "İpucu: Sana her gün söylediğim kelime 💜",
    title: "Sadece Sana Özel",
    body: `Bu bölüm sadece ve sadece sana ait.
Seni ne kadar sevdiğimi anlatmaya kelimeler yetmez,
ama denemekten asla vazgeçmeyeceğim.

Sen benim en büyük şansım, en tatlı kaderim,
ve en güzel 'iyi ki'msin. 💜`,
  },

  // ---------- FİNAL ----------
  final: {
    line1: "Seni bugün de...",
    line2: "Yarın da...",
    line3: "Her zaman seveceğim.",
    hint: "Güzeller güzeli sevgilim 💜",
  },
};

export type SiteData = typeof siteData;
