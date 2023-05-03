import React, { Component, PureComponent } from 'react';
/**
 * Purecomponent cũng tương tự như Component
 * - Theo dõi giúp chúng ta khi nào props hay state thay đổi thì mới render lại
 * - Purecomponent không có shouldComponentUpdate
 *
 * Note:
 * so sánh dựa vào state, props cũ với state, props mới
 * -> so sánh theo kiểu sallow compare
 * -> sallow compare: đối với kiểu dữ liệu primitive (string, number, boolean, null, undefined, symbol)
 */
export default class Child extends PureComponent {
	constructor(props) {
		super();

		console.log('1.[child] constructor');
	}

	static getDerivedStateFromProps(newProps, currentState) {
		console.log('2.[child] getDerivedStateFromProps');

		return null;
	}

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	console.log('child [shouldComponentUpdate]');
	// 	// if (true) {
	// 	// 	return true; // false: không render lại component
	// 	// 	// true: nên render lại component
	// 	// }

	// 	// return false;

	// 	// this.props => là props cũ của component
	// 	console.log('previous props', this.props);

	// 	// props mới cho lần render tiếp theo
	// 	console.log('nextProps', nextProps);

	// 	if (this.props.count !== nextProps.count) {
	// 		return true;
	// 	}

	// 	return false;
	// }

	render() {
		console.log('3.[child] render');
		console.log(this.props);

		return (
			<div>
				Child
				<h3>Count: {this.props.count}</h3>
			</div>
		);
	}

	idInterval = {};

	componentDidMount() {
		console.log('4.[child] componentDidMount');

		this.idInterval = setInterval(() => {
			console.log('call api');
		}, 1000);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('child [componentDidUpdate]');
	}

	componentWillUnmount() {
		// chạy trước khi component xóa khỏi giao diện.

		// dọn dẹp những cái mà mình không mong muốn chạy ngầm.
		console.log('[unmounting]');

		clearInterval(this.idInterval);
	}
}
