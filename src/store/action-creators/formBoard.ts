import { Dispatch } from "react";
import {
	BoardItemActionTypes,
	IBoardItem,
	BoardItemAction,
} from "../../types/boardItem";
import { FormBoardAction, FormBoardActionTypes } from "./../../types/formBoard";

export const submitForm = (title: string) => {
	return (dispatch: Dispatch<FormBoardAction | BoardItemAction>) => {
		const newBoard: IBoardItem = {
			id: String(Date.now()),
			title,
		};

		dispatch({
			type: BoardItemActionTypes.ADD_BOARD,
			payload: newBoard,
		});

		dispatch({
			type: FormBoardActionTypes.CLOSE_FORM,
			payload: false,
		});
	};
};

export const openFormBoard = (): FormBoardAction => {
	return { type: FormBoardActionTypes.OPEN_FORM, payload: true };
};

export const closeFormBoard = (): FormBoardAction => {
	return {
		type: FormBoardActionTypes.CLOSE_FORM,
		payload: false,
	};
};
