const stateDefault = {
	banChon: true, //true = Tài ; false = Xỉu,
	soBanThang: 0,
	tongSoBanChoi: 0,
	xucXac: [
		{
			hinhAnh: './img/gameXucXac/2.png',
			diem: 2,
		},
		{
			hinhAnh: './img/gameXucXac/3.png',
			diem: 3,
		},
		{
			hinhAnh: './img/gameXucXac/4.png',
			diem: 4,
		},
	],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHON_XUC_XAC':
			state.banChon = action.payload;
			return { ...state };
		case 'PLAY_GAME':
			// set lại state  tongSoBanChoi
			state.tongSoBanChoi += 1;
			let tongDiem = 0;

			// set lại state  xucXac
			let newListXucXac = [];

			for (let i = 0; i < 3; i++) {
				const diem = Math.floor(Math.random() * 6 + 1); // 1 -> 6
				//Math.floor(Math.random() * 6) => 0 -> 5

				// gắn lại giá trị xúc xắc
				const newXx = {
					hinhAnh: `./img/gameXucXac/${diem}.png`,
					diem: diem,
				};
				newListXucXac.push(newXx);

				tongDiem += diem;
			}

			state.xucXac = newListXucXac;

			// kiểm tra xem thử người chơi đã chọn đúng hay chưa
			// soBanThang += 1;

			// Xỉu 3 <= 10
			// Tài > 11 - 18
			// true = Tài ; false = Xỉu,
			if (
				(state.banChon === true && tongDiem > 11) ||
				(state.banChon === false && tongDiem <= 10)
			) {
				state.soBanThang += 1;
			}

			return { ...state };
		default:
			return state;
	}
};
