# instaclone-backend

`git config --global core.autocrlf true`

---

## 📖 목차

- #3.0 project 생성
- #3.1 ~ 3.2 graphQL & Apollo-server
- #3.3 Query & Mutation, 구조분해할당
- #3.4 prisma & postgresql 개발환경설정
- #3.5 prisma migrate
- #3.6 ~ 3.8 CRUD with prisma client + prisma studio
- #3.9 ~ 3.10 디렉토리구조 나누기
- #3.11 Dotenv
- #3.12 new project ready
- #4.0 ~ 4.2 Create Account
- #4.3 seeProfile, createAccount catch error
- #4.4 ~ 4.5 login with JWT token
- #4.6 디렉토리구조 나누기 2
- #4.7 editProfile
- #4.8 ~ 4.9 http request
- #4.10 utils.js > getUser()
- #4.11 utils.js > protectResolver()

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

📌 `npm init -y`

# #3.1 - 3.2 graphQL & Apollo-server

- apollo server 구축하기

📌 `npm install apollo-server graphql`

```
  "scripts": {
    "dev": "node server.js"
  },

$ npm run dev
```

- nodemon 설치

📌 `npm install --save-dev nodemon`

```
  "scripts": {
    "dev": "nodemon --exec node server.js"
  },

$ npm run dev
```

- babel 설치

📌 `npm i @babel/cli @babel/core @babel/node @babel/preset-env`

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

# #3.3 Query & Mutation, 구조분해할당

```gql
Mutation{
  createMovie(title:"test4")
}
```

위와 같이 `createMovie`를 실행하면

```js
createMovie: (_, args) => {
      console.log(_, args);
      return true;
    }

>>> undefined { title: "test4" }
```

즉 args는 객체의 형태라는 것이다. 따라서 우리가 원하는 `test4` 만 꺼내기 위해선 `args.title` 이라 할 수 있는데, 이것을 구조분해할당으로 더 간결하게 아래와 같이 표현할 수 있다. (코테문제풀면서도 써먹었던)

```js
createMovie: (_, { title }) => {
      console.log(_, title);
      return true;
    }

>>> undefined test4
```

# #3.4 prisma & postgresql 개발환경설정

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

# #3.5 prisma migrate

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0

# #3.6 - 3.8 CRUD with prisma client + prisma studio

createMovie, deleteMovie, updateMovie, 전체 movies 조회, id로 movie 조회

# #3.9 - 3.10 디렉토리구조 나누기

📌 `npm install graphql-tools`

`server.js client.js schema.js` 로 분리하고 `schema.js`에 `graphql-tools`로 `typeDefs, queries, mutations` 들을 합친다.

# #3.11 Dotenv

📌 `npm install dotenv`

# #3.12 new project ready

`Movies` 폴더삭제<br>
`prisma - migrations` 폴더삭제<br>
`DATABASE - instaclone` 삭제 후 재생성

# #4.0 ~ 4.2 Create Account

mutation - createAccount

패스워드 암호화를 위한 bcrypt 📌 `npm install bcrypt`

# #4.3 seeProfile, createAccount catch error

1. query seeProfile - userName을 통해 user한명 정보보기

2. createAccount 에서 동일한 userName이나 email이 있을 때 에러처리

# #4.4 ~ 4.5 login with JWT token

login 확인을 위한 token 📌 `npm install jsonwebtoken`

# #4.6 디렉토리구조 나누기 2

typeDefs대로 나누고 queries와 mutations를 resolvers로 합치기

# #4.7 editProfile

editProfile 뼈대잡기 (우선 where id:1 로 잡고...)

# #4.8 ~ 4.9 http request 방법론

editProfile 과 같은 resolver는 로그인이 된 상태에서 실행되어야한다.

그러면 이걸 어떻게하느냐... 로그인 시 http header로 token을 보내놓고 token이 없으면 실행이 안되어야함.

일단 http headers에 토큰을 적어놓은 상태에서 이 방법론대로 실행될 수 있음.

```
HTTP HEADERS

{
  "token" : "token code"
}
```

# #4.10 utils.js > getUser()

token이 필요한 resolver(로그인상태일때만 사용되어야 할 resolver)를 위한 함수

# #4.11 utils.js > protectResolver()

때로는 resolver를 보호해야할 때가 있다. login은 제외
