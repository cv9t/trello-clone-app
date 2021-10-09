import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import { getState, setState } from "./utils/localStorage";
import { useTypedSelector } from "./hooks/useTypedSelector";
//import { IBoardItem } from "./types/boardItem";
import "./styles/App.scss";

const App = () => {
	const { boards } = useTypedSelector((state) => state.boardItem);
	const { fillBoards } = useActions();

	useEffect(() => {
		fillBoards([...getState()]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
