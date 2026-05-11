export const SITE = {
  name: "PIT TRADING ELITE",
  tagline: "كلشي لي تحتاجو في مكان واحد",
  subtitle: "متاجر إلكترونية | إعلانات ممولة | دورات تداول | خدمات رقمية",
  description: "نقدم لك كل ما تحتاجه لنجاح مشروعك الرقمي",
  instagram: "https://www.instagram.com/elite_tradingpit",
  tiktok: "https://www.tiktok.com/@elite.tradingpit?_r=1&_t=ZN-96HNwS4fozG",
  telegram: "https://t.me/elite_tradingpit",
  courseHub: "https://agent-69fe345076ca224ccce07afb--elite-course-hub.netlify.app",
  email: "elite_tradingpit@example.com",
} as const;

export const SERVICES = [
  {
    id: "stores",
    title: "متاجر إلكترونية",
    subtitle: "ننشئ لك متجر احترافي جاهز للبيع والربح",
    icon: "🛒",
    platforms: ["Shopify", "YouCan", "Flexdz", "Hanotify"],
    features: [
      "تصميم احترافي عصري متجاوب مع جميع الأجهزة",
      "رفع المنتجات مع وصف جذاب وتحسين SEO",
      "ربط جميع بوابات الدفع وخيارات الشحن",
      "إعداد جميع الصفحات الأساسية والتطبيقات",
      "دعم فني متابعة بعد التسليم",
    ],
    cta: "اطلب متجرك الآن",
  },
  {
    id: "ads",
    title: "إعلانات ممولة",
    subtitle: "إعلانات مدروسة .. نتائج مضمونة",
    icon: "📢",
    platforms: ["Meta Ads", "Instagram Ads"],
    features: [
      "تصميم محتوى إعلاني يجذب ويبيع",
      "استهداف دقيق للعملاء المناسبين",
      "تحليل البيانات وتطوير الحملات باستمرار",
      "تقارير شفافة توضح كل خطوة ونتيجة",
      "زيادة المبيعات والأرباح",
    ],
    cta: "ابدأ حملتك الآن",
  },
  {
    id: "courses",
    title: "دورات تداول",
    subtitle: "جميع دورات التداول في مكان واحد",
    icon: "📊",
    platforms: ["Telegram"],
    features: [
      "محتوى احترافي مجرب من أفضل المتداولين",
      "قناة خاصة وآمنة على التلغرام",
      "وصول مدى الحياة مع التحديثات المستمرة",
      "Smart Money | Price Action | Supply & Demand | Risk Management",
      "دورات جديدة بشكل دوري",
    ],
    cta: "اشترك الآن",
    link: SITE.courseHub,
  },
  {
    id: "digital",
    title: "خدمات رقمية",
    subtitle: "حلول رقمية مبتكرة لتنمية أعمالك",
    icon: "💎",
    platforms: ["Visa", "خدمات"],
    features: [
      "منتجات رقمية متنوعة",
      "خدمات استشارية احترافية",
      "حلول مخصصة حسب احتياجك",
      "دعم فني متكامل",
      "جودة عالية وأسعار منافسة",
    ],
    cta: "اطلب خدمتك",
  },
] as const;

export const NAV_ITEMS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "تواصل", href: "#contact" },
] as const;

export const STATS = [
  { label: "متجر إلكتروني", value: "+50" },
  { label: "حملة إعلانية", value: "+200" },
  { label: "متدرب", value: "+1000" },
  { label: "رضا العملاء", value: "98%" },
] as const;
