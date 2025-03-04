FROM alpine:3.21.3

WORKDIR /app

RUN apk add --no-cache nodejs npm
COPY . .
RUN npm install

ENTRYPOINT npm run deploy && npm start