import {
	BoardFormState,
	BoardFormAction,
	BoardFormActionTypes,
} from "../../types/boardForm";

const initialState: BoardFormState = {
	inputValue: "",
	isFormOpen: false,
	isPointerShow: false,
};

export const boardFormReducer = (
	state = initialState,
	action: BoardFormAction
): BoardFormState => {
	switch (action.type) {
		case BoardFormActionTypes.OPEN_FORM:
			return {
				...state,
				isFormOpen: true,
			};
		case BoardFormActionTypes.GET_INPUT_VALUE:
			return {
				...state,
				inputValue: action.payload,
			};
		case BoardFormActionTypes.SUBMIT_FORM_SUCCESS:
			return {
				...state,
				inputValue: "",
				isFormOpen: false,
				isPointerShow: false,
			};
		case BoardFormActionTypes.SUBMIT_FORM_ERROR:
			return {
				...state,
				isPointerShow: true,
			};
		case BoardFormActionTypes.SUBMIT_FORM_CANCEL:
			return {
				...state,
				inputValue: "",
				isFormOpen: false,
				isPointerShow: false,
			};
		default:
			return state;
	}
};
