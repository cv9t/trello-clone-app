import { Dispatch } from "react";
import {
	BoardItemActionTypes,
	IBoardItem,
	BoardItemAction,
} from "../../types/boardItem";
import { BoardFormAction, BoardFormActionTypes } from "../../types/boardForm";
import { validateInput } from "../../utils/validateInput";

export const submitBoardForm = (title: string) => {
	return (dispatch: Dispatch<BoardFormAction | BoardItemAction>) => {
		if (validateInput(title)) {
			const newBoard: IBoardItem = {
				id: String(Date.now()),
				title,
				cards: [],
			};

			dispatch({
				type: BoardItemActionTypes.ADD_BOARD,
				payload: newBoard,
			});

			dispatch({
				type: BoardFormActionTypes.SUBMIT_FORM_SUCCESS,
			});
		} else {
			dispatch({
				type: BoardFormActionTypes.SUBMIT_FORM_ERROR,
			});
		}
	};
};

export const openBoardForm = (): BoardFormAction => {
	return { type: BoardFormActionTypes.OPEN_FORM };
};

export const getInputValue = (value: string): BoardFormAction => {
	return { type: BoardFormActionTypes.GET_INPUT_VALUE, payload: value };
};

export const submitBoardFormCancel = (): BoardFormAction => {
	return {
		type: BoardFormActionTypes.SUBMIT_FORM_CANCEL,
	};
};
