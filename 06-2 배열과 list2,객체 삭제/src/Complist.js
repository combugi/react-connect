import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';
import ComplistLi from './ComplistLi';

const Complist = () => {
  let { _changeStage, _listArr } = useContext(AppContext)
  const fnchangeStage = () => {
    _changeStage("CompAdd")
  }
  return (
    <div>
      <h3>명단출력화면</h3>
      <ul>
        {
          _listArr.map((v)=>{
            return <ComplistLi key={v.아이디} 사람정보={v}/>
          })
        }
       
      </ul>
      <hr />

      <button onClick={fnchangeStage}> 명단출력하기</button>
    </div>
  );
};

export default Complist;