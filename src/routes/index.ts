import BoardItemPage from "../pages/BoardItemPage";
import BoardListPage from "../pages/BoardListPage";
import { IRoute } from "../types/route";

export const routes: IRoute[] = [
	{ path: "/boards", component: BoardListPage, exact: true },
	{ path: "/boards/:id", component: BoardItemPage, exact: true },
];
