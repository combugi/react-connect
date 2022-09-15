import React, { useRef } from 'react';

const Comp1Q = ({ _n1, _n2,_changeN1,_changeN2,_changeStage,_result,_point }) => {
 const fnsetN = ()=> {
  _changeN1(Math.ceil(Math.random()*9))
  _changeN2(Math.ceil(Math.random()*9))
}//func
 const fnsetRes =()=>{
  _changeStage("result")
  if(_n1 *_n2 ===userNum){
    _changeResult("정답")
    let point = _point
    point++
  _changePoint(point)
  }else{
    _changeResult("오답")
  
  }
  
 }
 const refInput=useRef()
 let username = parseInt(refInput.current.value)
return (
  <div>
    <button onClick={fnsetN}>문제제출</button>
    <hr />
    <b>{_n1}</b>*<b>{_n2}</b>=<input ref={refInput} type="text" size="1" />
    <hr />
    <button onClick={fnsetRes}>결과보기</button>
  </div>
);
};

export default Comp1Q;