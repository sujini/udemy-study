# Webpack & Babel

## - webpack : 모듈번들러
## - babel : es6/es7 이상의 자바스크립트 문법을 하위브라우저와 호환가능하도록 es5문법으로 변환시켜주는 도구
```
$npm init //package.json 파일생성
$npm install @babel/cli @babel/core @babel/preset-env --save-dev
```
>babel/cli: 커맨드라인명령으로 babel 기능을 실행할수있게함
>babel/preset-env: 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것
>package-lock.json파일: npm패키지들이 각각 수많은 의존성을 가지고 있기 때문에 의존성 패키지들을 다운받는 URL을 미리 모아둬 다른 컴퓨터에서 package.json을 통해 npm install로 패키지들을 설치시 훨씬 빠른 속도로 패키지를 받을 수 있도록 도움.

## package.json 안의 scripts 커맨드 명령
```
{
 ...
  "scripts": {
    "build": "node_modules/.bin/webpack --mode production",
    "serve": "webpack-dev-server --mode development"
  },
  ...
}
```
>실행하려면 npm run build 또는 npm run serve
>mode : development | production 모드로 설정하면 알아서 자동최적화되는 웹팩최신기능

### webpack-dev-server
굳이 build하여 새로넣지않아도
로컬에서 작업중인 화면을 볼수있게하고 
파일 내용 수정시 자동으로 내용을 새로고침
