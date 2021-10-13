import { Dispatch } from "react";
import { IList, ListAction, ListActionTypes } from "../../types/list";

export const addList = ({ boardID, id: listID, title }: IList) => {
	return {
		type: ListActionTypes.ADD_LIST,
		payload: { boardID, listID, title },
	};
};

export const setLists = (lists: { [listID: string]: IList }): ListAction => {
	return { type: ListActionTypes.SET_LISTS, payload: lists };
};

export const removeList = ({ boardID, id: listID }: IList) => {
	return (dispatch: Dispatch<ListAction>) => {
		return dispatch({
			type: ListActionTypes.REMOVE_LIST,
			payload: { boardID, listID },
		});
	};
};
