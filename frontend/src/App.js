// App.js
import setAuthToken from "./utils/setAuthToken";
import store from "./store/store";
import { Provider } from "react-redux";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import TestScreen from "./screens/TestScreen";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<TestScreen />} />
          </Routes>
        </>
      </div>
    </Provider>
  );
}

export default App;
