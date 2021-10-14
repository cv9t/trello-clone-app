import { Dispatch } from "react";
import { BoardAction, BoardActionTypes, IBoard } from "../../types/board";
import { ListAction } from "../../types/list";
import { deleteLists } from "./list";

export const addBoard = ({
	id: boardID,
	title,
}: {
	id: string;
	title: string;
}): BoardAction => {
	return { type: BoardActionTypes.ADD_BOARD, payload: { boardID, title } };
};

export const addList = ({
	boardID,
	listID,
}: {
	boardID: string;
	listID: string;
}): BoardAction => {
	return { type: BoardActionTypes.ADD_LIST, payload: { boardID, listID } };
};

export const removeList = ({
	boardID,
	listID,
}: {
	boardID: string;
	listID: string;
}): BoardAction => {
	return { type: BoardActionTypes.REMOVE_LIST, payload: { boardID, listID } };
};

export const setBoards = (boards: {
	[boardID: string]: IBoard;
}): BoardAction => {
	return { type: BoardActionTypes.SET_BOARDS, payload: boards };
};

export const removeBoard = ({ boardID }: { boardID: string }) => {
	return (dispatch: Dispatch<BoardAction | ListAction>) => {
		dispatch({ type: BoardActionTypes.REMOVE_BOARD, payload: { boardID } });
		dispatch(deleteLists({ boardID }));
	};
};
