# ---- Step 1: Base image ----
# Node.js ka lightweight (alpine) version use kar rahe hain
FROM node:20-alpine

# ---- Step 2: Working directory set karo ----
# Container ke andar ek folder banao jaha sara code rahega
WORKDIR /app

# ---- Step 3: Sirf package.json pehle copy karo ----
# Ye trick hai — agar sirf code change ho aur dependencies same rahein,
# to Docker cache use karega aur npm install dobara nahi chalega (fast build)
COPY package*.json ./

# ---- Step 4: Dependencies install karo ----
RUN npm install

# ---- Step 5: Baaki sara code copy karo ----
COPY . .

# ---- Step 6: Port batao jo Express use karta hai ----
EXPOSE 5000

# ---- Step 7: Container start hote hi ye command chalegi ----
# CMD ["node" , "server.js"]
CMD ["npx","nodemon","server.js"]


# # Second Way

# FROM node:20

# WORKDIR /app

# COPY . .

# RUN npm install

# EXPOSE 5000

# CMD['node' , 'server.js']


# // third Way

# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD['node' , 'server.js']

# Production Dependencies Only

# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci --omit=dev

# COPY . .

# EXPOSE 5000

# CMD["node" , 'server.js']