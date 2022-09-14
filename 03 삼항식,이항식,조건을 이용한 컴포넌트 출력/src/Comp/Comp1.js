import React from 'react';

const Comp1 = () => {
  function fnchangeShow(){
    _changeShow(false)
  }
  return (
    <>
      Comp1입니다
      <button onClick={fnchangeShow}>Comp2로 출력</button>
    </>
  );
};

export default Comp1;