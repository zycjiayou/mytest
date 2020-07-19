import React, { useState, useEffect } from 'react';

const Counter = (props) => {

  const [list, setList] = useState([1,2,3,4,5]);

  const hanlderClick = () => {
    console.log('list', list);
    // list.push(1);
    const arr = [...list];
    arr.splice(1,1);
    setList(list.filter(item => item !== 4))
  }

  return (
    <div>
      {list}
      <button onClick={hanlderClick}>点击</button>
    </div>
  )
}

export default Counter;