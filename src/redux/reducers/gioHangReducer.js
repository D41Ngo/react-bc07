const gioHangStateDefault = [
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
		soLuong: 2,
	},
]; // 00xx

export const gioHangReducer = (state = gioHangStateDefault, action) => {
	// array , object: lưu theo địa chị
	// CHÚ Ý: đối với array hay object thì clone trước khi trả về
	switch (action.type) {
		case 'THEM_GIO_HANG': {
			const sp = action.payload;

			const spTonTai = state.find((item) => item.maSP === sp.maSP);

			if (spTonTai) {
				spTonTai.soLuong += 1;
			} else {
				sp.soLuong = 1;
				state.push(sp);
			}

			// copy ra một array mới để có thể re-render
			return [...state]; // 00xxabs
			// ...state : spread
		}
		case 'XOA_SAN_PHAM': {
			// trả về gio hàng mới không chứa maSP mà mình muốn xóa
			const newGioHang = state.filter((sp) => sp.maSP !== action.payload);

			/**
			 * cách kiểm tra xem có cùng giá trị, hay là địa chỉ hay không
			 * đổi với array hoặc object
			 * console.log(newGioHang === state); // true cùng địa chỉ, false thì khác
			 */
			return [...newGioHang]; // an toàn nhất
			// copy ra một array mới,
			// để nhận về một địa chỉ mới
			// để redux có thể re-render

			// tại vì newGioHang đã là một địa chỉ mới rồi, không cần copy ra cũng được
			// return newGioHang; // bạn nào thật sử hiểu về filter find, object array

			// return state.filter((sp) => sp.maSP !== action.payload);
		}

		case 'TANG_GIAM_SO_LUONG_SAN_PHAM': {
			const spCanTim = state.find((sp) => sp.maSP === action.payload.maSP);

			// Nếu tìm thấy
			if (spCanTim) {
				spCanTim.soLuong += action.payload.soLuong;

				if (spCanTim.soLuong < 1) {
					alert('Không Được Giảm Số Lượng Thêm Được Nữa !!!');
					spCanTim.soLuong = 1;
				}
			}

			return [...state];
		}
		default:
			return state;
	}
};
