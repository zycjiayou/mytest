import React, { Component } from 'react';

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    email: this.props.email
  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log('getDerivedStateFromProps执行了',nextProps, state);
  } 

  hanldeChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return <div>
      <input type="text" onChange={this.hanldeChange} value={this.state.email}/>
      <input type="text" defaultValue={this.props.email}/>
    </div>
  }
}
