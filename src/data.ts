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
    { src: "/public/resim2.png", caption: "Seni çocukluğumdan beri tanıyorum." },
    { src: "/public/resim5.jpeg", caption: "İlk fotoğrafımız" },
    { src: "/public/resim 4.jpg", caption: "Gotham city" },
    { src: "/public/resim 6.png", caption: "Ekitike" },
    { src: "/public/resim1.jpg", caption: "Oyunları unutmak olmaz (resme tıkla)" } ,
    { src: "/public/resim3.png", caption: "Birlikte" },
  ],

  // ---------- ANILARIMIZ (ZAMAN TÜNELİ) ----------
  timeline: [
    { date: "11 Aralık 2025", title: "İlk Mesaj",    text: "O minik parmaklarınla yazdığın ilk mesaj." },
    { date: "11 Ocak 2026", title: "Yıl Dönümümüz",  text: "Yeniden doğduğum gün." },
    { date: "26 Ocak 2026 (Ekitike)",title: "İlk Hediye",    text: "Bizim için her zaman anlamlı olacak." },
    { date: "14 Mayıs 2026", title: "İlk Buluşma",  text: "Güzel gözlerine canlı,canlı baktığım ilk gün." },
    { date: "16 Mayıs 2026",  title: "İlk Fotoğraf", text: "İlk kez birlikte kadraja girdik." },
    { date: "Bugün",         title: "Bugün",        text: "Ve her gün seni biraz daha çok seviyorum." },
  ],

  // ---------- MEKTUP ----------
  letter: {
    envelopeLabel: "Sana bir mektup...",
    title: "Minik bebeğim,",
    body: `Zaman tanışmamızı geciktirmiş olabilir ama kalbim seni hep tanıyor gibiydi.
    Seni tanıdığım ilk günden beri, sanki küçüklüğümden itibaren hayatımdaymışsın gibi hissettirdiğin için teşekkür ederim.
    Mesafeler uzasa da zaman geçse de,kalbim hep sana ait kalacak

Seni seviyorum.
  `,
    signature: "— Tandık geldi mi sevgilim",
  },

  // ---------- SENİ NEDEN SEVİYORUM ----------
  reasons: [
    { emoji: "💜", title: "Gülüşün",       text: "Dünyayı aydınlatıyor." },
    { emoji: "✨", title: "Kalbin",         text: "Bildiğim en güzel yer." },
    { emoji: "🌙", title: "Sesin",          text: "İçimi ısıtıyor." },
    { emoji: "🌸", title: "Kokun",          text: "Evim gibi hissettiriyor." },
    { emoji: "☀️", title: "Enerjin",        text: "Her sabah beni uyandıran güneş." },
    { emoji: "🤎", title: "Gözlerin",          text: "Her seferinde yeniden hayran kalıyorum." },
  ],

  // ---------- ŞARKIMIZ ----------
  song: {
    title: "Drugs N Hella Melodies",
    artist: "Don Toliver ft. Kali Uchis",
    // MP3 dosyanı public/ klasörüne koy ve buraya yolunu yaz. Örn: "/our-song.mp3"
    src: "/song.mp3.mp3",
    cover: "/public/müzikpp.png",
  },

  // ---------- GELECEK HAYALLERİMİZ ----------
  dreams: [
    { emoji: "🏡", title: "Aynı Ev",              text: "Günaydın mesajı değil, günaydın öpücüğü" },
    { emoji: "🎮", title: "Gaming Odamız",        text: "Birlikte oyun oynayıp saatlerin nasıl geçtiğini anlamamak." },
    { emoji: "🧳", title: "Yeni Rotalar",         text: "Her şehirde bize ait bir anı bırakmak." },
    { emoji: "🌅", title: "Yıllar Sonra Bile",    text: "Bugünkü gibi birbirimize gülümsemeye devam etmek." },
    { emoji: "❤️", title: "Birlikte Yaşlanmak",   text: "Yıllar geçse de elini ilk günkü gibi tutabilmek." },
  ],

  // ---------- GİZLİ SAYFA ----------
  secret: {
    // ÖNEMLİ: Buradaki şifreyi istediğin zaman değiştir.
    password: "seviyorum",
    hint: "İpucu: Sana her gün söylediğim kelime 💜",
    title: "Güzel sevgilim",
    body: `Kahverengi gözlerine her baktığımda, sanki bütün karmaşa bir anda sessizliğe dönüşüyor. 
    O minicik ellerini tuttuğum an, dünyanın en doğru yerinde olduğumu hissediyorum. 
    Güzelliğin ise sadece gördüğümden ibaret değil; gülüşünde, bakışında ve bana hissettirdiğin her şeyde. 
    Seni izledikçe, her gün yeniden hayran oluyorum. 💜`,
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
