# instaclone-backend

- apollo server
- prisma2 > prisma studio / prisma CLI / prisma client / prisma migrate
- graphQL

---

## ๐ค ์ถ๊ฐํ ๊ธฐ๋ฅ ์๊ฐํด๋ณด๊ธฐ

- ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์ค๋ ์์๋ค - ํ๋ก ํธ์๋ ํ๋ฉด์ cursor paginationํ๊ธฐ

- #6.21 ํ๋ค๊ฐ ์๊ฐ๋จ) editProfile์ด๋ editPhoto๋ฅผ ํ์ ๊ฒฝ์ฐ, S3์์ ๋ฐ๋ก ์ญ์ ํ์ง ์๊ณ  ํด์งํต๊ฐ์ ํด๋๋ฅผ ๋ง๋ค์ด์ ๋ฐ์ดํฐ๋ฅผ ๋ณด์กดํ๋ค๊ฐ ์ผ๋ง๊ฐ์ ์๊ฐ์ด ์ง๋ ํ ์๋์ผ๋ก ์ญ์ ๋๋ ๋ฐฑ์๋ ์ฝ๋.

**210716 ์ถ๊ฐ**

- ํ๋ก ํธ์์ ์ฒ๋ฆฌ๋ฅผ ์ํด createAccount ์์ ์กด์ฌํ๋ ์ ์ ๋ก ๊ณ์ ์ ์์ฑํ  ์ throw new Error ํ๋ ๊ฒ์ return ok, error๋ก ๋ณ๊ฒฝํ์.

**210726 ์ถ๊ฐ**

- (์ฌ๋ฐ๋ฅธ) ๋ก๊ทธ์ธ์ํ์ธ์ง ์๋์ง๋ฅผ ํ๋จํ๋ query - me ๋ฅผ ์ถ๊ฐํ์.

**210730 ์ถ๊ฐ**

- ๋ด๊ฐ ์ข์์๋ฅผ ๋๋ ๋์ง ์๋์ง ํ๋จํ๋ photo - `isLiked` ์คํค๋ง ์์ฑ

**210803 ์ถ๊ฐ**

- ํ๋ก ํธ์๋ comments ์์์ ์ํด ํด๋น photo์ ๋ฌ๋ ค์๋ ์ฝ๋ฉํธ ์์ ์ฝ๋ฉํธ๋ฅผ ๋ฐํํ๋ computingํจ์๋ฅผ ์์ฑํจ.

**210813 ์ถ๊ฐ**

- `mutationResponse`์์ ์๋ก๋ง๋  comment์ id๋ฅผ ๋ฐ์์ค๊ธฐ ์ํด ์คํค๋ง์ id๋ฅผ ์ถ๊ฐ.

**210913 ์ถ๊ฐ** users.resolvers photo ๋ด๋ฆผ์ฐจ์

- ํ๋กํ์์ photo๋ค์ด createdAt ๊ธฐ์ค์ผ๋ก ๋ด๋ฆผ์ฐจ์์ผ๋ก ์ ๋ ฌ๋๋๋ก ํ์์.

## ๐ ๋ชฉ์ฐจ

### Setup

- #3.0 project ์์ฑ
- #3.1 ~ 3.2 graphQL & Apollo-server
- #3.3 Query & Mutation, ๊ตฌ์กฐ๋ถํดํ ๋น
- #3.4 prisma & postgresql ๊ฐ๋ฐํ๊ฒฝ์ค์ 
- #3.5 prisma migrate
- #3.6 ~ 3.8 CRUD with prisma client + prisma studio
- #3.9 ~ 3.10 ๋๋ ํ ๋ฆฌ๊ตฌ์กฐ ๋๋๊ธฐ
- #3.11 Dotenv
- #3.12 new project ready

### User

- #4.0 ~ 4.2 Create Account
- #4.3 seeProfile, createAccount catch error
- #4.4 ~ 4.5 login with JWT token
- #4.6 ๋๋ ํ ๋ฆฌ๊ตฌ์กฐ ๋๋๊ธฐ 2
- #4.7 editProfile
- #4.8 ~ 4.9 http request
- #4.10 utils.js > getUser()
- #4.11 utils.js > protectResolver()
- #4.12 Currying
- #4.13 Currying refactoring
- #4.14 File Upload - 1
- #4.15 File Upload - 2 with Altair
- #4.16 nodeJS error fix
- #4.17 File Upload - 3 - stream
- #4.18 express
- #4.19 changing Avatar
- #4.19.1 createAccount fix
- #4.20 ~ 4.22.1 follow & unfollow
- #4.22.2 seeFollow with `include`
- #4.23.1 seeFollowers ์ 2๊ฐ์ง ๋ฐฉ๋ฒ
- #4.23.2 offset Pagination 1
- #4.24 offset Pagination 2
- #4.25 cursor pagination
- #4.26 ~ 4.28 Computed Fields
- #4.29 searchUsers

### Photo

- #6.0 ~ 6.1 photos model relation
- #6.2 ~ 6.5 Upload photo & hashtag
- #6.6 seeHashtag
- #6.7.1 User > photos
- #6.7.2 searchPhotos
- #6.7.3 ~ 6.8 editPhoto
- #6.9.1 editPhoto done
- #6.9.2 ~ 6.10 toggle Like
- #6.11 seePhoto - likes
- #6.12 seeFeed
- #6.13 ~ 6.14 model Comment
- #6.15 isMine
- #6.16.1 Delete Comment and Photos 1
- #6.16.2 deletePhoto
- #6.16.3 Comment hashtags
- #6.17.1 editComment & Bug fix
- #6.17.2 MutationResponse
- #6.18 protectedResolver Bug fix
- #6.19 ~ 6.20 Upload file with AWS S3
- ERROR: "Maximum call stack size exceeded"
- #6.21 Upload file with AWS S3 finished

### Direct Messages

- #7.0 intro
- #7.1 model Room, Message
- #7.2 ~ 7.6 Room & Message
- #7.7 ~ 7.8 Apollo server setup for Subscriptions
- #7.9 Subscriptions filtering 1
- #7.10 Subscriptions filtering 2
- #7.11 ~ 12 Subscriptions Authentication

