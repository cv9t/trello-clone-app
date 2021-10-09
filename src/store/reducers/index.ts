import { boardFormReducer } from "./boardFormReducer";
import { combineReducers } from "redux";
import { boardItemReducer } from "./boardItemReducer";

export const rootReducer = combineReducers({
	boardForm: boardFormReducer,
	boardItem: boardItemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
