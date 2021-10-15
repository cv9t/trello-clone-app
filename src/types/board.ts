export interface IBoard {
	id: string;
	title: string;
	lists: string[];
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
	SET_BOARDS = "SET_BOARDS",
	ADD_LIST = "ADD_LIST",
	REMOVE_LIST = "REMOVE_LIST",
}

interface AddBoardAction {
	type: BoardActionTypes.ADD_BOARD;
	payload: { boardID: string; title: string };
}

interface RemoveBoardAction {
	type: BoardActionTypes.REMOVE_BOARD;
	payload: { boardID: string };
}

interface SetBoardsAction {
	type: BoardActionTypes.SET_BOARDS;
	payload: { [boardID: string]: IBoard };
}

interface AddListAction {
	type: BoardActionTypes.ADD_LIST;
	payload: { boardID: string; listID: string };
}

interface RemoveListAction {
	type: BoardActionTypes.REMOVE_LIST;
	payload: { boardID: string; listID: string };
}

export type BoardAction =
	| AddBoardAction
	| RemoveBoardAction
	| SetBoardsAction
	| AddListAction
	| RemoveListAction;
