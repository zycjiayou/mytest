// import React, { Component } from './libs/react';
// import ReactDOM from './libs/react-dom';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Hello from './components/Hello';
// import Counter from './components/Count';
// import Counter from './components/Counter';

// ReactDOM.render(<Counter />, document.getElementById('root'));
// function Welcome(props) {
//   return React.createElement("h1", {
//     id: "title",
//     className: "bbb",
//     style: {
//       color: 'red',
//       background: 'pink',
//       fontSize: '50px'
//     }
//   }, "hello111", React.createElement("span", null, "world"));
// }

interface Istate {
  number: number;
}

class Welcome extends Component<{}, Istate> {
  
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleClick = () => {
    console.log(this.refs.a);
  }

  render() {
    const { number } = this.state;
    return (
      <h1 className="title" ref="a">hello, 
        <span onClick={this.handleClick}>world</span>
        <span>count: {number}</span>
      </h1>
    )
  }
}

let element = React.createElement(Welcome, {});

// let element = React.createElement("h1", {
//   id: "title",
//   className: "bbb",
//   style: {
//     color: 'red',
//     background: 'pink',
//     fontSize: '50px'
//   }
// }, "hello", React.createElement("span", null, "world"));

ReactDOM.render(<Welcome />, document.getElementById('root'));
