import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
	//1. nơi chứa tất cả state của ứng dụng

	//2. mỗi reducer sẽ chứa mỗi state tương ứng.
	numberReducer: (state = 1) => {
		return state;
	},
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
