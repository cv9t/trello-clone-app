import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IoReturnUpBack } from "react-icons/io5";
import cl from "./BoardItemPage.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import { useActions } from "../../hooks/useActions";

interface BoardItemPageParams {
	id: string;
}

const BoardItemPage: FC = () => {
	const { id } = useParams<BoardItemPageParams>();
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { addCard } = useActions();
	const board = boards.find((board) => board.id === id);
	const history = useHistory();

	const returnBack = () => {
		history.push("/boards");
	};

	return (
		<div className={cl.boardItemPage}>
			<div className={cl.boardItemPage__col}>
				<MyButton title={board?.title} onClick={returnBack}>
					<IoReturnUpBack />
				</MyButton>
			</div>
			<div className={cl.boardItemPage__col}>
				<button
					onClick={() => {
						addCard({
							id: board?.id,
							card: {
								id: String(Date.now()),
								title: "as",
							},
						});
					}}
				>
					Add card
				</button>
			</div>
		</div>
	);
};

export default BoardItemPage;
