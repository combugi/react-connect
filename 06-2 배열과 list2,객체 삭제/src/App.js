import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import {listArr} from "./store/list"
import CompAddName from './CompAddName';
import Complist from './Complist';

export const AppContext=createContext()

const App = () => {
 const [_stage,_changeStage]=useState("Complist")
 const [_listArr,_changeListArr]=useState(listArr)
  return (
    <AppContext.Provider value={{_stage,_changeStage,_listArr,_changeListArr}}>
    {(_stage==="Complist")&&<Complist/>}
    {(_stage==="CompAddName")&&<CompAddName/>}
    </AppContext.Provider>
  );
};

export default App;





