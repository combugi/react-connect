import React from 'react';
import { useState } from 'react';
import CompMenu from './CompMenu';
import CompMinus from './CompMinus';
import CompPlus from './CompPlus';
import CompResult from './CompResult';
import { createContext } from 'react';
import { useEffect } from 'react';

export const Appcontext=createContext();

const App = () => {
  let [_stage,_changeStage]=useState('plus')
  let [_num1,_changeNum1]=useState(Math.ceil(Math.random()*9))
  let [_num2,_changeNum2]=useState(Math.ceil(Math.random()*9))
  let [_point,_changePoint]=useState(0)
  let [_usernum,_changeuserNum]=useState('')
  useEffect(()=>{
    document.getElementById("root").classList.add("active")
  },[])
  return (
    <Appcontext.Provider value={{_stage,_changeStage,_num1,_changeNum1,_num2,_changeNum2,_point,_changePoint,_usernum,_changeuserNum}}>
      <CompMenu />
      <hr />
      {(_stage==='plus')
        ? <CompPlus />
        : <CompMinus />
      }
      <hr />
      <CompResult />
    </Appcontext.Provider>
  );
};

export default App;





