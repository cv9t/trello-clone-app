import React from "react";
import BoardList from "./components/BoardList/BoardList";
import "./styles/App.scss";

const App = () => {
	return (
		<div className="app">
			<BoardList title="Create a new board" />
		</div>
	);
};

export default App;
