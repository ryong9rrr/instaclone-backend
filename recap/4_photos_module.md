# #6.0 ~ 6.1 photos model relation

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

# #6.2 ~ 6.5 Upload photo & hashtag

- module 구조를 어떻게 할지 생각해 봐야한다. `Hashtag`를 `photo` 모듈안에 둘지.. 아니면 따로 둘지.. 만들면서 구조를 바꿔나갈 수도 있음.

- **schema.prisma** 에서 hashtag -> unique 값으로 수정했음.

- prisma의 `connectOrCreate` 는 unique한 필드값에만 사용할수있음.

- `photos.resolvers.js` > computed field로 user와 hashtag를 명시

`protectedResolver` 는 `ok` , `error` 를 반환하는데.. `UploadPhoto` 를 그러면 `Photo` 가 아니라 `UploadPhotoResult`로 해주는게 좋지 않을까? (`protectedResolver` 로 감싸주는 건 `Result`형태로 규칙성있게)

# # #6.6 seeHashtag

computed field로 args를 넘겨줄수도있다.

hashtag를 입력 시 사진 데이터받는것을 cursor pagination으로 구현
