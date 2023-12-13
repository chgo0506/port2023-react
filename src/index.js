// jsx문법을 사용하기 위해 필요한 react모듈. 모든 react 컴포넌트에 필수적인 코드다.
import React from 'react';
// react-dom모듈은 react 앱을 최초 렌더링 하기위해 엔트리 포인트에서 쓰인다. 
// 브라우저 뿐만 아니라 서버사이드용 랜더링 메소드를 지원한다.
import ReactDOM from 'react-dom';
// css파일을 import 구문으로 가져오고 있다. 
// 이는 webpack의 css-loader를 활용한 것인데, 

// App라는 이름의 컴포넌트 가져오기
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);