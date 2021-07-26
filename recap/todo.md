## 추가할 기능

- 데이터를 불러오는 작업들 - 프론트엔드 하면서 cursor pagination하기

- #6.21 하다가 생각남) editProfile이나 editPhoto를 했을 경우, S3에서 바로 삭제하지 않고 휴지통같은 폴더를 만들어서 데이터를 보존하다가 얼마간의 시간이 지난 후 자동으로 삭제되는 백엔드 코드.

## code or error fix

210716

- 프론트에서 처리를 위해 createAccount 에서 존재하는 유저로 계정을 생성할 시 throw new Error 했던 것을 return ok, error로 변경했음.

210726 code 추가

- (올바른) 로그인상태인지 아닌지를 판단하는 query - me 를 추가했음.
