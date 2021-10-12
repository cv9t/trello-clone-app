import React, { FC } from "react";
import cl from "./MyButton.module.scss";

interface MyButtonProps {
	title?: string;
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
	children?: React.ReactNode;

	onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = ({
	title,
	className,
	children,
	onClick,
	type,
}) => {
	return (
		<button
			className={`${cl.myBtn} ${className}`}
			type={type}
			onClick={onClick}
		>
			{title && <div className={cl.myBtn__title}>{title}</div>}
			{children}
		</button>
	);
};

export default MyButton;