### ๋น๋ ๋ฐ ๋ฐฐํฌ

---

# Setup

## #3.0 project ์์ฑ

๐ `npm init -y`

## #3.1 - 3.2 graphQL & Apollo-server

- apollo server ๊ตฌ์ถํ๊ธฐ

๐ `npm install apollo-server graphql`

```
  "scripts": {
    "dev": "node server.js"
  },

$ npm run dev
```

- nodemon ์ค์น

๐ `npm install --save-dev nodemon`

```
  "scripts": {
    "dev": "nodemon --exec node server.js"
  },

$ npm run dev
```

- babel ์ค์น

๐ `npm i @babel/cli @babel/core @babel/node @babel/preset-env`

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

## #3.3 Query & Mutation, ๊ตฌ์กฐ๋ถํดํ ๋น

```gql
Mutation{
  createMovie(title:"test4")
}
```

์์ ๊ฐ์ด `createMovie`๋ฅผ ์คํํ๋ฉด

```js
createMovie: (_, args) => {
      console.log(_, args);
      return true;
    }

>>> undefined { title: "test4" }
```

์ฆ args๋ ๊ฐ์ฒด์ ํํ๋ผ๋ ๊ฒ์ด๋ค. ๋ฐ๋ผ์ ์ฐ๋ฆฌ๊ฐ ์ํ๋ `test4` ๋ง ๊บผ๋ด๊ธฐ ์ํด์  `args.title` ์ด๋ผ ํ  ์ ์๋๋ฐ, ์ด๊ฒ์ ๊ตฌ์กฐ๋ถํดํ ๋น์ผ๋ก ๋ ๊ฐ๊ฒฐํ๊ฒ ์๋์ ๊ฐ์ด ํํํ  ์ ์๋ค. (์ฝํ๋ฌธ์ ํ๋ฉด์๋ ์จ๋จน์๋)

```js
createMovie: (_, { title }) => {
      console.log(_, title);
      return true;
    }

>>> undefined test4
```

## #3.4 prisma & postgresql ๊ฐ๋ฐํ๊ฒฝ์ค์ 

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

## #3.5 prisma migrate

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0

## #3.6 - 3.8 CRUD with prisma client + prisma studio

createMovie, deleteMovie, updateMovie, ์ ์ฒด movies ์กฐํ, id๋ก movie ์กฐํ

## #3.9 - 3.10 ๋๋ ํ ๋ฆฌ๊ตฌ์กฐ ๋๋๊ธฐ

๐ `npm install graphql-tools`

`server.js client.js schema.js` ๋ก ๋ถ๋ฆฌํ๊ณ  `schema.js`์ `graphql-tools`๋ก `typeDefs, queries, mutations` ๋ค์ ํฉ์น๋ค.

## #3.11 Dotenv

๐ `npm install dotenv`

## #3.12 new project ready

`Movies` ํด๋์ญ์ <br>
`prisma - migrations` ํด๋์ญ์ <br>
`DATABASE - instaclone` ์ญ์  ํ ์ฌ์์ฑ

# User

## #4.0 ~ 4.2 Create Account

mutation - createAccount

ํจ์ค์๋ ์ํธํ๋ฅผ ์ํ bcrypt ๐ `npm install bcrypt`

## #4.3 seeProfile, createAccount catch error

1. query seeProfile - userName์ ํตํด userํ๋ช ์ ๋ณด๋ณด๊ธฐ

2. createAccount ์์ ๋์ผํ userName์ด๋ email์ด ์์ ๋ ์๋ฌ์ฒ๋ฆฌ

## #4.4 ~ 4.5 login with JWT token

login ํ์ธ์ ์ํ token ๐ `npm install jsonwebtoken`

## #4.6 ๋๋ ํ ๋ฆฌ๊ตฌ์กฐ ๋๋๊ธฐ 2

typeDefs๋๋ก ๋๋๊ณ  queries์ mutations๋ฅผ resolvers๋ก ํฉ์น๊ธฐ

## #4.7 editProfile

editProfile ๋ผ๋์ก๊ธฐ (์ฐ์  where id:1 ๋ก ์ก๊ณ ...)

## #4.8 ~ 4.9 http request ๋ฐฉ๋ฒ๋ก 

editProfile ๊ณผ ๊ฐ์ resolver๋ ๋ก๊ทธ์ธ์ด ๋ ์ํ์์ ์คํ๋์ด์ผํ๋ค.

๊ทธ๋ฌ๋ฉด ์ด๊ฑธ ์ด๋ป๊ฒํ๋๋... ๋ก๊ทธ์ธ ์ http header๋ก token์ ๋ณด๋ด๋๊ณ  token์ด ์์ผ๋ฉด ์คํ์ด ์๋์ด์ผํจ.

์ผ๋จ http headers์ ํ ํฐ์ ์ ์ด๋์ ์ํ์์ ์ด ๋ฐฉ๋ฒ๋ก ๋๋ก ์คํ๋  ์ ์์.

```
HTTP HEADERS

{
  "token" : "token code"
}
```

## #4.10 utils.js > getUser()

token์ด ํ์ํ resolver(๋ก๊ทธ์ธ์ํ์ผ๋๋ง ์ฌ์ฉ๋์ด์ผ ํ  resolver)๋ฅผ ์ํ ํจ์

## #4.11 utils.js > protectResolver()

๋๋ก๋ resolver๋ฅผ ๋ณดํธํด์ผํ  ๋๊ฐ ์๋ค. login์ ์ ์ธ

## #4.12 Currying

ํจ์ํ ํ๋ก๊ทธ๋๋ฐ ๊ธฐ๋ฒ Currying

## #4.13 Currying refactoring

๋ฆฌํฉํ ๋ง. `protectedResolver()`๋ `ok` ์ `error` ๋ ๊ฐ์ ์ธ์๋ฅผ ๋ฐํํ๋ค๋ ๊ฒ์ ์ฃผ์.

