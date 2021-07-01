import { useContext } from "react";
import { Redirect, Route } from "react-router"
import { AuthContext } from '../context/AuthContext';


export function AuthGuard({ children, exact, path }: { children: any, exact: boolean, path: string }) {
	const { isAuth } = useContext(AuthContext);

	return (
		isAuth
			? <Route exact={exact} path={path} component={() => children} />
			: <Redirect to="/login" />
	)
}