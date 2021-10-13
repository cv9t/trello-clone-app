export interface IList {
	id: string;
	title: string;
	boardID: string;
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
}

interface AddListAction {
	type: ListActionTypes.ADD_LIST;
	payload: { boardID: string; listID: string; title: string };
}

interface SetListsAction {
	type: ListActionTypes.SET_LISTS;
	payload: { [listID: string]: IList };
}

interface RemoveListAction {
	type: ListActionTypes.REMOVE_LIST;
	payload: { boardID: string; listID: string };
}

export type ListAction = AddListAction | RemoveListAction | SetListsAction;
