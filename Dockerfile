# Étape 1 : Builder le site avec Node
FROM node:21 as builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build
RUN npm run export

# Étape 2 : Copier les fichiers exportés dans NGINX
FROM nginx:1.27-alpine

COPY --from=builder /app/out /usr/share/nginx/html
