## Use a Node.js runtime as a parent image
#FROM node:18.14.2-alpine
#
## Install yarn
#RUN apk add --no-cache yarn
#
## Set the working directory to /app
#WORKDIR /app
#
## Copy the package.json and yarn.lock files into the container
#COPY package.json ./
#
## Install dependencies using Yarn
#RUN yarn install --frozen-lockfile
#
## Copy the rest of the application files into the container
#COPY . .
#
## Build the application
#RUN yarn build
#
### Bundle static assets with nginx
#FROM nginx:1.21.0-alpine as production
###ENV NODE_ENV production
### Copy built assets from `builder` image
##COPY --from=builder /app/build /usr/share/nginx/html
#COPY --from=0 /app/build /usr/share/nginx/html
### Add your nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
### Expose port
#EXPOSE 80
### Start nginx
#CMD ["nginx", "-g", "daemon off;"]
FROM node:18 AS build

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/
ARG REACT_APP_API_URL
ARG REACT_APP_URL
ARG REACT_APP_MODE
RUN yarn build --env REACT_APP_API_URL=${REACT_APP_API_URL} --env REACT_APP_URL=${REACT_APP_URL} --env REACT_APP_MODE=${REACT_APP_MODE}  --progress

FROM nginx:alpine AS web
WORKDIR /app

#COPY --from=build /app/build ./

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
