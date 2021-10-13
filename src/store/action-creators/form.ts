import { Dispatch } from "react";
import { BoardAction, BoardActionTypes } from "../../types/board";
import { FormAction, FormActionTypes } from "../../types/form";
import { validate } from "../../utils/validate";

export const submitFormSuccess = ({
	boardID,
	title,
}: {
	boardID: string;
	title: string;
}) => {
	return (dispatch: Dispatch<BoardAction | FormAction>) => {
		if (validate(title)) {
			dispatch({
				type: BoardActionTypes.ADD_BOARD,
				payload: { boardID, title },
			});

			return dispatch({
				type: FormActionTypes.SUBMIT_FORM_SUCCESS,
			});
		} else {
			return dispatch({
				type: FormActionTypes.SUBMIT_FORM_ERROR,
			});
		}
	};
};

export const openForm = (): FormAction => {
	return { type: FormActionTypes.OPEN_FORM };
};

export const setInputValue = (value: string): FormAction => {
	return { type: FormActionTypes.SET_INPUT_VALUE, payload: value };
};

export const submitFormCancel = (): FormAction => {
	return {
		type: FormActionTypes.SUBMIT_FORM_CANCEL,
	};
};
