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

# #4.12 Currying

함수형 프로그래밍 기법 Currying

# #4.13 Currying refactoring

리팩토링. `protectedResolver()`는 `ok` 와 `error` 두 개의 인자를 반환한다는 것에 주의.

# #4.14 File Upload - 1

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

# #4.15 File Upload - 2 with Altair

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

# #4.16 nodeJS error fix

altair에서 파일업로드를 하려하면 `maximum call stack size exceeded` 에러가 나서 fix...

(다음에는 우분투로 npm, nodejs를 다운받아야겠다.)

`package.json` 에 코드 몇 가지 추가하고 `node_modules` 삭제 후 `npm cache clean --force` 로 캐시 삭제 후 다시 `npm i`

# #4.17 File Upload - 3 - stream

stream 연결하기(pipe), 나중에는 apollo-server가 upload를 지원안한다고..? 하는데 뭐 일단 그렇게만 알아두자.

# #4.18 express

apollo-server 를 express & apollo-server-express 서버로 변경

📌 `npm i express apollo-server-express`

HTTP request logger를 확인할 미들웨어 morgan 설치

📌 `npm install morgan`

# #4.19 changing Avatar

파일이름 유니크하게 바꾸기, 서버에 path 추가.

또 `Maximun call stack size exceeded Error` 떠서 다시 처리했음.

일단 `preinstall": "npx npm-force-resolutions@0.0.3` 로 바꿔줬다.

# #4.19.1 createAccount fix

createAccount에서 mutation은 불리언과 에러 두가지로 리턴하기로 했으므로 user를 리턴하는것이 아닌 ok와 error를 리턴하는 걸로 수정

# #4.20 ~ 4.22.1 follow & unfollow

user의 follower는 건드리지않는다 > following의 유무에 따라 follower가 바뀌는 것이기 때문.

# #4.22.2 seeFollow with include

prisma의 `include`를 이용해서 `User`안의 배열인 `followers` 와 `following` 을 확인 할 수 있다.

매우 간단하지만 이 경우, 배열의 크기가 굉장히 커진다면 DB의 비용이 커진다.

include라는 기능이 있다는 것만 알아두고 다른 로직으로 `seeFollow`를 구현해보자.

# #4.23.1 seeFollowers 의 2가지 방법

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

# #4.23.2 offset Pagination 1

> https://www.prisma.io/docs/concepts/components/prisma-client/pagination

**offset pagination**

offset pagination은 `1 2 3 4 ... 26` 이런식의 일반적인 pagination이다.

`#4.23.1` 에서 1번 방법을 채택, 하지만 이 상태 그대로 쓰면 데이터가 커질 시, 비용이 굉장히 커질 것이다. pagination을 해보자.

# #4.24 offset Pagination 2

pagination은 `#4.23.1` 의 1번방법, totalFollowers 는 2번방법.

# #4.25 cursor pagination

`seeFollwers`와 `seeFollowing` 를 cursor pagination으로 변경해보자.

cursor pagination은 무한스크롤 로직이다. 프론트엔드 단에서 마지막으로 본 데이터를 db에 넘겨주고(**request**), db는 그 이후의 데이터를 프론트로 다시 전송한다.

# #4.26 ~ 4.28 Computed Fields

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
