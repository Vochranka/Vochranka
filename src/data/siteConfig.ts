/**
 * Global Site Configuration & Design Single-Source-of-Truth
 * Centralizes brand metadata, contact info, pricing constants, and navigation.
 */

export const SITE_CONFIG = {
  name: "Vochranka",
  brandName: "Vochranka",
  metaTitle: "Vochranka | Bezpečnostní systém",
  metaDescription: "Diskrétní bezdrátové tísňové tlačítko pod stůl a pult. Hlasitá odstrašující siréna na místě a tichá nouzová SMS rodině či blízkám do 2 vteřin. Bez vrtání a kabelů.",

  contact: {
    phone: "+420 777 123 456",
    phoneHref: "tel:+420777123456",
    email: "info@vochranka.cz",
    emailHref: "mailto:info@vochranka.cz",
    address: "Praha, ČR",
    addressDetail: "Osobní zkoušky po domluvě",
  },

  pricing: {
    basePrice: 2990,
    basePriceFormatted: "2 990 Kč",
    monthlyPrice: 83,
    monthlyPriceFormatted: "83 Kč",
    yearlyRenewalPrice: 999,
    yearlyRenewalPriceFormatted: "999 Kč",
    extraButtonPrice: 699,
    extraButtonPriceFormatted: "699 Kč",
    trialDays: 14,
  },

  navLinks: [
    { label: "K čemu slouží", href: "#vyuziti" },
    { label: "Umístění", href: "#umisteni" },
    { label: "Instalace", href: "#instalace" },
    { label: "Ceník", href: "#cenik" },
    { label: "Časté dotazy", href: "#faq" },
  ],

  heroPlaces: [
    "V ORDINACI?",
    "V KANCELÁŘI?",
    "V KAVÁRNĚ?",
    "V SALONU?",
    "NA RECEPCI?",
    "NA PUMPĚ?",
  ],
  stats: [
    {
      value: "2 s",
      label: "Podržením spustíte sirénu",
    },
    {
      value: "24/7",
      label: "Monitoring a technická podpora",
    },
    {
      value: "14 dní",
      label: "Na vyzkoušení, osobní předvedení",
    },
  ],

  guarantees: [
    "Žádné pronájmy",
    "Žádné montážní poplatky",
    "14 dní na vyzkoušení",
  ],

  installationSteps: [
    {
      title: "Zapojit",
      line1: "Zasuňte sirénu a centrálu do zásuvky.",
      line2: "Samy se ihned spárují.",
    },
    {
      title: "Přicvaknout",
      line1: "Tlačítko přilne přímo na povrch, nebo",
      line2: "na kovovou podložku.",
    },
    {
      title: "Otestovat",
      line1: "Podržením vyzkoušíte sirénu i",
      line2: "funkčnost doručení SMS zpráv.",
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
