# instaclone-backend

`git config --global core.autocrlf true`

---

## 📖 목차

### Setup

- #3.0 project 생성
- #3.1 ~ 3.2 graphQL & Apollo-server
- #3.3 Query & Mutation, 구조분해할당
- #3.4 prisma & postgresql 개발환경설정
- #3.5 prisma migrate
- #3.6 ~ 3.8 CRUD with prisma client + prisma studio
- #3.9 ~ 3.10 디렉토리구조 나누기
- #3.11 Dotenv
- #3.12 new project ready

### User

- #4.0 ~ 4.2 Create Account
- #4.3 seeProfile, createAccount catch error
- #4.4 ~ 4.5 login with JWT token
- #4.6 디렉토리구조 나누기 2
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
- #4.23.1 seeFollowers 의 2가지 방법
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

---

--backend--

- apollo server
- prisma2 > prisma studio / prisma CLI / prisma client / prisma migrate
- graphQL

--frontend--

- react

--app--

- react-native > expo / CLI, CLI는 기업에서 쓰인다. 둘다 배울거임

# Setup

## #3.0 project 생성

📌 `npm init -y`

## #3.1 - 3.2 graphQL & Apollo-server

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

## #3.3 Query & Mutation, 구조분해할당

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

## #3.4 prisma & postgresql 개발환경설정

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

## #3.5 prisma migrate

> https://velog.io/@ryong9rrr/Prisma-PostgreSQL-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0

## #3.6 - 3.8 CRUD with prisma client + prisma studio

createMovie, deleteMovie, updateMovie, 전체 movies 조회, id로 movie 조회

## #3.9 - 3.10 디렉토리구조 나누기

📌 `npm install graphql-tools`

`server.js client.js schema.js` 로 분리하고 `schema.js`에 `graphql-tools`로 `typeDefs, queries, mutations` 들을 합친다.

## #3.11 Dotenv

📌 `npm install dotenv`

## #3.12 new project ready

`Movies` 폴더삭제<br>
`prisma - migrations` 폴더삭제<br>
`DATABASE - instaclone` 삭제 후 재생성

# User

## #4.0 ~ 4.2 Create Account

mutation - createAccount

패스워드 암호화를 위한 bcrypt 📌 `npm install bcrypt`

## #4.3 seeProfile, createAccount catch error

1. query seeProfile - userName을 통해 user한명 정보보기

2. createAccount 에서 동일한 userName이나 email이 있을 때 에러처리

## #4.4 ~ 4.5 login with JWT token

login 확인을 위한 token 📌 `npm install jsonwebtoken`

## #4.6 디렉토리구조 나누기 2

typeDefs대로 나누고 queries와 mutations를 resolvers로 합치기

## #4.7 editProfile

editProfile 뼈대잡기 (우선 where id:1 로 잡고...)

## #4.8 ~ 4.9 http request 방법론

editProfile 과 같은 resolver는 로그인이 된 상태에서 실행되어야한다.

그러면 이걸 어떻게하느냐... 로그인 시 http header로 token을 보내놓고 token이 없으면 실행이 안되어야함.

일단 http headers에 토큰을 적어놓은 상태에서 이 방법론대로 실행될 수 있음.

```
HTTP HEADERS

{
  "token" : "token code"
}
```

## #4.10 utils.js > getUser()

token이 필요한 resolver(로그인상태일때만 사용되어야 할 resolver)를 위한 함수

## #4.11 utils.js > protectResolver()

때로는 resolver를 보호해야할 때가 있다. login은 제외

## #4.12 Currying

함수형 프로그래밍 기법 Currying

## #4.13 Currying refactoring

리팩토링. `protectedResolver()`는 `ok` 와 `error` 두 개의 인자를 반환한다는 것에 주의.

## #4.14 File Upload - 1

- `schema.prima` 👉 파일업로드를 위한 schema 추가(bio, avatar), 그에 따라 `users.typeDefs`도 바꿔주고.. `editProfile.resolvers`에도 `args` 추가..

- 지금까지는 `typeDefs`와 `resolvers`를 통합시켜줘서 `Upload`라는 스칼라타입이 없었음. 하지만 파일업로드를 위해서는 `Upload`가 필요한데,

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

그런데 `typeDefs` 와 `resolvers`를 분리시키면...

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

