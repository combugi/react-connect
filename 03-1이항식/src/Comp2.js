import React from 'react';

const Comp2 = ({_changeShow1,_changeShow2}) => {
  function fnChange(){
    _changeShow1(true)
    _changeShow2(false)
  }
  return (
    <div>
      Comp2입니다.
      <br />
      <button onClick={fnChange}>Comp1출력</button>
    </div>
  );
};

export default Comp2;