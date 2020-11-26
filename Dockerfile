# Step 1

FROM node:10-alpine as build-step
RUN apk update
RUN apk add git
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN git config --global url."https:".insteadOf git:
RUN npm install
COPY . /app
RUN npm run build