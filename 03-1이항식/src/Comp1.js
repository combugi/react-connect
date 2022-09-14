import React from 'react';

const Comp1 = ({_changeShow1, _changeShow2}) => {
  function fnChange() {
    _changeShow1(false)
    _changeShow2(true)
  }
  return (
    <div>
      Comp1입니다
      <br />
      <button onClick={fnChange}>Comp2출력</button>
    </div>
  );
};

export default Comp1;