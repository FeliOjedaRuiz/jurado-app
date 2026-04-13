# Fase 1: Construcción del Frontend (Web)
FROM node:18-alpine AS web-builder
WORKDIR /web
# Aprovechamos el sistema de capas de Docker para las dependencias
COPY web/package*.json ./
RUN npm ci
COPY web/ ./
RUN npm run build

# Fase 2: Aplicación de Producción (API + Web Estática)
FROM node:18-alpine
WORKDIR /app

# Instalamos solo las dependencias de producción del API
COPY api/package*.json ./
RUN npm ci --only=production

# Copiamos el código del servidor
COPY api/ ./

# Traemos el frontend construido a la carpeta pública del servidor
COPY --from=web-builder /web/dist ./public

# Configuración de entorno
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

# Usamos node directamente en producción para mayor estabilidad
CMD ["node", "app.js"]