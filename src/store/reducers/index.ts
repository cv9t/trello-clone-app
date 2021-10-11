import { combineReducers } from "redux";
import { boardItemReducer } from "./boardItemReducer";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
	form: formReducer,
	boardItem: boardItemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
