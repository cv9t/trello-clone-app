import React, { createRef, FC, FormEvent, RefObject, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../hooks/useActions";
import { validateInput } from "../../utils/validateInput";
import cl from "./BoardForm.module.scss";

interface IBoardForm {
	isFormOpen: boolean;

	openFormBoard: () => void;
	closeFormBoard: () => void;
}

const BoardForm: FC<IBoardForm> = ({
	closeFormBoard,
	isFormOpen,
	openFormBoard,
}) => {
	const { submitForm } = useActions();
	const inputEl = createRef<HTMLInputElement>();
	const [isPointerShow, setIsPointerShow] = useState(false);

	const handleFormSubmit = (
		event: FormEvent<HTMLFormElement>,
		ref: RefObject<HTMLInputElement>
	) => {
		const value: string | undefined = ref?.current?.value;

		if (validateInput(value)) {
			submitForm(value ? value : " ");
			setIsPointerShow(false);
		} else {
			setIsPointerShow(true);
		}

		event.preventDefault();
	};

	return (
		<>
			{isFormOpen ? (
				<form
					className={cl.boardForm}
					onSubmit={(e) => handleFormSubmit(e, inputEl)}
				>
					<div className={cl.boardForm__header}>
						<div className={cl.boardForm__title}>
							Creating board
						</div>
						<button className="clean-btn">
							<VscChromeClose
								className={cl.boardForm__icon}
								onClick={closeFormBoard}
							/>
						</button>
					</div>
					<div className={cl.boardForm__body}>
						<label
							htmlFor="boardFormInput"
							className={cl.boardForm__label}
						>
							Board name
						</label>
						<span
							className={
								isPointerShow
									? [cl.pointer, "active"].join(" ")
									: cl.pointer
							}
						>
							Give me a name!
						</span>
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
			) : (
				<button
					className={["clean-btn", cl.boardFormOpenBtn].join(" ")}
					onClick={openFormBoard}
				>
					Create a new board...
				</button>
			)}
		</>
	);
};

export default BoardForm;