## #4.14 File Upload - 1

- `schema.prima` ๐ ํ์ผ์๋ก๋๋ฅผ ์ํ schema ์ถ๊ฐ(bio, avatar), ๊ทธ์ ๋ฐ๋ผ `users.typeDefs`๋ ๋ฐ๊ฟ์ฃผ๊ณ .. `editProfile.resolvers`์๋ `args` ์ถ๊ฐ..

- ์ง๊ธ๊น์ง๋ `typeDefs`์ `resolvers`๋ฅผ ํตํฉ์์ผ์ค์ `Upload`๋ผ๋ ์ค์นผ๋ผํ์์ด ์์์. ํ์ง๋ง ํ์ผ์๋ก๋๋ฅผ ์ํด์๋ `Upload`๊ฐ ํ์ํ๋ฐ,

**playground - schema**

```
type User {
  id: Int!
  firstName: String!
  lastName: String
  userName: String!
  email: String!
  bio: String
  avatar: String
  createdAt: String!
  updatedAt: String!
}

type Query {
  users: [User]
  seeProfile(userName: String!): User
}

type createAccountResult {
  ok: Boolean!
  error: String
}

type Mutation {
  createAccount(
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    password: String!
  ): User
  editProfile(
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    bio: String
  ): EditProfileResult!
  login(userName: String!, password: String!): LoginResult!
}

type EditProfileResult {
  ok: Boolean!
  error: String
}

type LoginResult {
  ok: Boolean!
  token: String
  error: String
}
```

๊ทธ๋ฐ๋ฐ `typeDefs` ์ `resolvers`๋ฅผ ๋ถ๋ฆฌ์ํค๋ฉด...

```
directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
) on FIELD_DEFINITION | OBJECT | INTERFACE

type User {
  id: Int!
  firstName: String!
  lastName: String
  userName: String!
  email: String!
  bio: String
  avatar: String
  createdAt: String!
  updatedAt: String!
}

type Query {
  users: [User]
  seeProfile(userName: String!): User
}

type createAccountResult {
  ok: Boolean!
  error: String
}

type Mutation {
  createAccount(
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    password: String!
  ): User
  editProfile(
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    bio: String
  ): EditProfileResult!
  login(userName: String!, password: String!): LoginResult!
}

type EditProfileResult {
  ok: Boolean!
  error: String
}

type LoginResult {
  ok: Boolean!
  token: String
  error: String
}

enum CacheControlScope {
  PUBLIC
  PRIVATE
}

# The `Upload` scalar type represents a file upload.
scalar Upload
```

์ ์ฒ๋ผ ๋ช ๊ฐ์ง ์๋ก์ด ํ์๊ณผ `Upload`๋ผ๋ ์ค์นผ๋ผํ์์ด ์๊ฒผ์.

## #4.15 File Upload - 2 with Altair

file ์๋ก๋ ์์์ `playground` ๋ก๋ ์๋ผ์ `Altair` ์ค์น, Altair๋ graphql์ ์ฉ ํด๋ผ์ด์ธํธ.

**Altair**

```
mutation($bio:String, $avatar:Upload){
  editProfile(bio:$bio, avatar:$avatar){
    ok
    error
  }
}

//variables ์ฐ๋๋ฒ
<VARIABLES>
{
  "bio": "im super happy"
}
```

Add files์ ๋ณ์๋ช avatar๋ก ๋ฐ๊พธ๊ณ  ํ์ผ์๋ก๋, ๊ทธ๋ฆฌ๊ณ  request๋ฅผ ๋ณด๋ด๊ณ  `avatar`๋ฅผ ์ฝ์๋ก ์ฐ์ด๋ณด๋ฉด

**console**

```
Promise {
  {
    filename: 'me.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    createReadStream: [Function: createReadStream]
  }
}
```

## #4.16 nodeJS error fix

altair์์ ํ์ผ์๋ก๋๋ฅผ ํ๋ คํ๋ฉด `maximum call stack size exceeded` ์๋ฌ๊ฐ ๋์ fix...

(๋ค์์๋ ์ฐ๋ถํฌ๋ก npm, nodejs๋ฅผ ๋ค์ด๋ฐ์์ผ๊ฒ ๋ค.)

`package.json` ์ ์ฝ๋ ๋ช ๊ฐ์ง ์ถ๊ฐํ๊ณ  `node_modules` ์ญ์  ํ `npm cache clean --force` ๋ก ์บ์ ์ญ์  ํ ๋ค์ `npm i`

## #4.17 File Upload - 3 - stream

stream ์ฐ๊ฒฐํ๊ธฐ(pipe), ๋์ค์๋ apollo-server๊ฐ upload๋ฅผ ์ง์์ํ๋ค๊ณ ..? ํ๋๋ฐ ๋ญ ์ผ๋จ ๊ทธ๋ ๊ฒ๋ง ์์๋์.

## #4.18 express

apollo-server ๋ฅผ express & apollo-server-express ์๋ฒ๋ก ๋ณ๊ฒฝ

๐ `npm i express apollo-server-express`

HTTP request logger๋ฅผ ํ์ธํ  ๋ฏธ๋ค์จ์ด morgan ์ค์น

๐ `npm install morgan`

## #4.19 changing Avatar

ํ์ผ์ด๋ฆ ์ ๋ํฌํ๊ฒ ๋ฐ๊พธ๊ธฐ, ์๋ฒ์ path ์ถ๊ฐ.

๋ `Maximun call stack size exceeded Error` ๋ ์ ๋ค์ ์ฒ๋ฆฌํ์.

์ผ๋จ `preinstall": "npx npm-force-resolutions@0.0.3` ๋ก ๋ฐ๊ฟ์คฌ๋ค.

## #4.19.1 createAccount fix

createAccount์์ mutation์ ๋ถ๋ฆฌ์ธ๊ณผ ์๋ฌ ๋๊ฐ์ง๋ก ๋ฆฌํดํ๊ธฐ๋ก ํ์ผ๋ฏ๋ก user๋ฅผ ๋ฆฌํดํ๋๊ฒ์ด ์๋ ok์ error๋ฅผ ๋ฆฌํดํ๋ ๊ฑธ๋ก ์์ 

