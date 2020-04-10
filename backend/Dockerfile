FROM node:10.18-alpine

WORKDIR /data/backend

COPY package.json ./

RUN yarn

COPY . .

CMD ["node", "server.js"]