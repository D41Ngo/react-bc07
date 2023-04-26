// rcc
import React, { Component } from 'react';
import FormDangKy from './FormDangKy';
import TableNguoiDung from './TableNguoiDung';

export default class BaiTapQuanLyForm extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='mt-4'>Bài Tập Quản Lý Form</h1>
				<FormDangKy />
				<TableNguoiDung />
			</div>
		);
	}
}
