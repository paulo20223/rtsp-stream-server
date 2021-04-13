FROM node:15.9.0-alpine3.13

WORKDIR /rtsp-ws-proxy
RUN apk upgrade -U \
 && apk add ca-certificates ffmpeg libva-intel-driver \
 && rm -rf /var/cache/*

RUN npm install -g ws
RUN npm i
WORKDIR /code