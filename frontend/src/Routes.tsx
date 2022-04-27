import {
	Navigate
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe } from "./store/authSlice";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./MainLayouts/MainLayout";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <PublicRoute><Login /></PublicRoute>,
	},
	{
		path: "/in",
		element: <PrivateRoute><MainLayout /></PrivateRoute>,
		children: [
			{ path: "dashboard", element: <Dashboard /> },
		]
	},
];

function PrivateRoute({ children }: { children: any }) {
	const { user } = useSelector(selectMe);
	console.log("***********")

	console.log(user)
	return user ? children : <Navigate to="/" />;
}

function PublicRoute({ children }: { children: any }) {
	const { user } = useSelector(selectMe)
	console.log(user)
	return !user ? children : <Navigate to="/in/dashboard" />;
}

export default routes;
