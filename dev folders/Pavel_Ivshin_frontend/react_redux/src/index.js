import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers/rootReducer';

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
//	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));