FROM node

COPY ./app /srv/app
WORKDIR /srv/app

RUN npm install --silent -g browserify watchify eslint eslint-plugin-react \
  && npm install --silent \
  && npm run build --silent

CMD ["node", "./index.js"]
