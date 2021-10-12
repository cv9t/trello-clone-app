import React, { FC } from "react";
import cl from "./MyInput.module.scss";

interface MyInputProps {
	classes?: string[];
	id: string;
	value: string;

	onChange: (value: string) => void;
}

const MyInput: FC<MyInputProps> = ({ id, value, onChange, classes }) => {
	const rootClasses = [cl.myInput];

	if (classes) rootClasses.concat(classes);

	return (
		<input
			id={id}
			className={rootClasses.join(" ")}
			autoComplete="off"
			maxLength={55}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default MyInput;
