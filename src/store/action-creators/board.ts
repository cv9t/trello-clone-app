import { BoardActionTypes } from "../../types/board";

export const addBoard = ({
	boardID,
	title,
}: {
	boardID: string;
	title: string;
}) => {
	return { type: BoardActionTypes.ADD_BOARD, payload: { boardID, title } };
};
