import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import cl from "./Board.module.scss";

interface BoardProps {
	id: string;
	title: string;
}

const Board: FC<BoardProps> = ({ id, title }) => {
	const { removeBoard } = useActions();

	return (
		<div className={cl.boardItem}>
			<div className={cl.boardItem__inner}>
				<NavLink className={cl.boardItem__link} to={`/boards/${id}`}>
					<h2 className={cl.boardItem__title}>{title}</h2>
				</NavLink>
				<button
					className={cl.boardItem__btn}
					onClick={() => {
						removeBoard({ boardID: id });
					}}
				>
					<RiDeleteBin2Line className={cl.boardItem__icon} />
				</button>
			</div>
		</div>
	);
};

export default Board;
