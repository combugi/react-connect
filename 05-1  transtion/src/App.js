import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CompChangeBtn from './CompChangeBtn';
import CompNum1 from './CompNum1';

export let AppContext=createContext()

const App = () => {
  let [_num1,_changeNum1]=useState()
  useEffect(()=>{
    console.log("App 출력");
  })/* useEffect=document ready */
  return (
    <AppContext.Provider value={{_num1,_changeNum1}}>
     <CompNum1/>
     <hr />
     <CompChangeBtn/>
    </AppContext.Provider>
  );
};

export default App;





