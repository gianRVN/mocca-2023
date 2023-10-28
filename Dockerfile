FROM node:lts-alpine3.17

WORKDIR ./

COPY package*.json ./

COPY . .

EXPOSE 8090

CMD [ "node", "app.js" ]