# Étape 1 : Build Next.js
FROM node:21 as builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build
RUN npm run export

# Étape 2 : NGINX pour servir le site statique
FROM nginx:1.27-alpine

COPY --from=builder /app/out /usr/share/nginx/html
