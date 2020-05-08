FROM node:10

WORKDIR /anon-twitter

RUN mkdir packages && \
  mkdir -p apps/api

COPY packages packages
COPY apps/api apps/api

RUN npm install --prefix packages/database/ && \
npm install --prefix apps/api/

EXPOSE 3000

WORKDIR /anon-twitter/apps/api

CMD [ "node", "bin/www" ]