# Build stage
FROM node:18-alpine as build

# Load .env.production or .env.development
ARG NODE_ENV
ARG REACT_APP_BACKEND
ENV NODE_ENV=${NODE_ENV}
ENV REACT_APP_BACKEND=${REACT_APP_BACKEND}

# Print the value of NODE_ENV
RUN echo "NODE_ENV: ${NODE_ENV}"
RUN echo "REACT_APP_BACKEND: ${REACT_APP_BACKEND}"

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