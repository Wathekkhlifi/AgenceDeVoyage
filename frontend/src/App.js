// App.js
import setAuthToken from "./utils/setAuthToken";
import store from "./store/store";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import TripList from "./screens/TripList";
import Layout from "./screens/Layout";
import NoPage from "./screens/NoPage";
import { useEffect, useState } from "react";
import AddTrip from "./components/AddTrip";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const LoginRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : <Login />;
};

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user && user.role === "admin" ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LoginRoute />} />
            <Route
              index
              element={
                <PrivateRoute>
                  <TripList />
                </PrivateRoute>
              }
            />

            <Route
              path="admin/add-trip"
              element={
                <AdminRoute>
                  <AddTrip />
                </AdminRoute>
              }
            />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
