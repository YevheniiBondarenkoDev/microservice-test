FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ENV PORT=${USER_SERVICE_PORT}
ENV MONGO_CONNECTION_STRING=${MONGO_CONNECTION_STRING}
ENV RABBITMQ_URL=${RABBITMQ_URL}

EXPOSE $PORT
CMD ["npm", "run", "start:prod"]
