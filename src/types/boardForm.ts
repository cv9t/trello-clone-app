export interface BoardFormState {
	inputValue: string;
	isFormOpen: boolean;
	isPointerShow: boolean;
}

export enum BoardFormActionTypes {
	OPEN_FORM = "OPEN_FORM",
	SET_INPUT_VALUE = "SET_INPUT_VALUE",
	SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS",
	SUBMIT_FORM_ERROR = "SUBMIT_FORM_ERROR",
	SUBMIT_FORM_CANCEL = "SUBMIT_FORM_CANCEL",
}

interface OpenFormAction {
	type: BoardFormActionTypes.OPEN_FORM;
}

interface SetInputValueAction {
	type: BoardFormActionTypes.SET_INPUT_VALUE;
	payload: string;
}

interface SubmitFormSuccessAction {
	type: BoardFormActionTypes.SUBMIT_FORM_SUCCESS;
}

interface SubmitFormErrorAction {
	type: BoardFormActionTypes.SUBMIT_FORM_ERROR;
}

interface SubmitFormCancelAction {
	type: BoardFormActionTypes.SUBMIT_FORM_CANCEL;
}

export type BoardFormAction =
	| OpenFormAction
	| SetInputValueAction
	| SubmitFormSuccessAction
	| SubmitFormErrorAction
	| SubmitFormCancelAction;
