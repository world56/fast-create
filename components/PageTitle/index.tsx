import React from 'react';
import './index.css';

export interface P {
  name: string;
}
const PageTitle: React.FC<P> = (props) => {
  return (
    <div className='fast-create-page-title'>
      <p>我是一个PageTitle-{props.name}</p>
    </div>
  );
}

export default PageTitle;