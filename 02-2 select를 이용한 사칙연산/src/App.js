import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Comppoint from './Comppoint';

const App = () => {
  let [_point, _changePoint] = useState(0)
  let oper = '+'
  const refInput1 = useRef()
  const refInput2 = useRef()
  const refInput3 = useRef()
  


 const fnChageOp = (e)=>{
  oper = e.target.value
 }


  const fnResult = function () {
    let num1 = parseInt(refInput1.current.value);
    let num2 = parseInt(refInput2.current.value);
    let num3 = parseInt(refInput3.current.value);
  
    let result
    if (oper==="+"){
      result=num1+num2
      
    }else if(oper==="-"){
      result=num1-num2
    }else if(oper==="*"){
      result=num1*num2
    }else if(oper==="/"){
      result=num1/num2
    }

    if(result=num3){
      let p= _point
      p++
      _changePoint(p)
    }
  }
  return (
    <>
      <input ref={refInput1} type="number" />
      <select onChange={fnChageOp}>
        <option value="+"></option>
        <option value="-"></option>
        <option value="*"></option>
        <option value="/"></option>
      </select>
      <input ref={refInput2} type="number" />
      =
      <input ref={refInput3} type="number" />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <hr />
     <Comppoint _point ={_point}/> 
    </>
  );
};

export default App;





