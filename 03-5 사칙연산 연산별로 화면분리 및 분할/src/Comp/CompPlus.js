import React from 'react';
import { useRef } from 'react';
import CompResult from './CompResult';
import CompResultBtn from './CompResultBtn';

const CompPlus = ({_num1,_num2,_changeResult,_changePoint,_point,_changeStage,}) => {
  const refInput=useRef()
  
  return (
    <div>
      {_num1}+{_num2}=<input ref={refInput} type="text" size="1" />
      <hr />
    {/* <button onClick={fnsetRes}>결과보기</button> */}
    <CompResultBtn
    _num1={_num1}
    _num2={_num2}
    _point={_point}
    _refInput={refInput}
    _changeResult={_changeResult}
    _changePoint={_changePoint}
    _changeStage={_changeStage}
    _stage={_stage}
    />
    </div>

  );
};

export default CompPlus;