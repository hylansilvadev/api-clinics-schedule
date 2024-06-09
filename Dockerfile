FROM node:18-alpine

WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .

ENV DATABASE_URI=mongodb+srv://admin:example@api-clinics-schedule-da.gjts42s.mongodb.net/api_clinics?retryWrites=true&w=majority&appName=api-clinics-schedule-database

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
