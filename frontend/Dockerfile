FROM node:10.18-alpine AS build

WORKDIR /data/frontend

COPY . .

RUN yarn && yarn build

FROM nginx

WORKDIR /usr/share/nginx/html
COPY ./files/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /data/frontend/build .