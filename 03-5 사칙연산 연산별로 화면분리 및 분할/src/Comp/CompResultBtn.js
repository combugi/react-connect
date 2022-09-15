import React from 'react';

const CompResultBtn = () => {
  const fnsetRes= ()=>{
    let answer
    if(_stage==="CompPlus"){
      answer=_num1+num2

    }else if(_stage==="CompMinus"){
      answer=_num1-num2
    }
    if(_num1+_num2 === parseInt(refInput.current.value)){
      _changeResult("정답")
      let a = _point
      a++
      _changePoint(a)
    }else{
      let a = _point
      a--
      _changeResult("오답")
      _changePoint(a)
    }
    if(_num1+_num2 === parseInt(refInput.current.value)){
      _changeResult("정답")
      let a = _point
      a++
      _changePoint(a)
    }else{
      let a = _point
      a--
      _changeResult("오답")
      _changePoint(a)
    }
    _changeResult("Result")
  }
 
    
  
  return (
    <div>
      <button onClick={fnsetResult}>결과보기</button>
    </div>
  );
};

export default CompResultBtn;