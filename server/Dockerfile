# Simple Node image for mock server
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i
COPY . .
EXPOSE 3000
CMD ["npm","start"]
