FROM node:15.9.0-alpine3.13

WORKDIR /rtsp-ws-proxy
RUN apk upgrade -U \
 && apk add ca-certificates ffmpeg libva-intel-driver \
 && rm -rf /var/cache/*
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY src src
COPY config config

RUN npm i
RUN npm run-script build