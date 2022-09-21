import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompOutputMes = () => {
  let {}= useContext(AppContext)
  return (
    <div className='output-mes' onClick={()=>{true}}>
        <img src={`${process.env.PUBLIC_URL}./img/sorry.png`} alt="" />
    </div>
  );
};

export default CompOutputMes;