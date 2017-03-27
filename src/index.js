import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card/card';
import store from './components/store/store';
import { mobx, observable, computed, autorun } from 'mobx';

ReactDOM.render(
    <Card store={store}/>,
    document.getElementsByTagName('body')[0].appendChild(document.createElement('div'))
);
