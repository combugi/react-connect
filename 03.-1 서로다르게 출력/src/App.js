import React from 'react';
import { useState } from 'react';
import Comp1 from './Comp/Comp1';
import Comp2 from './Comp/Comp2';

const App = () => {
  const [_show,_changeShow]=useState("Comp1")
  let c
  if(_show==="Comp1"){
    c= <Comp1/>

  }else if(_show==="Comp2"){
    c =<Comp2/>
  }
  return (
    <>
      
    </>
  );
};

export default App;





