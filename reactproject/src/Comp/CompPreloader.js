import React from 'react';

const CompPreloader = () => {
  return (
    <div className='preloader'>
      <img src={`${process.env.PUBLIC_URL}/img/preloader.gif`} alt="" />
    </div>
  );
};

export default CompPreloader;