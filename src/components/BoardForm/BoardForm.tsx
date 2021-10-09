import React, { FC, FormEvent } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./BoardForm.module.scss";

const BoardForm: FC = () => {
	const { inputValue, isFormOpen, isPointerShow } = useTypedSelector(
		(state) => state.boardForm
	);
	const {
		submitBoardForm,
		openBoardForm,
		submitBoardFormCancel,
		setInputValue,
	} = useActions();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		submitBoardForm(inputValue);
		event.preventDefault();
	};

	return (
		<>
			{isFormOpen ? (
				<form
					className={cl.boardForm}
					onSubmit={(e) => handleFormSubmit(e)}
				>
					<div className={cl.boardForm__header}>
						<div className={cl.boardForm__title}>
							Creating board
						</div>
						<button className="clean-btn">
							<VscChromeClose
								className={cl.boardForm__icon}
								onClick={submitBoardFormCancel}
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
							maxLength={30}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
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
					onClick={openBoardForm}
				>
					Create a new board...
				</button>
			)}
		</>
	);
};

export default BoardForm;
