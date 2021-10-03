import {
	BoardItemAction,
	BoardItemActionTypes,
	IBoardItem,
} from "../../types/boardItem";

export const addBoard = (board: IBoardItem): BoardItemAction => {
	return { type: BoardItemActionTypes.ADD_BOARD, payload: board };
};

export const removeBoard = (id: number): BoardItemAction => {
	return { type: BoardItemActionTypes.REMOVE_BOARD, payload: id };
};
