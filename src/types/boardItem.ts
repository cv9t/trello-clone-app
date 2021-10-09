// eslint-disable-next-line import/namespace
import { ICardItem } from "./cardItem";

export interface IBoardItem {
	id: string;
	title: string;
	cards: ICardItem[];
}

export interface BoardItemState {
	boards: IBoardItem[];
}

export enum BoardItemActionTypes {
	ADD_BOARD = "ADD_BOARD",
	ADD_CARD = "ADD_CARD",
	GET_BOARDS = "GET_BOARDS",
	REMOVE_BOARD = "REMOVE_BOARD",
}

interface AddBoardAction {
	type: BoardItemActionTypes.ADD_BOARD;
	payload: IBoardItem;
}

interface AddCardAction {
	type: BoardItemActionTypes.ADD_CARD;
	payload: { id: string | undefined; card: ICardItem };
}

interface GetBoardsAction {
	type: BoardItemActionTypes.GET_BOARDS;
	payload: IBoardItem[];
}

interface RemoveBoardAction {
	type: BoardItemActionTypes.REMOVE_BOARD;
	payload: string;
}

export type BoardItemAction =
	| AddBoardAction
	| AddCardAction
	| GetBoardsAction
	| RemoveBoardAction;
