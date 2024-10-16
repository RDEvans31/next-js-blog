# Base image with Node.js
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_ENV production

# Expose port
EXPOSE 3000

# Start the application with npm
CMD [ "npm", "run", "dev" ]