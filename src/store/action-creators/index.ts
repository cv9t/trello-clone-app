import * as BoardActionCreators from "./board";
import * as FormActionCreators from "./form";
import * as ListActionCreators from "./list";

export default {
	...BoardActionCreators,
	...FormActionCreators,
	...ListActionCreators,
};
