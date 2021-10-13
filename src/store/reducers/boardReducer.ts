import { BoardAction, BoardActionTypes, BoardState } from "../../types/board";

const initialState: BoardState = {
	boards: {},
};

export const boardReducer = (
	state = initialState,
	action: BoardAction
): BoardState => {
	switch (action.type) {
		case BoardActionTypes.ADD_BOARD: {
			const { boardID, title } = action.payload;
			const newBoard = {
				id: boardID,
				title,
				lists: [],
			};

			return {
				...state,
				boards: { ...state.boards, [boardID]: newBoard },
			};
		}

		case BoardActionTypes.REMOVE_BOARD: {
			const { boardID } = action.payload;
			const boards = { ...state.boards };

			delete boards[boardID];

			return { ...state, boards };
		}

		case BoardActionTypes.ADD_LIST: {
			const { boardID, listID } = action.payload;
			const board = state.boards[boardID];

			board.lists = [...board.lists, listID];

			return { ...state, boards: { ...state.boards, [boardID]: board } };
		}

		case BoardActionTypes.REMOVE_LIST: {
			const { boardID, listID } = action.payload;
			const board = state.boards[boardID];

			board.lists.filter((list) => list !== listID);

			return { ...state, boards: { ...state.boards, [boardID]: board } };
		}

		default:
			return state;
	}
};
