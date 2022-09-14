import React from 'react';
import { useState } from 'react';
import Comp1 from './Comp/Comp1';
import Comp2 from './Comp/Comp2';

const App = () => {
  let [_show,_changeShow]=useState(true)
  return (
    <>
    {(_show===true)?
     <Comp1 _changeShow={_changeShow}/>
     :
     <Comp2/>
     
      
    </>
  );
};

export default App;





