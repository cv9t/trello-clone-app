import React, { FC } from "react";
import cl from "./MyInput.module.scss";

interface MyInputProps {
	className?: string;
	id?: string;
	value: string;

	onChange: (value: string) => void;
}

const MyInput: FC<MyInputProps> = ({ id, value, onChange, className }) => {
	return (
		<input
			id={id}
			className={`${cl.myInput} ${className}`}
			autoComplete="off"
			maxLength={40}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default MyInput;
