import React from 'react';
import { useState } from 'react';
import Comp1Q from './Comp1Q';
import CompResult from './CompResult';

const App = () => {
  let[_stage,_changeStage]=useState("q") //_stage ="question"
  let[_n1,_changeN1]=useState(0)
  let[_n2,_changeN2]=useState(0)
  let[_result,_changeResult]=useState("?")
  let[_point,_changePoint]=useState(0)
  return (
    <>
    {(_stage==="q")
    ? 
    <Comp1Q _n1={_n1}
     _n2={_n2}
      _changeN1={_changeN1}
       _changeN2={_changeN2}
       _changeStage={_changeStage}
       _result={_changeResult}
       _point={_changePoint}
       />
    : 
    <CompResult
    _result={_changeResult}
     _point={_changePoint}/>
    }
    
      
    </>
  );
};

export default App;





