FROM node:19.9.0-slim

WORKDIR /app

COPY . .

RUN npm install

# Set environment variable for deprecation trace
ENV NODE_OPTIONS="--trace-deprecation"

CMD ["npm", "start"]
