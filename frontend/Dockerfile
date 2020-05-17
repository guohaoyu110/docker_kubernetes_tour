FROM node:alpine as builder  

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build 

FROM nginx 

COPY --from=builder  /app/build  /usr/share/nginx/html
# copy from sth that comes from other phase

# dockerfile for the production development




