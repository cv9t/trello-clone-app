import { Dispatch } from "react";
import { BoardAction } from "../../types/board";
import { FormAction, FormActionTypes } from "../../types/form";
import { ListAction } from "../../types/list";
import { validate } from "../../utils/validate";
import { addBoard } from "./board";
import { addList } from "./list";

export const submitFormSuccess = ({
	boardID,
	listID,
	title,
	type,
}: {
	boardID: string;
	listID?: string;
	title: string;
	type: string;
}) => {
	return (dispatch: Dispatch<BoardAction | FormAction | ListAction>) => {
		if (validate(title)) {
			switch (type) {
				case "board":
					dispatch(addBoard({ id: boardID, title }));
				case "list":
					if (listID) {
						dispatch(addList({ boardID, id: listID, title }));
					}
			}

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
