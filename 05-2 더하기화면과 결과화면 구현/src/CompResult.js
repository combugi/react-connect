import React from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';

const CompResult = () => {
 let {_point}=useContext(Appcontext)
  return (
    <div>
      결과:{_point} 점
    </div>
  );
};

export default CompResult;