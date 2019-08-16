import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App';
import Api from './service.api'

const  api = new Api();
ReactDOM.render(<App />, document.getElementById('root'));


