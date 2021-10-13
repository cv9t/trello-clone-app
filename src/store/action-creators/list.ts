import { Dispatch } from "react";
import { BoardAction, BoardActionTypes } from "../../types/board";
import { IList, ListAction, ListActionTypes } from "../../types/list";

export const addList = ({ boardID, id: listID, title }: IList) => {
	return (dispatch: Dispatch<BoardAction | ListAction>) => {
		dispatch({
			type: BoardActionTypes.ADD_LIST,
			payload: { boardID, listID },
		});

		return dispatch({
			type: ListActionTypes.ADD_LIST,
			payload: { boardID, listID, title },
		});
	};
};

export const removeList = ({ boardID, id: listID }: IList) => {
	return (dispatch: Dispatch<BoardAction | ListAction>) => {
		dispatch({
			type: BoardActionTypes.REMOVE_LIST,
			payload: { boardID, listID },
		});

		return dispatch({
			type: ListActionTypes.REMOVE_LIST,
			payload: { listID },
		});
	};
};
