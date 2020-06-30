import React from 'react';
import ReactDOM from 'react-dom';

// import Hello from './components/Hello';
import Counter from './components/Count';

ReactDOM.render(<Counter time={new Date().toLocaleTimeString()}/>, document.getElementById('root'));