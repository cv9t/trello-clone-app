import React, { createRef, FC, FormEvent, RefObject } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../hooks/useActions";
import cl from "./BoardForm.module.scss";

interface IBoardForm {
	closeFormBoard: () => void;
}

const BoardForm: FC<IBoardForm> = ({ closeFormBoard }) => {
	const { submitForm } = useActions();
	const inputEl = createRef<HTMLInputElement>();

	const formSubmit = (
		event: FormEvent<HTMLFormElement>,
		ref: RefObject<HTMLInputElement>
	) => {
		submitForm(ref.current ? ref.current.value : "none");

		event.preventDefault();
	};

	return (
		<form className={cl.boardForm} onSubmit={(e) => formSubmit(e, inputEl)}>
			<div className={cl.boardForm__header}>
				<div className={cl.boardForm__title}>Creating board</div>
				<button className="clean-btn">
					<VscChromeClose
						className={cl.boardForm__icon}
						onClick={closeFormBoard}
					/>
				</button>
			</div>
			<div className={cl.boardForm__body}>
				<label htmlFor="boardFormInput" className={cl.boardForm__label}>
					Board name
				</label>
				<input
					id="boardFormInput"
					autoComplete="off"
					ref={inputEl}
					className={cl.boardForm__input}
				/>
			</div>
			<div className={cl.boardForm__footer}>
				<button type="submit" className={cl.boardForm__btn}>
					Create
				</button>
			</div>
		</form>
	);
};

export default BoardForm;
