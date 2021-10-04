import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.scss";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
};

export default App;
