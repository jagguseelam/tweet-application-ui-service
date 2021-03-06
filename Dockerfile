FROM node:alpine as build

WORKDIR /app

COPY . /app/

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /app/build/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]