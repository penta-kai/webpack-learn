import React from 'react';
import {render} from 'react-dom';

import AppService from './modules/app.service';
import {config} from './modules/config';
import './css/index.css';
import './less/index.less';

import App from './App';

import './modules/ts.module';

console.log('Hello world!', config.key);

const service = new AppService('Hello world!');
service.log();

render(<App />, document.getElementById('app'));