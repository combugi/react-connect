import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';

const CompUsernum = () => {
  let{_stage,_num1,_num2,_usernum,_changeUserNum}=useContext(Appcontext)
  const fnResult =(e)=>{
    e.preventDefault()
  }
  const fnCheckInput =(e)=>{
    _changeUserNum(parseInt(e.target.value))
  }
  useEffect(()=>{
   let calcRe=(_stage === "plus")?_num1+_num2 :_num1-_num2
   let LInput= document.querySelector(".user-point")
   LInput.classList.remove("active1","active2")

   if(calcRe===_usernum){
    LInput.classList.add("active1")
   }else{
    LInput.classList.add("active2")
   }
  })
  return (
    <div>
      <input className='userInput' type="text" onChange={fnCheckInput} />
      <br /><br />
      <button onClick={fnResult}>결과보기</button>
    </div>
  );
};

export default CompUsernum;