FROM node

COPY ./app /srv/app
WORKDIR /srv/app

RUN npm install -g browserify
  npm install

CMD ["bash"]
