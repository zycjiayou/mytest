import React from 'react';
import _ from 'lodash';
import calc from './calc';

export default function Hello() {
  return <div>
    hello word, {_.join([1,2,3,4],',')}
    <p>{calc(1, 3)}</p>
  </div>
}