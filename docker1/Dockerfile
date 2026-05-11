FROM node:22-alpine

WORKDIR /app


# ENV DATABASE_URL="mongodb://localhost:27017/mydatabase"

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

