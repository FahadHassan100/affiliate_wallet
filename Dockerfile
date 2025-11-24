FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm install; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

COPY . .
# Generate Prisma client with the correct binary
RUN npx prisma generate

# Build the Next.js app
RUN \
    if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Production image
FROM base AS runner
WORKDIR /app

# Add OpenSSL for runtime
# RUN apk add --no-cache openssl


# Copy build artifacts
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy the public directory to serve static assets
# COPY --from=builder --chown=nextjs:nodejs /app/public ./public
ENV PORT=3011

EXPOSE 3011

# Start the Next.js app
CMD ["node", "server.js"]
