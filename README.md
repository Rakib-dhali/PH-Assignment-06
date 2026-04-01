
**DigiTools** is a sleek digital product storefront where developers, creators, and teams can discover and collect premium tools — from design kits to productivity suites. It's not just a shopping cart; it's a curated experience built with modern React, where every interaction feels instant and intentional.
Crafted as Assignment 06 of Programming Hero Batch 13 (Game Changer Track), DigiTools pushes beyond static UIs into real product thinking — live cart state, smart duplicate prevention, async data loading with Suspense, and pixel-perfect responsive design.

---
## 🔗 Live Demo

[View Live](https://ph-assignment-06-eta.vercel.app/)
---

## ⚡ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library with hooks & Suspense |
| **Vite 6** | Lightning-fast dev server & bundler |
| **Tailwind CSS 4** | Utility-first responsive styling |
| **React Toastify** | Toast notification system |
| **React Icons** | Icon library (Fi, Fa sets) |
| **JavaScript (ES2024)** | Core language |

---

## ✨ Features

### 🛍️ Smart Cart System
Add products to your cart with real-time badge count on the navbar. Already added an item? DigiTools will let you know with an instant warning — no duplicates, ever.

### ⚡ Suspense-Powered Data Fetching
Products are loaded using React's `Suspense` and a promise-based fetch pattern, giving users a smooth loading experience without layout shifts or blocking renders.

### 📱 Fully Responsive UI
From mobile to 4K — DigiTools adapts to every screen size using Tailwind's responsive breakpoints, a mobile hamburger menu, and fluid layouts that look great everywhere.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Rakib-dhali/PH-Assignment-06.git

# Navigate into the project
cd PH-Assignment-06

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Cart.jsx          # Single product card with add-to-cart logic
│   ├── Carts.jsx         # Product grid using Suspense
│   ├── AddedProducts.jsx # Cart view with remove functionality
│   └── Menu.jsx          # Mobile hamburger menu
├── sections/
│   ├── Nav.jsx           # Fixed navbar with cart badge
│   ├── Banner.jsx        # Hero section
│   ├── Stats.jsx         # Stats section
│   ├── DigitalTools.jsx  # Main product/cart toggle section
│   ├── StepsSection.jsx  # How it works
│   ├── Pricing.jsx       # Pricing plans
│   └── Footer.jsx        # Footer
└── App.jsx
```

---

## 👨‍💻 Author

<div align="center">

**Rakib**

Self-taught Full-Stack Developer · Programming Hero Batch 13

[![GitHub](https://img.shields.io/badge/GitHub-Rakib--dhali-181717?style=for-the-badge&logo=github)](https://github.com/Rakib-dhali)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-4F39F6?style=for-the-badge&logo=vercel&logoColor=white)](https://rakib-dhali-portfolio.vercel.app)

<br/>

*Building in public. Learning every day.*

</div>

---

<div align="center">

Made with 💜 using React & Tailwind CSS

⭐ **Star this repo if you found it helpful!**

</div>
