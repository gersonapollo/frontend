
FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# Runs Unit Tests
FROM node:alpine as unit-tests
WORKDIR '/app'
COPY --from=builder /app .
RUN npm test
