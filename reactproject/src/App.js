import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import CompN1 from './Comp/CompN1';
import CompN2 from './Comp/CompN2';
import CompScore from './Comp/CompScore';


const App = () => {
  
  let  [_a, _changeN1] = useState(0)
  let  [_b, _changeN2] = useState(0)
  let  [_c, _changeN3] = useState(0)
  let refINput=useRef()
  function fnsetnum(){
    let a =Math.ceil(Math.random()*9)
    _changeN1(a)
    let b =Math.ceil(Math.random()*9)
    _changeN2(b)
  }
  function fnnumresult(){
    let correct = _a +_b
    let userval = parseInt(refINput.current.value)
    let score =_c+1
    if(correct===userval){
      _changeN3(score)
    }
  }
  return (
    <> <button onClick={fnsetnum}>문제내기</button>
      <CompN1 _a = {_a}/>   {/* a */}
      +
      <CompN2 _b = {_b}/> {/* b */}
      =
      <input ref={refINput} type="number" /> {/* c */}
      <hr />
      <button onClick={fnnumresult}>결과보기</button>
      <hr />
      <p>점수:<CompScore _c ={_c}/></p> 
    </>
  );
};

export default App;





