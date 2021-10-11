import React, { FC, FormEvent } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyPointer from "../UI/pointer/MyPointer";
import cl from "./CardForm.module.scss";

interface CardFormProps {
	parentID: string;
}

const CardForm: FC<CardFormProps> = ({ parentID }) => {
	const { inputValue, isOpen, isError } = useTypedSelector(
		(state) => state.form
	);

	const { submitForm, openForm, submitFormCancel, setInputValue } =
		useActions();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		submitForm(inputValue, "card", parentID);
		event.preventDefault();
	};

	return (
		<div>
			{isOpen ? (
				<form className={cl.cardForm} onSubmit={handleFormSubmit}>
					<div className={cl.cardForm__inner}>
						<MyPointer isError={isError}>Give me a name!</MyPointer>
						<input
							autoComplete="off"
							maxLength={30}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className={cl.cardForm__input}
						/>
						<div className={cl.cardForm__footer}>
							<button
								type="submit"
								className={["clean-btn", cl.cardForm__btn].join(
									" "
								)}
							>
								Create
							</button>
							<button
								className={["clean-btn", cl.cardForm__btn].join(
									" "
								)}
								onClick={submitFormCancel}
							>
								Cancel
							</button>
						</div>
					</div>
				</form>
			) : (
				<button
					className={["clean-btn", cl.cardFormOpenBtn].join(" ")}
					onClick={openForm}
				>
					Add a new card...
				</button>
			)}
		</div>
	);
};

export default CardForm;
