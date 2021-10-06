import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IoReturnUpBack } from "react-icons/io5";
import cl from "./BoardItemPage.module.scss";

interface BoardItemPageParams {
	id: string;
}

const BoardItemPage: FC = () => {
	const { id } = useParams<BoardItemPageParams>();
	const { boards } = useTypedSelector((state) => state.boardItem);
	const board = boards.find((board) => board.id === id);
	const history = useHistory();

	return (
		<div className={cl.boardItemPage}>
			<div
				className={[
					cl.boardItemPage__col,
					cl.boardItemPage__col_title,
				].join(" ")}
			>
				<div className={cl.boardItemPage__title}>{board?.title}</div>
				<button
					className={cl.boardItemPage__btn}
					onClick={() => history.push("/boards")}
				>
					<IoReturnUpBack className={cl.boardItemPage__icon} />
				</button>
			</div>
		</div>
	);
};

export default BoardItemPage;
