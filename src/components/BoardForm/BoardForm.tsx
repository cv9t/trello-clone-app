import React, { FC, FormEvent } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyPointer from "../UI/pointer/MyPointer";
import cl from "./BoardForm.module.scss";

const BoardForm: FC = () => {
	const { inputValue, isOpen, isError } = useTypedSelector(
		(state) => state.form
	);
	const { submitForm, openForm, submitFormCancel, setInputValue } =
		useActions();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		submitForm(inputValue, "board");
		event.preventDefault();
	};

	return (
		<>
			{isOpen ? (
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
								onClick={submitFormCancel}
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
						<MyPointer isError={isError}>Give me a name!</MyPointer>
						<input
							id="boardFormInput"
							autoComplete="off"
							maxLength={55}
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
					onClick={openForm}
				>
					Create a new board...
				</button>
			)}
		</>
	);
};

export default BoardForm;
