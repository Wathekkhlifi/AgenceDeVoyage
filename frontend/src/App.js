// App.js
import setAuthToken from './utils/setAuthToken';
import store from './store/store';
import { Provider } from 'react-redux';
import Login from './components/Login';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Login />
            </div>
        </Provider>
    );
}

export default App;