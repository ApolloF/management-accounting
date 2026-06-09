# ---- Stage 1: build ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# ---- Stage 2: serve ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /usr/share/nginx/html/managementaccounting
COPY --from=build /app/dist /usr/share/nginx/html/managementaccounting
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
