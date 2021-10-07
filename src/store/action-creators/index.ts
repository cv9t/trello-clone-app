import * as FormBoardActionCreators from "./formBoard";
import * as BoardItemActionCreators from "./boardItem";

export default {
	...FormBoardActionCreators,
	...BoardItemActionCreators,
};
