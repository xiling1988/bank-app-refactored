import reducers from '../reducers';
import { createStore } from 'redux';

export const initialState = {
  username: "Janny",
  totalAmount: 2500701
}

export const store = createStore(reducers, initialState);