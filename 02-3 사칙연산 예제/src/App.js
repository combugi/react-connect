import React from 'react';
import { useState } from 'react';

const App = () => {
  let [_n1,_changeN1]=useState(1)
  let [_n2,_changeN2]=useState(2)
  let [_n3,_changeN3]=useState(3)

  const fnnumset=function(){
    _changeN1=current.value
    _changeN2=current.value
  }
  return (
    <>
      <select >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <select >
        <option value="1">+</option>
        <option value="2">-</option>
      </select>

      <select >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <hr />
      <span>1</span>
      <span>+</span>
      <span>1</span>
      =
      <input type="number" />
      <hr />
     <button>결과보기</button>
     <hr />
     <span>점수 : 0</span>


    </>
  );
};

export default App;





