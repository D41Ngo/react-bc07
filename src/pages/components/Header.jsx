import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='/'>
						Navbar
					</NavLink>

					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink
									activeClassName={'bg-white text-dark'}
									activeStyle={{
										borderRadius: '10px',
									}}
									className='nav-link active'
									aria-current='page'
									to='/home'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark'}
									className='nav-link'
									to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark classActive'}
									className='nav-link'
									to='/contact'>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark'}
									className='nav-link'
									to='/login'>
									Login
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark'}
									className='nav-link'
									to='/register'>
									Register
								</NavLink>
							</li>

							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark'}
									className='nav-link'
									to='/btqlf'>
									React Form
								</NavLink>
							</li>

							<li className='nav-item'>
								<NavLink
									activeStyle={{
										borderRadius: '10px',
									}}
									activeClassName={'bg-white text-dark'}
									className='nav-link'
									to='/lifecycle'>
									React Lifecycle
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
