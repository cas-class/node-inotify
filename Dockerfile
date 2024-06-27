FROM node:21.7.1-alpine3.19

RUN apk add --no-cache --virtual .gyp python3 py3-pip wget make g++

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/inotify
COPY . .

RUN yarn add -D node-gyp
