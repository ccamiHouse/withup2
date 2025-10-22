// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '@/store/authSlice';
import themeReducer from '@/store/themeSlice';
import rootSaga from '@/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
