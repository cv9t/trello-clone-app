import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import cl from "./BoardItem.module.scss";

export interface BoardItemProps {
	title: string;
	removeItem: () => void;
}

const BoardItem: FC<BoardItemProps> = ({ title, removeItem }) => {
	return (
		<div className={cl.boardItem}>
			<div className={cl.boardItem__title}>{title}</div>
			<button className={cl.boardItem__btn} onClick={removeItem}>
				<RiDeleteBin2Line className={cl.boardItem__icon} />
			</button>
		</div>
	);
};

export default BoardItem;
