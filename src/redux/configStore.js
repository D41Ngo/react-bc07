import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
	// nơi chứa state
	gioHang: () => {
		return [{ maSP: 1 }];
	},
});

export const store = createStore(rootReducer);
