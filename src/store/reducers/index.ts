import { combineReducers } from "redux";
import { boardReducer } from "./boardReducer";
import { formReducer } from "./formReducer";
import { listReducer } from "./listReducer";

export const rootReducer = combineReducers({
	form: formReducer,
	board: boardReducer,
	list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
