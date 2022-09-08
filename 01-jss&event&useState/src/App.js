import React, { useEffect,useState } from 'react';


const App = () => {
 let [_n,_changeN] = useState(0)//_n=0
 
  const fnSome = ()=>{
    let n = _n
    n++
    _changeN(n)
    /* $('p').html(a)  *///제이쿼리 상 변수를 바꾸는 문법
    
  }
  return (
    <>
     <h1 className='h1'>리액트첫수업</h1>
     <hr />
     <button onClick={fnSome}>증가</button>
     <hr />
     <p>{_n}</p>
      </>
      );
};
      export default App;





