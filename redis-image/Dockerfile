# use an existing docker iamge as a base
FROM alpine 
# use a base image to prepare
# download and install a dependency 
RUN apk add --update redis
# tell the image what to do when it starts

# as a container

CMD ["redis-server"]
