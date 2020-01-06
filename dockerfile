FROM node

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 3999

ENV NAME HELLOWORLD

CMD ["npm", "run", "serve"]
