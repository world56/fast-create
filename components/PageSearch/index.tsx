import React, { useEffect } from 'react';
import { Table } from 'antd'
import './index.css';

const PageSearch: React.FC<{ ca?: string }> = (props) => {

  return (
    <div className='fast-create-page-search'>
      <h1>A React Fast Create UI Component</h1>
      <Table/>
    </div>
  );
}

export default PageSearch;