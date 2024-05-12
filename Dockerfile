FROM  node:21.7.3-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build -- --output-path=./dist/ --output-hashing=all --configuration $configuration --aot

#Stage 1, base on Nginix, to have only the compile app, ready for production with nginx

FROM nginx:1.21.3-alpine

COPY --from=build-stage /app/dist/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

