import React, { useState, useEffect } from 'react';

const Counter = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timerId = setInterval(() => {
      // setTime(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(timerId)
  }, []);

  return (
    <div>
      clock: {time}
    </div>
  )
}

export default Counter;