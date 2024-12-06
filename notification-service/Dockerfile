FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=${NOTIFICATION_SERVICE_PORT}
ENV RABBITMQ_URL=${RABBITMQ_URL}

EXPOSE $PORT

# Start the application
CMD ["npm", "run", "start:prod"]
