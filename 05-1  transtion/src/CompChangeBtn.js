import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';
import { useEffect } from 'react';

const CompChangeBtn = () => {
  let{_changeNum1}=useContext(AppContext)
/*   const fnChangeNum1=()=>{
    _changeNum1(Math.ceil(Math.random()*9))
  }//fn */
   useEffect(()=>{
    document.querySelector(".btn1").addEventListener("click",()=>{
    _changeNum1(_changeNum1(Math.random()*10))
    console.log("버튼 클릭");
    })
  },[]) 
  
 
  return (
    <div>
      <button className='btn1'>숫자바꾸기</button>
    </div>
  );
};

export default CompChangeBtn;