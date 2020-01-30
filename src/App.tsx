import React from 'react';
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