## #4.20 ~ 4.22.1 follow & unfollow

user์ follower๋ ๊ฑด๋๋ฆฌ์ง์๋๋ค > following์ ์ ๋ฌด์ ๋ฐ๋ผ follower๊ฐ ๋ฐ๋๋ ๊ฒ์ด๊ธฐ ๋๋ฌธ.

## #4.22.2 seeFollow with include

prisma์ `include`๋ฅผ ์ด์ฉํด์ `User`์์ ๋ฐฐ์ด์ธ `followers` ์ `following` ์ ํ์ธ ํ  ์ ์๋ค.

๋งค์ฐ ๊ฐ๋จํ์ง๋ง ์ด ๊ฒฝ์ฐ, ๋ฐฐ์ด์ ํฌ๊ธฐ๊ฐ ๊ต์ฅํ ์ปค์ง๋ค๋ฉด DB์ ๋น์ฉ์ด ์ปค์ง๋ค.

include๋ผ๋ ๊ธฐ๋ฅ์ด ์๋ค๋ ๊ฒ๋ง ์์๋๊ณ  ๋ค๋ฅธ ๋ก์ง์ผ๋ก `seeFollow`๋ฅผ ๊ตฌํํด๋ณด์.

## #4.23.1 seeFollowers ์ 2๊ฐ์ง ๋ฐฉ๋ฒ

ํ๋ก์๋ฅผ ๋ณด๋ resolver `seeFollwers` ๋ฅผ ๋ง๋ค์๋ค.

1. user๊ฐ ๊ฐ์ง๊ณ ์๋ follwers์ ๋ฐฐ์ด์ ๊ฐ์ ธ์ค๋ ๋ฒ

```
//1. user์ ๋ชจ๋  ํ๋ก์๋ฅผ ์ฐพ๋ ๋ฒ
const aFollowers = await client.user
  .findUnique({ where: { userName } })
  .followers();

console.log(aFollowers);
```

2. ๊ทธ user๋ฅผ following ํ๊ณ  ์๋ ์ ์ ๋ค์ ๊ฐ์ ธ์ค๋ ๋ฒ

```
//2. user๋ฅผ ํ๋ก์ํ๋ ์ฌ๋๋ค์ ์ฐพ๋๋ฒ
const bFollowers = await client.user.findMany({
  where: {
    following: {
      some: {
        userName,
      },
    },
  },
});
console.log(bFollowers);
```

## #4.23.2 offset Pagination 1

> https://www.prisma.io/docs/concepts/components/prisma-client/pagination

**offset pagination**

offset pagination์ `1 2 3 4 ... 26` ์ด๋ฐ์์ ์ผ๋ฐ์ ์ธ pagination์ด๋ค.

`#4.23.1` ์์ 1๋ฒ ๋ฐฉ๋ฒ์ ์ฑํ, ํ์ง๋ง ์ด ์ํ ๊ทธ๋๋ก ์ฐ๋ฉด ๋ฐ์ดํฐ๊ฐ ์ปค์ง ์, ๋น์ฉ์ด ๊ต์ฅํ ์ปค์ง ๊ฒ์ด๋ค. pagination์ ํด๋ณด์.

## #4.24 offset Pagination 2

pagination์ `#4.23.1` ์ 1๋ฒ๋ฐฉ๋ฒ, totalFollowers ๋ 2๋ฒ๋ฐฉ๋ฒ.

## #4.25 cursor pagination

`seeFollwers`์ `seeFollowing` ๋ฅผ cursor pagination์ผ๋ก ๋ณ๊ฒฝํด๋ณด์.

cursor pagination์ ๋ฌดํ์คํฌ๋กค ๋ก์ง์ด๋ค. ํ๋ก ํธ์๋ ๋จ์์ ๋ง์ง๋ง์ผ๋ก ๋ณธ ๋ฐ์ดํฐ๋ฅผ db์ ๋๊ฒจ์ฃผ๊ณ (**request**), db๋ ๊ทธ ์ดํ์ ๋ฐ์ดํฐ๋ฅผ ํ๋ก ํธ๋ก ๋ค์ ์ ์กํ๋ค.

## #4.26 ~ 4.28 Computed Fields

computed fields ๋ virtual values.

- `users.typeDefs.js` ์ ์๋ก์ด ์ค์นผ๋ผํ์์ ์ถ๊ฐํ๋ค.

```
totalFollowers: Int!
totalFollowing: Int!
isFollowing: Boolean!
isMe: Boolean!
```

์ฌ๊ธฐ์ `totalFollewrs, totalFollowing` ์ ๋ก๊ทธ์ธ์ ํ์๋ก ํ์ง์์ง๋ง `isFollowing, isMe` ๋ ๋ก๊ทธ์ธ์ ํ์๋ก ํ๋ค.

- ์๊ธฐ ์์ ์ followํ์ง ๋ชปํ๋ ์ฝ๋๋ฅผ `isFollowing`, `followUser.resolvers.js` ์ด๋์ ์ถ๊ฐํด์ผํ ๊น? ์์ ์ถ๊ฐํ์ง์์๋ ํ๋ก ํธ์๋๋จ์์ ์ฒ๋ฆฌ๊ฐ ๊ฐ๋ฅํ  ๊ฒ ๊ฐ์๋ฐ ์ด๋ป๊ฒ ํ๋๊ฒ ์ข์์ง ์๊ฐ์ค.

## #4.29 searchUsers

cursor pagination์ผ๋ก ์ ์  ๊ฒ์ํ๊ธฐ

# Photo

## #6.0 ~ 6.1 photos model relation

> prisma relation
> https://www.prisma.io/docs/concepts/components/prisma-schema/relations