위 처럼 몇 가지 새로운 타입과 `Upload`라는 스칼라타입이 생겼음.

## #4.15 File Upload - 2 with Altair

file 업로드 작업은 `playground` 로는 안돼서 `Altair` 설치, Altair는 graphql전용 클라이언트.

**Altair**

```
mutation($bio:String, $avatar:Upload){
  editProfile(bio:$bio, avatar:$avatar){
    ok
    error
  }
}

//variables 쓰는법
<VARIABLES>
{
  "bio": "im super happy"
}
```

Add files에 변수명 avatar로 바꾸고 파일업로드, 그리고 request를 보내고 `avatar`를 콘솔로 찍어보면

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

altair에서 파일업로드를 하려하면 `maximum call stack size exceeded` 에러가 나서 fix...

(다음에는 우분투로 npm, nodejs를 다운받아야겠다.)

`package.json` 에 코드 몇 가지 추가하고 `node_modules` 삭제 후 `npm cache clean --force` 로 캐시 삭제 후 다시 `npm i`

## #4.17 File Upload - 3 - stream

stream 연결하기(pipe), 나중에는 apollo-server가 upload를 지원안한다고..? 하는데 뭐 일단 그렇게만 알아두자.

## #4.18 express

apollo-server 를 express & apollo-server-express 서버로 변경

📌 `npm i express apollo-server-express`

HTTP request logger를 확인할 미들웨어 morgan 설치

📌 `npm install morgan`

## #4.19 changing Avatar

파일이름 유니크하게 바꾸기, 서버에 path 추가.

또 `Maximun call stack size exceeded Error` 떠서 다시 처리했음.

일단 `preinstall": "npx npm-force-resolutions@0.0.3` 로 바꿔줬다.

## #4.19.1 createAccount fix

createAccount에서 mutation은 불리언과 에러 두가지로 리턴하기로 했으므로 user를 리턴하는것이 아닌 ok와 error를 리턴하는 걸로 수정

## #4.20 ~ 4.22.1 follow & unfollow

user의 follower는 건드리지않는다 > following의 유무에 따라 follower가 바뀌는 것이기 때문.

## #4.22.2 seeFollow with include

prisma의 `include`를 이용해서 `User`안의 배열인 `followers` 와 `following` 을 확인 할 수 있다.

매우 간단하지만 이 경우, 배열의 크기가 굉장히 커진다면 DB의 비용이 커진다.

include라는 기능이 있다는 것만 알아두고 다른 로직으로 `seeFollow`를 구현해보자.

## #4.23.1 seeFollowers 의 2가지 방법

팔로워를 보는 resolver `seeFollwers` 를 만들었다.

1. user가 가지고있는 follwers의 배열을 가져오는 법

```
//1. user의 모든 팔로워를 찾는 법
const aFollowers = await client.user
  .findUnique({ where: { userName } })
  .followers();

console.log(aFollowers);
```

2. 그 user를 following 하고 있는 유저들을 가져오는 법

```
//2. user를 팔로잉하는 사람들을 찾는법
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

offset pagination은 `1 2 3 4 ... 26` 이런식의 일반적인 pagination이다.

`#4.23.1` 에서 1번 방법을 채택, 하지만 이 상태 그대로 쓰면 데이터가 커질 시, 비용이 굉장히 커질 것이다. pagination을 해보자.

## #4.24 offset Pagination 2

pagination은 `#4.23.1` 의 1번방법, totalFollowers 는 2번방법.

## #4.25 cursor pagination

`seeFollwers`와 `seeFollowing` 를 cursor pagination으로 변경해보자.

cursor pagination은 무한스크롤 로직이다. 프론트엔드 단에서 마지막으로 본 데이터를 db에 넘겨주고(**request**), db는 그 이후의 데이터를 프론트로 다시 전송한다.

## #4.26 ~ 4.28 Computed Fields

computed fields 는 virtual values.

- `users.typeDefs.js` 에 새로운 스칼라타입을 추가했다.

```
totalFollowers: Int!
totalFollowing: Int!
isFollowing: Boolean!
isMe: Boolean!
```

여기서 `totalFollewrs, totalFollowing` 은 로그인을 필수로 하지않지만 `isFollowing, isMe` 는 로그인을 필수로 한다.

