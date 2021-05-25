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