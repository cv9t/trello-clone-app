import React from "react";
import { routes } from "../routes/index";
import { Switch, Route } from "react-router";

const AppRouter = () => {
	return (
		<Switch>
			{routes.map((route) => (
				<Route
					key={route.path}
					component={route.component}
					path={route.path}
					exact={route.exact}
				/>
			))}
		</Switch>
	);
};

export default AppRouter;
