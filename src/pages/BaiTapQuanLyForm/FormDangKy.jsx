import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';

class FormDangKy extends Component {
	state = {
		value: {
			id: '',
			userName: '',
			img: '',
			email: '',
			phone: '',
			address: '',
		},

		error: {
			id: '',
			userName: '',
			img: '',
			email: '',
			phone: '',
			address: '',
		},

		modal: {
			isOpen: false,
			message: '',
		},
	};

	handleOnchange = (event) => {
		// vừa keyup + keydown
		// dom.value

		// Dom tới chính thẻ input đã được gõ.
		// event.target => chính nó.
		const { id, name, className, value } = event.target;
		console.log({ id, name, className, value });

		// Copy
		const newValue = { ...this.state.value };
		// Xử lý
		newValue[id] = value;
		// newValue['userName'] = value;
		// newValue.userName = value;

		/**
		 * nawValue['id'] = ..
		 * ---
		 * newValue['userName'] = ..
		 * ---
		 * newValue['phone'] = ...
		 */

		// Copy
		const newError = { ...this.state.error };

		// Xử lý validate

		// Không được bỏ trống
		let messError = '';
		if (value === '') {
			messError = name + ' Không được bỏ trống';
		}
		// Format Email
		if (id === 'email') {
			const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

			if (regexEmail.test(value) === false) {
				// !regexEmail.test(value);

				messError = 'Email Không Hợp Lệ.';
			}
		}

		newError[id] = messError;

		// setState: bất đồng bộ
		// cập nhật lại state
		this.setState(
			{
				value: newValue,
				error: newError,
			},
			() => {
				// theo dõi được state cập nhật tức thì
				console.log(this.state);
			}
		);
	};

	handleSubmit = (event) => {
		// Ngăn chặn sự kiện mặc định của thẻ form => reload trang
		event.preventDefault();

		// kiểm tra người dùng đã nhập dữ liệu hay chưa
		for (let keyValue in this.state.value) {
			if (this.state.value[keyValue] === '') {
				alert('Bạn Chưa Nhập Dữ Liệu.');

				// Dừng chạy và thoát khỏi hàm
				return;
			}
		}

		// kiểm tra có error nào hay không
		for (let keyError in this.state.error) {
			if (this.state.error[keyError] !== '') {
				// alert(this.state.error[keyError])
				this.setState({
					modal: {
						isOpen: true,
						message: this.state.error[keyError],
					},
				});
				// Dừng chạy và thoát khỏi hàm
				return;
			}
		}

		// console.log('[SUBMIT]', this.state.value);

		const action = {
			type: 'THEM_NGUOI_DUNG',
			payload: this.state.value,
		};

		this.props.dispatch(action);
	};

	handleCloseModal = () => {
		this.setState({
			modal: {
				isOpen: false,
				message: '',
			},
		});
	};

	render() {
		// console.log('render', this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='card'>
					<h1 className='card-header text-white bg-dark text-center'>
						Form Đăng Ký
					</h1>
					<div className='row'>
						<div
							className='col-6'
							style={{
								padding: '1rem 2rem',
							}}>
							<div className='mt-3'>
								<label className='form-label'>ID:</label>
								<input
									className='form-control'
									placeholder='Enter Id'
									id='id'
									name='Id'
									onChange={this.handleOnchange}
								/>

								<p className='text-danger'>{this.state.error.id}</p>
							</div>
							<div className='mt-3'>
								<label className='form-label'>User Name:</label>
								<input
									className='form-control'
									placeholder='Enter User Name'
									id='userName'
									name='User Name'
									onChange={this.handleOnchange}
								/>
								<p className='text-danger'>{this.state.error.userName}</p>
							</div>
							<div className='mt-3'>
								<label className='form-label'>Email:</label>
								<input
									className='form-control'
									placeholder='Enter email'
									id='email'
									name='Email'
									onChange={this.handleOnchange}
								/>
								<p className='text-danger'>{this.state.error.email}</p>
							</div>
						</div>

						<div
							className='col-6'
							style={{
								padding: '1rem 2rem',
							}}>
							<div className='mt-3'>
								<label className='form-label'>Image:</label>
								<input
									className='form-control'
									placeholder='Enter Image'
									id='img'
									name='img'
									onChange={this.handleOnchange}
								/>
								<p className='text-danger'>{this.state.error.img}</p>
							</div>
							<div className='mt-3'>
								<label className='form-label'>Phone:</label>
								<input
									className='form-control'
									placeholder='Enter User Type'
									id='phone'
									name='phone'
									onChange={this.handleOnchange}
								/>
								<p className='text-danger'>{this.state.error.phone}</p>
							</div>
							<div className='mt-3'>
								<label className='form-label'>Address:</label>
								<input
									className='form-control'
									placeholder='Enter User Type'
									id='address'
									name='address'
									onChange={this.handleOnchange}
								/>
								<p className='text-danger'>{this.state.error.address}</p>
							</div>
						</div>
					</div>

					<button
						className='btn btn-success m-4'
						style={{
							width: 400,
						}}>
						Submit
					</button>
				</div>

				{this.state.modal.isOpen && (
					<Modal
						handleCloseModal={this.handleCloseModal}
						message={this.state.modal.message}
					/>
				)}
			</form>
		);
	}
}

export default connect()(FormDangKy);
