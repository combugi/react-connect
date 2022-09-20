import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { charArr,imgArr } from '../store/store';
const CompOutput = () => {
  let{_str}=useContext(AppContext)
  return (
    <div className='output-container'>
      <img className='bg-output' src={`${process.env.PUBLIC_URL}/img/output.png`} alt="" />
      <p className='output'>
      {
        _str.split('').map((v,i)=>{//12.345 ->[12,345] '' 123.45 -> 1,2,3,4,5    split()배열로 변환 1+3 >[1,+,3]
          let index=charArr.indexOf(v)
          let fileName = imgArr[index]
          return <img key={i} src={`${process.env.PUBLIC_URL}/img/${fileName}.png`} alt =''/>
        })
      }
      </p>
      
    </div>
  );
};

export default CompOutput;