import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
	state = {
		count: 0,
		imgSrc: '',
	};

	render() {
		if (!localStorage.getItem('userName')) {
			// chuyen nguoi dung ve trang login

			return <Redirect to={'/login'} />;
		}

		return <div>About</div>;
	}
}

export default About;
