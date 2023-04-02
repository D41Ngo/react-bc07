import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

export default class Home extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 p-0'>
						<Header />
					</div>
				</div>

				<div className='row'>
					<div className='col-4 p-0'>
						<Sidebar />
					</div>
					<div className='col-8 p-0'>
						<Content />
					</div>
				</div>

				<div className='row'>
					<div className='col-12 p-0'>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}
