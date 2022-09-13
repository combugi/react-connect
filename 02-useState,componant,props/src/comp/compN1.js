import React from 'react';
import { useEffect } from 'react';


const compN1 = ({_n1}) => {
  useEffect(()=>{
    console.log("compN1이 업데이트 됨");
  })
  return (
    <span>
      {_n1}
    </span>
  );
};

export default compN1;