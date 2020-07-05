import { combineReducers } from '@reduxjs/toolkit';
import ui from './ui';

export const rootReducer = combineReducers({
  ui: ui.reducer,
});
