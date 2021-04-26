import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from '../src/reducers/Reducers';
import DashBoard from "./containers/dashboard/DashBoard";

export default function App() {
  const store = createStore(AppReducer);

  return (
    <div>
      <Provider store={store}>
        <DashBoard />
      </Provider>,
    </div>
  );
}