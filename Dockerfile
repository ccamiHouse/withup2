###########################################
# Stage 1: Dependencies Installation
###########################################
# FROM node:18-alpine AS deps
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps

###########################################
# Stage 2: Build Application
###########################################
FROM --platform=$BUILDPLATFORM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build application
COPY . .
RUN npm run build

###########################################
# Stage 3: Production Runtime
###########################################
FROM --platform=$TARGETPLATFORM node:18-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy build artifacts
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env.production ./.env.production

# Load environment variables
ENV $(cat .env.production | xargs)

# Expose port and start server
EXPOSE 3000
CMD ["node", "server.js"]