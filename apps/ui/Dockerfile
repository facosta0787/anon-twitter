FROM node:10

WORKDIR /anon-twitter

RUN mkdir -p apps/ui

COPY apps/ui apps/ui

WORKDIR /anon-twitter/apps/ui

ARG API

ENV API_URL $API

RUN npm install && \
  REACT_APP_API_URL=$(echo $API_URL) node node_modules/react-scripts/bin/react-scripts build

EXPOSE 5000

CMD [ "npx", "serve", "-s", "build" ]
