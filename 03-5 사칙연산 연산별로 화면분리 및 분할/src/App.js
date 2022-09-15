import React from 'react';
import CompStart from './Comp/CompStart';
import CompPlus from './Comp/CompPlus';
import CompMinus from './Comp/CompMinus';
import CompResult from './Comp/CompResult';
import { useState } from 'react';
import CompResultBtn from './Comp/CompResultBtn';

const App = () => {
  const[_stage,_changeStage]=useState("CompStart")
  const[_num1,_changenum1]=useState(0)
  const[_num2,_changenum2]=useState(0)
  const[_result,_changeResult]=useState()
  const[_point,_changePoint]=useState(0)
  return (
    <>
      {(_stage==="CompStart")&&
      <CompStart _changeStage={_changeStage} _changenum1={_changenum1} _changenum2={_changenum2}/>}
      {(_stage==="CompPlus")&&
      <CompPlus _changeStage={_changeStage} _num1={_num1}_num2={_num2}
       _changeResult={_changeResult} _changePoint={_changePoint} _point={_point} _stage={_stage}/>}
      {(_stage==="CompMinus")&&
      <CompMinus _changeStage={_changeStage} _num1={_num1}_num2={_num2}
       _changeResult={_changeResult} _changePoint={_changePoint} _point={_point} _stage={_stage}/>}
      {(_stage==="CompResult")&&
      <CompResult  _changeResult={_changeResult} _changePoint={_changePoint}
       _changeStage={_changeStage} _changenum1={_changenum1} _changenum2={_changenum2}
      />}
        <CompResultBtn/>
       
    </>
  );
};

export default App;





