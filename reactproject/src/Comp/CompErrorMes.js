import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompErrorMes = () => {
  let{_showError}=useContext(AppContext)
  return (
    <div className='error-mes' onClick={()=>{}}>
      <img src={`${process.env.PUBLIC_URL}./img/oops.png`} alt="" />
    </div>
  );
};

export default CompErrorMes;