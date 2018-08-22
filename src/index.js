import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/application.css';
import App from './App';
import ScrollToTop from './components/scrollToTop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();




