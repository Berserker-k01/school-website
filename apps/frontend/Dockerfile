FROM node:16-alpine

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8080

# During development, we'll run codegen and then next dev
CMD ["npm", "run", "dev"]
