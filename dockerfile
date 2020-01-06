FROM node

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 81

ENV NAME HELLOWORLD

CMD ["npm", "run", "serve"]
