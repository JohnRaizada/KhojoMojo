FROM node:22.10.0-alpine3.20

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
