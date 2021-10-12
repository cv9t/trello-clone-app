import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
	form: formReducer,
	board: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
