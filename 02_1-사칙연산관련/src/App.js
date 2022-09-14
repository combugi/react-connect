import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  let [_n1, _changeN1] = useState("?")
  let [_oper, _changeOper] = useState("?")
  let [_n2, _changeN2] = useState("?")
  let [_point, _changePoint] = useState(0)
  let refuserInput=useRef()

  const fnsetQ = () => {
    _changeN1(Math.ceil(Math.random() * 9))
    _changeN2(Math.ceil(Math.random() * 9))
    let operArr = ["+", "-", "*", "/"]
    let randomoper = Math.floor(Math.random() * 4)
    _changeOper(operArr[randomoper])
  }//fnseQ
  const fnresult = () => {
    let result
    if(_oper==="+"){
      result=_n1 + _n2
    }else if(_oper==="-"){
      result=_n1 - _n2
    }else if(_oper==="*"){
      result=_n1 * _n2
    }else if(_oper==="/"){
      result=_n1 / _n2
    }
    
    let userNum=parseInt(refuserInput.current.value)
    if(result===userNum){
      let point = _point
      point++
      _changePoint(point)
    }
  }
  return (
    <>
      <button onClick={fnsetQ}>문제내기</button>
      <hr />
      <span>{_n1}</span>
      <span>{_oper}</span>
      <span>{_n2}</span>
      =
      <input ref={refuserInput} type="number" />
      <br />
      <button onClick={fnresult}>결과보기</button>
      <span>점수:{_point}</span>
    </>
  );
};

export default App;





