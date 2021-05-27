# happyhouse-frontend-vue

![해피하우스 메인](https://user-images.githubusercontent.com/41102293/119766165-7daec900-beef-11eb-83ec-5de1ff833e2a.png)

## 간단한 설명

서울특별시 전월세가 공공 데이터를 Naver Map geocoding API를 이용해 위경도 데이터를 전처리 한 후 Naver Map을 이용해서 매물을 보여주는 홈페이지

## 데모 👀

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.youtube.com/watch?v=yyDJW8w6hoU)

## 기술 스택

### Front-end

- Vue
- Vuex
- Vue-naver-maps
- Vue-multiselect

### Back-end

- Spring boot
- Spring Security
- Naver Map geocoding
- Naver Map reverse-geocoding

## 기능

- 회원 관리
  - 회원 가입
  - 회원 수정
  - 회원 탈퇴
  - 로그인
  - 로그아웃
- Q&A 게시판
  - 게시글 작성
  - 게시글 삭제
  - 게시글 수정
  - 게시글 읽기
- Map
  - 매물 확인
  - 매물 클릭 시 세부 정보
  - 매물 세부 정보에 있는 종합 점수 mousehover시 주변 시설 정보 표시
  - 전세/월세 선택 기능
  - 다세대/아파트/오피스텔 선택 기능
  - 가격 정렬 기능
  - 종합 점수 정렬 기능
  - Map에서 Drag시 법정동에 따른 매물 표시
- Admin
  - Q&A 게시판에 있는 게시글 수정, 삭제 권한
  - 매물 추가 권한

## 구조

    ├── public
    ├── src
    │   ├── assets - 메인 페이지 배경 사진, 주소 자동 완성에 필요한 값
    │   ├── components
    │   │   ├──  Board - Q&A 게시판 관련 컴포넌트
    │   │   ├──  House - 매물 관련 컴포넌트
    │   │   ├──  Layout - Header, Footer와 같은 컴포넌트
    │   │   ├──  Login - 로그인 관련 컴포넌트
    │   │   ├──  Modal - Modal 관련 컴포넌트
    │   │   ├──  Signup - 회원 가입 관련 컴포넌트
    │   │   ├──  UserMenu - UserMenu 관련 컴포넌트
    │   │   ├──  ...
    │   │   └──  SearchForm.vue
    │   ├── router - Vue-Router 설정
    │   ├── service
    │   │   ├──  axios.js - axios basic 설정
    │   │   ├──  boardApi.js - board 관련 api
    │   │   ├──  mapApi.js - map 관련 api
    │   │   └──  userApi.js - User 관련 api
    │   ├── store
    │   │   ├──  modules
    │   │   │    ├── board.js - board 관련 store
    │   │   │    ├── house.js - house 관련 store
    │   │   │    └── user.js - user 관련 store
    │   │   └──  index.js -
    │   ├── utils
    │   │     ├── fontawesome.js - font icon 관련
    │   │     └── util.js - util 함수
    │   └── views - Page 관련
    └── ...

## 후기

그동안 To-do App과 같은 소규모 프로젝트만 진행해서, 회원 관리, 로그인, 게시판의 기능을 갖춘 홈페이지는 처음 개발해보았습니다.

로그인과 관련해서는 JWT라는 것을 알게 되어 이를 이용한 로그인 과정을 음미했습니다. 그리고 Vue Router의 Navigation Guard를 이용해서 로그인하지 않았다면 routing 하지 못하도록 하고 싶었는데 이 부분은 나중에 구현해보고 싶습니다.

그리고 Vuetify라는 Vue UI Library를 사용하려고 했었는데 컴포넌트들끼리 위치 조절을 하기가 저한테는 까다로워서 직접 CSS를 작성했는데 나중에 기회가 된다면 제대로 써보고 싶습니다.
