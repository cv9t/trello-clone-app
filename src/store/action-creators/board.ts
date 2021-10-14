import { BoardAction, BoardActionTypes, IBoard } from "../../types/board";

export const addBoard = ({
	id: boardID,
	title,
}: {
	id: string;
	title: string;
}): BoardAction => {
	return { type: BoardActionTypes.ADD_BOARD, payload: { boardID, title } };
};

export const setBoards = (boards: {
	[boardID: string]: IBoard;
}): BoardAction => {
	return { type: BoardActionTypes.SET_BOARDS, payload: boards };
};

export const removeBoard = ({ boardID }: { boardID: string }): BoardAction => {
	return { type: BoardActionTypes.REMOVE_BOARD, payload: { boardID } };
};
