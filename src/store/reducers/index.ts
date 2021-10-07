import { formBoardReducer } from "./formBoardReducer";
import { combineReducers } from "redux";
import { boardItemReducer } from "./boardItemReducer";

export const rootReducer = combineReducers({
	formBoard: formBoardReducer,
	boardItem: boardItemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
