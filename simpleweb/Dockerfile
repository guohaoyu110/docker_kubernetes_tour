# specify a base image

FROM node:alpine

WORKDIR /usr/app
# 这个相当于把当前文件夹的内容放到docker的这个子文件夹里面去。
# install some dependencies
# use alpine as a base image, alpine is a very small image, program included in alpine is very limited
# refer to docker hub
COPY ./package.json ./
# 这样每次npm install基本的包就不会重新加载了
RUN npm install
COPY ./ ./
# default command

CMD ["npm", "start"]

# first show npm not found 

# set a port mapping 

