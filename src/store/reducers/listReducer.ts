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
				cards: [],
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
		case ListActionTypes.SET_LISTS: {
			return { ...state, lists: action.payload };
		}
		case ListActionTypes.REMOVE_BOARD: {
			const { boardID } = action.payload;
			const newLists = Object.entries(state.lists).filter(
				([listID, list]) => {
					if (list.boardID !== boardID) return [listID, list];
				}
			);

			return { ...state, lists: Object.fromEntries(newLists) };
		}
		case ListActionTypes.ADD_CARD: {
			const { listID, cardID } = action.payload;
			const list = state.lists[listID];

			list.cards.push(cardID);

			return { ...state, lists: { ...state.lists, [listID]: list } };
		}
		case ListActionTypes.REMOVE_CARD: {
			const { listID, cardID } = action.payload;
			const list = state.lists[listID];
			const newCards = list.cards.filter((card) => card !== cardID);
			list.cards = newCards;

			return { ...state, lists: { ...state.lists, [listID]: list } };
		}
		default:
			return state;
	}
};
