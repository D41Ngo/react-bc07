const stateDefault = {
	mangNguoiDung: [
		{
			id: 1,
			userName: 'Nguyễn Văn A',
			email: 'nguyenvan@gmail.com',
			img: 'https://i.pravatar.cc?img=65',
			phone: '0123456789',
			address: 'Đà Nẵng',
		},
		{
			id: 2,
			userName: 'Nguyễn Văn B',
			email: 'nguyenB@gmail.com',
			img: 'https://i.pravatar.cc?img=66',
			phone: '0987654321',
			address: 'Sài Gòn',
		},
	],
	nguoiDungSua: {
		// id: 1,
		// userName: 'Nguyễn Văn A',
		// email: 'nguyenvan@gmail.com',
		// img: 'https://i.pravatar.cc?img=65',
		// phone: '0123456789',
		// address: 'Đà Nẵng',
	},
};
// export default => import reactFormReducer ...
export const reactFormReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'THEM_NGUOI_DUNG': {
			// state.mangNguoiDung.push(action.payload)
			// mangNguoiDung trước và sau sẽ cung giá trị, địa chỉ ô nhớ

			state.mangNguoiDung = [...state.mangNguoiDung, action.payload];
			return { ...state };
		}
		case 'XOA_NGUOI_DUNG': {
			const mangNguoiDungMoi = state.mangNguoiDung.filter(
				(nguoiDung) => nguoiDung.id !== action.payload
			);

			// const mangNguoiDungMoi = state.mangNguoiDung.filter(
			// 	(nguoiDung) => {
			//          return nguoiDung.id !== action.payload
			// }
			// );

			state.mangNguoiDung = mangNguoiDungMoi;
			return { ...state };
		}
		case 'CHINH_SUA_NGUOI_DUNG': {
			state.nguoiDungSua = action.payload;
			return { ...state };
		}
		case 'CAP_NHAT_NGUOI_DUNG': {
			// tìm vị trí người dùng cần cập nhật
			const indexNguoiDungCanCapNhat = state.mangNguoiDung.findIndex(
				(nguoiDung) => {
					return nguoiDung.id === action.payload.id;
				}
			);

			// tạo ra mảng người dùng mới. Tránh trường hợp reference value.
			const mangNguoiDungMoi = [...state.mangNguoiDung];
			// kiểm tra thử có tìm ra được hay không
			if (indexNguoiDungCanCapNhat !== -1) {
				// vào vị trí mảng người dùng mới, gắn lại giá trị mới cho nó = với giá trị mình mong muốn cập nhật được gửi lên.
				mangNguoiDungMoi[indexNguoiDungCanCapNhat] = action.payload;
			}

			state.mangNguoiDung = mangNguoiDungMoi; // set lại state mangNguoiDung.

			return { ...state };
		}
		default:
			return state;
	}
};
