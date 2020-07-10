import React, { useState, useEffect } from 'react';
import { getData } from './service';

const Counter = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  const test1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(111);
      }, 2000);
    });
  }

  const test = async () => {
    const res = await test1();
    console.log(res);
  }

  const queryData = async () => {
    const res = await getData();
    console.log('res', res);
  }

  useEffect(() => {
    test();
    queryData();
    let timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
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