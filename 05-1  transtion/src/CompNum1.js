import React from 'react';
import { useContext } from 'react';
import {AppContext} from './App'
import { useEffect } from 'react';
const CompNum1 = () => {
  let {_num1,_changeNum1}=useContext(AppContext)
  useEffect(()=>{
    console.log("Num1이 만들어짐");
  })
  
  return (
    <span>
      {_num1}
    </span>
  );
};

export default CompNum1;