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
		// console.log({ id, name, className, value });

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
				// console.log(this.state);
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

	// static getDerivedStateFromProps(newProps, currentState) {
	// 	// this.setState() tuong tu nhau,

	// 	// [Chú Ý]: Không được dùng this.setState trong này. Gây ra tình huống là re-render vô tận.
	// 	if (currentState.value.id !== newProps.nguoiDungSua.id) {
	// 		// cập nhật lại state.
	// 		return {
	// 			value: newProps.nguoiDungSua,
	// 		};
	// 	}
	// 	// không cập nhật lại state;
	// 	return null;
	// }

	componentWillReceiveProps(newProps) {
		//  khi props thay đổi thì mới chạy vào.
		this.setState({
			value: newProps.nguoiDungSua,
		});
	}

	render() {
		console.log('state', this.state);
		const { id, userName, email, img, phone, address } = this.state.value; // {}
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
									value={id}
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
									value={userName}
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
									value={email}
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
									value={img}
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
									value={phone}
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
									value={address}
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

					<button
						className='btn btn-success m-4'
						style={{
							width: 400,
						}}
						onClick={(event) => {
							// chặn form lắng nghe sự kiện onSubmit
							event.preventDefault();

							this.props.dispatch({
								type: 'CAP_NHAT_NGUOI_DUNG',
								payload: this.state.value,
							});
						}}>
						Update
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

const mapStateToProps = (rootReducer) => {
	return {
		nguoiDungSua: rootReducer.reactFormReducer.nguoiDungSua,
	};
};

export default connect(mapStateToProps)(FormDangKy);
