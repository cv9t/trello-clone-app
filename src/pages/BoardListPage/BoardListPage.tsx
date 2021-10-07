import React from "react";
import BoardForm from "../../components/BoardForm/BoardForm";
import BoardList from "../../components/BoardList/BoardList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./BoardListPage.module.scss";

const BoardListPage = () => {
	const { isFormOpen } = useTypedSelector((state) => state.formBoard);
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { openFormBoard, closeFormBoard, removeBoard } = useActions();

	return (
		<div className={cl.boardListPage}>
			<div className={[cl.row, cl.row_form].join(" ")}>
				<BoardForm
					isFormOpen={isFormOpen}
					closeFormBoard={() => closeFormBoard()}
					openFormBoard={() => openFormBoard()}
				/>
			</div>
			{boards.length > 0 && (
				<div className={[cl.row, cl.row_boards].join(" ")}>
					<div className={cl.row__title}>Your boards</div>
					<BoardList onRemoveClick={removeBoard} boards={boards} />
				</div>
			)}
		</div>
	);
};

export default BoardListPage;
