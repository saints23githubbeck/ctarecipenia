import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { httpRequest } from "./api";
import { fetchProfile, setIsLoggedIn } from "./appState/actions/AuthAction";
import { SIGN_UP } from "./appState/actionTypes";
import AppRoutes from "./routes/AppRoutes";

function AuthProvider(props) {
  const { children } = props;
  const { isLoggedIn } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
if (localStorage.getItem("auth")) {
  dispatch(setIsLoggedIn(true));
}
  }, [])

  useEffect(() => {
    dispatch(fetchProfile());
  }, [isLoggedIn]);
  return <Fragment>{children}</Fragment>;
}
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
};

export default App;
