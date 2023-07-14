# 원티드 프리온보딩 인턴십 3주차 과제 - github-issues

특정 Github repository의 이슈 목록과 상세 내용을 확인하는 웹 사이트

## # Getting Started

```
git clone https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5.git

npm install
npm start
```

<br><br>

## # 커밋 컨벤션

```
feat: 기능 추가, 삭제, 변경 (코드 수정)
fix: 버그 수정
type: 코드 형식 변경
design: UI 변경
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
test: 테스트 코드 추가, 삭제, 변경
chore: 빌드 업무 수정, 패키지 매니저 수정
```

## # 폴더 구조

```
root /
├ .husky
|  ├ pre-commit
|  ├ pre-push
├ public
|  ├ index.html
├ src
|  ├ api
|  |  ├ getIssues.ts
|  ├ components
|  |  ├ Error.tsx
|  |  ├ ErrorBoundary.tsx
|  |  ├ Navbar.tsx
|  |  ├ Spinner.tsx
|  ├ contents
|  |  ├ HomeContents.tsx
|  |  ├ IssueDetailCOntents.tsx
|  ├ hooks
|  |  ├ useInfinityQuery.ts
|  ├ libs
|  |  ├ axiosInstance.ts
|  ├ modules
|  |  ├ homeStore.ts
|  |  ├ index.ts
|  ├ pages
|  |  ├ Home
|  |  |  ├ Home.tsx
|  |  |  ├ Page.tsx
|  |  ├ IssueDetail
|  |  |  ├ IssueDetail.tsx
|  ├ store
|  |  ├ pages/Home
|  |  |  ├ hooks
|  |  |  |  ├ useHomeState.tsx
|  |  |  |  ├ useSetHomeState.tsx
|  |  |  |  ├ useValueHomeState.tsx
|  |  |  ├ Context.ts
|  |  |  ├ Provider.tsx
|  ├ App.tsx
|  ├ index.tsx
├ package-lock.json
├ package.json
├ README.md
⎿ tsconfig.json
```

<br><br>

## # 팀원

- 김명준 (팀장)
- 이나령
- 조원희
- 김태헌

<br><br>
