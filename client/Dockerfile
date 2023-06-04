FROM node:19-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

RUN npm run build
CMD ["npm", "run", "start"]