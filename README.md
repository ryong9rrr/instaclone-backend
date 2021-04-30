# instaclone-backend

`git config --global core.autocrlf true`

---

--backend--

- apollo server
- prisma2 > prisma studio / prisma CLI / prisma client / prisma migrate
- graphQL

--frontend--

- react

--app--

- react-native > expo / CLI, CLI는 기업에서 쓰인다. 둘다 배울거임

---

# #3.0 project 생성

`npm init -y`

# #3.1 - 3.2 graphQL & Apollo-server

- apollo server 구축하기

`npm install apollo-server graphql`

```
  "scripts": {
    "dev": "node server.js"
  },

$ npm run dev
```

- nodemon 설치

`npm install --save-dev nodemon`

```
  "scripts": {
    "dev": "nodemon --exec node server.js"
  },

$ npm run dev
```

- babel 설치

`npm i @babel/cli @babel/core @babel/node @babel/preset-env`

```
  "name": "instaclone",
  "version": "1.0.0",
  ...
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  },
  ...
  "scripts": {
  "dev": "nodemon --exec babel-node server"
  },
  ...

$ npm run dev
```
