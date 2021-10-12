import React, { FC } from "react";
import cl from "./MyPointer.module.scss";

interface MyPointerProps {
	isError: boolean;
	children?: React.ReactNode;
}

const MyPointer: FC<MyPointerProps> = ({ children, isError }) => {
	const rootClasses = [cl.myPointer];

	if (isError) rootClasses.push(cl.active);

	return <div className={rootClasses.join(" ")}>{children}</div>;
};

export default MyPointer;
