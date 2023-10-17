FROM node:16

WORKDIR /opt/node-server
COPY . .

RUN npm ci

CMD ["npm", "start"]
