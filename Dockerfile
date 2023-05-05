FROM node:14
COPY . /app
RUN npm install
EXPOSE 3000
