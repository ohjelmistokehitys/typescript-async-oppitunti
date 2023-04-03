FROM node:lts AS build

WORKDIR /app

COPY package* ./

RUN npm install

COPY . ./

# levylle syntyy tällä komennolla "build-hakemisto":
RUN npx tsc


FROM node:lts AS server

EXPOSE 3000

WORKDIR /app

COPY --from=build /app/package* ./

COPY --from=build /app/build ./build

RUN npm install --production

CMD ["node","build/index.js"]