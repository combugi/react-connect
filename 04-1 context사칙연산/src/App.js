import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import CompMenu from './Comp/CompMenu';
import CompMulty from './Comp/CompMulty';
import CompShare from './Comp/CompShare';
import CompSub from './Comp/CompSub';
import CompSum from './Comp/CompSum';

/* obj ={
  이름:홍,
  나이:25
}//객체
obj.이름 -> */ /* 리액트식 let {이름}= obj */



const AppContext=createContext()

const App = () => {
  const [_stage,_changeStage]=useState("CompMenu")
  
  return (
    <AppContext.Provider value={{_changeStage}}>
      {(_stage==="CompMenu")&&< CompMenu />}
      {(_stage==="CompSum")&&<CompSum />}
      {(_stage==="CompSub")&&<CompSub />}
      {(_stage==="CompMulty")&&<CompMulty />}
      {(_stage==="CompShare")&&<CompShare />}
    </AppContext.Provider>
  );
};

export default App;





