export interface IBoardItem {
	id: string;
	title: string;
}

export interface BoardItemState {
	boards: IBoardItem[];
}

export enum BoardItemActionTypes {
	ADD_BOARD = "ADD_BOARD",
	FILL_BOARDS = "FILL_BOARDS",
	REMOVE_BOARD = "REMOVE_BOARD",
}

interface AddBoardAction {
	type: BoardItemActionTypes.ADD_BOARD;
	payload: IBoardItem;
}

interface FillBoardsAction {
	type: BoardItemActionTypes.FILL_BOARDS;
	payload: IBoardItem[];
}

interface RemoveBoardAction {
	type: BoardItemActionTypes.REMOVE_BOARD;
	payload: string;
}

export type BoardItemAction =
	| AddBoardAction
	| FillBoardsAction
	| RemoveBoardAction;
