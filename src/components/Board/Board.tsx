import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import MyButton from "../UI/button/MyButton/MyButton";
import cl from "./Board.module.scss";

interface BoardProps {
	id: string;
	title: string;
}

const Board: FC<BoardProps> = ({ id, title }) => {
	const { removeBoard, submitFormCancel } = useActions();

	return (
		<div className={cl.boardItem}>
			<div className={cl.boardItem__inner}>
				<NavLink
					className={cl.boardItem__link}
					to={`/boards/${id}`}
					onClick={() => submitFormCancel()}
				>
					<h2 className={cl.boardItem__title}>{title}</h2>
				</NavLink>
				<MyButton
					className={cl.boardItem__btn}
					onClick={() => {
						removeBoard({ boardID: id });
					}}
				>
					<RiDeleteBin2Line className={cl.boardItem__icon} />
				</MyButton>
			</div>
		</div>
	);
};

export default Board;
