import React from 'react';

const CompStart = ({_changeStage,_changenum1,_changenum2}) => {
  const fnChangeStage = (e)=>{
   let stage = e.target.getAttribute("data-stage")
   _changeStage(stage)
   _changenum1(Math.ceil(Math.random()*9))
   _changenum2(Math.ceil(Math.random()*9))
  }

  return (
    <div>
      <p>문제종류 선택하세요</p>
      <button onClick={fnChangeStage} data-stage="CompPlus">덧셈</button>
      <button onClick={fnChangeStage} data-stage="CompMinus">뺄셈</button>
      
    </div>
  );
};

export default CompStart;