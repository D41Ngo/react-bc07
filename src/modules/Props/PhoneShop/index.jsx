import React, { Component } from 'react';
import CardItem from './CardItem';
import SanPhamChiTiet from './SanPhamChiTiet';
import GioHang from './GioHang';

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

		gioHang: [],
	};

	renderPhone = () => {
		const newArr = this.arrPhone.map((item, index) => {
			return (
				<div className='col-4'>
					<CardItem
						// QUY ƯỚC CHUNG: Đăt tên prop theo kiểu camelCase.
						data={item}
						handleXemChiTiet={() => {
							// console.log('bla bla');
							const newState = { spChiTiet: item };
							this.setState(newState);
						}}
						handleDemo={(item) => {
							console.log(item);
						}}
						themGioHang={this.themGioHang}
					/>
				</div>
			);
		});

		return newArr;
	};

	// state ở đâu thì this.setState ở đó.
	themGioHang = (spClick) => {
		// spClick: chưa có thuộc tính số lượng
		console.log({
			spClick,
		});

		// tạo biến giỏ hàng
		const gioHang = this.state.gioHang;

		const indexSanPhanTimKiem = gioHang.findIndex(
			(sp) => sp.maSP === spClick.maSP
		);
		console.log(indexSanPhanTimKiem);

		if (indexSanPhanTimKiem === -1) {
			// chưa có trên giỏ hàng
			spClick.soLuong = 1;
			gioHang.push(spClick);
		} else {
			// có trên giỏ rồi thì thêm số lượng + 1 vào
			gioHang[indexSanPhanTimKiem].soLuong += 1;
		}

		// setState
		this.setState({
			gioHang: gioHang, // 4 cai
		});
	};

	xoaSanPham = (maSanPham) => {
		console.log(maSanPham);

		let gioHang = this.state.gioHang;
		const indexSanPhamCanXoa = gioHang.findIndex((sp) => {
			return sp.maSP === maSanPham;
		});

		// hiển thị hộp thoại confirm trước khi xóa? trả về true hoặc false
		if (window.confirm('Bạn có muốn xóa sản phẩm này hay không?')) {
			// (bắt đầu xóa từ vị trí nào, và xóa bao nhiêu phần tử)
			gioHang.splice(indexSanPhamCanXoa, 1);
		}

		this.setState({
			gioHang: gioHang,
		});
	};

	// xoaSanPham(12)

	// gắn method tangGiamSoLuongSanPham cho 2 nut button + , -
	tangGiamSoLuongSanPham = (maSanPham, soLuong) => {
		const gioHang = this.state.gioHang;

		const indexSp = gioHang.findIndex((sp) => sp.maSP === maSanPham);

		const spCanTangGiam = gioHang[indexSp];

		spCanTangGiam.soLuong += soLuong;

		//spCanTangGiam.soLuong = 1
		// nhan nut button - => soLuong = -1
		// kq: spCanTangGiam.soLuong = 0

		console.log('soLuong', spCanTangGiam.soLuong);

		if (spCanTangGiam.soLuong < 1) {
			if (window.confirm('Bạn có muốn xóa sản phẩm này hay không?')) {
				// (bắt đầu xóa từ vị trí nào, và xóa bao nhiêu phần tử)
				gioHang.splice(indexSp, 1);
			} else {
				spCanTangGiam.soLuong = 1; // khôi phục lại số lượng = 1
			}
		}

		this.setState({
			gioHang: gioHang,
		});
	};

	render() {
		const { tenSP, hinhAnh } = this.state.spChiTiet;

		/**
		 * phân biệt giữa props và state:
		 * - props: là giá trị của component cha truyền vào. Bên ngoài truyền vào. Không thể set lại giá trị. Readonly.
		 * - state: là giá trị của chính bên trong component đó. set lại gía trị , thông qua this.setState
		 *
		 * giống nhau: các thuộc tính có sẵn của class component
		 */

		return (
			<div className='container mt-2'>
				<div>
					<GioHang
						tangGiamSoLuongSanPham={this.tangGiamSoLuongSanPham}
						gioHang={this.state.gioHang}
						xoaSanPham={this.xoaSanPham}
					/>
				</div>
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
						{/* - spChiTiet: tên props mà các bạn muốn truyền
                            - this.state.spChiTiet: giá trị các bạn muốn truyền thông qua tên props spChiTiet
                        */}
						<SanPhamChiTiet
							spChiTiet={this.state.spChiTiet}
							maSP={this.state.spChiTiet.maSP}
							img={this.state.spChiTiet.hinhAnh}
						/>
					</div>
				</div>
			</div>
		);
	}
}
