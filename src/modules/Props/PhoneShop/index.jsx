import React, { Component } from 'react';
import CardItem from './CardItem';

export default class PhoneShop extends Component {
	/**
	 * 1. Dàn Layout UI
	 * 2. Binding Data ( xử lý chức năng )
	 */
	arrPhone = [
		{
			maSP: 1,
			tenSP: 'VinSmart Live',
			manHinh: 'AMOLED, 6.2, Full HD+',
			heDieuHanh: 'Android 9.0 (Pie)',
			cameraTruoc: '20 MP',
			cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
			ram: '4 GB',
			rom: '64 GB',
			giaBan: 5700000,
			hinhAnh: './img/vsphone.jpg',
		},
		{
			maSP: 2,
			tenSP: 'Meizu 16Xs',
			manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
			heDieuHanh: 'Android 9.0 (Pie); Flyme',
			cameraTruoc: '20 MP',
			cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
			ram: '4 GB',
			rom: '64 GB',
			giaBan: 7600000,
			hinhAnh: './img/meizuphone.jpg',
		},
		{
			maSP: 3,
			tenSP: 'Iphone XS Max',
			manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
			heDieuHanh: 'iOS 12',
			cameraSau: 'Chính 12 MP & Phụ 12 MP',
			cameraTruoc: '7 MP',
			ram: '4 GB',
			rom: '64 GB',
			giaBan: 27000000,
			hinhAnh: './img/applephone.jpg',
		},
	];

	state = {
		spChiTiet: {
			maSP: 3,
			tenSP: 'Iphone XS Max',
			manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
			heDieuHanh: 'iOS 12',
			cameraSau: 'Chính 12 MP & Phụ 12 MP',
			cameraTruoc: '7 MP',
			ram: '4 GB',
			rom: '64 GB',
			giaBan: 27000000,
			hinhAnh: './img/applephone.jpg',
		},
	};

	renderPhone = () => {
		const newArr = this.arrPhone.map((item, index) => {
			return (
				<div className='col-4'>
					<CardItem
						data={item}
						handleXemChiTiet={() => {
							// console.log('bla bla');
							const newState = { spChiTiet: item };
							this.setState(newState);
						}}
						handleDemo={(item) => {
							console.log(item);
						}}
					/>
					{/* <div className='card'>
						<img src={item.hinhAnh} alt={item.tenSP} />

						<div className='card-body'>
							<p>{item.tenSP}</p>
							<p>${item.giaBan.toLocaleString()}</p>

							<button
								className='btn btn-success'
								onClick={() => {
									const newState = { spChiTiet: item };

									this.setState(newState);
								}}>
								Xem Chi Tiết
							</button>
						</div>
					</div> */}
				</div>
			);
		});

		return newArr;
	};

	render() {
		const {
			manHinh,
			heDieuHanh,
			cameraSau,
			cameraTruoc,
			rom,
			ram,
			tenSP,
			hinhAnh,
		} = this.state.spChiTiet;

		/**
		 * phân biệt giữa props và state:
		 * - props: là giá trị của component cha truyền vào. Bên ngoài truyền vào. Không thể set lại giá trị. Readonly.
		 * - state: là giá trị của chính bên trong component đó. set lại gía trị , thông qua this.setState
		 *
		 * giống nhau: các thuộc tính có sẵn của class component
		 */

		return (
			<div className='container mt-2'>
				<div className='row'>{this.renderPhone()}</div>

				<div className='row mt-5'>
					<div className='col-3'>
						<h2>{tenSP}</h2>
						<img
							src={hinhAnh}
							alt='..'
							style={{
								width: '100%',
							}}
						/>
					</div>

					<div className='col-9'>
						<h2>Thông Số Kỹ Thuật</h2>

						<table className='table'>
							<tr>
								<td>Màn Hình</td>
								<td>{manHinh}</td>
							</tr>
							<tr>
								<td>Hệ Điều Hành</td>
								<td>{heDieuHanh}</td>
							</tr>
							<tr>
								<td>Camera Trước</td>
								<td>{cameraTruoc}</td>
							</tr>
							<tr>
								<td>Camera Sau</td>
								<td>{cameraSau}</td>
							</tr>
							<tr>
								<td>RAM</td>
								<td>{ram}</td>
							</tr>
							<tr>
								<td>ROM</td>
								<td>{rom}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
