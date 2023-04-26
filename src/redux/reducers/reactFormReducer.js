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
		default:
			return state;
	}
};
