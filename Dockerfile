FROM node:15

RUN mkdir /app
WORKDIR /app
copy . .
EXPOSE 3000
CMD ["sh","-c", "yarn install && yarn start && ls"]