export interface IBoardItem {
	id: string;
	title: string;
}

export interface BoardItemState {
	boards: IBoardItem[];
}

export enum BoardItemActionTypes {
	ADD_BOARD = "ADD_BOARD",
	REMOVE_BOARD = "REMOVE_BOARD",
}

interface AddBoardAction {
	type: BoardItemActionTypes.ADD_BOARD;
	payload: IBoardItem;
}

interface RemoveBoardAction {
	type: BoardItemActionTypes.REMOVE_BOARD;
	payload: string;
}

export type BoardItemAction = AddBoardAction | RemoveBoardAction;
