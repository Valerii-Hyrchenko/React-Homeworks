import styled from "styled-components";
import "@fontsource/spartan";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { GeneralPage } from "./pages/GeneralPage";
import { Loader } from "./Components/LoginOrRegister/Loader";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AppContainer = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 53px 65px 53px 35px;
  background-color: #eaf1fe;
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.35),
    inset 5px 5px 10px rgba(255, 255, 255, 0.35);
  border-radius: 40px;
  font-family: "Spartan";
`;

const PrivateRoute = ({ children }) => {
  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );
  if (currentAuthUser === null) return <Navigate to={"/login"} />;
  return children;
};

const App = () => {
  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );
  const loading = useSelector((state) => state.loader.loading);
  useEffect(() => {
    if (currentAuthUser === null) {
      localStorage.setItem("authUser", JSON.stringify(null));
    } else {
      localStorage.setItem("authUser", JSON.stringify(currentAuthUser));
    }
  }, [currentAuthUser]);

  return (
    <AppContainer>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <GeneralPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={currentAuthUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </AppContainer>
  );
};

export default App;
