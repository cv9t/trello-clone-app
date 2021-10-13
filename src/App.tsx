import React, { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./styles/App.scss";
import { getState, setState } from "./utils/localStorage";

const App: FC = () => {
	const { boards } = useTypedSelector((state) => state.board);
	const { setBoards } = useActions();
	const boardsCollectionKey = "boards";

	useEffect(() => {
		setBoards(getState(boardsCollectionKey));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setState(boardsCollectionKey, boards);
	}, [boards]);

	return (
		<div className="app">
			<div className="container">
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</div>
		</div>
	);
};

export default App;
