FROM node:latest
RUN npm i -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm add @rollup/rollup-linux-arm64-gnu
RUN pnpm run build
CMD ["pnpm", "run", "preview"]