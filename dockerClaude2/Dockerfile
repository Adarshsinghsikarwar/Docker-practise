FROM node:20

# WORKDIR /app

# COPY package.json package-lock.json ./

# RUN echo "NODE_ENV is: $NODE_ENV"
# RUN npm ci --include=dev
# RUN ls -la node_modules || true
# RUN ls -la node_modules/.bin || true

# COPY . .

# RUN npm run build

# CMD [ "npx" , "serve" ,"-s" , "dist" ]



# Multi-Stage Build (Production-Ready)

# ---- STAGE 1: Build ----
# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # ---- STAGE 2: Serve ----
# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]