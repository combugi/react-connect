import React from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const ComplistLi = ({사람정보}) => {
  let {_listArr,_changeListArr}=useContext(AppContext)
  const fnDelete = ()=>{
    let arr=_listArr.filter((v)=>{
     return 사람정보.아이디!==v.아이디

    })
    _changeListArr(arr)
  }//fnDelete
  return (
    <li>
      {사람정보.이름}
      &nbsp;
      <button onClick={fnDelete}>삭제</button>
    </li>
  );
};

export default ComplistLi;