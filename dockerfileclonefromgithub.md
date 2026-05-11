FROM node 
workdir /app
RUN apt-get update && apt-get install -y git
RUN git clone repository_url

RUN  npm install/ci

ENV PORT=3000

EXPOSE 3000 

CMD ["npm", "start"]