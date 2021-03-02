FROM node:15

COPY . /app

WORKDIR /app

CMD ["sh","-c", "yarn install && yarn start"]