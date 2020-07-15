import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function FancyInput(props, ref) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    console.log('e', e);
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log(inputRef);
      inputRef.current.focus();
    },
    change: () => {
      // inputRef.current.change();
    }
  }));
  return <input type="file" ref={inputRef} onChange={handleChange}/>;
}

export default forwardRef(FancyInput);