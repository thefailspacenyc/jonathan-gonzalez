# Build stage
FROM node:18-alpine as build

# Load .env.production or .env.development
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Print the value of NODE_ENV
RUN echo "NODE_ENV: ${NODE_ENV}"

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn construct

# Serve stage
FROM node:18-alpine
WORKDIR /app
RUN yarn global add serve
COPY --from=build /app/build ./build


EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"] 