prisma DOCS ๋ฅผ ์ฝ์ด๋ณด๋ฉด `do not exist in the database`, ๋ฐ์ดํฐ๋ฒ ์ด์ค์๋ ์กด์ฌํ์ง ์๋๋ค.. ์ด๋ฌ๋๋ฐ ์ด ๋ง์์ฆ์จ ๊ทธ์  ๊ด๊ณ๋ง ์ ์ํด์ฃผ๋ฉด ๋ฐ๋ก ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ์ฅํ์ง ์๋๋ค๋ ๊ฒ์ด๋ค. ๊ทธ์  ๊ด๊ณ๋ง ์ด์ด์ค๋ฟ...(๊ด๊ณ๋ค์ ๊ณ์ํด์ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ์ฅํ๋ค๋ฉด ๋น์ฉ์ด ์ปค์ง ๊ฒ์)

- User - Photo ๋ 1:N ์ ๊ด๊ณ๋ค. ๋ฐ๋ผ์ photo์์๋ ์ธ๋ํค๋ฅผ ์์ฑํด์ค์ผํ๋ค.
- Photo - Hashtag ๋ ๋ค๋๋ค์ ๊ด๊ณ.

**schema.prisma**

```
model User {
    ...
    photos Photo[]
    ...
}
```

```
model Photo{
    ...
    user User @relation(fields: [userId], references: [id])
    userId Int
    ...
}
```

-> 1:N ๊ด๊ณ๋ผ๋ ๊ฒ์ ๋ช์ํ๊ณ , `model Photo` ์์ ์ธ๋ํค๋ `userId`์ด๊ณ , User์ id ๊ฐ ์ด๋ค.

## #6.2 ~ 6.5 Upload photo & hashtag

- module ๊ตฌ์กฐ๋ฅผ ์ด๋ป๊ฒ ํ ์ง ์๊ฐํด ๋ด์ผํ๋ค. `Hashtag`๋ฅผ `photo` ๋ชจ๋์์ ๋์ง.. ์๋๋ฉด ๋ฐ๋ก ๋์ง.. ๋ง๋ค๋ฉด์ ๊ตฌ์กฐ๋ฅผ ๋ฐ๊ฟ๋๊ฐ ์๋ ์์.

- **schema.prisma** ์์ hashtag -> unique ๊ฐ์ผ๋ก ์์ ํ์.

- prisma์ `connectOrCreate` ๋ uniqueํ ํ๋๊ฐ์๋ง ์ฌ์ฉํ ์์์.

- `photos.resolvers.js` > computed field๋ก user์ hashtag๋ฅผ ๋ช์

<del>`protectedResolver` ๋ `ok` , `error` ๋ฅผ ๋ฐํํ๋๋ฐ.. `UploadPhoto` ๋ฅผ ๊ทธ๋ฌ๋ฉด `Photo` ๊ฐ ์๋๋ผ `UploadPhotoResult`๋ก ํด์ฃผ๋๊ฒ ์ข์ง ์์๊น? (`protectedResolver` ๋ก ๊ฐ์ธ์ฃผ๋ ๊ฑด `Result`ํํ๋ก ๊ท์น์ฑ์๊ฒ)</del> ๐ #6.18์์ ํด๊ฒฐ

## # #6.6 seeHashtag

computed field๋ก args๋ฅผ ๋๊ฒจ์ค์๋์๋ค.

hashtag๋ฅผ ์๋ ฅ ์ ์ฌ์ง ๋ฐ์ดํฐ๋ฐ๋๊ฒ์ cursor pagination์ผ๋ก ๊ตฌํ

## #6.7.1 User > photos

**schema.prisma** ์์๋ user์ photo๊ฐ์ ๊ด๊ณ๋ฅผ ๋ช์ํ์๊ธฐ ๋๋ฌธ์ prisma studio์์ User๋ฅผ ๋ณด๋ฉด photos๊ฐ ๋ชจ๋ ๋ด์.

ํ์ง๋ง graphql (local4000) ์์๋ type ๋ช์๋ฅผ ์ํด์คฌ๊ธฐ ๋๋ฌธ์ ํด์ค์ผํ๊ณ , ๋์์ resolver์์๋ ๋ช์ํด์ผํจ.

User feed์ ๊ฐ๋ฉด ๋ชจ๋ ์ฌ์ง์ ๋ค ๋์์ผํ๋๊น pagination์ ํ์์์ ๋ฏ..?

## #6.7.2 searchPhotos

searchPhotos ... cursor pagination ํด์ค์ผ ํ ๊น?

## #6.7.3 ~ 6.8 editPhoto

- mutation ์์๋ง result type์ผ๋ก ํด์ฃผ๋ ์ค

- hashtag ์์ฑํ๋ ํจ์ `processHashtag` ๋ฅผ `photos.utils.js` ์ ๋ง๋ค์์ > `uploadPhoto` ์๋ ์ ์ฉ.

- `User`์์๋ ์ด ์ฌ์ง์๋ฅผ ํ์ธํ ์์๋๋ก `totalPhotos`ํ๋๋ฅผ ๋ง๋ค์ด๋ดค์ใ

## #6.9.1 editPhoto done

`processHashtag` ์๋ `await` ๊ฐ ํ์์์๋ฏ.

## #6.9.2 ~ 6.10 toggle Like

prisma ๋ฐ์ดํฐ๋ชจ๋ธ๋ก ์ฐ์ผ **schema.prisma** ์ `model Like`๋ฅผ ์ถ๊ฐ. (graphQL ์ง์์์, "์ข์์ ๋๋ฅธ ๊ฒ์๋ฌผ๋ณด๊ธฐ"๋ผ๋ ๊ธฐ๋ฅ์ ๋ง๋ค์ง ์์๊ฑฐ๋ฉด `Like` ๋ผ๋ type์ ์์ด๋ ๋  ๊ฒ ๊ฐ์ง๋ง ์ผ๋จ ๋ง๋ฌ.)

- User๋ ์ฌ๋ฌ๊ฐ์ Like๋ฅผ ๊ฐ์ง์์๋ค.
- Photo๋ ์ฌ๋ฌ๊ฐ์ Like๋ฅผ ๊ฐ์ง์์๋ค.

