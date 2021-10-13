import { BoardAction, BoardActionTypes } from "../../types/board";

export const addBoard = ({
	boardID,
	title,
}: {
	boardID: string;
	title: string;
}): BoardAction => {
	return { type: BoardActionTypes.ADD_BOARD, payload: { boardID, title } };
};

export const removeBoard = ({ boardID }: { boardID: string }): BoardAction => {
	return { type: BoardActionTypes.REMOVE_BOARD, payload: { boardID } };
};
