import { FormBoardAction, FormBoardActionTypes } from "./../../types/formBoard";

export const openFormBoard = (): FormBoardAction => {
	return { type: FormBoardActionTypes.OPEN_FORM, payload: true };
};

export const closeFormBoard = (): FormBoardAction => {
	return {
		type: FormBoardActionTypes.CLOSE_FORM,
		payload: false,
	};
};