๋ฐ๋ผ์ Like์ User์ Photoํ๋๋ relation(์ธ๋ํค)์ ์ ์ํด์ผํ๋ค.

## #6.11 seePhoto - likes

- ์ฌ์ง์ "์ข์์ํ ์ฌ๋๋ค"์ ๋ณด์ฌ์ฃผ๋ ๊ธฐ๋ฅ

- `select` ์ `include`์ ์ฐจ์ด ์๊ณ ๊ฐ๊ธฐ

## #6.12 seeFeed

`Photo`๋ฅผ ์ฌ๋ฆฐ `User`์ `followers์ id` == `๋ก๊ทธ์ธํ User์ id` ์ธ `Photo`๊ฐ ํ๋ก์๋ค์ ํผ๋์ ๋ณด์ฌ์ง๋ ๋ก์ง.

ํ์ง๋ง ๋ด๊ป๋ ๋ณด์ฌ์ผํ๊ธฐ ๋๋ฌธ์ `OR`์ ์ฌ์ฉ, `createAt`์ ๋ด๋ฆผ์ฐจ์์ผ๋ก ํ์ฌ ์ต์ Photo๊ฐ ๋งจ ์์ ๋จ๋๋กํ์์.

## #6.13 ~ 6.14 model Comment

createComment, seePhotoComments

`schema.prisma` ์ `model Comment` ์ ์

Photo ์ Comment ์ `isMine` computed field ์ถ๊ฐ.(๋ณธ์ธ์ ๊ฒ์ด๋ฉด edit ํ  ์ ์์ด์ผํจ.)

์ฌ์ง์ ๋๊ธ์ ๋ณผ ์ ์๋ `seePhotoComments`๋ `photos`์์ ๋ง๋ค์๋๋ฐ ์ด๋ฐ ์ํคํ์ฒ๋น๋๋ฅผ ์ธ์ฐ๋๊ฒ ์ด๋ ต๋ค..ํ๋ก์ ํธ ์์์ ์ ๋ชํํ ํด์ผํจ.

โ seePhotoComments์์ ๋ ์ข์ pagination์ด ์์๊น?

## #6.15 isMine

photo์ comment๊ฐ ๋ด๊ฐ ์ฌ๋ฆฐ ๊ฑฐ๋ฉด editํ  ์ ์์ด์ผํจ(ํ๋ก ํธ์ง์์์ ์ฒ๋ฆฌํ ์๋์์ง๋ง ๋ฐฑ์๋์ง์์์๋ ์ ์ํด์ฃผ๋ ๊ฒ์ด ์ข๋ค.)

## #6.16.1 Delete Comment and Photos 1

์ด ๋ฐฉ๋ฒ๋๋ก ํ๋ฉด Like์ Hashtag๊ฐ ์๋ Photo์ Comment๋ ์ญ์ ๊ฐ ๋๋ค. ํ์ง๋ง... Like๋ Hashtag๊ฐ ์์ผ๋ฉด ์๋ฌ๊ฐ๋๋ค.

Comment์ Photos๋ฅผ ์ญ์ ํ  ๋, ์ฐ๊ฒฐ๋์ด์๋ `Like`์ `Hashtags`์ ์ฒ๋ฆฌ๋ฅผ ํด์ค ๊ฒ.

## #6.16.2 deletePhoto

photo์๋ `hashtags`, `likes`, `comments` ๊ฐ ์ฐ๊ฒฐ๋์ด ์์ผ๋ฏ๋ก ๊ฐ๋ค์ด ๋ชจ๋ ์์ด์ ธ์ผ delete๋ฅผ ํ  ์ ์๋ค. ๋ฐ๋ผ์ ๋ชจ๋ 0์ผ๋ก ๋ง๋๋ update๋ฅผ ํจ.

## #6.16.3 Comment hashtags

comment์ hashtags ํ๋๋ฅผ ์ถ๊ฐํ๊ณ  resolver ์์ .

**createComment**
comment์ hashtag๊ฐ ์๋ค๋ฉด ์ถ๊ฐํ๊ณ , ๊ทธ photo์ connect ํ๋ค.

**deleteComment**
comment์ hashtag๋ค์ disconnect ํ๋ค.

## #6.17.1 editComment & Bug fix

1. hashtags๋ฅผ ์ ์ฉํ๋ `editComment` ์์ฑ.

**๋ฒ๊ทธ**

1. `createComment`์์ comment์ ํด์ฌํ๊ทธ๊ฐ ์์๋๋ง photo๋ฅผ updateํ๋๋ก ์์ .
2. `editPhoto`์์ comment์ ํด์ฌํ๊ทธ๊น์ง ์ญ์ ๋๋ ๋ฒ๊ทธ ์์ .

- ๋ฌธ์ ํด๊ฒฐ์ ์ํด `photos.utils`์ text์ ํด์ฌํ๊ทธ๋ฅผ ๊ฐ์ ธ์ค๋ ํจ์ ์์ฑ.

## code fix

`editPhoto.resolvers`์์ ํด์ฌํ๊ทธ๋ text๋ก๋ง ๋ค๋ฃจ๋ฏ๋ก ๋์ด์ ํด์ฌํ๊ทธ๋ฅผ ๊ฐ์ ธ์ค์ง ์๋๋ค.

## #6.17.2 MutationResponse

`ok, error` ๊ฐ๋ง์ return ํ๋ type๋ค์ `type MutationResponse`๋ก ๋์ฒด.

- token์ด ํ์ํ `login`, photo๋ฅผ returnํ๋ `uploadPhoto`๋ ์ ์ธ.

## #6.18 protectedResolver Bug fix

๋ณดํธ๋๋(`protectedResolver`๋ก) query๋ mutation์ ์์ธ์ฒ๋ฆฌ.

1. `seeFeed`๋ query์ง๋ง ๋ก๊ทธ์ธํ ์ ์ ์ ์ ๋ณด๋ฅผ ์์์ผํ๊ธฐ ๋๋ฌธ์ ๋ณดํธ๋๋ค.

