# ===============================
# 1️⃣ Base
# ===============================
FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ===============================
# 2️⃣ Dependências
# ===============================
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ===============================
# 3️⃣ Build
# ===============================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ===============================
# 4️⃣ Produção
# ===============================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 🔑 Variáveis de rede corretas
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuário não-root (segurança)
RUN addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001

# Copiar apenas o necessário
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
