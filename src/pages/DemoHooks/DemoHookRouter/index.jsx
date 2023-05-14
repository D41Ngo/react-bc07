import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

function DemoHookRouter() {
	// desc: state
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);

	const userloginRef = useRef({
		username: '',
		password: '',
	});

	// desc: useLibrary
	// lấy history
	const history = useHistory();

	// desc: function handle
	const handleChange = (e) => {
		const { value, id, name } = e.target;

		console.log({ value, id, name });

		/**
		 * userloginRef.current => {
		 *  username: '',
		 *  password: '',
		 * }
		 */
		// 1. name = 'username'
		//userloginRef.current['username'] = value

		// 2. name = 'password'
		//userloginRef.current['password'] = value

		userloginRef.current[name] = value;
	};

	const handleLogin = () => {
		if (
			userloginRef.current.username === 'cyber' &&
			userloginRef.current.password === 'cyber'
		) {
			// navigate => home
			history.push('/about');
		} else {
			alert('Nhập sai password hoặc username');
		}
	};

	if (isLoading) {
		return <>Loading ....</>;
	}

	return (
		<div className='d-flex flex-column mt-2 gap-2 container'>
			<input
				onChange={handleChange}
				name='username'
				id='username'
				className='form-control'
				placeholder='username'
			/>
			<input
				name='password'
				id='password'
				onChange={handleChange}
				className='form-control'
				placeholder='password'
			/>
			<button className='btn btn-success' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
}

export default DemoHookRouter;
