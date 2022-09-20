import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import CompInputContainer from './Comp/CompInputContainer';
import CompOutput from './Comp/CompOutput';
import CompTitle from './Comp/CompTitle';

export const AppContext=createContext()

const App = () => {
  let [_str,_changeStr]=useState('')
  return (
    <AppContext.Provider value={{_str,_changeStr}}>
    <main className='main-app'>
      <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} />
      <CompTitle/>
      <CompOutput/>
      <CompInputContainer/>
    </main>
    </AppContext.Provider>
  );
};

export default App;





