import {
	BoardItemState,
	BoardItemAction,
	BoardItemActionTypes,
} from "../../types/boardItem";

const initialState: BoardItemState = {
	boards: [{ id: "", title: "", cards: [{ id: "", title: "" }] }],
};

export const boardItemReducer = (
	state = initialState,
	action: BoardItemAction
): BoardItemState => {
	switch (action.type) {
		case BoardItemActionTypes.ADD_BOARD:
			return { ...state, boards: [...state.boards, action.payload] };
		case BoardItemActionTypes.ADD_CARD:
			return {
				...state,
				boards: state.boards.map((board) => {
					if (board.id === action.payload.parentID) {
						return {
							...board,
							cards: [...board.cards, action.payload.card],
						};
					}
					return board;
				}),
			};
		case BoardItemActionTypes.GET_BOARDS:
			return { ...state, boards: action.payload };
		case BoardItemActionTypes.REMOVE_BOARD:
			return {
				...state,
				boards: state.boards.filter(
					(board) => board.id !== action.payload
				),
			};
		case BoardItemActionTypes.REMOVE_CARD:
			return {
				...state,
				boards: state.boards.map((board) => {
					if (board.id === action.payload.parentID) {
						return {
							...board,
							cards: board.cards.filter(
								(card) => card.id !== action.payload.cardID
							),
						};
					}
					return board;
				}),
			};
		default:
			return state;
	}
};
