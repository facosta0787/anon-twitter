FROM node:10

WORKDIR /anon-twitter

RUN mkdir -p apps/ui

COPY apps/ui apps/ui

RUN npm install --prefix apps/ui/ && \
  npm run build --prefix apps/ui/

EXPOSE 5000

WORKDIR /anon-twitter/apps/ui

CMD [ "npx", "serve", "-s", "build" ]