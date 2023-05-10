const stateDefault = 16;
// Cach 1:
/*export*/ const fontSizeReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'TANG_GIAM_FontSize':
			return state + action.payload;
		default:
			return state;
	}
};

// Cach 2:
export { fontSizeReducer };
