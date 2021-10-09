import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import cl from "./BoardItem.module.scss";

export interface BoardItemProps {
	id: string;
	title: string;

	onRemoveClick: () => void;
}

const BoardItem: FC<BoardItemProps> = ({ id, title, onRemoveClick }) => {
	return (
		<div className={cl.boardItem}>
			<NavLink
				className={[cl.boardItem__link, cl.boardItem__title].join(" ")}
				to={"/boards/" + id}
			>
				{title}
			</NavLink>
			<button className={cl.boardItem__btn} onClick={onRemoveClick}>
				<RiDeleteBin2Line className={cl.boardItem__icon} />
			</button>
		</div>
	);
};

export default BoardItem;
