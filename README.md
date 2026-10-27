# Vochranka Web

Moderní webová prezentace postavená na frameworku [Astro](https://astro.build/) a [Tailwind CSS v4](https://tailwindcss.com/).

## 🚀 Rychlý start

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Sestavení produkčního buildu
npm run build

# Lokální náhled buildu
npm run preview
```

## 📁 Architektura projektu

```text
/
├── public/              # Statické soubory (obrázky, favicon, fonts...)
├── src/
│   ├── assets/          # Optimalizované assety pro Astro
│   ├── components/      # UI komponenty (.astro)
│   ├── layouts/         # Šablony rozvržení stránek (Layout.astro)
│   ├── pages/           # Souborové routování stránek (index.astro...)
│   └── styles/          # Globální styly (global.css s Tailwind v4)
├── astro.config.mjs     # Konfigurace Astro & Tailwind Vite pluginu
├── tsconfig.json        # TypeScript konfigurace a path aliasy (@components/* apod.)
└── package.json
```

## 🛠 Použité technologie
- **Astro 5**: Extrémně rychlý content-driven web framework
- **Tailwind CSS v4**: Moderní utility-first CSS engine běžící přímo přes Vite plugin
- **TypeScript**: Typová bezpečnost a podpora aliasů
