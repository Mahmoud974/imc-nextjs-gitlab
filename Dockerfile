# Dockerfile

# FROM node:21 as builder

# WORKDIR /app

# COPY . .

# RUN npm ci
# RUN npm run build
# RUN npm run export

# # Copier le dossier `out` généré dans le conteneur Nginx
# COPY --from=builder /app/out /usr/share/nginx/html

FROM nginx:1.27-alpine

# Copier le dossier `out` généré dans le conteneur Nginx
COPY  dist /usr/share/nginx/html


