import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import {createStore} from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import ReduxComponent from "./components/ReduxComponent";
import ComponentWithApiFetching from "./components/ComponentWithApiFetching";

const store = createStore(
    rootReducer
);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Button onClick={() => alert("hola")}>Boton</Button>
                    <ReduxComponent/>
                    <ComponentWithApiFetching/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Provider>
    );
};

export default App;
