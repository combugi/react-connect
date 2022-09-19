import React from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';

const CompMenu = () => {//let{}=useContext(AppContext),context._chgeStage("minus")
  let {_changeStage,_changeNum1,_changeNum2} = useContext(Appcontext)

 const fnchangeStage=(e)=>{
  _changeNum1(Math.ceil(Math.random()*9))
  _changeNum2(Math.ceil(Math.random()*9))
  _changeStage(e.target.getAttribute("data-stage"))
 }
  return (
    <div className='menu-container'>
      <button onClick={fnchangeStage} data-stage="plus">더하기문제</button>
      <button onClick={fnchangeStage} data-stage="minus">빼기 문제</button>
    </div>
  );
};

export default CompMenu;