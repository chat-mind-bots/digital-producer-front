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

COPY --from=build /app/build ./
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
