/* =========================================================
   町家の宿 鞠屋 — main.js
   ========================================================= */

/* ---------- 設定（URLが決まったらここを書き換えてください） ---------- */
const CONFIG = {
  bookingUrl: "#", // 予約サイトのURL
};

/* ---------- 翻訳データ（日本語は HTML 内の文言をそのまま使用） ---------- */
const I18N = {
  en: {
    "meta.title": "Machiya Stay Mariya | A Private Townhouse Stay in Imaicho, Nara",
    "nav.concept": "Concept",
    "nav.stay": "Our Stay",
    "nav.area": "Imaicho",
    "nav.access": "Access",
    "nav.contact": "Contact",
    "reserve": "Book Now",
    "hero.copy": "Embraced by<br>the timeless beauty of Imaicho,<br>A private machiya<br>to savor everyday local life",
    "concept.title": "Live like a local in a machiya",
    "concept.p1": "Imaicho in Nara, where Muromachi-period streetscapes still remain.<br>Mariya is a traditional townhouse in this town, rented exclusively to one group at a time.",
    "concept.p2": "Soft light through wooden lattices, the scent of Yoshino cedar, neighbors passing by in the lane.<br>Take your time and enjoy the everyday life of the town that sightseeing alone cannot offer.",
    "stay.title": "Our Stay",
    "stay.lead": "We carefully renovated the house for comfort while preserving the character of a traditional machiya.<br>Enjoy the entire house privately with family or friends.",
    "stay.living.title": "Living Room & Bedrooms",
    "stay.living.text": "Relax at your leisure beneath a ceiling of sturdy exposed beams.",
    "stay.atrium.title": "Atrium & Kitchen",
    "stay.atrium.text": "A light-filled atrium.<br>Cook and enjoy local ingredients in the kitchen.",
    "stay.exterior.title": "The Machiya Facade",
    "stay.exterior.text": "Wooden lattices and a tiled roof.<br>Look for the noren curtain with our temari crest.",
    "area.title": "The Town of Imaicho",
    "area.p1": "Imaicho is a historic town designated as a national Important Preservation District for Groups of Traditional Buildings.<br>Townhouses dating back to the Muromachi period line the streets, still alive with the daily lives of residents.",
    "area.p2": "A quiet morning stroll through the lanes, a moment at a machiya café.<br>Some faces of Imaicho can only be discovered by staying the night.",
    "access.title": "Access",
    "access.nameLabel": "Name",
    "access.name": "Machiya Stay Mariya",
    "access.addressLabel": "Address",
    "access.address": "1-9-10 Imaicho, Kashihara, Nara 634-0812, Japan",
    "access.trainLabel": "By Train",
    "access.train": "Approx. 10 min walk from Yagi-nishiguchi Station (Kintetsu Kashihara Line)<br>Approx. 15 min walk from Yamato-Yagi Station (Kintetsu Osaka / Kashihara Lines)",
    "contact.title": "Contact",
    "contact.lead": "Please feel free to contact us about reservations or any questions.",
    "contact.tel": "Phone",
    "contact.mail": "Email",
  },
  zh: {
    "meta.title": "町家之宿 鞠屋｜奈良·今井町的整栋包租民宿",
    "nav.concept": "理念",
    "nav.stay": "设施介绍",
    "nav.area": "今井町",
    "nav.access": "交通",
    "nav.contact": "联系我们",
    "reserve": "立即预订",
    "hero.copy": "沐浴今井町的传统之美，<br>品味当地日常的整栋包租民宿",
    "concept.title": "像当地人一样住在町家",
    "concept.p1": "奈良·今井町，至今仍保留着室町时代的街景。<br>鞠屋是坐落于此的一栋町家，整栋包租给每一组客人。",
    "concept.p2": "透过木格窗的柔和光线、吉野杉的清香、街上往来行人的气息。<br>请慢慢享受观光无法体验的小镇日常。",
    "stay.title": "设施介绍",
    "stay.lead": "在保留传统町家风貌的同时，我们精心翻修，让您住得舒适。<br>可与家人或朋友包下整栋房屋。",
    "stay.living.title": "客厅与卧室",
    "stay.living.text": "在粗壮横梁贯穿的天花板下，尽情放松休憩。",
    "stay.atrium.title": "挑空与厨房",
    "stay.atrium.text": "阳光洒落的挑空空间。<br>也可在厨房品尝当地食材。",
    "stay.exterior.title": "町家外观",
    "stay.exterior.text": "格子门窗与瓦屋顶构成的美丽外观。<br>以绘有手鞠纹样的门帘为标志。",
    "area.title": "今井町这座小镇",
    "area.p1": "今井町是被选定为日本国家重要传统建筑群保存地区的历史小镇。<br>室町时代延续至今的町家鳞次栉比，居民的生活依然在此延续。",
    "area.p2": "清晨在静谧小巷中散步，在町家咖啡馆小憩。<br>只有住下来，才能领略今井町的另一番面貌。",
    "access.title": "交通",
    "access.nameLabel": "名称",
    "access.name": "町家之宿 鞠屋",
    "access.addressLabel": "地址",
    "access.address": "〒634-0812 日本奈良县橿原市今井町1-9-10",
    "access.trainLabel": "电车",
    "access.train": "近铁橿原线「八木西口站」步行约10分钟<br>近铁大阪线·橿原线「大和八木站」步行约15分钟",
    "contact.title": "联系我们",
    "contact.lead": "预订或咨询，欢迎随时与我们联系。",
    "contact.tel": "电话",
    "contact.mail": "邮箱",
  },
  ko: {
    "meta.title": "마치야 숙소 마리야｜나라·이마이초의 독채 숙소",
    "nav.concept": "콘셉트",
    "nav.stay": "시설 소개",
    "nav.area": "이마이초",
    "nav.access": "오시는 길",
    "nav.contact": "문의",
    "reserve": "예약하기",
    "hero.copy": "이마이초의 전통미에 둘러싸여,<br>지역의 일상을 맛보는 독채 숙소",
    "concept.title": "마치야에서 현지인처럼 머물다",
    "concept.p1": "무로마치 시대의 거리 풍경이 지금도 남아 있는 나라·이마이초.<br>마리야는 이 마을에 자리한 마치야를 한 채 통째로 빌려 드리는 숙소입니다.",
    "concept.p2": "격자 너머로 스며드는 부드러운 빛, 요시노 삼나무 향기, 거리를 오가는 사람들의 기척.<br>관광만으로는 만날 수 없는 마을의 일상을 여유롭게 즐겨 보세요.",
    "stay.title": "시설 소개",
    "stay.lead": "전통 마치야의 정취는 그대로 살리고, 편안하게 지내실 수 있도록 정성껏 개보수했습니다.<br>가족, 친구와 함께 한 채를 단독으로 이용하실 수 있습니다.",
    "stay.living.title": "거실, 침실",
    "stay.living.text": "굵은 대들보가 가로지르는 천장 아래에서 느긋하게 쉬실 수 있습니다.",
    "stay.atrium.title": "개방형 천장과 주방",
    "stay.atrium.text": "햇살이 쏟아지는 개방형 천장.<br>주방에서 현지 식재료를 즐길 수도 있습니다.",
    "stay.exterior.title": "마치야의 외관",
    "stay.exterior.text": "격자와 기와지붕이 아름다운 외관.<br>데마리 문양이 그려진 노렌이 표시입니다.",
    "area.title": "이마이초라는 마을",
    "area.p1": "이마이초는 국가 중요전통적건조물군 보존지구로 선정된 역사 깊은 마을입니다.<br>무로마치 시대부터 이어진 마치야가 늘어서 있고, 지금도 사람들의 생활이 숨 쉬고 있습니다.",
    "area.p2": "고요한 아침 골목 산책, 마치야 카페에서의 한때.<br>머물러야만 맛볼 수 있는 이마이초의 표정이 있습니다.",
    "access.title": "오시는 길",
    "access.nameLabel": "명칭",
    "access.name": "마치야 숙소 마리야",
    "access.addressLabel": "주소",
    "access.address": "〒634-0812 일본 나라현 가시하라시 이마이초 1-9-10",
    "access.trainLabel": "전철",
    "access.train": "긴테쓰 가시하라선 '야기니시구치역'에서 도보 약 10분<br>긴테쓰 오사카선·가시하라선 '야마토야기역'에서 도보 약 15분",
    "contact.title": "문의",
    "contact.lead": "예약 및 문의 사항은 언제든지 편하게 연락 주세요.",
    "contact.tel": "전화",
    "contact.mail": "이메일",
  },
};

