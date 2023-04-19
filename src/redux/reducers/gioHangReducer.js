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

			return [...state]; // 00xxabs
			// ...state : spread
		}
		default:
			return state;
	}
};
