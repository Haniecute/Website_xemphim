FROM node:16

EXPOSE 8800

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./


RUN npm install 

COPY . . 

CMD [ "node" , "index.js" ]
