
FROM node

RUN mkdir /zumbi_game
WORKDIR /zumbi_game
COPY package.json /zumbi_game
RUN yarn install

COPY . /zumbi_game
EXPOSE 3333

CMD ["yarn", "dev"]