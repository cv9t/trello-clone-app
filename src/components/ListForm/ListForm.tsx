import React, { FC, FormEvent } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { validate } from "../../utils/validate";
import MyButton from "../UI/button/MyButton/MyButton";
import MyInput from "../UI/input/MyInput";
import MyPointer from "../UI/pointer/MyPointer";
import cl from "./ListForm.module.scss";

interface ListFormProps {
	boardID: string;
}

const ListForm: FC<ListFormProps> = ({ boardID }) => {
	const { inputValue, isOpen, isError } = useTypedSelector(
		(state) => state.form
	);
	const {
		submitFormSuccess,
		submitFormCancel,
		openForm,
		setInputValue,
		addList,
		submitFormError,
	} = useActions();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (validate(inputValue)) {
			addList({
				boardID,
				id: String(Date.now()),
				title: inputValue,
			});
			submitFormSuccess();
			setInputValue("");
		} else {
			submitFormError();
		}

		event.preventDefault();
	};

	return (
		<>
			{isOpen ? (
				<form className={cl.listForm} onSubmit={handleFormSubmit}>
					<div className={cl.listForm__inner}>
						<MyPointer isError={isError}>Give me a name!</MyPointer>
						<MyInput
							className={cl.listForm__input}
							value={inputValue}
							onChange={setInputValue}
						/>
						<div className={cl.listForm__footer}>
							<MyButton
								type="submit"
								title="Create"
								className={cl.listForm__btn}
							/>
							<MyButton
								title="Cancel"
								className={cl.listForm__btn}
								onClick={submitFormCancel}
							/>
						</div>
					</div>
				</form>
			) : (
				<MyButton
					title="Add a new list..."
					className={cl.listFormOpenBtn}
					onClick={openForm}
				/>
			)}
		</>
	);
};

export default ListForm;
