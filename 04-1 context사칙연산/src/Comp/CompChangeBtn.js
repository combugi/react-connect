import React from 'react';

const CompChangeBtn = () => {
  return (
    <div>
      <button onClick={function(){_changeStage("CompMenu")}}>이동</button>
      화면전환해주는 버튼
    </div>
  );
};

export default CompChangeBtn;