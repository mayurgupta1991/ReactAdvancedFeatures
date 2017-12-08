import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
