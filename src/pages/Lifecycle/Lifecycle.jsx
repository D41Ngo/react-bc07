import React, { Component } from 'react';
import Child from './Child';

/**
 * Mounting: component được render lên giao diện.
 * Updating: state, props thay đổi.
 * Unmounting: component xóa khỏi trên giao diện. không phải "display:none"
 */

export default class Lifecycle extends Component {
	constructor(props) {
		super();
		this.state = {
			count: 1,
			like: 1,
		};

		console.log('1.[Parent] constructor');
	}

	static getDerivedStateFromProps(newProps, currentState) {
		console.log('2.[parent] getDerivedStateFromProps');
		// Thực hiện thay đổi state trước khi component được render ra giao.

		// return về object để update state
		// this.setState()

		// mong muốn count: 2.

		// this.setState({
		// 	count: 999,
		// })

		// return null thì không update state gì cả
		return null;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('[shouldComponentUpdate]');

		return true; // false: không render lại component
		// true: nên render lại component
	}

	render() {
		console.log('3.[parent] render');
		return (
			<div>
				<h1>Lifecycle</h1>
				<div className='bg-dark text-white p-5'>
					<h2>Parent</h2>
					<h3>Count: {this.state.count}</h3>
					<button
						onClick={() => {
							this.setState({
								count: this.state.count + 1,
							});
						}}>
						+
					</button>
					<button
						onClick={() => {
							this.setState({
								count: this.state.count - 1,
							});
						}}>
						-
					</button>

					<button
						onClick={() => {
							this.setState({
								like: this.state.like + 1,
							});
						}}>
						Like: {this.state.like}
					</button>

					<div className='bg-success p-5'>
						<Child count={this.state.count} />
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		console.log('4.[parent] componentDidMount');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[componentDidUpdate]');
	}
}
