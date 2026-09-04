# 🎰 CS:GO Case Simulator & Case Opening Web Application

Full-stack веб-приложение для симуляции открытия кейсов CS:GO в реальном времени с поддержкой WebSockets, авторизацией и админ-панелью.

[LIVE DEMO](http://petuhcase.duckdns.org)

---

## 🌟 Особенности

- 🎲 **Симуляция открытия кейсов:** Анимация рулетки и выпадения скинов с честной системой выигрыша.
- ⚡ **Real-time обновления:** Использование WebSockets (`socket.io`) для мгновенного обновления выигрышей и живой ленты событий.
- 🔐 **Аутентификация & Авторизация:** Защищенные роуты, хранение сессий и токенов (`cookie-parser`, JWT).
- 🛠️ **Панель администратора:** Добавление и управление кейсами, предметами и шансами выпадения.
- 🐳 **Docker-Ready:** Полная контейнеризация клиентской, серверной частей и базы данных через `docker-compose`.

---

## 🛠️ Технологический стек

### Frontend
- **Framework:** React (Vite)
- **State Management:** Redux Toolkit (Slices для кейсов, профилей, админки и авторизации)
- **Styling:** Tailwind CSS
- **Real-time:** Socket.io-client
- **Language:** JavaScript / TypeScript

### Backend
- **Runtime:** Node.js + Express
- **Database:** MongoDB (Mongoose ORM)
- **Real-time Communication:** Socket.io
- **Security & Utilities:** `dotenv`, `cookie-parser`, `cors`

### DevOps & Infrastructure
- **Containerization:** Docker, Dockerfile
- **Orchestration:** Docker Compose
- **Web Server / Reverse Proxy:** Nginx

---