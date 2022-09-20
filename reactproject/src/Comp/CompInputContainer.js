import React from 'react';
import { btnArr } from '../store/store';
import CompBtn from './CompBtn';
const CompInputContainer = () => {

  return (
    <div className='input-container'>
      {
        btnArr.map(btnI=><CompBtn key={btnI.id}   btnI={btnI}    />
        )
      }
    </div>
  );
};

export default CompInputContainer;