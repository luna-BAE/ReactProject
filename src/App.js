import logo from './logo.svg';
import './App.css';

// 변수 선언은 let 혹은 const로만 가능.
let a = 10; // 변수
const b = 20; // 상수

// retunr 시에 하나의 dom만 리턴 가능.
function App() {
  function hello() {
    let test = 20; //변수의 스코프가 꼬이기 때문에 var 변수 말고 let을 사용할 것.
  }

  let c;
  console.log(1, c); //undefined

  // css design
  //      - 내부에 적는 방법 : 컴포넌트에 직접 style 주기.
  const mystyle = {
    // < object 만드는 방식
    color: 'red',
  };
  //      - 외부 파일에 적는 방법 : app.css 파일 사용
  //      - 라이브러리 사용 방법

  return (
    // if는 사용 불가. 대신 삼항연산자(조건? 값(true) : 값(false)) 사용 가능.
    // 조건부 렌더링은 true일때만 해당 내용을 보여줌.
    <div>
      <div style={mystyle}>
        hello {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">
        해딩태그 {c === 10 && '20입니다. < 조건부 렌더링'}{' '}
      </h1>
      <hr />
    </div>
  );
}

export default App;
