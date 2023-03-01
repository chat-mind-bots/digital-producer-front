# Use a Node.js runtime as a parent image
FROM node:18.14.2-alpine

# Install yarn
RUN apk add --no-cache yarn

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files into the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application files into the container
COPY . .

# Build the application
RUN yarn build

## Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
##ENV NODE_ENV production
## Copy built assets from `builder` image
#COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=0 /app/build /usr/share/nginx/html
## Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port
EXPOSE 80
## Start nginx
CMD ["nginx", "-g", "daemon off;"]
