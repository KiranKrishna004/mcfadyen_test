/** @format */

//initial state set to L
const initialState = { size: "L" };

const sizeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "XS":
			return { size: action.type };
		case "S":
			return { size: action.type };
		case "M":
			return { size: action.type };
		case "L":
			return { size: action.type };
		case "XXL":
			return { size: action.type };
		default:
			return state;
	}
};

export default sizeReducer;
