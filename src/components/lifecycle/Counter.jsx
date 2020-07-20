import React, { Component } from 'react';

import EmailInput from './EmailInput.jsx';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('1.新流程初始化');
  }

  state = {
    number: 0,
    email: 'youremail@qq.com'
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props, state, '2.计算props算出state');
  // }

  shouldComponentUpdate() {
    console.log('5.props或state改变的时候');
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('6.拿dom')
    return '1'
  }

  componentDidUpdate() {
    console.log('7.更新完成')
    // 会死循环
    // setTimeout(() => {
    //   this.setState({
    //     email: '1111111111111111'
    //   })
    // }, 1000);
    // fetch('/abc.json').then(response => response.json()).then(data => {
    //   this.setState({
    //     email: '12221'
    //   });
    // })
  }

  render() {
    console.log('3.渲染元素')
    return <div>
      <EmailInput email={this.state.email}/>
    </div>
  }

  componentDidMount() {
    console.log('4.渲染完成');
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    },  3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}