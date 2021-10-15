export interface IList {
	boardID: string;
	id: string;
	title: string;
	cards: string[];
}

export interface ListState {
	lists: {
		[listID: string]: IList;
	};
}

export enum ListActionTypes {
	ADD_LIST = "ADD_LIST",
	REMOVE_LIST = "REMOVE_LIST",
	SET_LISTS = "SET_LISTS",
	REMOVE_BOARD = "REMOVE_BOARD",
	ADD_CARD = "ADD_CARD",
	REMOVE_CARD = "REMOVE_CARD",
}

interface AddListAction {
	type: ListActionTypes.ADD_LIST;
	payload: { boardID: string; listID: string; title: string };
}

interface RemoveListAction {
	type: ListActionTypes.REMOVE_LIST;
	payload: { boardID: string; listID: string };
}

interface SetListsAction {
	type: ListActionTypes.SET_LISTS;
	payload: { [listID: string]: IList };
}

interface RemoveBoardAction {
	type: ListActionTypes.REMOVE_BOARD;
	payload: { boardID: string };
}

interface AddCardAction {
	type: ListActionTypes.ADD_CARD;
	payload: { listID: string; cardID: string };
}

interface RemoveCardAction {
	type: ListActionTypes.REMOVE_CARD;
	payload: { listID: string; cardID: string };
}

export type ListAction =
	| AddListAction
	| RemoveListAction
	| SetListsAction
	| RemoveBoardAction
	| AddCardAction
	| RemoveCardAction;