2. `uploadPhoto`๋ `Photo`๋ฅผ returnํ๊ธฐ ๋๋ฌธ์ return๊ฐ์ ๋ฐ๋ก ์ค์ ํด์ค์ผ ํจ.

## #6.19 ~ 6.20 Upload file with AWS S3

1. ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น

   ๐ `npm install aws-sdk --save`

2. AWS IAM ์ฌ์ฉ์์์ฑ & S3 ์คํ ๋ฆฌ์ง ์์ฑ

   ๐ https://velog.io/@ryong9rrr/AWS-IAM-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%83%9D%EC%84%B1-S3-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%83%9D%EC%84%B1

3. `shared.utils.js` ์ S3์ ํ์ผ์๋ก๋ ํ๋ ํจ์ ์์ฑ

## ERROR: "Maximum call stack size exceeded"

> https://www.npmjs.com/package/graphql-upload#graphql-upload

Altair์์ ํ์ผ์ ์๋ก๋ํ๋ ค๋ ๋ ๋ฐ์ํ ์๋ฌ...

`ApolloServer`์์ ์ค๋ `graphql-upload`๋ฅผ disableํ ํ ์ต์  ๋ฒ์ ์ graphql-upload๋ฅผ ์ค์นํ๋ค.

๐ `npm install graphql-upload@latest`

## #6.21 Upload file with AWS S3 finished

S3์ ํด๋๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ ๊ทธ ์์๋ค๊ฐ ํ์ผ๋ณด๊ด.

**์ถ๊ฐํ  ๊ธฐ๋ฅ**

