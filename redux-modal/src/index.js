import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import store from './store/store.js';
import ModalApp from './ModalApp';


ReactDOM.render(<Provider store={store}><ModalApp/></Provider>, document.getElementById('root'));

