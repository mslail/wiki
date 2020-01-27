FROM golang:alpine as builder
RUN apk add --no-cache --upgrade bash
RUN apk update && apk add --no-cache git
# PART 1
WORKDIR /go/src/
COPY ["wiki-go", "wiki-go"]
RUN go build wiki-go/main.go
# CMD ["./main"] 

# # PART 2
# FROM node:8 as react-build
WORKDIR /
COPY ["deploy.sh", "deploy.sh"]

RUN apk add --update npm
RUN apk update && apk add -u npm
COPY ["wiki-frontend", "wiki-frontend"]
WORKDIR /wiki-frontend
COPY ["setHost.sh", "setHost.sh"]
RUN npm install --only=prod
RUN npm install -g serve
RUN ./setHost.sh
RUN npm run build
ENTRYPOINT ["../deploy.sh"]
