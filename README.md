# 2025-08-27


Lorem Ipsum은 디자인이나 문서, 웹사이트 작업 시 **내용이 아직 준비되지 않았을 때 채우는 더미 텍스트(placeholder text)**입니다. 주로 글씨체, 배치, 레이아웃 등을 미리 보기 위해 사용하죠.

예시:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


원래는 고대 라틴어에서 나온 문구지만, 의미 없이 변형된 형태로 현재까지 사용됩니다.

용도:

웹사이트 디자인 목업

출판물 시안

UI/UX 설계

폰트 및 레이아웃 테스트

### 아이콘 넣을때 
font awesome 들어가서 복사함.

### 모르는 내용 복습

1. Node.js의 역할

JavaScript 실행 환경

원래 JS는 브라우저에서만 실행 가능했는데, Node.js를 사용하면 서버에서도 JS 실행 가능

서버 개발 가능

웹 서버, API 서버, 실시간 채팅, 게임 서버 등을 JavaScript로 만들 수 있음

비동기 처리(Non-blocking I/O)

많은 사용자가 동시에 접속해도 빠른 처리 가능

2. npm의 역할

Node Package Manager

Node.js 생태계의 수많은 라이브러리, 패키지를 설치하고 관리

프로젝트 의존성 관리

예: Express, React, Axios 등 필요한 패키지를 쉽게 설치 가능

npm install express


스크립트 실행

package.json에 명령어 등록 → npm start, npm run build 등으로 실행 가능

3. 왜 Node.js + npm을 같이 쓰나?

Node.js만 있으면 JS 실행 환경만 있고, 필요한 라이브러리를 일일이 가져와야 함

npm을 쓰면 라이브러리를 쉽게 설치하고 버전 관리 가능

두 개가 합쳐져야 실제로 웹 서버, 프레임워크, 프론트엔드 빌드 환경까지 다룰 수 있음

### infinite scroll
“Infinite scroll”은 웹 페이지나 앱에서 사용자가 스크롤을 내릴 때 새로운 콘텐츠가 자동으로 계속 로드되는 기능을 말합니다. 일반적으로 블로그, SNS, 쇼핑몰 등에서 많이 사용됩니다. 전통적인 **페이지네이션(pagination)**과 달리 사용자는 버튼 클릭 없이 콘텐츠를 끝없이 볼 수 있습니다.

특징

스크롤 위치가 일정 지점에 도달하면 서버에 새로운 데이터를 요청.

사용자가 페이지를 내려도 끊김 없이 콘텐츠가 추가.

사용자 경험이 자연스럽지만, 페이지가 길어지면 성능 문제가 생길 수 있음.

SEO(검색 엔진 최적화)에는 부정적일 수 있음.

장점

사용자 경험 부드러움.

페이지 로딩 시 초기 데이터만 가져오기 때문에 빠른 첫 화면 로딩.

단점

스크롤이 끝이 없어서 사용자가 전체 콘텐츠를 파악하기 어려움.

브라우저 메모리 부담.

SEO, 공유 링크 문제 발생 가능.