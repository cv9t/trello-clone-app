import React, { FC } from "react";
import cl from "./MyButton.module.scss";

interface MyButtonProps {
	title: string;
	children: React.ReactNode;

	onClick: () => void;
}

const MyButton: FC<MyButtonProps> = ({ title, children, onClick }) => {
	return (
		<button className={["clean-btn", cl.myBtn].join(" ")} onClick={onClick}>
			<div className={cl.myBtn__title}>{title}</div>
			<div className={cl.myBtn__content}>{children}</div>
		</button>
	);
};

export default MyButton;
