import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';
// Khai Báo giá trị mặc định cho state
const imgCarStateDefault = './img/products/black-car.jpg';

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

	gioHangReducer: gioHangReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
