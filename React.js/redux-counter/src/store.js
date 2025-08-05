import { createStore } from 'redux';
import reducer from './counter.js';

const store = createStore(reducer);

export default store