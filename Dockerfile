FROM node

COPY ./app /srv/app
WORKDIR /srv/app

RUN npm install --silent \
  && npm run build --silent

CMD ["node", "./index.js"]
