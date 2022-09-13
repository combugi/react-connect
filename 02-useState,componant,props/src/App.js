import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import compN1 from './comp/compN1';
import CompN2 from './comp/CompN2';
import CompPoint from './comp/CompPoint';

const App = () => {
  let [_n1, _changeN1] = useState(0) //화면에 출력하는 변수
  let [_n2, _changeN2] = useState(0) //화면에 출력하는 변수
  let [_point, _changeN3] = useState(0)
  let refINput = useRef()

  function fnSetNumber() {
    let n1 = Math.ceil(Math.random() * 9)
    _changeN1(n1) //n1의 값을 변경한다.
    let n2 = Math.ceil(Math.random() * 9)
    _changeN2(n2)//n2의 값을 변경한다.


  }//fn


  function fnResult() {
    let answer = _n1 * _n2
    let userValue = parseInt(refINput.current.value)
    let point = _point + 1
    if (answer === userValue) {
      _changeN3(point)
    }

  }


  return (

    <>
      <button onClick={fnSetNumber}>문제내기</button>
      <hr />
      <compN1 _n1={_n1} />
      *
      <CompN2 _n2={_n2} />
      =
      <input ref={refINput} type="number" />
      <hr />
      <button onClick={fnResult}>결과확인</button>
      <p>점수: <CompPoint _point = {_point}/> </p>

      {/* 점수가 올라가도록 설정.. useStae를 이용... */}
    </>
  );
};

export default App;





