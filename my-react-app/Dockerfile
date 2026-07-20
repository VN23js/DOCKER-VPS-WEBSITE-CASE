# ЭТАП 1: Сборка проекта
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Здесь создается папка /app/dist

# ЭТАП 2: Создание легкого образа для Nginx
FROM nginx:alpine
# Копируем результат сборки в стандартную папку Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Копируем свой конфиг Nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
