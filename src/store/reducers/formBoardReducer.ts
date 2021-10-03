import {
	FormBoardState,
	FormBoardAction,
	FormBoardActionTypes,
} from "../../types/formBoard";

const initialState: FormBoardState = {
	isFormOpen: false,
};

export const formBoardReducer = (
	state = initialState,
	action: FormBoardAction
): FormBoardState => {
	switch (action.type) {
		case FormBoardActionTypes.OPEN_FORM:
			return { ...state, isFormOpen: true };
		case FormBoardActionTypes.CLOSE_FORM:
			return { ...state, isFormOpen: false };
		default:
			return state;
	}
};
