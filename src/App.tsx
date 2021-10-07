import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import { getState, setState } from "./hooks/useBoards";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { IBoardItem } from "./types/boardItem";
import "./styles/App.scss";

const App = () => {
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { addBoard } = useActions();

	useEffect(() => {
		[...getState()].map((board: IBoardItem) => addBoard(board));
	}, []);

	useEffect(() => {
		setState(boards);
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
