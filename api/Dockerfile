FROM node:19

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 5001
RUN yarn build

CMD ["yarn", "start:prod"] 

