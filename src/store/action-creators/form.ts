import { Dispatch } from "react";
import {
	BoardItemActionTypes,
	IBoardItem,
	BoardItemAction,
} from "../../types/boardItem";
import { ICardItem } from "../../types/cardItem";
import { FormAction, FormActionTypes } from "../../types/form";
import { validateInput } from "../../utils/validateInput";

export const submitForm = (title: string, type: string, parentID?: string) => {
	return (dispatch: Dispatch<FormAction | BoardItemAction>) => {
		if (validateInput(title)) {
			switch (type) {
				case "board":
					const newBoard: IBoardItem = {
						id: String(Date.now()),
						title,
						cards: [],
					};

					dispatch({
						type: BoardItemActionTypes.ADD_BOARD,
						payload: newBoard,
					});
					break;
				case "card":
					const newCard: ICardItem = {
						id: String(Date.now()),
						title,
					};

					dispatch({
						type: BoardItemActionTypes.ADD_CARD,
						payload: { id: parentID, card: newCard },
					});
					break;
			}

			dispatch({
				type: FormActionTypes.SUBMIT_FORM_SUCCESS,
			});
		} else {
			dispatch({
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
