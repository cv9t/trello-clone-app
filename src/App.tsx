import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.scss";

const App = () => {
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
