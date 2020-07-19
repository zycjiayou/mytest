import React, { Component } from 'react';

interface Iprops {
  time: string;
  timeVal?: string;
}

interface Istate {
  time: Date;
}

const CounterHOC = (WrapComponent) => {
  return class Wrapper extends Component<Iprops> {

    state:Istate = {
      time: new Date()
    }
    
    timerId: NodeJS.Timeout;

    componentDidMount() {
      this.timerId = setInterval(() => {
        this.setState({
          time: new Date()
        })
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    render() {
      return <WrapComponent timeVal={this.state.time} {...this.props}/>
    }
  }
}

export default CounterHOC;