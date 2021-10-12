import React, { FC, FormEvent } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import MyLabel from "../label/MyLabel";
import MyPointer from "../pointer/MyPointer";
import cl from "./MyForm.module.scss";

interface MyFormProps {
	title: string;
	labelName: string;
	openBtnTitle: string;
}

const MyForm: FC<MyFormProps> = ({ title, labelName, openBtnTitle }) => {
	const { inputValue, isOpen, isError } = useTypedSelector(
		(state) => state.form
	);
	const { submitFormCancel, submitFormSuccess, openForm, setInputValue } =
		useActions();
	const inputID = "formInput";

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		const options = { boardID: String(Date.now()), title: inputValue };

		submitFormSuccess(options);

		event.preventDefault();
	};

	return (
		<>
			{isOpen ? (
				<form className={cl.myForm} onSubmit={handleFormSubmit}>
					<div className={cl.myForm__header}>
						<h2 className={cl.myForm__title}>{title}</h2>
						<MyButton onClick={() => submitFormCancel()}>
							<VscChromeClose className={cl.myForm__icon} />
						</MyButton>
					</div>
					<div className={cl.myForm__body}>
						<MyLabel id={inputID}>{labelName}</MyLabel>
						<MyPointer isError={isError}>Give me a name!</MyPointer>
						<MyInput
							id={inputID}
							value={inputValue}
							onChange={setInputValue}
						/>
					</div>
					<div className={cl.myForm__footer}>
						<MyButton
							type="submit"
							title="Create"
							className={cl.myForm__btn}
						/>
					</div>
				</form>
			) : (
				<MyButton
					title={openBtnTitle}
					onClick={() => openForm()}
					className={cl.myFormOpenBtn}
				/>
			)}
		</>
	);
};

export default MyForm;
