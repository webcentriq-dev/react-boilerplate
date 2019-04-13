import { createStore, Action } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/store';

export const store = createStore<StoreState, Action<any>, {}, {}>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'HardTech',
});
