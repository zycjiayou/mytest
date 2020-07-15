import React, { useRef, useEffect } from 'react';
import _ from 'lodash';
import calc from './calc';
import Child from './HOCS/ref_test';

export default function Hello() {
  const inputEl = useRef(null);
  const childInput = useRef(null);

  const handleClick = () => {
    inputEl.current.click();
  }

  useEffect(() => {
    childInput.current.focus();
  }, []);

  return (
    <div>
      hello word, {_.join([1,2,3,4],',')}
      <p onClick={handleClick}>{calc(1, 3)}</p>
      <input type="file" ref={inputEl}/>
      <Child ref={childInput} />
    </div>
  )
}