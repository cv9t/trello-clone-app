import { ListActionTypes, ListAction, ListState } from "../../types/list";

const initialState: ListState = {
	lists: {},
};

export const listReducer = (
	state = initialState,
	action: ListAction
): ListState => {
	switch (action.type) {
		case ListActionTypes.ADD_LIST: {
			const { boardID, listID, title } = action.payload;
			const newList = {
				boardID,
				id: listID,
				title,
			};

			return {
				...state,
				lists: { ...state.lists, [listID]: newList },
			};
		}
		case ListActionTypes.SET_LISTS: {
			return { ...state, lists: action.payload };
		}
		case ListActionTypes.DELETE_LISTS: {
			const { boardID } = action.payload;
			const newLists = Object.entries(state.lists).filter(
				([listID, list]) => {
					if (list.boardID !== boardID) return [listID, list];
				}
			);

			return { ...state, lists: Object.fromEntries(newLists) };
		}
		case ListActionTypes.REMOVE_LIST: {
			const { listID } = action.payload;
			const lists = { ...state.lists };

			delete lists[listID];

			return { ...state, lists };
		}

		default:
			return state;
	}
};
