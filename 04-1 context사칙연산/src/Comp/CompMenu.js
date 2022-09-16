import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompMenu = () => {
  let { _ChangeStage } = useContext(AppContext) // a:{_changeStage,d,c} a._changeStage
  const fnChangeStage = (e) => {
    _ChangeStage(e.target.getAttribute("CompMenu"))

  }

  return (
    <div>
      컴포넌트 메뉴
      <button data-stage="CompSum" onClick={fnChangeStage}>더하기</button>
      <button data-stage="CompSub" onClick={fnChangeStage}>빼기</button>
      <button data-stage="CompMulty" onClick={fnChangeStage}>곱하기</button>
      <button data-stage="CompShare" onClick={fnChangeStage}>나누기</button>
    </div>
  );
};

export default CompMenu;