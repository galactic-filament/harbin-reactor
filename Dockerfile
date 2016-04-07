FROM node

COPY ./app /srv/app
WORKDIR /srv/app

RUN npm install -g browserify eslint eslint-plugin-react \
  && npm install

CMD ["node", "./index.js"]
