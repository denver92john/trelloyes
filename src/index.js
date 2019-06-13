import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './store';

// pass STORE obj into App as it's store prop??
ReactDOM.render(<App store={STORE} />, document.getElementById('root'));


