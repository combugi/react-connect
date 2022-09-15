import React from 'react';

const CompResult = ({_result,_point,_changeStage}) => {
  return (
    <div>
      {_result}답
      점수:{_point}
      <button onClick={function(){
        _changeStage("CompStart")
      }}>처음으로</button>

    </div>
  );
};

export default CompResult;