import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompBtn = ({ btnI }) => {
  let { _str, _changeStr } = useContext(AppContext)
  const fn = () => {
    if (btnI.type === "string") {
      let str = _str
      str += btnI.char
      if (str.length > 30) {
        alert("입력식이 너무길어요")
      } else {
        _changeStr(str)
      }
      _changeStr(str)
    } else if (btnI.type === "del") {
      let str = _str
      str = str.slice(0, -1)//가나다라 1번부터 2개를 지운다 //가장뒤에는 -1 0부터 -1까지 남긴다
      _changeStr(str)
    } else if (btnI.type === "clear") {
      let str = _str
      str = ''
      _changeStr(str)
    } else if (btnI.type === "result") {
      try {//예외처리문법
        let str = _str
        const fnNew = new Function(`return(${str})`)
        str = fnNew()//string문자열을 계산해서 반환함
        str = String(str)
        _changeStr(str)
      } catch {
        alert("입력 오류")
      }


    }

  }//fn
  return (
    <button onClick={fn}>
      <img src={`${process.env.PUBLIC_URL}/img/${btnI.src}.png`}
        draggable="false"
      />

    </button>
  );
};

export default CompBtn;