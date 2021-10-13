export interface IBoard {
	id: string;
	title: string;
}

export interface BoardState {
	// eslint-disable-next-line @typescript-eslint/ban-types
	boards: {
		[boardID: string]: IBoard;
	};
}

export enum BoardActionTypes {
	ADD_BOARD = "ADD_BOARD",
	REMOVE_BOARD = "REMOVE_BOARD",
	GET_BOARDS = "GET_BOARDS",
}

interface AddBoardAction {
	type: BoardActionTypes.ADD_BOARD;
	payload: { boardID: string; title: string };
}

interface RemoveBoardAction {
	type: BoardActionTypes.REMOVE_BOARD;
	payload: { boardID: string };
}

export type BoardAction = AddBoardAction | RemoveBoardAction;
