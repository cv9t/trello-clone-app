import React, { FC } from "react";
import MyButton from "../MyButton/MyButton";
import { IoReturnUpBack } from "react-icons/io5";
import cl from "./ReturnButton.module.scss";
import { useHistory } from "react-router";

interface ReturnButtonProps {
	url: string;
	title?: string;
	type?: "button" | "submit" | "reset" | undefined;

	onClick: () => void;
}

const ReturnButton: FC<ReturnButtonProps> = ({ url, title, onClick, type }) => {
	const history = useHistory();

	const returnBack = () => {
		history.push(url);
		onClick();
	};

	return (
		<MyButton
			className={cl.returnBtn}
			title={title}
			onClick={returnBack}
			type={type}
		>
			<IoReturnUpBack className={cl.returnBtn__icon} />
		</MyButton>
	);
};

export default ReturnButton;
