import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompAddName = () => {
  let { _changeStage, _changeListArr, _listArr } = useContext(AppContext)
  let refName = useRef()
  let refAge = useRef()
  let refGender = useRef()
  const fnAddlist = () => {
    //사람정보를 객체로 만든다
    let id = Date.now() //클릭한 순간 1/1000 초 로 기록//타임스탬프
    let name = refName.current.value
    let age = parseInt(refAge.current.value)
    let gender = refGender.current.value
    let obj = {
      id,
      name,
      age,
      gender
    }
    let arr =[..._listArr]
    arr.push(obj)
    _changeListArr(arr)
    //_listArr를 다른배열로 만든다.(깊은복사)
    //_changeListArr를 이용해 값 변경
    _changeStage("Complist")
  }//fnaddlist
  return (
    <div>
      이름:<input ref={refName} type="text" /><br />
      나이:<input ref={refAge} type="text" /><br />
      성별:<input ref={refGender} type="text" /><br />
      <hr />
      <button onClick={fnAddlist}>명단추가하기</button>
    </div>
  );
};

export default CompAddName;