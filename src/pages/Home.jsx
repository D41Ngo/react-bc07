import React, { Component } from 'react';

class Home extends Component {
	handleSearch = () => {
		const keyWord = document.getElementById('search').value;
		const type = document.getElementById('type').value;

		this.props.history.push(`/search?k=${keyWord}&t=${type}`);
	};

	render() {
		console.log('props [HOME].....', this.props);
		return (
			<div>
				<input placeholder={'keyword'} id={'search'} />
				<input id={'type'} placeholder={'type'} />
				<button className={'btn btn-succes'} onClick={this.handleSearch}>
					Search
				</button>
			</div>
		);
	}
}

export default Home;
