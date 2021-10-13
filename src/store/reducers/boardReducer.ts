import { BoardAction, BoardActionTypes, BoardState } from "../../types/board";

const initialState: BoardState = {
	boards: {},
};

export const boardReducer = (
	state = initialState,
	action: BoardAction
): BoardState => {
	switch (action.type) {
		case BoardActionTypes.ADD_BOARD:
			const { boardID, title } = action.payload;
			const newBoard = {
				id: boardID,
				title,
			};

			return {
				...state,
				boards: { ...state.boards, [boardID]: newBoard },
			};
		case BoardActionTypes.REMOVE_BOARD:
			const id = action.payload.boardID;
			const boards = { ...state.boards };

			delete boards[id];

			return { ...state, boards };
		default:
			return state;
	}
};
