import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';
import CompUsernum from './CompUsernum';

const CompMinus = () => {
  let {_num1,_num2}=useContext(Appcontext)
  useEffect(() => {

    let id = setTimeout(() => {
      document.querySelector(".comp-minus").classList.add("active")
    }, 100)

    return (() => {
      clearTimeout(id)
    })
  }, [])





  return (
    <form className='comp-minus'>
     {_num1}-{_num2}=<CompUsernum/>
    </form>
  );
};

export default CompMinus;