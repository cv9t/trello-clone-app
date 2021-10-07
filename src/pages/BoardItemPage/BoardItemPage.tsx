import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IoReturnUpBack } from "react-icons/io5";
import cl from "./BoardItemPage.module.scss";
import MyButton from "../../components/UI/button/MyButton";

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
			<div className={cl.boardItemPage__col}>
				<MyButton
					title={board?.title}
					onClick={() => history.push("/boards")}
				>
					<IoReturnUpBack />
				</MyButton>
			</div>
		</div>
	);
};

export default BoardItemPage;
