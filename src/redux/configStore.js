import { combineReducers, createStore } from 'redux';

// Khai Báo giá trị mặc định cho state
const imgCarStateDefault = './img/products/black-car.jpg';
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

const rootReducer = combineReducers({
	//1. nơi chứa tất cả state của ứng dụng

	//2. mỗi reducer sẽ chứa mỗi state tương ứng.
	numberReducer: (state = 99, action) => {
		console.log(action);
		// Cach 1: IF ELSE
		// if (action.type === 'TANG_GIAM_SO_LUONG') {
		// 	state = state + action.payload;
		// }

		// Cach 2: switch case, so sánh bằng thì nên sử dụng switch case để tốt cho hiệu năng của ứng dụng

		// chúng ta mong muốn setState ở reducer nào thì mình sẽ dự vào action.type và vào trong reducer đó xử lý
		switch (action.type) {
			case 'TANG_GIAM_SO_LUONG': {
				state = state + action.payload;
				return state;
			}
			default:
				return state;
		}

		// Chú Ý: Mỗi khi return về state mới thì component nào kết nối tới state này tự động re-render lại
		// nếu return về state cũ thì sẽ không re-render lại
	},
	// Cơ chế redux là return về -- [ giá trị MỚI ] -- sẽ re-render lại component
	imgCarReducer: (state = imgCarStateDefault, action) => {
		switch (action.type) {
			case 'CHANGE_COLOR': {
				state = `./img/products/${action.payload}-car.jpg`;
				return state;
			}
			default:
				return state;
		}
	},

	gioHangReducer: (state = gioHangStateDefault, action) => {
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
	},
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
