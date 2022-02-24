// import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookslice';
import apiSlice from './apislice';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer, { fetchBooks } from './render';

const reducer = combineReducers({
  bookReducer,
  book: bookSlice.reducer,
  api: apiSlice,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

store.dispatch(fetchBooks());

export default store;
