import React from 'react';
import { useEffect } from 'react';
import { Appcontext } from './App';
import { useContext } from 'react';
import CompUsernum from './CompUsernum';
const CompPlus = () => {
  let {_num1,_num2}=useContext(Appcontext)
  useEffect(() => {
    
    let id =setTimeout(() => {
      document.querySelector(".comp-plus").classList.add("active")
     }, 100)
  
    return(()=>{
      clearTimeout(id)
    })
  }, [])




  return (
    <form className='comp-plus'>
      {_num1}+{_num2} = <CompUsernum/>
    </form>
  );
};

export default CompPlus;