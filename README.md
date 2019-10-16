# Webpack & Babel

## - webpack : 모듈번들러
## - babel : es6/es7 이상의 자바스크립트 문법을 하위브라우저와 호환가능하도록 es5문법으로 변환시켜주는 도구
```
$npm init //package.json 파일생성
$npm install @babel/cli @babel/core @babel/preset-env babel-loader --save-dev
```
>* ### babel/cli: 커맨드라인명령으로 babel 기능을 실행할수있게함
>* ### babel/preset-env: 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것
>* ### package-lock.json파일: npm패키지들이 각각 수많은 의존성을 가지고 있기 때문에 의존성 패키지들을 다운받는 URL을 미리 모아둬 다른 컴퓨터에서 package.json을 통해 npm install로 패키지들을 설치시 훨씬 빠른 속도로 패키지를 받을 수 있도록 도움.
>* ### babel-loader: webpack이 .js 파일들에 대해 babel을 실행하도록 만들어줌
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
>* ### 실행하려면 npm run build 또는 npm run serve
>* ### mode : development | production 모드로 설정하면 알아서 자동최적화되는 웹팩최신기능

### webpack-dev-server
굳이 build하여 새로넣지않아도
로컬에서 작업중인 화면을 볼수있게하고 
파일 내용 수정시 자동으로 내용을 새로고침

### build
실제로 번들링되고 최적화된 최종 산출물 파일을 index.html에서 그파일 하나만 불러들이게 하면 실제 배포시 사용가능

### webpack.config.js
```
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js', //index.js에 있는 파일 내용들을
    output: {
        path: path.resolve(__dirname, 'dist'), //dist 폴더 경로에
        publicPath: '/dist/',
        filename: 'bundle.js' //bundle.js란 이름의 파일로 최종산출
    },
    module: {
        rules: [
            {
                test: /\.js$/, //js형식 파일들을
                include: path.join(__dirname), //해당경로의
                exclude: /(node_modules)|(dist)/, //해당폴더제외하고
                use: {
                    loader: 'babel-loader', //babel실행가능하게(하위브라우저지원을 위해 문법변환)
                    options: {
                        presets: ['env'] 
                    }
                }
            }
        ]
    }
};
```
