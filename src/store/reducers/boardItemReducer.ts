import {
	BoardItemState,
	BoardItemAction,
	BoardItemActionTypes,
} from "../../types/boardItem";

const initialState: BoardItemState = {
	boards: [],
};

export const boardItemReducer = (
	state = initialState,
	action: BoardItemAction
): BoardItemState => {
	switch (action.type) {
		case BoardItemActionTypes.ADD_BOARD:
			return { ...state, boards: [...state.boards, action.payload] };
		case BoardItemActionTypes.FILL_BOARDS:
			return { ...state, boards: action.payload };
		case BoardItemActionTypes.REMOVE_BOARD:
			return {
				...state,
				boards: state.boards.filter(
					(board) => board.id !== action.payload
				),
			};
		default:
			return state;
	}
};