const LANGS = ["ja", "en", "zh", "ko"];
const MAP_HL = { ja: "ja", en: "en", zh: "zh-CN", ko: "ko" };

/* 日本語の原文を HTML から取り込む */
I18N.ja = { "meta.title": document.title };
document.querySelectorAll("[data-i18n]").forEach((el) => {
  I18N.ja[el.dataset.i18n] = el.innerHTML.trim();
});

function storageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  const saved = storageGet("mariya-lang");
  if (LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "ja").toLowerCase().slice(0, 2);
  return LANGS.includes(nav) ? nav : "en";
}

function setLang(lang, updateUrl) {
  const dict = I18N[lang] || I18N.ja;
  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-current", on);
    btn.setAttribute("aria-pressed", on);
  });
  // 地図の表示言語
  const map = document.getElementById("map-frame");
  if (map) {
    const url = new URL(map.src);
    if (url.searchParams.get("hl") !== MAP_HL[lang]) {
      url.searchParams.set("hl", MAP_HL[lang]);
      map.src = url.toString();
    }
  }
  storageSet("mariya-lang", lang);
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }
}

/* ---------- 初期化 ---------- */
document.querySelectorAll(".js-booking-link").forEach((a) => (a.href = CONFIG.bookingUrl));

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.lang, true);
    closeMenu();
  });
});
setLang(detectLang(), false);

