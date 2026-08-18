# Lyntrix

## Persistent analytics

The visitor counter uses an Upstash Redis database connected through the Vercel Marketplace. It counts a visitor once per UTC day and starts from `100`; the first counted visit is therefore shown as `101`.

Set up the database in Vercel:

1. Open the Vercel project and go to **Marketplace → Storage → Upstash Redis**.
2. Create a Redis database and connect it to this project.
3. Make sure these variables are available in the project environments:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
ANALYTICS_SALT
```

`ANALYTICS_SALT` should be a long random value and must not be committed. Without the database variables, the UI safely displays the configured initial value `000100` but cannot persist new visits.

> _Redefining digital presence. One interface at a time._

Lyntrix is a futuristic, animated, and highly customizable personal resume interface designed to showcase your identity with elegance, motion, and impact. Built for developers, designers, and dreamers who believe that personal branding deserves premium aesthetics.

🔗 Visit here: https://aristra.top

---

## ✨ Features

- ⚡ **Fluid Motion Design** – High-end UI transitions and micro-interactions
- 🧩 **Modular Structure** – Sections you can enable/disable or extend  
- 🌓 **Dark Mode Ready** – Built-in support for light/dark UI  
- 🌐 **Responsive & Mobile-first** – Optimized for all devices  
- 🔗 **Link-rich** – Showcase your work, social links, and projects
- 🎵 **Music Card** – Play your favorite songs and using Lyntrics

---

## 🚀 Getting Started

```bash
git clone https://github.com/AristraHatsuyu/lyntrix.git
cd lyntrix
npm install
npm run dev
```

Visit http://localhost:3000 to see your resume come alive.

The first run creates `assets/profile.json` from `assets/profile.temp.json` automatically if it is missing. You can also create it manually:

```bash
cp assets/profile.temp.json assets/profile.json
```

⸻

🛠️ Configuration

You can customize the layout in `/pages/index.vue` and profile data in `/assets/profile.json`.

Use `/assets/profile.temp.json` as the starter template.

⸻

📦 Built with a bit of obsession for detail ✨
