import React, { FC } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import cl from "./BoardItem.module.scss";

export interface BoardItemProps {
	id: string;
	title: string;
}

const BoardItem: FC<BoardItemProps> = ({ id, title }) => {
	const { removeBoard } = useActions();

	return (
		<div className={cl.boardItemWrapper}>
			<div className={cl.boardItem}>
				<NavLink
					className={[cl.boardItem__link, cl.boardItem__title].join(
						" "
					)}
					to={"/boards/" + id}
				>
					{title}
				</NavLink>
				<button
					className={cl.boardItem__btn}
					onClick={() => removeBoard(id)}
				>
					<RiDeleteBin2Line className={cl.boardItem__icon} />
				</button>
			</div>
		</div>
	);
};

export default BoardItem;
