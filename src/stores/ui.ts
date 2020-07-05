import { createSlice } from '@reduxjs/toolkit';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  onDialog: boolean;
}

const initialState: UiState = {
  onDialog: false,
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // tick(state, action: PayloadAction<UiState>) {
    //   const { lastUpdate, light } = action.payload;
    //   state.lastUpdate = lastUpdate;
    //   state.light = !!light;
    // },
    handleDialog(state) {
      state.onDialog = !state.onDialog;
    },
  },
});

export default ui;
