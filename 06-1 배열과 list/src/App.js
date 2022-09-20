import React from 'react';
import { useState } from 'react';


const App = () => {
  let [_arr, _changeArr] = useState(["a", "b", "c"])

  const fnAddArr = () => {
    let arr = [..._arr]
    arr.push("d")
    _changeArr(arr)
    /*   arr.push("라") */ //기존의 푸시로 추가가아닌 스테이트로 써야함
  }//fnAddaray
  return (
    <>
      <ul>
        {
          /*    arr.forEach((v)=>{ //v는 배열 값 하나씩 가져오겠다라는 의미가 함축인 인자; for each를 하나씩 리턴 ...출력은 안됨 그래서 배열 전체를 뱉어내는 map을 써야함
                 return v
             }) */
          _arr.map((v,i) => {//첫번째 안에는 영문 ,두번째 인자는 반복괸 회차
            return  <li key ={i}>{v}</li>//태그 안의 key라는 단어를 넣는다(최적화때문?);한번 지정한 key값은 변하지 말아야한다. 
          })
        }{/* 중괄호 안에는 태그를 넣을수 없지만 리턴문 안에서는 태그를 넣을 수있다 변수는 중괄호 안에 적으면 된다. */}
        <button onClick={fnAddArr}>배열추가</button>

      </ul>
    </>
  );
};

export default App;





