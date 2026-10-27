# 🛡️ Vochranka – Oficiální webová prezentace

> Webová prezentace pro **[Vochranka.cz](https://vochranka.cz)** – bezpečnostní systém pro salony, ordinace, kanceláře, kavárny a menší provozovny.

---

## 📌 O projektu

Web slouží jako produktová a prodejní prezentace bezpečnostního zařízení **Vochranka**. 
Prezentuje klíčové vlastnosti produktu (siréna na místě, tiché nouzové SMS do 2 sekund, instalace bez vrtání a kabelů), interaktivní kalkulaci / ceník, sekci o firmě a objednávkový/kontaktní formulář.

### Hlavní přednosti řešení:
- ⚡ **Rychlost a výkon**: Postaveno na Astro s minimálním JavaScriptem pro bleskové načítání.
- 🎨 **Moderní design systém**: Responzivní UI s Tailwind CSS v4 a ikonami Lucide.
- 🧩 **Modulární komponentová architektura**: Snadno rozšiřitelné sekce a centralizovaná konfigurace obsahu.
- 📱 **Mobile-first přístup**: Optimalizováno pro mobily včetně plovoucí lišty rychlé akce (MobileStickyBar).

---

## 🛠️ Technologický stack

| Technologie | Popis |
| :--- | :--- |
| **[Astro 5](https://astro.build/)** | Rychlý webový framework zaměřený na obsah a výkon |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Nová generace utility-first CSS frameworku běžící přes `@tailwindcss/vite` |
| **[TypeScript](https://www.typescriptlang.org/)** | Typová kontrola a bezpečné sdílení konfigurací |
| **[Lucide Astro](https://lucide.dev/)** | Čisté a konzistentní SVG ikony pro Astro komponenty |

---

## 📁 Struktura projektu

```text
vochranka/
├── public/                 # Statické soubory (obrázky produktů, favikony, loga)
├── src/
│   ├── components/         # Znovupoužitelné UI komponenty
│   │   ├── Hero.astro              # Úvodní banner s rotujícím textem
│   │   ├── StatsBar.astro          # Pruh s klíčovými výhodami (1. rok zdarma, 24/7...)
│   │   ├── ProductShowcase.astro   # Představení funkcí a zařízení
│   │   ├── Installation.astro      # 3 kroky zprovoznění bez kabelů
│   │   ├── Placement.astro         # Příklady umístění (pod stůl, za pult...)
│   │   ├── Pricing.astro           # Ceník a balíčky
│   │   ├── OrderForm.astro         # Objednávkový a poptávkový formulář
│   │   ├── Faq.astro               # Často kladené dotazy
│   │   ├── Reviews.astro           # Reference a hodnocení
│   │   └── Navbar.astro / Footer   # Globální navigace a zápatí
│   ├── data/
│   │   └── siteConfig.ts   # Centralizovaná data (ceny, kontakty, odkazy, texty)
│   ├── layouts/
│   │   └── Layout.astro    # Hlavní HTML obálka, SEO meta tagy a fonty
│   ├── pages/
│   │   ├── index.astro     # Hlavní vstupní stránka (Landing Page)
│   │   └── o-nas.astro     # Stránka „O nás“ a příběh firmy
│   └── styles/
│       └── global.css      # Globální styly a nastavení Tailwind v4
├── astro.config.mjs        # Konfigurace Astro a Vite pluginů
├── tsconfig.json           # Nastavení TypeScriptu a path aliasů
└── package.json            # Projektové závislosti a skripty
```

---

## ⚙️ Správa obsahu a konfigurace

Většina klíčových dat (kontakty, telefonní čísla, ceník, benefity, položky navigace) je centralizována v souboru:
📍 **`src/data/siteConfig.ts`**

Při změně cen, telefonního čísla nebo e-mailu stačí upravit hodnoty na tomto jednom místě:
```typescript
export const SITE_CONFIG = {
  name: "Vochranka",
  contact: {
    phone: "+420 776 170 139",
    email: "info@vochranka.cz",
    // ...
  },
  pricing: {
    basePriceFormatted: "2 990 Kč",
    // ...
  }
};
```

---

## 🚀 Rychlý start (Lokální vývoj)

### Požadavky
- [Node.js](https://nodejs.org/) (verze `18.14.1` nebo novější, doporučena verze `20+`)
- `npm` (nebo `pnpm` / `yarn`)

### Instalace a spuštění

1. **Instalace závislostí:**
   ```bash
   npm install
   ```

2. **Spuštění lokálního vývojového serveru:**
   ```bash
   npm run dev
   ```
   Aplikace poběží standardně na adrese `http://localhost:4321`.

3. **Sestavení pro produkci:**
   ```bash
   npm run build
   ```
   Výsledný optimalizovaný statický výstup se vytvoří ve složce `dist/`.

4. **Lokální náhled produkčního buildu:**
   ```bash
   npm run preview
   ```

---

## 🚢 Nasazení (Deployment)

Projekt generuje čistě statický web, který lze snadno nasadit na libovolný moderní hosting:
- **Cloudflare Pages**
- **Vercel**
- **Netlify**
- **Klasický webhosting / FTP / Nginx / Apache** (nahráním obsahu složky `dist/`)

---

## 📄 Licence a vlastník

Provozovatel projektu: **CompuSoft.cz, s.r.o.** (IČO: CZ27207820)  
Všechna práva vyhrazena.