- 자기 자신을 follow하지 못하는 코드를 `isFollowing`, `followUser.resolvers.js` 어디에 추가해야할까? 아예 추가하지않아도 프론트엔드단에서 처리가 가능할 것 같은데 어떻게 하는게 좋을지 생각중.

## #4.29 searchUsers

cursor pagination으로 유저 검색하기

# Photo

## #6.0 ~ 6.1 photos model relation

> prisma relation
> https://www.prisma.io/docs/concepts/components/prisma-schema/relations

prisma DOCS 를 읽어보면 `do not exist in the database`, 데이터베이스에는 존재하지 않는다.. 이러는데 이 말은즉슨 그저 관계만 정의해주면 따로 데이터베이스에 저장하지 않는다는 것이다. 그저 관계만 이어줄뿐...(관계들을 계속해서 데이터베이스에 저장한다면 비용이 커질 것임)

- User - Photo 는 1:N 의 관계다. 따라서 photo에서는 외래키를 생성해줘야한다.
- Photo - Hashtag 는 다대다의 관계.

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

-> 1:N 관계라는 것을 명시하고, `model Photo` 에서 외래키는 `userId`이고, User의 id 값 이다.

## #6.2 ~ 6.5 Upload photo & hashtag

- module 구조를 어떻게 할지 생각해 봐야한다. `Hashtag`를 `photo` 모듈안에 둘지.. 아니면 따로 둘지.. 만들면서 구조를 바꿔나갈 수도 있음.

- **schema.prisma** 에서 hashtag -> unique 값으로 수정했음.

- prisma의 `connectOrCreate` 는 unique한 필드값에만 사용할수있음.

- `photos.resolvers.js` > computed field로 user와 hashtag를 명시

`protectedResolver` 는 `ok` , `error` 를 반환하는데.. `UploadPhoto` 를 그러면 `Photo` 가 아니라 `UploadPhotoResult`로 해주는게 좋지 않을까? (`protectedResolver` 로 감싸주는 건 `Result`형태로 규칙성있게)

## # #6.6 seeHashtag

computed field로 args를 넘겨줄수도있다.

hashtag를 입력 시 사진 데이터받는것을 cursor pagination으로 구현

## #6.7.1 User > photos

**schema.prisma** 에서는 user와 photo간의 관계를 명시하였기 때문에 prisma studio에서 User를 보면 photos가 모두 떴음.

하지만 graphql (local4000) 에서는 type 명시를 안해줬기 때문에 해줘야하고, 동시에 resolver에서도 명시해야함.

User feed에 가면 모든사진을 다 띄워야하니까 pagination은 필요없을 듯..?

## #6.7.2 searchPhotos

searchPhotos ... cursor pagination 해줘야 할까?

## #6.7.3 ~ 6.8 editPhoto

- mutation 에서만 result type으로 해주는 중

- hashtag 생성하는 함수 `processHashtag` 를 `photos.utils.js` 에 만들었음 > `uploadPhoto` 에도 적용.

- `User`에서도 총 사진수를 확인할수있도록 `totalPhotos`필드를 만들어봤음ㅎ

## #6.9.1 editPhoto done

`processHashtag` 에는 `await` 가 필요없을듯.

## #6.9.2 ~ 6.10 toggle Like

prisma 데이터모델로 쓰일 **schema.prisma** 에 `model Like`를 추가. (graphQL 진영에서, "좋아요 누른 게시물보기"라는 기능을 만들지 않을거면 `Like` 라는 type은 없어도 될 것 같지만 일단 만듬.)

- User는 여러개의 Like를 가질수있다.
- Photo는 여러개의 Like를 가질수있다.

따라서 Like에 User와 Photo필드는 relation(외래키)을 정의해야한다.

## #6.11 seePhoto - likes

- 사진에 "좋아요한 사람들"을 보여주는 기능

- `select` 와 `include`의 차이 알고가기

## #6.12 seeFeed

`Photo`를 올린 `User`의 `followers의 id` == `로그인한 User의 id` 인 `Photo`가 팔로워들의 피드에 보여지는 로직.

하지만 내껏도 보여야하기 때문에 `OR`을 사용, `createAt`을 내림차순으로 하여 최신Photo가 맨 위에 뜨도록하였음.