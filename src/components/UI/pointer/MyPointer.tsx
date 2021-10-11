import React, { FC } from "react";
import cl from "./MyPointer.module.scss";

interface MyPointerProps {
	isError: boolean;
	children: React.ReactNode;
}

const MyPointer: FC<MyPointerProps> = ({ children, isError }) => {
	return (
		<div
			className={
				isError ? [cl.myPointer, "active"].join(" ") : cl.myPointer
			}
		>
			{children}
		</div>
	);
};

export default MyPointer;
