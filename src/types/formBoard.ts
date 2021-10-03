export interface FormBoardState {
	isFormOpen: boolean;
}

export enum FormBoardActionTypes {
	OPEN_FORM = "OPEN_FORM",
	CLOSE_FORM = "CLOSE_FORM",
}

interface OpenBoardAction {
	type: FormBoardActionTypes.OPEN_FORM;
	payload: boolean;
}

interface CloseBoardAction {
	type: FormBoardActionTypes.CLOSE_FORM;
	payload: boolean;
}

export type FormBoardAction = OpenBoardAction | CloseBoardAction;
