// import React, { Component } from './libs/react';
// import ReactDOM from './libs/react-dom';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/lifecycle/Counter';

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

class Welcome extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log('1. 初始化props, state');
  }

  handleClick = () => {
    console.log(this.refs.a);
    this.setState({
      number: this.state.number + 1
    })
  }

  UNSAFE_componentWillMount() {
    console.log('2. 组件将要渲染 willMount');
  }

  render() {
    const { number } = this.state;
    console.log('3. 组件渲染 render');
    return (
      <h1 className="title" ref="a">hello, 
        <span onClick={this.handleClick}>world</span>
        <p>count: {number}</p>
        <SubContent count={number}/>
      </h1>
    )
  }

  shouldComponentUpdate() {
    console.log('6. state或props更改时触发');
  }

  UNSAFE_componentWillUpdate() {
    console.log('7. 组件将要更新')
  }

  componentDidUpdate() {
    console.log('8. 组件更新完成');
  }

  componentDidMount() {
    console.log('4. 组件渲染完成');
  }
}

class SubContent extends Component {
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps, '5.属性变化时触发');
  }

  componentWillUnmount() {
    console.log('元素被移除时触发')
  }
  
  render() {
    return <div>{this.props.count}</div>
  }
}

// let element = React.createElement("h1", {
//   id: "title",
//   className: "bbb",
//   style: {
//     color: 'red',
//     background: 'pink',
//     fontSize: '50px'
//   }
// }, "hello", React.createElement("span", null, "world"));

ReactDOM.render(<Counter />, document.getElementById('root'));
