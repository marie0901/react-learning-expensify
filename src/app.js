import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense ({description: 'Water bill', amount: 300, createdAt: 17}));
store.dispatch(addExpense ({description: 'Rent', amount: 1300, createdAt: 1}));
store.dispatch(addExpense ({description: 'Gas bill', amount: 500, createdAt: 16700}));



console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
