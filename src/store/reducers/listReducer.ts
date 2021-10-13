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
