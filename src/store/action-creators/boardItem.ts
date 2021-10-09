import {
	BoardItemAction,
	BoardItemActionTypes,
	IBoardItem,
} from "../../types/boardItem";

export const addBoard = (board: IBoardItem): BoardItemAction => {
	return { type: BoardItemActionTypes.ADD_BOARD, payload: board };
};

export const fillBoards = (boards: IBoardItem[]): BoardItemAction => {
	return { type: BoardItemActionTypes.FILL_BOARDS, payload: boards };
};

export const removeBoard = (id: string): BoardItemAction => {
	return { type: BoardItemActionTypes.REMOVE_BOARD, payload: id };
};
