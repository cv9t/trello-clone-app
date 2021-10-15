import React, { FC, FormEvent } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { validate } from "../../utils/validate";
import MyButton from "../UI/button/MyButton/MyButton";
import MyInput from "../UI/input/MyInput";
import MyLabel from "../UI/label/MyLabel";
import MyPointer from "../UI/pointer/MyPointer";
import cl from "./BoardForm.module.scss";

const BoardForm: FC = () => {
	const { inputValue, isOpen, isError } = useTypedSelector(
		(state) => state.form
	);
	const {
		submitFormCancel,
		submitFormSuccess,
		openForm,
		setInputValue,
		submitFormError,
		addBoard,
	} = useActions();
	const inputID = "formInput";

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (validate(inputValue)) {
			addBoard({ id: String(Date.now()), title: inputValue });
			submitFormSuccess();
		} else {
			submitFormError();
		}

		event.preventDefault();
	};

	return (
		<>
			{isOpen ? (
				<form className={cl.boardForm} onSubmit={handleFormSubmit}>
					<div className={cl.boardForm__header}>
						<h2 className={cl.boardForm__title}>
							Creating a board
						</h2>
						<MyButton type="button">
							<VscChromeClose
								className={cl.boardForm__icon}
								onClick={() => submitFormCancel()}
							/>
						</MyButton>
					</div>
					<div className={cl.boardForm__body}>
						<MyLabel id={inputID}>Board name</MyLabel>
						<MyPointer isError={isError}>Give me a name!</MyPointer>
						<MyInput
							id={inputID}
							className={cl.boardForm__input}
							value={inputValue}
							onChange={setInputValue}
						/>
					</div>
					<div className={cl.boardForm__footer}>
						<MyButton
							type="submit"
							title="Create"
							className={cl.boardForm__btn}
						/>
					</div>
				</form>
			) : (
				<MyButton
					title="Create a new board..."
					onClick={() => openForm()}
					className={cl.boardFormOpenBtn}
				/>
			)}
		</>
	);
};

export default BoardForm;
