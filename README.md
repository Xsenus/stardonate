# 🌌 StarDonate

> Анимационная кнопка на фоне космоса со звёздами, планетами, кометами и вспышками

**StarDonate** — это эффектный мини-проект на React с фоном космоса в стиле sci-fi и анимированной кнопкой. Идеально подходит для лендингов, стримов, или интро на сайт.

---

## 🚀 Быстрый старт

```bash
git clone https://github.com/xsenus/stardonate.git
cd stardonate
npm install
npm start
```

Проект откроется по адресу:  
👉 `http://localhost:3000`

---

## 🪐 Демо

Публичная версия доступна по адресу:  
🌍 [https://xsenus.github.io/stardonate](https://xsenus.github.io/stardonate)

---

## 📁 Структура проекта

```bash
stardonate/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UniverseBackground.js
│   │   ├── UniverseBackground.css
│   │   └── DonateButton.js
│   │   ├── DonateButton.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── ...
```

---

## 🧩 Основные компоненты

- **`UniverseBackground`**  
  Генерирует звёзды, планеты, кометы, вспышки, туманности и пульсирующее солнце. Всё с CSS-анимацией и случайной генерацией.

- **`DonateButton`**  
  Центр экрана. При клике — открывает страницу пожертвования через ЮMoney.

---

## 🌠 Возможности

- Анимированное звёздное небо (разные размеры + мерцание)
- Пульсирующее солнце
- Кометы и метеоры
- Случайные вспышки света
- Планеты, туманности
- Модульная архитектура (каждый эффект — отдельный компонент)
- Лёгкий деплой на GitHub Pages

---

## 📦 Скрипты

```bash
npm start           # Запуск в dev-режиме
npm run build       # Production-сборка
npm run deploy      # Деплой на GitHub Pages
npm run deploy-ftp  # Деплой на FTP (reg.ru и пр.)
npm run lint        # ESLint (если настроен)
npm run format      # Prettier (если настроен)
```

---

## 📤 Деплой

### GitHub Pages

```bash
npm run deploy
```

### FTP (например, на reg.ru)

Создайте `.env` с настройками FTP и запустите:

```bash
npm run deploy-ftp
```

---

## 🛠 Используемые технологии

- ⚛️ React
- 🎨 CSS3 анимации
- 📦 gh-pages, ftp-deploy
- 🚀 GitHub Pages или любой FTP-хостинг

---

## 📄 Лицензия

MIT © [Xsenus](https://github.com/xsenus)
