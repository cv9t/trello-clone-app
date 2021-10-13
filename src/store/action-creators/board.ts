import { BoardAction, BoardActionTypes, IBoard } from "../../types/board";

export const addBoard = ({ id: boardID, title }: IBoard): BoardAction => {
	return { type: BoardActionTypes.ADD_BOARD, payload: { boardID, title } };
};

export const removeBoard = ({ boardID }: { boardID: string }): BoardAction => {
	return { type: BoardActionTypes.REMOVE_BOARD, payload: { boardID } };
};
