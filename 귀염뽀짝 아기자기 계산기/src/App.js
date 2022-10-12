import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import CompErrorMes from './Comp/CompErrorMes';
import CompInputContainer from './Comp/CompInputContainer';
import CompOutput from './Comp/CompOutput';
import CompOutputMes from './Comp/CompOutputMes';
import CompTitle from './Comp/CompTitle';

export const AppContext = createContext()

const App = () => {
  let [_str, _changeStr] = useState('')
  let [_showError,_changeShowError] = useState(false)
  let [_showSorry,_changeShowSorry] = useState(false)
  return (
    <AppContext.Provider value={{ _str, _changeStr,_showError,_changeShowError,_showSorry,_changeShowSorry }}>
      <main className='main-app'>
        <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} />
        <CompTitle />
        <CompOutput />
        <CompInputContainer />

      </main>
      {_showError&&<CompErrorMes />}
      {_showSorry&&<CompOutputMes />}
    </AppContext.Provider>
  );
};

export default App;





