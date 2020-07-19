import React, { Component } from 'react';

interface IProps {
  time: string;
}

interface Istate {
	time: string;
	count: number;
}

class Counter extends Component<IProps, Istate> {
  state: Istate = {
		time: this.props.time,
		count: 0,
	}

	timerId: number = 0;

	handleClick = (e: any) => {
		clearInterval(this.timerId);
		console.log(e.target, this.state.count);
		this.setState({
			count: this.state.count + 1
		});
	}

  render() {
		const { time, count } = this.state;
    return (
			<div>
				clock: {time}
				<button onClick={(e) => this.handleClick(e)}>停止</button>
				<p>次数: {count}</p>
			</div>
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}
	
	componentDidMount() {
		// console.log(2);
		this.timerId = window.setInterval(() => {
			// console.log(new Date().toLocaleTimeString());
			this.setState({
				time: new Date().toLocaleTimeString()
			});
		}, 1000);	
	}
}

export default Counter;