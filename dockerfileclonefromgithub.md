FROM node 
workdir /app
RUN apt-get update && apt-get install -y git
RUN git clone repository_url

RUN  npm install/ci

ENV PORT=3000

EXPOSE 3000 

CMD ["npm", "start"]




















// create a volume 
// docker run -it -p 3000:3000 -v "$(pwd)":/app -v volume_name:/app/node_modules image_name