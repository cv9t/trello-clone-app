export interface IBoardItem {
	title: string;
	id: number;
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
	payload: number;
}

export type BoardItemAction = AddBoardAction | RemoveBoardAction;
