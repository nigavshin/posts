import { Route, Routes, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
