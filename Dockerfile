FROM node:10-alpine

WORKDIR /usr/app
COPY package.json ./

RUN npm install -g yarn
RUN yarn

COPY . .

EXPOSE 3001
CMD ["yarn", "start:dev"]