/* ---------- スマホメニュー ---------- */
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("global-nav");
function closeMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

/* ---------- ロゴ：クリックでページの一番上へ ---------- */
/* ヘッダーは画面上部に固定されているため、"#top" のリンクだけでは動かない。直接一番上までスクロールする */
document.querySelectorAll('a[href="#top"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    closeMenu();
  });
});

/* ---------- 平面図の拡大表示 ---------- */
/* クリックで単独表示、もう一度クリック（または Esc キー）で閉じる */
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.innerHTML = '<img alt="">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector("img");

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.classList.remove("is-locked");
}
document.querySelectorAll(".js-lightbox").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const img = link.querySelector("img");
    lightboxImg.src = link.getAttribute("href");
    lightboxImg.alt = img ? img.alt : "";
    lightbox.classList.add("is-open");
    document.body.classList.add("is-locked");
  });
});
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});

/* ---------- メインビジュアルのスライドショー ---------- */
const slides = document.querySelectorAll(".hero-slide");
let current = 0;
if (slides.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, 6000);
}

/* ---------- 施設の紹介：写真ブロックのスライドショー ---------- */
document.querySelectorAll(".photo-slider").forEach((box, i) => {
  const imgs = box.querySelectorAll("img");
  if (imgs.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let n = 0;
  // ブロックごとに切り替えのタイミングを少しずらす
  setTimeout(() => {
    setInterval(() => {
      imgs[n].classList.remove("is-active");
      n = (n + 1) % imgs.length;
      imgs[n].classList.add("is-active");
    }, 5000);
  }, i * 1500);
});

/* ---------- スクロールでフェードイン ---------- */
const fadeTargets = document.querySelectorAll(
  ".section-head, .concept-body, .concept-images, .floorplan, .stay-item, .area-visual, .area-text p, .area-sub, .access-inner, .contact-boxes"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  fadeTargets.forEach((el) => {
    el.classList.add("js-fade");
    io.observe(el);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
