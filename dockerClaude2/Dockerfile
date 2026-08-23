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

# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Stage 2: Serve the built files
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]