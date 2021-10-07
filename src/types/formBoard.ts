export interface FormBoardState {
	isFormOpen: boolean;
}

export enum FormBoardActionTypes {
	OPEN_FORM = "OPEN_FORM",
	SUBMIT_FORM = "SUBMIT_FORM",
	CLOSE_FORM = "CLOSE_FORM",
}

interface OpenBoardAction {
	type: FormBoardActionTypes.OPEN_FORM;
	payload: boolean;
}

interface SubmitBoardAction {
	type: FormBoardActionTypes.SUBMIT_FORM;
}

interface CloseBoardAction {
	type: FormBoardActionTypes.CLOSE_FORM;
	payload: boolean;
}

export type FormBoardAction =
	| OpenBoardAction
	| SubmitBoardAction
	| CloseBoardAction;