๋์ค์ editProfile์ด๋ editPhoto๋ฅผ ํ์ ๊ฒฝ์ฐ, S3์์ ๋ฐ๋ก ์ญ์ ํ์ง ์๊ณ  ํด์งํต๊ฐ์ ํด๋๋ฅผ ๋ง๋ค์ด์ ๋ฐ์ดํฐ๋ฅผ ๋ณด์กดํ๋ค๊ฐ ์ผ๋ง๊ฐ์ ์๊ฐ์ด ์ง๋ ํ ์๋์ผ๋ก ์ญ์ ๋๋ ๋ฐฑ์๋ ์ฝ๋๋ฅผ ์์ฑํด๋ณด์. (#6.21 ๋๊ธ๋ ์ฐธ๊ณ ํ๋ฉด ์ข์๋ฏ)

---

# Direct Messages

## #7.0 intro

real-time message์ ๊ฐ์ ์์คํ์ Erlang(์ผ๋ญ)๊ณผ ๊ฐ์ด ์ฑ๋ฅ์ด ๊ต์ฅํ ์ข์(ํ์ง๋ง ์ด๋ ค์..) ์ธ์ด๋ฅผ ์ฌ์ฉํ๋ฉด ์ข๊ณ , ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ postgresQL์ด ์๋ ๋ค๋ฅธ ๊ฒ์ ์ฌ์ฉํ๋ฉด ์ข๊ฒ ์ง๋ง... ์ผ๋จ ์๊ณ ๋ง ๋์ด๊ฐ๊ณ  ์ง๊ธ์ nodeJS ๊ธฐ๋ฐ์ผ๋ก ๊ฐ๋ฐ์ ํ๊ณ  ์์ง๋ง ๊ท๋ชจ๊ฐ ์ปค์ง๋ฉด nodeJS๋ก๋ ํ๊ณ๊ฐ ์์(์๊ณ ์์ง?). ๊ทธ๋๋ graphql๊ณผ nodeJS๋ก ํ๋ฒ ๊ตฌํํด๋ณด๊ฒ ๋ค. ๋๋ ์ด๊ฑฐ๋ฅผ ์ด๋์ ์์ฉํด๋ณผ์ ์์์ง ์๊ฐํ๋ฉด ์ข์๋ฏ.

## #7.1 model Room, Message

์ฌ์ฉ์๊ฐ ์ฌ์ฉ์์๊ฒ ๋ฉ์ธ์ง๋ฅผ ๋ณด๋ด๋ ๊ฒ์ด ์๋ ์ฌ์ฉ์๊ฐ "๋ํ๋ฐฉ" ์์ ๋ฉ์ธ์ง๋ฅผ ๋จ๊ธด๋ค๋ ๊ฐ๋.

**relation**

- User - Room : ๋ค๋๋ค (Room ์์๋ 2๋ช์ ์ ์ (1๋1 ๋ํ๋ฐฉ)๊ฐ ์กด์ฌํจ)
- User - Message : ์ผ๋๋ค
- Room - Message : ์ผ๋๋ค

## #7.2 ~ 7.6 Room & Message

### `seeRooms`

- `message์ updatedAt`๊ธฐ์ค์ผ๋ก ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ(์ต์ ๊ฒ์ด ๋งจ์๋จ์ ๋จ๋๋ก)
- 7๊ฐ์ฉ ๋ณด์ด๋๋ก cursor pagination

### `sendMessage`

- Room์ด ์๋ค๋ฉด UserId๋ฅผ ํตํด `createRoom`
- Room์ด ์๋ค๋ฉด ๋ฐ๋ก Room์ผ๋ก ์งํ

### `seeRoom`

### computed field

- `unreadTotal` : ๋ก๊ทธ์ธํ์ง ์์ ์ํ๋ฉด 0, ๋ด๊ฐ ๋ณด๋ด์ง ์์ ๋ฉ์์ง ์ค ์ฝ์ง์์(`read:false`)๋ฅผ ์ผ๋ค.

### `readMessage`

- ์ฝ์ผ๋ฉด `read: true`๊ฐ ๋๋๋ก.

## #7.7 ~ 7.8 Apollo server setup for Subscriptions

> https://velog.io/@ryong9rrr/Apollo-server-Subscriptions-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95

## #7.9 Subscriptions filtering 1

> https://www.apollographql.com/docs/apollo-server/data/subscriptions/#filtering-events

`withFilter`๋ 2๊ฐ์ ๋งค๊ฐ๋ณ์๋ฅผ ์ฌ์ฉํ๋ค.

- ๋๋ฒ์งธ ๋ณ์๋ Boolean์ returnํด์ผํจ(์ค์!)

---

roomUpdates์์

```
subscription{
  roomUpdates(id:2){
    id
    payload
  }
}
```

๋ก ws๋ฅผ ๊ตฌ๋ํ๊ณ 

sendMessage๋ก

```
mutation{
  sendMessage(roomId:4, payload:"what"){
    ok
    error
  }
}
```

์ ํ์ ๋ payload์ variables์ ๊ฐ์ ๋ค์๊ณผ ๊ฐ๋ค.

```
//payload
{
  roomUpdates: {
    id: 18,
    payload: 'what',
    userId: 1,
    roomId: 4,
    read: false,
    createdAt: 2021-06-15T15:02:15.050Z,
    updatedAt: 2021-06-15T15:02:15.051Z
  }
}
//variables
{ id: 2 }
```

## #7.10 Subscriptions filtering 2

#7.9์์ ์กด์ฌํ์ง ์๋ ๋ฐฉ์ ๋ํด์๋ ์๋์ด ๋์๋๋ฐ ๊ทธ์๋ํ ์๋ฌfix.

throw Error๋ฅผ ํ๋ ์ด์ ๋ ์ด์จ๋  return๊ฐ์ด Boolean์ด์ด์ผ ํ๊ธฐ ๋๋ฌธ์ธ๋ฐ return null๋ ์๋๋ค. (๊ทธ๋์ ๊ทธ๋ฅ throw Error)

## #7.11 ~ 12 Subscriptions Authentication

### `sendMessage` ์์ 

kim์ด lee์๊ฒ ๋ฉ์ธ์ง๋ฅผ ๋ณด๋ > ๊ทธ๋ฌ๋ฉด kim๊ณผ lee๊ฐ ์๋ ๋ฐฉ์ด ์์ฑ์ด ๋จ > ๊ทธ ๋ฐฉ์ id๋ฅผ ํตํด yong์ด ๊ทธ ๋ฐฉ์ ๋ฉ์ธ์ง๋ฅผ ๋ณด๋??? >

๊ทธ๋ฌ๋ฉด ๊ทธ ๋ฐฉ์ ์กด์ฌํ๋ user๋ kim๊ณผ lee์ธ๋ฐ ๋ฌ๊ธํฌ๋ก yong์ด ๋ณด๋ธ ๋ฉ์ธ์ง๊ฐ ์กด์ฌํ๊ฒ ๋จ.

์ด๋ฐ error๋ฅผ ๋ฐฉ์งํ๋ค.

### server.js & roomUpdates.resolvers.js

`sendMessage`๋ฅผ ์์ ํ๋ ์ด์ ์ฒ๋ผ ๋ด๊ฐ ์๋ ๋ฐฉ์ ๋ฉ์ธ์ง๋ฅผ ๋ณด๋ด๋ฉด ์๋๋ ๊ฒ ์ฒ๋ผ listening๋ ํ๋ฉด ์๋๋๊น.

---

# ๋น๋ ๋ฐ ๋ฐฐํฌ 1

ํค๋ก์ฟ (Heroku)๋ก ๋ฐฐํฌํจ.

`nodemon` ํ๋ก์ ํธ๋ฅผ ์งํํ  ๋ ๋์์ฃผ๋ ๋ชจ๋์ด๊ธฐ ๋๋ฌธ์ ๋น๋๊ณผ์ ์์๋ ๋นผ์ค๋ค.

๋ฐฐํฌ ์ ๋ฉ๋ชจ๋ฆฌ์ฉ๋์ด ์ปค์ง๊ธฐ ๋๋ฌธ์ `babel-node`๋ฅผ ์ฌ์ฉํ๋ฉด ์๋จ -> `babel CLI` ์ฌ์ฉ

1. `src`ํด๋๋ฅผ ๋ง๋ค์ด์ฃผ๊ณ  ํ๋ก์ ํธ ๊ด๋ จ ํ์ผ์ ๋ชจ๋ ๋ฃ์ด์ค๋ค.
2. ํ๊ฒฝ์ด ๋ฐ๋์์ผ๋ฏ๋ก `npm run dev` ๋ช๋ น์ด๋ฅผ ์ํํ๊ธฐ์ํด `package.json`์์ `src/server`๋ก ๋ณ๊ฒฝ
3. `"build"` ์ปค๋งจ๋ ์ถ๊ฐ, `babel src --out-dir build`๋ "babel, srcํด๋์ ์๋ ๋ชจ๋ ๊ฑธ ๊ฐ์ ธ์์ 'build'๋ผ๋ ํด๋๋ฅผ ๋ง๋ค์ด์ ๊ฑฐ๊ธฐ์ ๋ค ๋ด์์ค"๋ผ๋ ๊ฒ์. ์ดํ `$ npm run build`
4. build ํด๋๊ฐ ์๊ฒผ์ผ๋ `.gitignore`์ `/build/`์ถ๊ฐ
5. `"start"` ์ปค๋งจ๋ ์ถ๊ฐ, `$ npm run start` ํน์ `$ npm start`.
   ์ด๋๋ก ์งํํ๋ฉด `var _isLiked = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref8, _, _ref9)...ReferenceError: regeneratorRuntime is not defined...`๋ผ๋ ์๋ฌ๊ฐ ๋ธ.
6. ์๋ฌ๊ฐ ๋ฌ ์ด์ ๋ ๋น๋๊ธฐํจ์ ๋๋ฌธ, ์๋ฌ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ๐ `npm install --save-dev @babel/plugin-transform-runtime`
7. `babel.config.json`์ plugin ์ถ๊ฐ.
8. build ํด๋๋ฅผ ์ง์์ฃผ๊ณ  ๋ค์ `npm run build`์คํ ํ `npm start`
9. 4000ํฌํธ(graphql์๋ฒ)๋ก ๊ฐ์ ์ ๋๋ ํ์ธํด๋ณธ๋ค.
